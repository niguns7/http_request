import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    //seting the state which we have manipulated after fetching to the api
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        //getting data from our backend
        .then(Response => {
            const posts = Response.data.slice(0, 4);
            const updatedPosts = posts.map(posts => {
                return {
                    ...posts,
                    author: 'Max'
                //updating the post and setting aurthor name max coz we dont have it on backend
                }
            })
            //rendering to the scereen by updating the state
            this.setState({posts: updatedPosts});
            //console.log(Response)
        });
    }
    render () {

        const posts = this.state.posts.map(post => {
            return <Post 
            key={post.id }
            title={post.title}
            author={post.author}/> 
            //passing the title to the title and we have diffrent unique key on our api..
            
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;