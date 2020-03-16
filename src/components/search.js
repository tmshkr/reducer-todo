import React, { memo } from "react";

function Search(props) {
  const { list } = props;
  const handleChange = e => {
    list.dispatch({ type: "SET_SEARCH", payload: e.target.value });
  };

  return (
    <li className="list-group-item create-task">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </li>
  );
}

export default memo(Search);
