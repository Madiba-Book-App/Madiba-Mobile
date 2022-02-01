import {useQuery} from 'react-query';
import storage from 'src/utils/mmkvStorage';

const useGetData = (key: string) => {
  const useQueryData = useQuery(key);

  const data = storage.getString(key);

  const token = storage.getString('token');

  if (useQueryData.data && token) {
    return useQueryData;
  }
  if (!data || !token) {
    return {data: undefined};
  }

  return {data: JSON.parse(data)};
};

export default useGetData;
