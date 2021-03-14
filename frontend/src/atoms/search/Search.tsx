import { useState, useCallback, ChangeEvent, MouseEvent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { debounce } from "lodash";

import { StyledInput, StyledSearchIcon, StyledClearIcon } from "./styled";

interface Props {
  label?: string;
  value: string;
  onChange: (a: string) => void;
  onClear?: () => void;
}

const Search = ({ label, value, onChange, onClear }: Props) => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);
  const [searchValue, setSearchValue] = useState(value);

  const debouncedSave = useCallback(
    debounce(event => onChange(event.target.value), 500),
    [],
  );

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedSave(event);
    setSearchValue(event.target.value);
  };

  const handleOnClear = (event: MouseEvent) => {
    if (onClear) onClear();
    setSearchValue("");
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
