import { Grid } from 'react-loader-spinner';

export function Loader() {
  return (
    <Grid
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      visible={true}
    />
  );
}
