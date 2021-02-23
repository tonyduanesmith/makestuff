interface Props {
  color: string;
}

const BrandIcon = ({ color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" height="100%">
      <path
        fill={color}
        d="M433.02,201.28h-39.9l11.6-39.34c3.68-12.73,8.21-34.81,8.21-34.81h0.57c0,0,4.53,22.07,8.21,34.81
		L433.02,201.28z M1000,23.12v953.76c0,12.77-10.35,23.12-23.12,23.12H23.12C10.35,1000,0,989.65,0,976.88V23.12
		C0,10.35,10.35,0,23.12,0h953.76C989.65,0,1000,10.35,1000,23.12z M726.46,283.34H857.2v-42.45h-81.22v-38.2h61.69v-42.45h-61.69
		v-36.79h77.26V81.01H726.46V283.34z M690.12,484.83v-42.45h74.43v-42.45H640.6v202.34h49.52v-74.99h61.69v-42.45H690.12z
		 M530.64,283.34h49.52v-82.07h20.38l42.73,82.07h55.47l-57.73-104.99v-0.57l54.62-96.78h-53.2l-41.88,78.1h-20.38v-78.1h-49.52
		V283.34z M318.4,283.34h50.94l12.17-42.45h63.11l12.45,42.45h50.94L439.24,81.01h-52.07L318.4,283.34z M81.55,283.34h49.81
		l6.23-91.12c1.13-15.28,0-33.96,0-33.96h0.57c0,0,6.79,21.22,11.32,33.96l21.22,58.58h42.45l21.22-58.58
		c4.53-12.73,11.32-33.96,11.32-33.96h0.57c0,0-1.13,18.68,0,33.96l6.23,91.12h49.52L285.58,81.01h-53.77l-29.43,85.46
		c-4.53,13.02-10.19,33.39-10.19,33.39h-0.57c0,0-5.66-20.38-10.19-33.39l-29.43-85.46H98.24L81.55,283.34z M149.63,605.67
		c45.56,0,71.31-29.15,71.31-62.82c0-63.96-91.12-59.43-91.12-84.9c0-11.32,11.32-15.85,21.51-15.85
		c24.34,0,44.71,17.83,44.71,17.83l20.94-40.47c0,0-21.51-22.92-65.09-22.92c-40.18,0-71.6,24.62-71.6,61.97
		c0,62.26,91.12,61.41,91.12,85.46c0,12.17-11.04,16.13-21.22,16.13c-25.47,0-48.39-20.94-48.39-20.94L75.77,576.8
		C75.77,576.8,102.09,605.67,149.63,605.67z M127.07,872.46H80.66v46.41h46.41V872.46z M289.84,717.03H117.5v42.45h61.41v159.89
		h49.52V759.48h61.41V717.03z M293.67,442.38v159.89h49.52V442.38h61.41v-42.45H232.26v42.45H293.67z M445.48,876.92h-81.22v-38.2
		h61.69v-42.45h-61.69v-36.79h77.26v-42.45H314.74v202.34h130.74V876.92z M511.57,605.67c50.94,0,84.33-32.26,84.33-77.82V399.93
		h-49.52v127.91c0,21.22-13.87,32.54-35.09,32.54c-21.22,0-35.09-11.32-35.09-32.54V399.93h-49.52v127.91
		C426.67,573.4,460.06,605.67,511.57,605.67z M654.89,888.8l-25.47-36.22c0,0-23.21,24.9-53.77,24.9
		c-37.35,0-57.16-30.85-57.16-60.84c0-29.15,18.39-57.73,57.16-57.73c28.02,0,50.66,20.66,50.66,20.66l22.92-37.35
		c0,0-25.75-28.58-75.84-28.58c-60.84,0-106.12,45.28-106.12,104.14c0,59.99,42.73,104.99,106.12,104.99
		C626.31,922.76,654.89,888.8,654.89,888.8z M857.5,717.03h-49.52v80.94H734.4v-80.94h-49.52v202.34h49.52v-79.24h73.58v79.24h49.52
		V717.03z M919.91,399.93H795.96v202.34h49.52v-74.99h61.69v-42.45h-61.69v-42.45h74.43V399.93z"
      />{" "}
    </svg>
  );
};

export default BrandIcon;
