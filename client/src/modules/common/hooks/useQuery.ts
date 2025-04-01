import { useState, useEffect } from "react";
import axios from "axios";

interface UseQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

type QueryParams = Record<string, string | number | boolean>;

function useQuery<T>(url: string, params?: QueryParams): UseQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, { params });
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(params)]);

  return { data, loading, error, refetch: fetchData };
}

export default useQuery;
