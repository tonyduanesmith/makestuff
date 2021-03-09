import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

export const StyledSearchIcon = styled(SearchIcon)<{ showSearchIcon: boolean }>`
  position: absolute;
  height: 100%;
  left: 8px;
  transform: ${p => (p.showSearchIcon ? "scale(0)" : "scale(1)")};
  opacity: ${p => (p.showSearchIcon ? "0" : "1")};
  transition: all 100ms ease-in-out;
  color: ${p => p.theme.palette.grey[500]};
`;

export const StyledClearIcon = styled(ClearRoundedIcon)<{ showClearIcon: boolean }>`
  position: absolute;
  height: 100%;
  right: 8px;
  transform: ${p => (p.showClearIcon ? "scale(1)" : "scale(0)")};
  opacity: ${p => (p.showClearIcon ? "1" : "0")};
  transition: all 100ms ease-in-out;
  color: ${p => p.theme.palette.grey[500]};

  &:hover {
    color: ${p => p.theme.palette.grey[700]};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  min-height: 38px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid ${p => p.theme.palette.grey[400]};
  font-size: 16px;
  padding: 2px 8px;
  transition: all 100ms ease-in-out;

  :focus {
    outline: none;
    border: 2px solid ${p => p.theme.palette.primary.main};
    padding: 1px 7px;
  }
`;
