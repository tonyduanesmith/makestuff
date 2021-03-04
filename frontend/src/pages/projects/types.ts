export type TagsType = {
  categorys: Array<string>;
};

export type ArticleType = {
  created: Date;
  modified: Date;
  heading: string;
  image_path: string;
  id: string;
  main_markdown: string;
  sidebar_markdown: string;
  subheading: string;
  tags: TagsType;
};
