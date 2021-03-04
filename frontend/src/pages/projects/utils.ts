import { ArticleType } from "./types";

export const getTagsOptions = (articles: Array<ArticleType>) => {
  const tags = articles.flatMap(article => article.tags.categorys.map(category => category));
  return [...new Set(tags)].map(tag => ({ label: tag, value: tag }));
};
