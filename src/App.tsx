import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Hello, world! - app goes here</h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;