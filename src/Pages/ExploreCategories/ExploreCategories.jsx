import React from "react";
import { FaGripfire } from "react-icons/fa";
import "../ExploreCategories/ExploreCategories.css";

const ExploreCategories = ({ list }) => {
  // console.log(list);
  return (
    <>
      <div className="explore-cat px-3 py-3">
        <p className="cat-text mb-2">
          <FaGripfire className="cat-icon" />
          Categories
        </p>
        {list?.length !== 0 ? (
          list?.map((list) => {
            return (
              <div key={list.category_id}>
                <p>{list.category_name}</p>
              </div>
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ExploreCategories;
