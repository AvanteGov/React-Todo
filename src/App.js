import React from 'react';

import ToDoForm from './components/TodoForm';
import ToDoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;


// need to create the state and handlers in this app component
// and then pass them down to the child components 