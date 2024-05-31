import { useQuery } from "react-query";
import { Intervention } from "../types";

const fetchInterventions = async (
  page: number,
  pageSize: number
): Promise<{ data: Intervention[]; total: number }> => {
  try {
    // Change URL to backend endpoint
    const response = await fetch(`/data/data.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const interventions = await response.json();
    const total = interventions.length;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const data = interventions.slice(start, end);
    return { data, total };
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const useInterventions = (page: number, pageSize: number) => {
  return useQuery<{ data: Intervention[]; total: number }>(
    ["interventions", page, pageSize],
    () => fetchInterventions(page, pageSize),
    {
      // Keeps the previous data while fetching new data
      keepPreviousData: true,
      // Prevents automatic refetching
      staleTime: Infinity,
    }
  );
};

export default useInterventions;
