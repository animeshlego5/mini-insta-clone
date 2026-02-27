import React, { useState, useEffect } from 'react'
import axios from 'axios' //axios is a library that provides http client functionality to the app

const Feed = () => {

    const [posts, setPosts] = useState([]); //useState is a hook that provides state management functionality to the app

    useEffect(() => { //useEffect is a hook that provides side effect management functionality to the app
        const fetchPosts = async () => {
            const response = await axios.get("http://localhost:3000/posts");
            setPosts(response.data.posts);
        }
        fetchPosts();
    }, []);

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <img src={post.image} alt="post" />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts found</p>
                )
            }
        </section>
    )
}

export default Feed