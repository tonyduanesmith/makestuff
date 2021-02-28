import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useQuery } from "@apollo/client";

import me from "../../assets/images/me.jpg";
import { GET_ARTICLES } from "./graphql";
import { Article } from "../../organisms/project-card/types";
import ProjectCard from "../../organisms/project-card/ProjectCard";
import Introduction from "../../molecules/introduction/Introduction";

const Home = () => {
  const { data } = useQuery<{ articles: Array<Article> }>(GET_ARTICLES, { variables: { first: 3 } });
  const articles = data?.articles ?? [];

  return (
    <>
      <Box bgcolor="primary.main" width="100%" margin={0}>
        <Box marginX={{ sm: 2, md: 4, lg: 20, xl: 40 }} paddingY={2} bgcolor="primary.main">
          <Introduction image={me} heading="test" imageFrame="circle">
            This is some text This is some textThis is some text This is some text This is some text This is some text
            This is some text This is some text This is some text This is some text This is some text This is some text
            This is some text This is some text This is some text This is some text This is some text This is some text
            This is some text This is some text This is some text This is some text This is some text This is some text
            This is some text This is some text This is some text This is some text
          </Introduction>
        </Box>
      </Box>
      <Box width="100%" margin={0}>
        <Box marginX={{ sm: 2, md: 4, lg: 20, xl: 40 }} paddingY={4}>
          <Box fontSize={32} display="flex" alignItems="center" flexDirection="column" color="primary.main">
            <Typography variant="h5" color="textPrimary">
              Recent Projects
            </Typography>
            <KeyboardArrowDownIcon fontSize="inherit" />
            <Grid container spacing={4}>
              {articles.map(article => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <ProjectCard article={article} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
