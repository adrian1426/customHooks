import React from 'react';
import useApi from './useApi';

function App() {
  const { isLoading, data, error, refetch } = useApi('http://localhost:4444/orders');

  console.log({ isLoading, data, error });
  return (
    <div>
      <h1>app</h1>
      <button onClick={refetch}>refrescar datos</button>
    </div>
  );
}

export default App;
