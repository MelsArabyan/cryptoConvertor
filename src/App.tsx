import React from 'react';

import './App.css';
import {
  QueryClientProvider, 
  QueryClient 
} from '@tanstack/react-query';
import { CryptocurrencyConverter } from './components/widgets/cryptocurrencyConverter/CryptocurrencyConverter';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptocurrencyConverter/>
    </QueryClientProvider>
  );
}

export default App;
