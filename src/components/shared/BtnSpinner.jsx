import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BtnSpinner = () => {
  return (
    <div className="flex items-center gap-2 text-white px-6">
      <AiOutlineLoading3Quarters className="animate-spin" />
      <span>Loading ...</span>
    </div>
  );
};

export default BtnSpinner;
