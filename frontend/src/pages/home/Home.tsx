import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Image from "../../atoms/image/Image";
import me from "../../assets/images/me.jpg";

const Home = () => {
  return (
    <Box bgcolor="primary.main" width="100%" margin={0}>
      <Box marginX={{ sm: 2, md: 40 }} bgcolor="primary.main">
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
                some text This is some text This is some text This is some text This is some text This is some text This
                is some text This is some text This is some text This is some text This is some text This is some text
                This is some text This is some text This is some text This is some text This is some text
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
