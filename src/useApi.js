import { useState, useEffect } from 'react';

const useApi = (url, _options) => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const doFetch = async (options = _options) => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const dataResponse = await response.json();
      setData(dataResponse);

    } catch (errorResponse) {
      setError(errorResponse.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    doFetch();
  }, []);

  return { isLoading, data, error, refetch: doFetch };
};

export default useApi;