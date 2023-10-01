import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion';


const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const addNewTodo = (e) => {
        // console.log(e.code);
        //to know the code, use e.code 
        if (e.code === 'Enter') {
            console.log(e.target.value);
            setTodoList([...todoList,e.target.value]);
            console.log([...todoList,e.target.value]);
            e.target.value = '';
        }

    }

    const deleteTodo = (index) =>{
        console.log(index);

        const temp = todoList;
        temp.splice(index,1);
        setTodoList([...temp]);
    }
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Todo webapp</h1>
            <div className='card'>
<div className="card-header">
    <input type="text" className='form-control' onKeyDown={addNewTodo} />
</div>
<div className='card-body'>
    <AnimatePresence mode='popLayout'>
    {todoList.map((todo, index)=>
    {return <motion.div 
        layout
        // layout animation
        key={todo}
    initial={{x:'100%',opacity:'50%',scale:0.5,}}
    animate={{x:0,opacity:1,scale:1}}
    // for exit animation
    exit={{x:'-100%',opacity:'0'}}
     

    className={`d-flex justify-content-between p-3 ${index%2===0 ?` bg-body-secondary`:``}`}>
        <h3>{index+1}{todo}</h3>
        <button className='btn btn-danger' onClick={()=>{deleteTodo(index)}}>Delete</button>
        
        </motion.div>
    })}
</AnimatePresence>
</div>
</div>
        </div>
    )
}

export default Todo ;
