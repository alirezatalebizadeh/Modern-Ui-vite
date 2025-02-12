import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-[#0E0C15]/80 rounded-[1.7rem] ${className || ""
        } text-base`}
    >
      در حال ساخت...
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
    </div>
  );
};

export default Generating;
