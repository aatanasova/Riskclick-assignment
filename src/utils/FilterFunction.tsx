import { Intervention } from "../types";

export const filterInterventions = (
  interventions: Intervention[],
  filterCriteria: Partial<Intervention>
): Intervention[] => {
  if (!filterCriteria) {
    return interventions;
  }

  return interventions.filter((intervention) => {
    return Object.keys(filterCriteria).every(
      (key) =>
        intervention[key as keyof Intervention] ===
        filterCriteria[key as keyof Intervention]
    );
  });
};
