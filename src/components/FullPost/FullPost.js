import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state ={
        lodedPost: null
    }
    componentDidUpdate () {
        if (this.props.id) {
            axios.get ("https://jsonplaceholder.typicode.com/posts/1" + this.props.id)          
        
        .then(Response => {
            //console.log(Response);
            this.setState ({lodedpost : Response.data});
        });
    }
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading....!</p>;
        }
        if (this.state.lodedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.lodedPost.title}</h1>
                    <p>{this.state.lodedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
    
            );

        };

        return post;
    }
}

export default FullPost;