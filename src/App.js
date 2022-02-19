import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos'
});


function App() {
  const [todos, setTodo] = useState([])

  useEffect(() => {
    getCourses();
  }, [])

  async function createCourse() {
    let res = await api.post('/', {
      title: 'New',
      id: 1000111,
      completed: false
    })
    setTodo( prevTodos => {
      return [...prevTodos, res.data]
    })
    console.log(res);
  }

  const getCourses = useCallback(() => {
    api.get('/?_limit=5').then(res => {
      console.log(res.data)
      setTodo(res.data);
    })
  })
  
  
  return (
    <div className="App">
      <button onClick={createCourse}>Create Course</button>
      <ul>
        {todos.map(
          todo => {
            return <li key={todo.id}>{todo.title}</li>
          }
        )}
      </ul>
    </div>
  );
}

export default App;
