import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";

const NAVIGATION = [
  { label: "Home", path: "/", page: Home, exact: true },
  { label: "Projects", path: "/projects", page: Projects, exact: false },
  { label: "Contact", path: "/contact", page: Contact, exact: false },
];

export default NAVIGATION;
