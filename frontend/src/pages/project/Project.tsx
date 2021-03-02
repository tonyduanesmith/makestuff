import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import ScheduleIcon from "@material-ui/icons/Schedule";

import { Article } from "./types";
import { GET_ARTICLE } from "./graphql";
import Image from "../../atoms/image/Image";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery<{ article: Article }>(GET_ARTICLE, { variables: { id } });

  if (!data) return <div>Unable to load article</div>;

  return (
    <Box width="100%" marginTop={4}>
      <Box marginX={{ xs: 2, sm: 2, md: 4, lg: 20, xl: 40 }} paddingY={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">{data.article.heading}</Typography>
            <Typography variant="h6">{data.article.subheading}</Typography>
            <Box display="flex" alignItems="center" color="grey.700">
              <Box marginRight={1}>
                <ScheduleIcon fontSize="small" />
              </Box>
              <Typography variant="subtitle1">{moment(data.article.created).fromNow()}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Image src={`${process.env.PUBLIC_URL}${data.article.image_path}`} alt="test" />
            <ReactMarkdown source={data.article.main_markdown ?? ""} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box boxShadow="1" bgcolor="primary.main" borderRadius="borderRadius" padding={2}>
              <ReactMarkdown source={data.article.sidebar_markdown} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Project;
