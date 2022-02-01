import {useQueryClient} from 'react-query';
import storage from 'src/utils/mmkvStorage';

const useSetData = () => {
  const queryClient = useQueryClient();

  return {
    setData: (key: string, data: any) => {
      storage.set(key, JSON.stringify(data));
      queryClient.setQueryData(key, data);
    },
  };
};

export default useSetData;
