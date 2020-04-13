import React from 'react';

const ToDoCard = (props) => {
  console.log("card props", props)
  
  return (
    <div className="card-container">
        <h1 className="card-container__title">{`${props.reminder.name}`}</h1>
        <button
        className="card-container__button button" 
        onClick={() => props.completeHandler(props.reminder.id)}>
          Mark Complete
        </button>
    </div>
  )
}

export default ToDoCard;



