import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import React from 'react';
import {useDispatch} from 'react-redux' ;



export default function Post({id, title, body}) {
 

  
    const posts = useSelector(state => state.posts);

  
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <div>
           
            <Link to={`/comment/${id}`}><button>comments</button> </Link>
           
            
            </div>
        </div>
    )
}
