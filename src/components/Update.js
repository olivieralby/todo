import React from 'react'
import shortid from 'shortid'
export default class Update extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            title:this.props.title,
            description:this.props.description,
            status:this.props.status
        }
    }

    

    handleSubmit=(e)=>{
        e.preventDefault();
         this.props.onClick();
        this.props.onSubmit({
             id:this.state.id,
              title:this.state.title,
             description:this.state.description,
             status:this.state.status
        })
        
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return <form className="popup"  onSubmit={()=>this.handleSubmit()}>
            <h5>Edit To do</h5>
            <div>
                <input type="text" name="title"  placeholder={this.props.title} onChange={this.handleChange} />
             </div>
            <div>
                <textarea name="description" placeholder={this.props.description} onChange={this.handleChange}></textarea>
             </div>
             <div className="radio mb-5">
                <input type="radio" value="todo" onChange={this.handleChange}  name="status" />To do
                <input type="radio" value="inprogress" onChange={this.handleChange}  name="status"   />In Progress
                <input type="radio" value="done" onChange={this.handleChange}  name="status"/>Done
             </div>

                    
            <input type="reset" className="btn btn-dark float-left" value="Cancel"/>
            <button className="btn btn-primary float-right" onClick={this.handleSubmit}>Editer</button>
        </form>
    }
}