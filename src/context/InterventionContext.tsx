import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import { Intervention } from "../types";
import useInterventions from "../utils/FetchInterventions";
import useSearch from "@/components/hooks/useSearch";
import { searchFunction } from "@/utils/SearchFunction";
import { sortInterventions } from "@/utils/sortFunction";
import { filterInterventions } from "@/utils/FilterFunction";

interface InterventionContextProps {
  interventions: Intervention[];
  query: string;
  setQuery: (query: string) => void;
  sort: <K extends keyof Intervention>(key: K, order: "asc" | "desc") => void;
  filter: (criteria: Partial<Intervention>) => void;
  total: number;
  isLoading: boolean;
  error: any;
}

interface InterventionProviderProps {
  children: ReactNode;
}

const InterventionContext = createContext<InterventionContextProps | undefined>(
  undefined
);

export const InterventionProvider: React.FC<InterventionProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const currentPage = parseInt(router.query.page as string, 10) || 1;
  const pageSize = 5;
  const { data, isLoading, error } = useInterventions(currentPage, pageSize);

  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [total, setTotal] = useState<any>(null);
  const [sortKey, setSortKey] = useState<keyof Intervention | "">("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filterCriteria, setFilterCriteria] = useState<any>(null);
  const {
    query,
    setQuery,
    results: searchResults,
  } = useSearch(data?.data || [], searchFunction);

  useEffect(() => {

    // Start with the original data from the API
    if (data) {
      let processedData = [...data?.data];

      // Apply search results if there's a query
      if (query) {
        processedData = searchResults;
      }

      // Apply sort
      if (sortKey) {
        processedData = sortInterventions(processedData, sortKey, sortOrder);
      }

      // Apply filter
      if (filterCriteria) {
        processedData = filterInterventions(processedData, filterCriteria);
      }

      // Update state with processed data
      setInterventions(processedData);
      // data.total contains the total size of the original data
      setTotal(data.total);
    }
  }, [
    data,
    query,
    sortKey,
    sortOrder,
    filterCriteria,
    setInterventions,
    setTotal,
  ]);

  const sort = <K extends keyof Intervention>(
    key: K,
    order: "asc" | "desc"
  ) => {
    setSortKey(key);
    setSortOrder(order);
  };

  const filter = (criteria: any) => {
    setFilterCriteria(criteria);
  };

  return (
    <InterventionContext.Provider
      value={{
        interventions,
        query,
        setQuery,
        total,
        sort,
        filter,
        isLoading,
        error,
      }}
    >
      {children}
    </InterventionContext.Provider>
  );
};

export const useInterventionContext = () => {
  const context = useContext(InterventionContext);
  if (!context) {
    throw new Error(
      "useInterventionContext must be used within an InterventionProvider"
    );
  }
  return context;
};
