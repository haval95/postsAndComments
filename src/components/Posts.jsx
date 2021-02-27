import React, {useEffect} from 'react';


import {useSelector} from 'react-redux' ;

import Post from './Post';


export default function Posts() {
    const posts = useSelector(state => state.posts);
    console.log(posts)
    return (
        <div>
            {posts.loading === false
                ?
                    posts.posts.map(postO=>{
                    return <Post id={postO.id} title={postO.title} body={postO.body} key={postO.id} />
                    })
                :<h1>Loading...</h1>

            }
        </div>
    )
}
