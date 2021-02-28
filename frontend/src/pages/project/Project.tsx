import { fromError } from "@apollo/client";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default Project;
