import React from 'react'
import {Jumbotron, ModalBody, ModalHeader,Modal} from 'reactstrap'

import Rowview from './table'
import Todofrom from './todoFrom.jsx'
import SearchBox from './controllerBox.jsx'
import { nanoid } from 'nanoid'
import FilterControl from './filter.controller'
import BulkControl from '../Bulkcontroller'

class Head extends React.Component{
    state={
        todo:[
            {
                id:'9',
                text: 'segewbzeshbse',
                isSelect:false,
                time:new Date(),
                isCompelete:true
            },
            {
                id:'90',
                text: 'FFF',
                isSelect:false,
                time:new Date(),
                isCompelete:true
            }
        ],
        isOpenModalTodo:false,
        searchTask:'',
        filter:'All'
    }

    KeyPressHandeler=(event)=>{
        
        if(event.key==='Enter'){
            console.log(this.state);
            let take={
                id:'9',
                text: event.target.value,
                isSelect:false,
                time:new Date(),
                isCompelete:true
            }
            this.setState({todo:[...this.state.todo,take]})
            
        }
    }
    toggleSelect=(todo)=>{
        let desState=[...this.state.todo]
        let takeID=desState.find(com => com.id===todo.id)
        takeID.isSelect=!takeID.isSelect
        this.setState({takeID})
        
    }
    toggleComplete=(todo)=>{
        let desState=[...this.state.todo]
        let takeID=desState.find(com => com.id===todo.id)
        takeID.isCompelete=!takeID.isCompelete
        this.setState({takeID})
    }
    toggleForm=()=>{
        this.setState({isOpenModalTodo:!this.state.isOpenModalTodo})

    }
    handerlSearch=(evex)=>{
       
            this.setState({searchTask:evex.target.value})
           

    }
    perfromSearch=()=>{
        return this.state.todo.filter(sig => sig.text.toLowerCase().includes(this.state.searchTask.toLowerCase()))
       
    }
    perfromfilter=(todo)=>{
        if(this.state.filter==='Running'){
            return todo.filter(sigTodo => sigTodo.isCompelete===true)
        }else if(this.state.filter==='Compelete'){
            return todo.filter(sigTodo => sigTodo.isCompelete===false)
        }else{
            return todo
        }
    }
    create=()=>{
        let takeSearch=this.perfromSearch()
        let taking=this.perfromfilter(takeSearch)
        if(this.state.searchTask ===''){
            
          return this.perfromfilter(this.state.todo).map(tox=>(<Rowview todo={tox} toggleComplete={this.toggleComplete} toggleSelect={this.toggleSelect}/>))
        }else{
           
             return taking.map(sig=> <Rowview todo={sig} toggleComplete={this.toggleComplete} toggleSelect={this.toggleSelect} />)
        }
        
        
        
    }
    handleFilter=(e)=>{
      this.setState({filter:e})
    }
    
    
    creatTodo=(todo)=>{
        todo.id=nanoid(3)
        todo.isSelect=false
        todo.time=new Date()
        todo.isCompelete=true
console.log(todo);
this.setState({todo:[todo,...this.state.todo]})
    }
//this.state.todo.filter(sigTodo => (sigTodo.text.toLowerCase().includes(this.state.searchTask.toLocaleLowerCase()))

clearSelected=()=>{
let todox=[...this.state.todo]
let todoz=todox.filter(sigTodo=> sigTodo.isSelect===false)
this.setState({todo:todoz})
}
clearComplete=()=>{
    let takeUncomplete=this.state.todo.filter(sigTodo=>sigTodo.isCompelete===true)
    this.setState({todo:takeUncomplete})
}
reset=()=>{
    
    this.setState({isOpenModalTodo:false,
        searchTask:'',
        filter:'All'})
 
}

render(){
    return(
        
        <div>
        
        <Jumbotron>
            <h3 className='d-flex mx-auto'>React TO-DO</h3>
        </Jumbotron>
        <SearchBox  term={this.state.searchTask} toggleForm={this.toggleForm}  handerlSearch={this.handerlSearch}/>
        <div style={{display:'flex',justifyContent:'space-between'}} >
        <FilterControl handleFilter={this.handleFilter} />
        <BulkControl clearSelected={this.clearSelected} clearComplete={this.clearComplete} reset={this.reset}/>
        </div>
       
       

      {/* <p>{<Rowview todo={} toggleComplete={this.toggleComplete} toggleSelect={this.toggleSelect}/>}</p> */}
      <p>{this.create()}</p>
       
            {/* <p>{this.state.todo.length>=1?this.state.todo.map(( to)=>(<div><Rowview todo={to} toggleComplete={this.toggleComplete} toggleSelect={this.toggleSelect}/></div>)):''}</p> */}
            
        <Modal isOpen={this.state.isOpenModalTodo}>
            toggle={this.toggleForm} 
            <ModalHeader toggle={this.toggleForm} >
            Craete todo
            </ModalHeader >
            <ModalBody>
            <Todofrom creatTodo={this.creatTodo}/>
            </ModalBody>
        </Modal>
        </div>
    )
        
    }
}

export default Head;