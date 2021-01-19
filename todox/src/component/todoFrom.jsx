import React from 'react'
import {Form,FormGroup,Label,Button, Input} from 'reactstrap'

class Todofrom extends React.Component{
    state={
        text:'',
        des:'',
        
    }
    handelChange=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
        })
     
    }
    handelSub=(event)=>{
        event.preventDefault();
        this.props.creatTodo(this.state)
        event.target.reset()
        this.setState({text:'',des:''})
       
       
    }
    render(){
        return(
            <Form onSubmit={this.handelSub}>
                <FormGroup>
                    <Label>
                        Enter Task
                    </Label>
                    <Input 
                    type='text' 
                    name='text' 
                    value={this.state.text}
                    onChange={this.handelChange}
                    placeholder='write task name'/>
                    
                    
                </FormGroup>
                <FormGroup>
                    <Label>
                        Enter des of Task
                    </Label>
                    <Input 
                    type='text' 
                    name='des' 
                    value={this.state.des}
                    onChange={this.handelChange}
                    placeholder='write des'/>
                    
                    
                </FormGroup>
                <Button type='submit' className='btn btn-outline-success' color='white'>Create Task</Button>
            </Form>
        )
    }
}
export default Todofrom;
