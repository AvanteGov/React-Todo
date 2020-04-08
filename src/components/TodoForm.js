import React, { Component } from "react";

// class ToDoForm extends Component {

//     constructor () {
//         super();
//     }

//     render () {
//         return (
//             <div>
//                 <form>
//                      <input type="text" placeholder="a new note"></input>
//                      <button>Create Note!</button>
//                     </form>
//             </div>
//         )
//     }
// }

// export default ToDoForm;


/////////////////////////////////
const ToDoForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder="a new note"></input>
                <button>Create Note!</button>
            </form>
        </div>
    )
}

export default ToDoForm;