import { useState } from "react";

const minusIcon = "-";
const plusIcon = "+";

const Accordion = ({ title, button, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-white">
      <div
        onClick={toggleExpanded}
        className="px-6 text-left items-center h-20 select-none flex justify-between flex-row"
      >
        <h5 className="flex-1">{title}</h5>
        <h5 className="flex-1">{button}</h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
          expanded ? "" : "max-h-0"
        }`}
      >
        <p className="pb-4 text-left">{content}</p>
      </div>
    </div>
  );
};
export default Accordion;
