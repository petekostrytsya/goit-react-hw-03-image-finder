import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
  height="80"
  width="80"
  radius="48"
  color="blue"
  ariaLabel="watch-loading"
  wrapperStyle={{}}
  wrapperClassName=""
  visible={true}
/>
  );
};