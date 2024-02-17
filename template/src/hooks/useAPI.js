import {useState} from 'react';

const useAPI = apiFunction => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const responseData = await apiFunction();
      setData(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {data, loading, error, fetchData};
};

export default useAPI;
