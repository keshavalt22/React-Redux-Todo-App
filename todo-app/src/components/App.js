import { connect } from 'react-redux';
import Input from './Input';
import TodoList from './TodoList';

function App(props) {
  return (
    <div className='container'>
      <h1>Todo App</h1>
      <Input />
      <TodoList />
    </div>
  );
}




export default connect()(App);
