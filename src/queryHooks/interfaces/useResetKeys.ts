import {useQueryClient} from 'react-query';

const useResetKeys = () => {
  const queryClient = useQueryClient();
  return {resetKey: (key: string) => queryClient.resetQueries(key)};
};

export default useResetKeys;
