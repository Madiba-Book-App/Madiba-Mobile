import {
  useQuery,
  useMutation,
  useQueryClient,
  UseMutationOptions,
  UseQueryOptions,
} from 'react-query';
import http from 'src/helpers/http';

export const useGetRequest = (
  url: string,
  STORE_KEY: string | string[],
  options: UseQueryOptions = {},
) => {
  return useQuery(
    STORE_KEY,
    () => http.get(url).then((res: any) => res.data),
    options,
  );
};

export const usePostRequest = (
  url: string,
  STORE_KEY: string | string[], // store key to update
  options: UseMutationOptions = {},
) => {
  const queryClient = useQueryClient();
  const {onSuccess, onError, ...rest} = options;

  return useMutation(
    (values: unknown) => http.post(url, values).then((res: any) => res.data),
    {
      onMutate: async newRecord => {
        await queryClient.cancelQueries(STORE_KEY);
        const oldData = queryClient.getQueryData(STORE_KEY);

        return {oldData, newRecord};
      },
      onSuccess: onSuccess,
      onError: onError,
      onSettled: (data, error, _, context) => {
        if (data) {
          if ((context as any).oldData) {
            queryClient.setQueryData(STORE_KEY, [
              ...(context as any).oldData,
              data,
            ]);
          } else {
            queryClient.setQueryData(STORE_KEY, [data]);
          }
          queryClient.invalidateQueries(STORE_KEY);
        }
        if (error) {
          queryClient.setQueryData(STORE_KEY, (context as any).oldData);
        }
      },
      ...rest,
    },
  );
};

export const useUpdateRequest = (
  url: string,
  STORE_KEY: string | string[],
  options: UseMutationOptions = {},
  requestOptions?: Record<string, any>,
) => {
  const queryClient = useQueryClient();
  const {onError, onSuccess, ...rest} = options;

  return useMutation(
    (data: unknown) =>
      http.put(url, data, requestOptions).then((res: any) => res.data),
    {
      onMutate: async newRecord => {
        await queryClient.cancelQueries(STORE_KEY);
        const oldData = queryClient.getQueryData(STORE_KEY);

        return {oldData, newRecord};
      },
      onError: onError,
      onSuccess: onSuccess,
      onSettled: (data, error, _, context) => {
        if (data) {
          if ((context as any).oldData) {
            queryClient.setQueryData(STORE_KEY, {
              ...(context as any).oldData,
              ...data,
            });
          } else {
            queryClient.setQueryData(STORE_KEY, data);
          }

          if (queryClient.getQueryData(STORE_KEY[0])) {
            queryClient.setQueryData(STORE_KEY[0], old => {
              return (old as any[]).map(d => {
                if (d.id === data.id) {
                  return data;
                }
                return d;
              });
            });
          } else {
            queryClient.setQueryData(STORE_KEY[0], [data]);
          }

          queryClient.invalidateQueries(STORE_KEY);
          queryClient.invalidateQueries(STORE_KEY[0]);
        }
        if (error) {
          queryClient.setQueryData(STORE_KEY, (context as any).oldData);
        }
      },
      ...rest,
    },
  );
};

export const useDeleteRequest = (
  url: string,
  STORE_KEY: string[],
  options: UseMutationOptions = {},
) => {
  const queryClient = useQueryClient();
  const {onSuccess, onError, ...rest} = options;

  return useMutation(() => http.delete(url).then((res: any) => res.data), {
    onSuccess: onSuccess,
    onError: onError,
    onSettled: data => {
      if (data) {
        queryClient.removeQueries(STORE_KEY, {exact: true});
      }
      if (queryClient.getQueryData(STORE_KEY[0])) {
        queryClient.setQueryData(STORE_KEY[0], old => {
          return (old as any[]).filter(d => {
            return d.id !== data.id;
          });
        });
        queryClient.invalidateQueries(STORE_KEY[0]);
      }
    },
    ...rest,
  });
};

export default useGetRequest;
