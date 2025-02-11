import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("right")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("left")}
    </div>
  );
};

export default TagLine;
