import moment from "moment";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import ScheduleIcon from "@material-ui/icons/Schedule";

import { Article } from "./types";

interface Props {
  article: Article;
}

const ProjectCard = ({ article }: Props) => {
  return (
    <>
      <Card>
        <Box height={200} clone>
          <CardMedia image={`${process.env.PUBLIC_URL}${article.image_path}`} />
        </Box>
      </Card>
      <Box display="flex" justifyContent="space-between" color="common.black" marginTop={1}>
        <Typography variant="subtitle2">{article.heading}</Typography>
        <Box display="flex" alignItems="center">
          <Box marginRight={1} clone>
            <ScheduleIcon fontSize="small" />
          </Box>
          <Typography variant="subtitle1">{moment(article.created).fromNow()}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ProjectCard;
