import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

type QueryParams = Record<string, string | number | boolean>;
interface CacheItem<T> {
  data: T;
  timestamp: number;
}

// Global cache shared between all hook instances
const cache: Record<string, CacheItem<unknown>> = {};

// 5 minutes in milliseconds
const CACHE_TTL = 5 * 60 * 1000;

const useFetch = <T>(url: string, params?: QueryParams) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Refs to track state between renders
  const isFirstRender = useRef(true);
  const lastUrl = useRef(url);
  const lastParams = useRef(params);

  // Generate unique cache key based on URL and params
  const getCacheKey = useCallback(() => {
    return `${url}${params ? `?${JSON.stringify(params)}` : ""}`;
  }, [url, params]);

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

  // Check if there's valid data in cache
  const getFromCache = useCallback(() => {
    const cacheKey = getCacheKey();
    const cachedItem = cache[cacheKey];

    if (cachedItem) {
      const now = Date.now();
      if (now - cachedItem.timestamp < CACHE_TTL) {
        return cachedItem.data as T;
      }
      // Remove expired cache
      delete cache[cacheKey];
    }
    return null;
  }, [getCacheKey]);

  // Fetch data from API
  const fetchData = useCallback(async () => {
    // Check if there's data in cache
    const cachedData = getFromCache();
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get<T>(url, { params });
      setData(response.data);

      // Save to cache
      const cacheKey = getCacheKey();
      cache[cacheKey] = {
        data: response.data,
        timestamp: Date.now(),
      };
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url, params, getCacheKey, getFromCache]);

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
