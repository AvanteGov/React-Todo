//dependencies 
import React from 'react';

//components 
import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor (){
    super();
    this.state = {
      data: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  // add item handler to be passed down to form using props

  // handler takes in an event and and new item information from input to create new item in handler 
  addToDo = (event, newItemInput) => {
    event.preventDefault();

    // creates new object out of received data 
    const newItem = {
      name: newItemInput,
      id: Date.now(),
      completed: false
    }

    //adds the new object to the current state 
    this.setState({
      data: [...this.state.data, newItem]
    })

    // logs out the updated state data to show updated state
    console.log("updated state", this.state.data)
  }

  filterCompleted = (event) =>  {
    event.preventDefault();
    console.log("filter funct ran");
    // sets state to the returned filtered result of the check against 
    // value of completed key 
    this.setState({
      data: this.state.data.filter((item) => {
        return (
          !item.completed
        )
      }) 
    })
  }


  // handles the toggling of the compelted status by taking the clicked item ID 
  completeChangeHandler = (listId) => {
    console.log("list id", listId)

    // updates the state of the dataset by:
    this.setState({
      data: this.state.data.map((listItem) => {
        // mapping over the data set to find the right item 
        if (listId === listItem.id) {

          // once the item matches, it changes the status of completed
          // within the state 
          return {
            ...listItem,
            // to whatever completed is NOT 
            completed: !listItem.completed
          }
        }
        
        // if it cannot find the item in the list, it just returns 
        // the list
        else return listItem;
      })
    })
  }

  render() {
    return (
      <div>
        <ToDoForm 
          addItem={this.addToDo} 
          filterItems={this.filterCompleted} 
        />
        
        <ToDoList 
          list={this.state.data} 
          completeHandler={this.completeChangeHandler} 
        />
      </div>
    );
  }
}

export default App;


// need to create the state and handlers in this app component
// and then pass them down to the child components 