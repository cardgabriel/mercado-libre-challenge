import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

type QueryParams = Record<string, string | number | boolean>;

const useFetch = <T>(url: string, params?: QueryParams) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Refs to track state between renders
  const isFirstRender = useRef(true);
  const lastUrl = useRef(url);
  const lastParams = useRef(params);

  // Check if request params have changed
  const hasInputsChanged = useCallback(() => {
    const urlChanged = lastUrl.current !== url;
    const paramsChanged =
      JSON.stringify(lastParams.current) !== JSON.stringify(params);

    // Update refs to current values
    lastUrl.current = url;
    lastParams.current = params;

    return urlChanged || paramsChanged;
  }, [url, params]);

  // Fetch data from API
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get<T>(url, { params });
      setData(response.data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url, params]);

  useEffect(() => {
    // Fetch on first render or when inputs change
    if (isFirstRender.current || hasInputsChanged()) {
      isFirstRender.current = false;
      fetchData();
    }
  }, [fetchData, hasInputsChanged]);

  return { data, error, loading };
};

export default useFetch;
