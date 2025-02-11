import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Spinner = ({ spin }: { spin: boolean }) => {
  if (!spin) return null;
  return <AiOutlineLoading3Quarters className="animate-spin text-4xl" />;
};

export default Spinner;
