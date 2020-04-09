import React, { Component } from 'react';

import ToDoCard from './ToDoCard';

// class ToDoList extends Component {

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
        <div> 
            
            {props.list.map((todo) => {
               
               return (
                <ToDoCard reminder={todo} />
               ) 
            })}
        </div>
    )
}

export default ToDoList;
