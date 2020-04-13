import React from 'react';

import ToDoCard from './ToDoCard';

// class ToDoList extends React.Component {

//     constructor () {
//         super();
//     }

//     render () {
//         return (
//             <div>
//                 <h1> I AM THE TODO LIST </h1>
//             </div>
//         )
//     }
// };

///////////////////////

const ToDoList = (props) => {
    console.log("list props", props)

    return (
        <div className="list"> 
            
            {props.list.map((todo) => {
               
               return (
                <ToDoCard
                    reminder={todo}
                    completeHandler={props.completeHandler}
                    key={props.list.id} />
               ) 
            })}
        </div>
    )
}

export default ToDoList;
