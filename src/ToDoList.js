import React, { useState } from 'react';

import ListComp from './ListCom';

import Button from '@mui/material/Button';
import AddIcon from '@material-ui/icons/Add';


const ToDoList =()=>{
    const [item,setItem]=useState("");
    const [newItem,setNewItem]=useState([]);

    const itemEvent =(event)=>{
        setItem(event.target.value);
    }
    const listOfItems =()=>{
        setNewItem((prevValue)=>{
            return [...prevValue,item];

        })
        setItem(" ");
    }

    return(
    <>
    <div className='main_div'>
        <div className='center_div'>
        <br/>
        
        <h1>ToDoList</h1>
        <br/>
        <input type="text" value={item} placeholder='Add a Item' onChange={itemEvent}/>
        <Button className='newbtn' onClick={listOfItems} >  <AddIcon/> </Button>
        <br/>
        <ol>
            
            {
                newItem.map((val,index)=>{
                    return <ListComp key={index} text={val}/>
                })
            }
        </ol>
        <br/>
        </div>
    </div>

    </>);

}

export default ToDoList;