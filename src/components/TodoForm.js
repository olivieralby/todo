import React,{Component} from 'react';
export default class TodoForm extends Component{
     i = 0
    constructor(props){
        super(props)
        this.state={
            nom:"",
            description:""
        }
        
    }

    increment=()=>{
       return this.i+=1
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit({
            id:this.increment(),
            nom:this.state.nom,
            description:this.state.description,
            completed:false
        })
        this.setState({
            nom:""
        })
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        <input type="text" name="nom" placeholder="tâche à faire" value={this.state.nom} onChange={this.handleChange} /><br/>
        <textarea type="text" name="description" placeholder="tâche à faire" value={this.state.nom} onChange={this.handleChange} ></textarea><br/>
        <button onClick={this.handleSubmit}>ok</button>
    </form>
    }
}