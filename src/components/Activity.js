import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from './Todo';
import { db } from '../firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

const planStyle = {
  backgroundColor: '#d5cedc',
  padding: '16px',
  marginTop: '20px',
  marginBottom: '10px',
  marginRight: '50px',
  borderRadius: '8px',
  display: 'inline-block',
};


const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px'
};
const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[300px] w-full m-auto rounded-md shadow-xl p-2`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-2 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};

function Activity() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [date, setDate] = useState(new Date());

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
    });
    setInput('');
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  return (
    <div style={planStyle}>
      <div className={style.container}>
        <h5 className={style.heading}>Activity List</h5>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type='text'
            placeholder='Add Activity'
          />
          <button className={style.button}>
            <AiOutlinePlus size={20} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
    </div>
    </div>
  );
}

export default Activity;