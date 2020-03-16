import React, { memo } from "react";
import { Button } from "reactstrap";

import { CLEAR_COMPLETED } from "../actions";

function ClearCompleted(props) {
  const { list } = props;
  const clear = () => {
    list.dispatch({ type: CLEAR_COMPLETED });
  };

  return <Button onClick={clear}>clear completed</Button>;
}

export default memo(ClearCompleted);
