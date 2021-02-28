import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Image from "../../atoms/image/Image";
import { FrameType } from "../../atoms/image/types";

interface Props {
  heading: string;
  children: string;
  image?: string;
  imageFrame?: FrameType;
}

const Introduction = ({ heading, children, image = "", imageFrame = "default" }: Props) => {
  const hasImage = image !== "";
  return (
    <Grid container>
      {hasImage && (
        <Grid item xs={12} sm={4}>
          <Box textAlign={{ xs: "center" }}>
            <Image src={image} alt="me" frame={imageFrame} />
          </Box>
        </Grid>
      )}
      <Grid item xs={12} sm={hasImage ? 8 : 12}>
        <Typography variant="h4" paragraph>
          {heading}
        </Typography>
        <Typography color="textSecondary">{children}</Typography>
      </Grid>
    </Grid>
  );
};

export default Introduction;
