import { Intervention } from "../types";

export const searchFunction = (item: Intervention, query: string) => {
  const lowercasedQuery = query.toLowerCase();

  return [
    item.title.toLowerCase(),
    item["issued-year"].toString().toLowerCase(),
    // (item['web-link'] || '').toLowerCase(),
    item.topic.toLowerCase(),
    item.status.toLowerCase(),
  ].some((field) => field.includes(lowercasedQuery));
};
