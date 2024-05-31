import { useState, useEffect } from 'react';

const useSearch = <T,>(data: T[], searchFunction: (item: T, query: string) => boolean, delay = 300) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<T[]>(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        setResults(data.filter(item => searchFunction(item, query)));
      } else {
        setResults(data);
      }
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [query, data, searchFunction, delay]);

  return { query, setQuery, results };
};

export default useSearch;