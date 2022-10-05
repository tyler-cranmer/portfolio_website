import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
export const useAxios = <T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [
  boolean,
  T[] ,
  string,
  () => void
] => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<T>>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (loadOnStart) sendRequest();
    else setLoading(false);
  }, []);

  const request = () => {
    sendRequest();
  };

  const sendRequest = () => {
    setLoading(true);

    axios(config)
      .then((response) => {
        setError('');
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  return [loading, data, error, request];
};
