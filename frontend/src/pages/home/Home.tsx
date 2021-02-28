import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useQuery } from "@apollo/client";

import Image from "../../atoms/image/Image";
import me from "../../assets/images/me.jpg";
import { GET_ARTICLES } from "./graphql";
import { Article } from "./types";

const Home = () => {
  const { loading, data } = useQuery<{ articles: Array<Article> }>(GET_ARTICLES, { variables: { first: 3 } });

  const articles = data?.articles ?? [];

  console.log(articles);

  return (
    <>
      <Box bgcolor="primary.main" width="100%" margin={0}>
        <Box marginX={{ sm: 2, md: 4, lg: 20, xl: 40 }} paddingY={2} bgcolor="primary.main">
          <Grid container>
            <Grid item xs={12} sm={4}>
              <Box padding={2}>
                <Image src={me} alt="me" frame="circle" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box padding={2}>
                <Typography variant="h4" paragraph>
                  This is a header
                </Typography>
                <Typography color="textSecondary">
                  This is some text This is some textThis is some text This is some text This is some text This is some
                  text This is some text This is some text This is some text This is some text This is some text This is
                  some text This is some text This is some text This is some text This is some text This is some text
                  This is some text This is some text This is some text This is some text This is some text This is some
                  text This is some text This is some text This is some text This is some text This is some text
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box width="100%" margin={0}>
        <Box marginX={{ sm: 2, md: 4, lg: 20, xl: 40 }} paddingY={4}>
          <Box fontSize={48} display="flex" alignItems="center" flexDirection="column" color="primary.main">
            <Typography variant="h4" color="textPrimary">
              Recent Projects
            </Typography>
            <KeyboardArrowDownIcon fontSize="inherit" />
            <Grid container spacing={4}>
              {articles.map(article => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={article.id}>
                    <Card>
                      <Box height={200} clone>
                        <CardMedia image={`${process.env.PUBLIC_URL}${article.image_path}`} />
                      </Box>

                      <Box display="flex" justifyContent="space-between" padding={2}>
                        <Typography>{article.heading}</Typography>
                        <Typography>{moment(article.created).fromNow()}</Typography>
                      </Box>
                    </Card>
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
