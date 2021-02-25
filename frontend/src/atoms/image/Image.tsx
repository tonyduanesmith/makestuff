import { StyledImage } from "./styled";
import { FrameType } from "./types";

interface Props {
  src: string;
  alt: string;
  frame?: FrameType;
  maxHeight?: string;
}

const Image = ({ src, alt, frame = "default", maxHeight = "100%" }: Props) => {
  return <StyledImage src={src} alt={alt} frame={frame} maxHeight={maxHeight} />;
};

export default Image;
