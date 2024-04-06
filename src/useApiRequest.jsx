import axios from "axios";
import { useState, useEffect } from "react";

const useApiRequest = ({ url, method, params, headers }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const makeApiRequest = async () => {
      try {
        const result = await axios({
          url,
          method,
          params,
          headers,
        });
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    console.log("***");
    makeApiRequest();
  }, [url, method, params, headers]);

  return { data, loading, error };
};

export default useApiRequest;
