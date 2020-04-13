import React, { Component } from "react";

class ToDoForm extends Component {

    constructor (props) {
        super(props);
        // console.log("form props BABY",props);
        this.state = {
            input: ""
        }
    }
    
    // handle input changes 
    changeHandler = (event) => {
        event.preventDefault();

        // updates the current state of the form component input 
        this.setState({[event.target.name]: event.target.value})
        console.log("input state:", this.state.input)
    }

    //submission handler 
    submitHandler = (event) => {
        // console.log("form props", this.props)
        event.preventDefault();

        // passes the input and event information up to the addItem function
        this.props.addItem(event, this.state.input)

        // resets state back to empty once submitted 
        this.setState({input: ""})

    }
    

    render () {
        return (
            <div className="form-container">
                
                <form 
                className="form-container__form"
                onSubmit={this.submitHandler}>
                     
                    <label htmlForm="input"></label>
                     
                    <input 
                    type="text" 
                    placeholder="a new note"
                    className="form__input"
                    name="input"
                    value={this.state.input}
                    onChange={this.changeHandler}>        
                    </input>
                    
                    <button 
                    type="submit"
                    className="form__button">
                        Create Note!
                    </button>
                </form>                
                
                <button className="form-container__button" onClick={this.props.filterItems}>Clear Completed</button>
            </div>
        )
    }
}

// export default ToDoForm;


/////////////////////////////////
// const ToDoForm = () => {
//     return (
//         <div>
//             <form>
//                 <input type="text" placeholder="a new note"></input>
//                 <button>Create Note!</button>
//             </form>
//         </div>
//     )
// }

export default ToDoForm;