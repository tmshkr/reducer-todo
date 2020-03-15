import React, { memo } from "react";
import { Button } from "reactstrap";

function ClearCompleted(props) {
  const { list } = props;
  const clear = () => {
    const tasks = { ...list.state.tasks };
    for (let key in tasks) {
      if (tasks[key].completed) {
        delete tasks[key];
      }
    }
    list.setState({ tasks });
  };

  return <Button onClick={clear}>clear completed</Button>;
}

export default memo(ClearCompleted);
