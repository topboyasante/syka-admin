import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/constants/country-codes";
import Flag from "react-world-flags";

interface CountrySelectProps {
  value?: string;
  onChange: (selectedOption: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
  name?: string;
}

function CountrySelect({
  value,
  onChange,
  onBlur,
  disabled,
  name,
}: CountrySelectProps) {
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <Select
      onValueChange={handleChange}
      value={value}
      name={name}
      onOpenChange={() => onBlur?.()}
      disabled={disabled}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select your country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem
            key={country.value}
            value={country.label}
            className="text-black"
          >
            <div className="flex items-center gap-5">
              <Flag code={country.value} height={30} width={30} />
              <p>{country.label}</p>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default CountrySelect;
