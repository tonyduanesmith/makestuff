import { useState } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useQuery } from "@apollo/client";
import { OptionsType, OptionTypeBase } from "react-select";

import { Article } from "./types";
import { GET_ARTICLES } from "./graphql";
import ProjectCard from "../../organisms/project-card/ProjectCard";
import Select from "../../atoms/select/Select";

const Projects = () => {
  const { data } = useQuery<{ articles: Array<Article> }>(GET_ARTICLES);
  const [selectedTags, setSelectedTags] = useState<{ label: string; value: string } | null>();

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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
          <Grid item xs={12} sm={12} md={4}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Select value={selectedTags} options={options} onChange={selected => setSelectedTags(selected)} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}></Grid>
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
