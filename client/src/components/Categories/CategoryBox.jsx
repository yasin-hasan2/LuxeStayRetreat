import PropTypes from "prop-types";
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = { category: label };
    const url = queryString.stringifyUrl({
      url: "/rooms",
      query: currentQuery,
    });
    console.log(url);
    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  
  hover:text-neutral-800
  hover:border-b-[#449698]
  transition
  cursor-pointer ${
    category === label && "border-b-[#449698] text-neutral-800 "
  } `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium ">{label}</div>
    </div>
  );
};

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default CategoryBox;
