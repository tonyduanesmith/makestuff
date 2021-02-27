import { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Image from "../../atoms/image/Image";
import me from "../../assets/images/me.jpg";

const Home = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}articles` as RequestInfo);
      const articles = await response.json();
      console.log(articles);
    };

    fetchData();
  });
  return (
    <>
      <Box bgcolor="primary.main" width="100%" margin={0}>
        <Box marginX={{ sm: 2, md: 40 }} paddingY={2} bgcolor="primary.main">
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
        <Box marginX={{ sm: 2, md: 40 }} paddingY={4}>
          <Box fontSize={48} display="flex" alignItems="center" flexDirection="column" color="primary.main">
            <Typography variant="h4" color="textPrimary">
              Recent Projects
            </Typography>
            <KeyboardArrowDownIcon fontSize="inherit" />
            <Grid container>
              <Grid item md={4}>
                <Card></Card>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item md={4}></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
