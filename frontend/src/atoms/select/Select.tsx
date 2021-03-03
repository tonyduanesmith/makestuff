import ReactSelect, { Props as ReactSelectProps } from "react-select";
import { useTheme } from "@material-ui/core/styles";

const Select = ({ ...rest }: ReactSelectProps) => {
  const overideTheme = useTheme();

  const customStyles = {
    valueContainer: (provided: any) => ({
      ...provided,
      maxHeight: 30,
    }),
  };

  return (
    <ReactSelect
      {...(rest as Array<ReactSelectProps>)}
      theme={theme => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: overideTheme.palette.primary.light,
          primary: overideTheme.palette.primary.main,
          danger: theme.colors.neutral190,
          dangerLight: theme.colors.neutral30,
        },
      })}
      styles={customStyles}
    />
  );
};

export default Select;
