import { useState, ChangeEvent, MouseEvent } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { StyledInput, StyledSearchIcon, StyledClearIcon } from "./styled";

interface Props {
  label?: string;
  value: string;
  onChange: (a: string) => void;
  onClear?: () => void;
}

const Search = ({ label, value, onChange, onClear }: Props) => {
  const [showSearchIcon, setShowSearchIcon] = useState(false);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleOnClear = (event: MouseEvent) => {
    event.preventDefault();
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
        <StyledSearchIcon showSearchIcon={showSearchIcon || !!value.length} />
        <StyledClearIcon showClearIcon={!!value.length} onMouseDown={handleOnClear} />
        <StyledInput
          onFocus={() => setShowSearchIcon(true)}
          onBlur={() => setShowSearchIcon(false)}
          value={value}
          onChange={handleOnChange}
        />
      </Box>
    </>
  );
};

export default Search;
