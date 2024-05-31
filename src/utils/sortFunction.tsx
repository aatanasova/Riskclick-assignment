import { Intervention } from "../types";

export const sortInterventions = <K extends keyof Intervention>(
  interventions: Intervention[],
  sortKey: K,
  sortOrder: "asc" | "desc"
): Intervention[] => {
  return interventions.sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};
