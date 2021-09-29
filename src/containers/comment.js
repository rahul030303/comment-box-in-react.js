
import React, { Component } from 'react';


class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currComment: "hello",
            comment: [],
            addReply: false
        }
    }

    
    handleChange = (e) =>{
        console.log(e);
        this.setState({
            CurrComment:e.target.value
        })
    }


    handleSubmit = () =>{
        const comments = this.state.comment;
        comments.push(this.state.currComment);
        this.setState({
            comment:comments
        })
    }

    replyTo = () =>{
        this.setState({
            addReply:true
        })
    }

    render(){
        return(
            <>
                <form onSubmit = {this.handleSubmit} className = "comment-box">
                    <input type = "text" defaultValue = {this.state.currComment} value = {this.state.currComment} onChange = {()=>this.handleChange()} className = "inputCmt" name = "commentInput" placeholder = "Add a comment"  /> 
                    <br/> <br />
                    <button type = "submit">Add</button>
                </form>

                <ul>

                {this.state.comment ?
                    
                this.state.comment.map((commentData,index) => {
                    return(
                        <div key = {index}>
                            <li id = {index}>{commentData}</li>
                            <button onClick = {this.replyTo}>Reply</button>

                            {
                                this.state.addReply ?
                                <form onSubmit = {this.handleSubmit} className = "comment-box">
                    <input type = "text" onChange = {()=>this.handleChange()} className = "inputCmt" name = "commentInput" placeholder = "Add a comment" value = {this.state.currComment} /> 
                    <button type = "submit">Add</button>
                </form>
                                : null
                            }
                        
                        
                            </div>
                       
                    )
                } )    
                    
                    : null
                
                }
                   
                    
                </ul>
            
            </>
        )
    }
}

export default Comment;


