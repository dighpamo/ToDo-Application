import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Footer from './Footer';
import Header from './Header';
import './css/App.css';
import { BrowserRouter as Router } from "react-router-dom";

const todos = [
  { id: 1, task: 'Do the dishes', completed: false },
{ id: 2, task: 'Take out the trash', completed: true },
{ id: 3, task: 'Mow the lawn', completed: false },
{ id: 4, task: 'Clean the living room', completed: false },
{ id: 5, task: 'Do the laundry', completed: false },
{ id: 6, task: 'Vacuum the carpets', completed: false },
{ id: 7, task: 'Wash the windows', completed: false },
{ id: 8, task: 'Sweep the floor', completed: false },
{ id: 9, task: 'Water the plants', completed: false },
{ id: 10, task: 'Buy groceries', completed: false },
{ id: 11, task: 'Cook dinner', completed: false },
{ id: 12, task: 'Bake a cake', completed: false },
{ id: 13, task: 'Do the shopping', completed: false },
{ id: 14, task: 'Pay the bills', completed: false },
{ id: 15, task: 'Wash the car', completed: false },
{ id: 16, task: 'Fix the fence', completed: false },
{ id: 17, task: 'Paint the walls', completed: false },
{ id: 18, task: 'Repair the roof', completed: false },
{ id: 19, task: 'Fix the sink', completed: false },
{ id: 20, task: 'Change the oil', completed: false },
{ id: 21, task: 'Mop the floor', completed: false },
{ id: 22, task: 'Clean the bathroom', completed: false },
{ id: 23, task: 'Take out the garbage', completed: false },
{ id: 24, task: 'Sweep the porch', completed: false },
{ id: 25, task: 'Plant a garden', completed: false },
{ id: 26, task: 'Do the yard work', completed: false },
{ id: 27, task: 'Wash the dishes', completed: false },
{ id: 28, task: 'Vacuum the furniture', completed: false },
{ id: 29, task: 'Mop the kitchen', completed: false },
{ id: 30, task: 'Sweep the basement', completed: false },
{ id: 31, task: 'Clean the garage', completed: false },
{ id: 32, task: 'Wash the floor', completed: false },
{ id: 33, task: 'Rake the leaves', completed: false },
{ id: 34, task: 'Clean the gutters', completed: false },
{ id: 35, task: 'Sweep the driveway', completed: false },
{ id: 36, task: 'Mop the bedroom', completed: false },
{ id: 37, task: 'Vacuum the stairs', completed: false },
{ id: 38, task: 'Wash the windowsills', completed: false },
{ id: 39, task: 'Sweep the attic', completed: false },
{ id: 40, task: 'Mop the bathroom', completed: false },
];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div>
        <header>
          <Router>
            <Header />
          </Router>
        </header>
        <main>
          <TodoForm addTodo={this.addTodo} />
          <TodoList tasks={this.state.todos} toggleComplete={this.toggleComplete} />
        </main>
        <footer>
          <Router>
            <Footer />
          </Router>
        </footer>
      </div>
    );
  }
}

export default TodoApp;
