import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'

function BulkControl({clearSelected,clearComplete,reset}){
    return(
        <ButtonGroup>
            <Button className='btn btn-outline-success' color='white' onClick={clearSelected}>clearSelected</Button>
            <Button className='btn btn-outline-success' color='white' onClick={clearComplete}>clearComplete</Button>
            <Button className='btn btn-outline-success' color='white' onClick={reset}>reset</Button>

        </ButtonGroup>
    )
}
export default BulkControl;