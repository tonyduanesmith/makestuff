import { useState, ChangeEvent, MouseEvent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { StyledInput, StyledSearchIcon, StyledClearIcon } from "./styled";

interface Props {
  label?: string;
  onChange: (a: string) => void;
  onClear?: () => void;
}

const Search = ({ label, onChange, onClear }: Props) => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onChange(event.target.value);
  };

  const handleOnClear = (event: MouseEvent) => {
    event.preventDefault();
    setSearchValue("");
    if (onClear) onClear();
  };

  return (
    <>
      {label && (
        <Box marginBottom={1}>
          <Typography variant="h6">{label}</Typography>
        </Box>
      )}
      <Box position="relative">
        <StyledSearchIcon showSearchIcon={showSearchIcon || !!searchValue.length} />
        <StyledClearIcon showClearIcon={!!searchValue.length} onMouseDown={handleOnClear} />
        <StyledInput
          onFocus={() => setShowSearchIcon(true)}
          onBlur={() => setShowSearchIcon(false)}
          value={searchValue}
          onChange={handleOnChange}
        />
      </Box>
    </>
  );
};

export default Search;
