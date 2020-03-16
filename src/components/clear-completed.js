import React, { memo } from "react";
import { Button } from "reactstrap";

function ClearCompleted(props) {
  const { list } = props;
  const clear = () => {
    list.dispatch({ type: "CLEAR_COMPLETED" });
  };

  return <Button onClick={clear}>clear completed</Button>;
}

export default memo(ClearCompleted);
