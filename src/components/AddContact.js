import React from "react";
//class component

class AddContact extends React.Component{
    state={
        name:"",
        contact:"",
    };
    add =(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.contact===""){
            alert("All fields empty");
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",contact:""});
    
    };
    render()
    {
        return (
            <div className="ui main">
                <h2>AddContact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                       
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                        </div>

                        <div className="field">
                        <label>Contact</label>
                        
                        <input type="text" name="contact" placeholder="Contact" value={this.state.contact} onChange={(e)=>this.setState({contact:e.target.value})}/>
                        </div>

                        <button className="ui button pink">Add</button>   
                </form>
            </div>
        );
    }

}
export default AddContact;