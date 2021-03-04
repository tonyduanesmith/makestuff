import ReactSelect, { Props as ReactSelectProps } from "react-select";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Props extends ReactSelectProps {
  label?: string;
}

const Select = ({ label, ...rest }: Props) => {
  const overideTheme = useTheme();

  const customStyles = {
    valueContainer: (provided: any) => ({
      ...provided,
      maxHeight: 30,
    }),
  };

  return (
    <>
      {label && (
        <Box marginBottom={1}>
          <Typography variant="h6">{label}</Typography>
        </Box>
      )}
      <ReactSelect
        {...(rest as Array<ReactSelectProps>)}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: overideTheme.palette.primary.light,
            primary50: overideTheme.palette.primary.light,
            primary: overideTheme.palette.primary.main,
            danger: theme.colors.neutral190,
            dangerLight: theme.colors.neutral30,
          },
        })}
        styles={customStyles}
      />
    </>
  );
};

export default Select;
