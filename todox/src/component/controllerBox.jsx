
import React from 'react'
import { Input,Button} from 'reactstrap'

let SearchBox=({handerlSearch,toggleForm})=>{
    return(
        <div className='d-flex'>
            <Input
            placeholder='Search task'
         
            onChange={(eve)=>{handerlSearch(eve)}}
            ></Input>
            <Button color='success' onClick={toggleForm}>
                new
            </Button>
        </div>
    )
}
export default SearchBox;