import React from 'react'
import './table.css'
import {CustomInput,Button} from 'reactstrap'
let Rowview=({todo,toggleSelect,toggleComplete})=>{
    return(
        <div >
            <div className='tableview'>
            <table>
            <tr className="row">
            
            <th>#</th>
            <th>Time</th>
            <th>Todo</th>
            <th>Action</th>
            </tr>
                <tr style={{height:'10vh'}} className='row-text my-3 shadow'>
                <td  >
                <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={()=>{toggleSelect(todo)}}
                />
                </td>
               
                <td>
                    {todo.time.toDateString()}
                </td>
                <td>
                    {todo.text}
                </td>
                <td>
                <Button className='ml-auto' color={todo.isCompelete ? 'success': 'danger'} onClick={()=>toggleComplete(todo)}>{todo.isCompelete ? 'running':'complete'}</Button>
                </td>
            </tr>
            
            </table>
            </div>
        </div>
    )
}


export default Rowview;