import React from 'react';
import shortid from 'shortid'

export default class AddTodo extends React.Component{

    constructor(props,i){
        super(props)
        this.state={
            id:"",
            title:"",
            description:"",
            status:"",

        }
    }
    

    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.onSubmit({
            id:shortid.generate(),
            title:this.state.title,
            description:this.state.description,
            status:this.state.status
        })
        this.setState({
            title:"",
            description:"",
            status:""
        })
    }
    render(){
        return <form className="popup"  onSubmit={this.handleSubmit}>
            <h5>To do</h5>
            <div>
                <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
             </div>
            <div>
                <textarea name="description" placeholder="description" value={this.state.description} onChange={this.handleChange}></textarea>
             </div>
             <div className="radio mb-5">
                <input type="radio" value="todo" onChange={this.handleChange}  name="status"/>To do
                    {/* <label>To do</label> */}
                <input type="radio" value="inprogress" onChange={this.handleChange}  name="status"   />In Progress
                    {/* <label className="form-check-label">In Progress</label> */}
                <input type="radio" value="done" onChange={this.handleChange}  name="status"/>Done
                    {/* <label className="form-check-label">In Progress</label> */}
             </div>

                    
                <input type="reset" className="btn btn-dark float-left" value="Cancel"/>
            <button className="btn btn-primary float-right" onClick={this.handleSubmit}>Add</button>
        </form>
    }
}