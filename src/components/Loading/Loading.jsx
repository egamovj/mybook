import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="inline-block fixed top-2/4 left-2/4 w-100 h-100 -translate-x-1/2 -translate-y-1/2">
      <BounceLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
