import { type } from "os";

type Article = {
  created: Date;
  heading: string;
  image_path: string;
  main_markdown: string;
  modified: Date;
  sidebar_markdown: string;

  _id: string;
};
