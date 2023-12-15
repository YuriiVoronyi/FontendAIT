import React, { useState, useEffect } from 'react'
import Post from './Post';

interface IPost {
    title: string;
    body: string;
}

const Posts: React.FC = (): JSX.Element => {
    const [posts, setPosts] = useState<IPost[] | null>(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    })
  
    return (
        <ul>
            {posts &&
                posts.map(({ body, title }, index) => (
                    <Post key={index} body={body} title={title}/>
                ))   
            }
        </ul> 
    )
}

export default Posts