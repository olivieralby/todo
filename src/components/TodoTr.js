import React from  'react';


export default class TodoTr extends React.Component {

   constructor(props){
       super(props)
       this.state={
         popupdate:false

       }
   }
        onDelete(id){
            this.props.onClick({
                id:id,
                title:"",
                description:"",
                status:""
            })


        }
        onUpdate=()=>{
            this.props.onClick();
        }
        

        render(){ 
        return <tr id={this.props.id} onClick={this.onUpdate}>
            <td>{this.props.id} </td>
            <td >{this.props.title}</td>
            <td>{this.props.description} </td>
            <td>{this.props.status}</td>
            <td>
                <button onClick={()=>this.onDelete(this.props.id)}>
                    <span className="material-icons"  >
                    delete
                    </span>
                </button>
                
            </td>
        </tr>
        }
    
}