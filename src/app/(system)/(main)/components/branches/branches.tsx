"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Branch } from "@/services/branches/types";
import { Filter, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BranchesTableColumns } from "./columns";
import { CreateBranchModal } from "./create-branch";

interface BranchesProps {
  initialBranches: Branch[];
}

interface FilterState {
  country: string;
}

type FilterKey = keyof FilterState;

const initialFilterState: FilterState = {
  country: "",
};

export default function Branches({ initialBranches }: BranchesProps) {
  const [search, setSearch] = useState<string>("");
  const [filters, setFilters] = useState<FilterState>(initialFilterState);
  const [activeFiltersCount, setActiveFiltersCount] = useState<number>(0);
  const [filteredBranches, setFilteredBranches] =
    useState<Branch[]>(initialBranches);

  const columns = BranchesTableColumns(initialBranches);

  // Get unique countries from the data
  const uniqueCountries = Array.from(
    new Set(initialBranches.map((branch) => branch.country))
  );

  // Effect to handle search and filters
  useEffect(() => {
    const filtered = initialBranches.filter((branch) => {
      const searchMatch =
        search.trim() === "" ||
        branch.name.toLowerCase().includes(search.toLowerCase()) ||
        branch.email.toLowerCase().includes(search.toLowerCase()) ||
        branch.phone.toLowerCase().includes(search.toLowerCase());

      const countryMatch =
        !filters.country || branch.country === filters.country;

      return searchMatch && countryMatch;
    });

    setFilteredBranches(filtered);
  }, [search, filters, initialBranches]);

  const handleFilterChange = (key: FilterKey, value: string): void => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleResetFilters = (): void => {
    setFilters(initialFilterState);
    setSearch("");
    setActiveFiltersCount(0);
  };

  const handleApplyFilters = (): void => {
    const count = Object.values(filters).filter(Boolean).length;
    setActiveFiltersCount(count);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 max-w-sm">
          <Input
            type="search"
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <CreateBranchModal existingBranches={initialBranches} />
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium leading-none">Filter Branches</h4>
                  {activeFiltersCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2"
                      onClick={handleResetFilters}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={filters.country}
                    onValueChange={(value) =>
                      handleFilterChange("country", value)
                    }
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {uniqueCountries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResetFilters}
                  >
                    Reset
                  </Button>
                  <Button size="sm" onClick={handleApplyFilters}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div>
        <DataTable columns={columns} data={filteredBranches} />
      </div>
    </div>
  );
}
