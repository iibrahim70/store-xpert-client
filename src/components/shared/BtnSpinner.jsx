import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BtnSpinner = () => {
  return (
    <span className="flex items-center gap-2 text-white px-6">
      <AiOutlineLoading3Quarters className="animate-spin" />
    </span>
  );
};

export default BtnSpinner;
