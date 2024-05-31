"use client";
import React, { useMemo } from "react";
import { useRouter } from "next/router";
import InterventionTableHeader from "./TableHeader";
import InterventionTableRow from "./TableRow";
import Pagination from "../Pagination";
import { useInterventionContext } from "@/context/InterventionContext";

const pageSize = 5;

const InterventionTable: React.FC = () => {
  const router = useRouter();
  const currentPage = parseInt(router.query.page as string, 10) || 1;
  const { interventions, total, isLoading, error } = useInterventionContext();

  const handlePageChange = (selectedItem: { selected: number }) => {
    router.push(`/?page=${selectedItem.selected + 1}`);
  };

  // Memoize the filtered interventions
  const filteredInterventions = useMemo(() => {
    return interventions.filter((item) =>
      item["Assigned Categories"].includes("Intervention")
    );
  }, [interventions]);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + { error };

  return (
    <div className="flex flex-col items-center w-full pt-4">
      <div className="w-full h-[40vh] relative">
        <table className="w-full h-full table-fixed bg-white">
          <InterventionTableHeader />
          <tbody>
            {filteredInterventions?.map((item) => (
              <InterventionTableRow key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-start mt-1">
        <Pagination
          currentPage={currentPage}
          pageCount={Math.ceil(total / pageSize)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default InterventionTable;
