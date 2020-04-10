import React from 'react';

const ToDoCard = (props) => {
  console.log("card props", props)
  
  return (
    <div className="todocard-container">
        <h1 className="todocard-container__element">{`${props.reminder.name}`}</h1>
        <button onClick={() => props.completeHandler(props.reminder.id)}>Mark Complete</button>
    </div>
  )
}

export default ToDoCard;



