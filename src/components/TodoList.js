import React from 'react'
import TodoTr from './TodoTr';
import AddTodo from './AddTodo';
import './style.css';
import Update from './Update';
export  class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[],
            toggleComplete:true,
            popup:false,
            todoShow:"all",
            popupdate:false,
            f:""
        }
    }
    //fait apparaitre une popup
    addPopup = ()=>{
        this.setState({
            popup:true
        })
    }
    //ajoute une todo
    addTodo = (todo)=>{
        
         this.setState({
            todos: [todo, ...this.state.todos],
            popup:false
         })
        
        
    }

    
    show=()=>{
        this.setState({
            todos:this.state.todos.map(todo=>({
                ...todo,
                completed:this.state.toggleComplete
            })
            ),
            toggleComplete:!this.state.toggleComplete
        })
    }
    onDelete = (id)=>{
        document.getElementById(id).style.display="none";
    }
//permet de modifier la variable todoshow en s    
    getTodo=(s)=>{
        this.setState({
            todoShow:s
        })
    }  
    //méthode pour éditer une todo
    onUpdating=(todo)=>{
        this.setState({
            todos: this.state.todos.map(t=>{
                if(t.id===todo.id){
                    return {
                        ...t,
                        id:todo.id,
                        title:todo.title,
                        description:todo.description,
                        status:todo.status
                    }
                }else{
                    return t;
                }
            })
        })
       

    }

   
    //fait apparaitre la popup pour éditer
    changePopup=()=>{
        this.setState({
            popupdate:false
        })
    }
    
    //affiche la pop-up pour éditer
    onUpdate=(id)=>{
        this.setState({
            popupdate:true,
            f: this.state.todos.map(t=>
            (t.id===id)?<div><Update onSubmit={this.onUpdating} 
            key={t.id} id={t.id} title={t.title} description={t.description} status={t.status} onClick={this.changePopup} /></div>:"")
            
        })
        
    }
    onSupprime=(todo)=>{
        this.setState({
            todos: this.state.todos.map(t=>{
                if(t.id===todo.id){
                    return {
                        ...t,
                        id:"",
                        title:"",
                        description:"",
                        status:""
                    }
                }else{
                    return t;
                }
            })
        })
       
    }
    
    
   
    render(){
        //permet d'afficher les tâches à faire ,faites ou en progression
        let todos=[];
        if(this.state.todoShow==='all'){
            todos=this.state.todos
        }
        else if(this.state.todoShow==='todo'){
            todos=this.state.todos.filter(t=>t.status==="todo")
        }else if(this.state.todoShow==='inprogress'){
            todos=this.state.todos.filter(t=>t.status==="inprogress")

        }
        else if(this.state.todoShow==='done'){
            todos=this.state.todos.filter(t=>t.status==="done")

        }
        return <div className="contain">
                    <div className="header"></div>
                    <div className="widget">
                        <div>
                            <h1>TO DO</h1>
                        </div>
                    </div>
                    <div className="main">
                    <h1>Todos</h1>
                <div className="cbody">
                    <div className="cbody_header">
                        <div className="form_search">
                            <button className="search">
                            <span className="material-icons">
                                search
                            </span>
                            </button>
                            <input type="search" placeholder="Search by title or description"/>
                        </div>
                        <div className="action">
                            <button onClick={()=>this.getTodo('all')}>All</button>
                            <button onClick={()=>this.getTodo('todo')}>Todo</button>
                            <button onClick={()=>this.getTodo('inprogress')}>In progress</button>
                            <button onClick={()=>this.getTodo('done')}>Done</button>
                        </div>
                    </div>
                    
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                <th>STATUS</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody >
                            { todos.map(todo=>(
                                <>
                            <tr ><td><span className="material-icons deleteSpan" onClick={()=>this.onSupprime(todo)} >
                                delete
                            </span> </td></tr>
                                <TodoTr key={todo.id} 
                                id={todo.id} title={todo.title} description={todo.description} status={todo.status} 
                                onClick={()=>this.onUpdate(todo.id)}
                               />
                            </>
                            ))}
                             
                        </tbody>
                    </table>
                    
                </div>
                
                <div className="footer">
                    <button className="btn btn-primary float-right" onClick={this.addPopup}>add</button>
                </div>
                {(this.state.popup) ? <AddTodo onSubmit={this.addTodo}/> : "" } 
                {this.state.popupdate ? <div >{this.state.f}</div> : ""}
                
            </div>
        </div>
    }
}