import React from "react";
import { NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const BreadCrumb = (props) => {
  function isLast(index) {
    let val = index === props.crumbs.length - 1;
    console.log(val);
    return val;
  }
  return (
    <nav className="bg-grey-light rounded-md w-full text-xs text-grey">
      <ol className="flex items-center mx-5">
        {props.crumbs?.map((crumb, i) => {
          const lastCrumb = isLast(i) ? "py-2 px-3 bg-borderGrey rounded-lg" : "";

          return (
            <li className="mr-2 flex items-center" key={i}>
              <NavLink to={`/${crumb.link}`} className={lastCrumb}>
                {crumb.name}
              </NavLink>
              {!lastCrumb && (
                <span class="text-gray-500 mx-2">
                  <FiChevronRight />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
