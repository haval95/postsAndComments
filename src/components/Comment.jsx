import React, {useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import {useDispatch} from 'react-redux' ;
import {FetchingCOMMENTData} from '../redux/CommentReducerF/Actions'
import { useSelector } from "react-redux";
export default function Comment() {
    let {id} = useParams();
    const dispatch = useDispatch()
      
    useEffect(() => {
        if(id){
            dispatch(FetchingCOMMENTData(id))
        }
      
    }, [id])

    const comments = useSelector(state => state.comments)
    console.log(comments)
    return (
        <div>
        <div>comments in console</div>
        <div> </div>
        <div></div>
          
            
            
        </div>
    )
}
