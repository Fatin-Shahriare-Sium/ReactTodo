import React from 'react'
import {ListGroupItem,CustomInput,Button} from 'reactstrap'
let ListView=({todo,toggleSelect,toggleComplete})=>{
    return(
        <div>
            <ListGroupItem className='d-flex align-items-center'>
        <CustomInput
        type='checkbox'
        id={todo.id}
        checked={todo.isSelect}
        onChange={()=>{toggleSelect(todo.id)}}
        />
        <div className="mx-3">
            <h4>{todo.text}</h4>
            <p>{todo.time.toDateString()}</p>
        </div>
        <Button className='ml-auto' color={todo.isCompelete ? 'success': 'danger'} onClick={()=>toggleComplete(todo.id)}>{toggleComplete?'stop':'running'}</Button>
            </ListGroupItem>
            
        </div>
    )
}
export default ListView;