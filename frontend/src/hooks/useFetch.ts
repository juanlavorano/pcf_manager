import { useEffect, useState, useCallback } from "react";
import type { PCF } from "../types";

type useFetchProps = {
  path: string;
};

export const useFetch = ({ path }: useFetchProps) => {
  const [data, setData] = useState<PCF[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + path);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};
