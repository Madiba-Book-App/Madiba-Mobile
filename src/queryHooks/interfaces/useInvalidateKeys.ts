import {useQueryClient} from 'react-query';

const useInvalidateKeys = () => {
  const queryClient = useQueryClient();
  return {
    invalidateKeys: (key: string) =>
      queryClient.invalidateQueries(key, {
        exact: true,
        refetchActive: true,
        refetchInactive: true,
      }),
  };
};

export default useInvalidateKeys;
