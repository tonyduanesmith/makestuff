import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import quickLinks from "../../constants/navigation";
import Link from "../../atoms/link/Link";

const Footer = () => {
  return (
    <Box bgcolor="grey.800" width="100%" paddingY={4} flexShrink={0}>
      <Box bgcolor="grey.800" marginX={{ xs: 2, sm: 2, md: 4, lg: 20, xl: 40 }}>
        <Grid container>
          <Box borderRight={{ sm: 1, md: 1, lg: 1, xl: 1 }} borderColor="grey.700" clone>
            <Grid item xs={12} sm={4} md={4}>
              <Box clone color="common.white">
                <Typography variant="h5">Quick links</Typography>
              </Box>

              {quickLinks.map(link => (
                <Box marginTop={2} key={link.path}>
                  <Link path={link.path}>{link.label}</Link>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box borderRight={{ sm: 1, md: 1, lg: 1, xl: 1 }} borderColor="grey.700" clone>
            <Grid item xs={12} sm={4} md={4}>
              <Box color="common.white" clone>
                <Typography variant="h5">Contact info</Typography>
              </Box>

              <Box marginTop={2}>
                <Link path="mailto:tonyduanesmith@me.com" external>
                  <EmailIcon />
                  <Box marginLeft={0.5}>tonyuanesmith@me.com</Box>
                </Link>
              </Box>
              <Box marginTop={2}>
                <Link path="https://goo.gl/maps/7vydQyJHjWAxDSk29" external>
                  <LocationOnIcon />
                  <Box marginLeft={0.5}>Leeds, UK</Box>
                </Link>
              </Box>
            </Grid>
          </Box>
          <Grid item xs={12} sm={4} md={4}>
            <Box clone color="common.white">
              <Typography variant="h5">Social info</Typography>
            </Box>

            <Box marginTop={2}>
              <Link path="https://www.instagram.com/makestuff.tech/" external>
                <InstagramIcon />
                <Box marginLeft={0.5}>makestuff.tech</Box>
              </Link>
            </Box>
            <Box marginTop={2}>
              <Link path="https://www.instagram.com/makestuff.tech/" external>
                <TwitterIcon />
                <Box marginLeft={0.5}>@makestuff.tech</Box>
              </Link>
            </Box>
            <Box marginTop={2}>
              <Link path="https://www.instagram.com/makestuff.tech/" external>
                <FacebookIcon />
                <Box marginLeft={0.5}>@makestuff.tech</Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
