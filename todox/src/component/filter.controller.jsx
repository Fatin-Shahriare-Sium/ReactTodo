import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

function FilterControl({handleFilter}){
    return(
        <ButtonGroup>
            <Button className='btn btn-outline-success' color='white' onClick={()=>handleFilter('All')}>All</Button>
            <Button className='btn btn-outline-success' color='white' onClick={()=>handleFilter('Running')}>Running</Button>
            <Button className='btn btn-outline-success' color='white' onClick={()=>handleFilter('Compelete')}>Compelete</Button>

        </ButtonGroup>
    )
}
export default FilterControl;