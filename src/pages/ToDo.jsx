import '../styles/Todo.css';
import { FcList } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoAddOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { MdOutlineDoneOutline } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";
import { FcTodoList } from "react-icons/fc";
import { useState, useEffect } from 'react';

function ToDo() {
  const [todos, setTodos ] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {title, description, date, time, done:false}]);
    localStorage.setItem('todos', JSON.stringify([...todos, {title, description, date, time, done:false}]));
    setShowModal(false);
  }

  useEffect(() => {
    const getTodos = () => {
      setTodos(JSON.parse(localStorage.getItem('todos')) || [])
    } 
    getTodos();
  }, []);

  const filterTodos = (tab) => {
    setActiveTab(tab);

    if(tab === 'all'){
      setTodos(JSON.parse(localStorage.getItem('todos')) || [])
    } else if (tab === 'done'){
      setTodos(JSON.parse(localStorage.getItem('todos')).filter(todo => todo.done) || [])
    } else if (tab === 'undone'){
      setTodos(JSON.parse(localStorage.getItem('todos')).filter(todo => !todo.done) || [])
    }
  }

  const markAsDone = (index, todos, setTodos) => {
    const newTodos = [...todos];
    newTodos[index].done = true;
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));

  }
  
  return (
    <div>
      <div className='header2'>
        <span className="left">
        <GiHamburgerMenu id='menuIcon'/>
        </span>
        <span className="middle">
          <h3 id='headerText'>To Do List <span> <FcTodoList /></span></h3>
        </span>
        <span className="right">
          <button type='button'><RiLogoutBoxRLine id='logoutIcon'/></button>
          <button type='button'><IoSearchSharp id='searchIcon'/></button>
          <button type='button'><IoMdMore id='moreIcon'/></button>
        </span>
        
      </div>
      <div>
        <section className='Hero'>
          <button type='button' className={activeTab === 'undone' ? 'activeClass1' : 'undone'} onClick={() => filterTodos('undone')}>UnDone <span> <LuListTodo /> </span> </button>
          <button type='button' className={activeTab === 'done' ? 'activeClass2' : 'done'} onClick={() => filterTodos('done')}>Done <span> <MdOutlineDoneOutline /> </span> </button>
          <button type='button' className={activeTab === 'all' ? 'activeClass3' : 'all'} onClick={() => filterTodos('all')}>All <span> <FcList /> </span> </button>

        </section>
      </div>
      <div id='body'>
        
        <div id='toDoList'>
          {
            todos.length > 0 ? todos.map((todo, index) => {
              return (
                <div class="card">
    <h5 class="card-header">{todo.title}</h5>
    <div class="card-body">
      <p class="card-text">{todo.description}</p>
      <p class="card-text">{todo.date}</p>
      <p class="card-text">{todo.time}</p>
      {
        todo.done === false ? 
      <button class="btn btn-primary" onClick={() => markAsDone(index, todos, setTodos)}><MdOutlineDoneOutline /></button>
      : <p>Done!</p>
      }
  </div>
</div>
              )
            
            }) : <p>No todos</p>
          }
        </div>
        { showModal === true ? (
        <div id='todoForm'>
          <form action="submit">
            <div id='formContent'>
            <div >
              <label htmlFor="title">Title</label> <br/>
              <input type="text" id='title' value={title} name='title' placeholder='Please add atext title!' required onChange={(e)=> setTitle(e.target.value)}/> <br/>
            </div>
            <div>
            
            <label htmlFor="description">Description</label> <br/>
            <textarea name="description" id="description" cols="30" rows="10" value={description} placeholder='Please add a description!' required onChange={(e)=> setDescription(e.target.value)}></textarea> <br/>

            </div>
            <div>
              <label htmlFor="date">Date</label> <br/>
              <input type="date" id='date' name='date' value={date} placeholder='2023-10-23, sat' required onChange={(e)=> setDate(e.target.value)}/> <br/>
            </div>
            <div>
              <label htmlFor="time">Time</label> <br/>
              <input type="time" id='time' name='time' value={time} placeholder='10:00' required onChange={(e)=> setTime(e.target.value)}/> <br/>
            </div>
           
            <button type='submit' onClick={addTodo}>Add</button>
            <button type='button' onClick={()=> setShowModal(false)}>Cancel</button>
            </div>
          </form>
          
        </div>) : null
        }
        <div id='addTodo'>
          <button type='button' onClick={()=> setShowModal(true)} ><IoAddOutline /> </button> 

        </div>
      </div>
    </div>
  );
}

export default ToDo;