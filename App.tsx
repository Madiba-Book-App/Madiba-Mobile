import React from 'react';
import Navigation from './src/navigation';
import {QueryClient, QueryClientProvider} from 'react-query';
import {persistQueryClient} from 'react-query/persistQueryClient-experimental';

import {createAsyncStoragePersistor} from 'react-query/createAsyncStoragePersistor-experimental';
import AsyncStorage from '@react-native-community/async-storage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

const asyncStoragePersistor = createAsyncStoragePersistor({
  storage: AsyncStorage,
});

persistQueryClient({
  queryClient,
  persistor: asyncStoragePersistor,
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
};

export default App;
