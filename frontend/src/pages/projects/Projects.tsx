import { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/client";

import { ArticleType } from "./types";
import { GET_ARTICLES, GET_TAGS } from "./graphql";
import ProjectCard from "../../organisms/project-card/ProjectCard";
import Select from "../../atoms/select/Select";
import Search from "../../atoms/search/Search";

const Projects = () => {
  const [selectedCategorys, setSelectedCategorys] = useState<{ label: string; value: string } | null>();
  const [selectedDownloadables, setSelectedDownloadables] = useState<{ label: string; value: string } | null>();
  const [searchValue, setSearchValue] = useState("");
  const { data: tagsData } = useQuery<{ tags: { categorys: Array<string> } }>(GET_TAGS);

  console.log(selectedCategorys?.value ? [selectedCategorys?.value] : tagsData?.tags.categorys);
  const { data } = useQuery<{ articles: Array<ArticleType> }>(GET_ARTICLES, {
    variables: {
      search: searchValue,
      categorys: selectedCategorys?.value ? [selectedCategorys?.value] : tagsData?.tags.categorys,
      downloadables: selectedDownloadables?.value === "Yes",
    },
  });

  const tagOptions = tagsData?.tags.categorys.map(tag => ({ label: tag, value: tag }));
  const downloadableOptions = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
  ];

  const handleOnClear = () => {
    setSearchValue("");
  };

  console.log(searchValue);

  return (
    <Box width="100%" marginTop={2}>
      <Box marginX={{ xs: 2, sm: 2, md: 4, lg: 20, xl: 40 }} paddingY={2}>
        <Grid container>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                display="flex"
                minWidth={64}
                minHeight={64}
                borderRadius="50%"
                bgcolor="primary.main"
                alignItems="center"
                justifyContent="center"
                marginRight={1}
                color="common.white"
              >
                <Typography variant="h4">{data?.articles.length}</Typography>
              </Box>
              <Typography variant="h4">Projects</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Search value={searchValue} onChange={setSearchValue} label="Search" onClear={handleOnClear} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Select
              value={selectedCategorys}
              options={tagOptions}
              onChange={selected => setSelectedCategorys(selected)}
              label="Category"
              isClearable
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Select
              value={selectedDownloadables}
              options={downloadableOptions}
              onChange={selected => setSelectedDownloadables(selected)}
              label="Downloadables"
              isClearable
            />
          </Grid>
          {data?.articles.map(article => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <ProjectCard article={article} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects;
