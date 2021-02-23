import Link from "../link/Link";

interface Props {
  children: string;
  path: string;
}

const NavigationItem = ({ children, path }: Props) => {
  return <Link path={path}>{children}</Link>;
};

export default NavigationItem;
