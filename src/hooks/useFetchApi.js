import { useState } from "react";

export const useFetchApi = () => {
  const [loading, setLoading] = useState(false);

  const getData = async (url) => {
    setLoading(true);
    try {
      const result = await fetch(url);   
       setLoading(false);
      const data = await result.json();
      return data.status === 404 ? [data] : data;
    } catch (error) {
      console.log("")
    }

  };

  return { getData, loading };
};
