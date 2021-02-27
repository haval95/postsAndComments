import {FETCHING_POST_FAILED, FETCHING_POST_SUCCESS, FETCHING_POST_START} from './ActionTypes'
import axios from 'axios'

export const fetchPostStart=()=>{
    return{
        type: FETCHING_POST_START
    }
}
export const fetchPostSuccess=(users)=>{
    return{
        type: FETCHING_POST_SUCCESS,
        payLoad:users
    }
}
export const fetchPostFailed=(error)=>{
    return{
        type: FETCHING_POST_FAILED,
        payLoad:error
    }
}

export const FetchingPostData=()=>{
    return (dispatch)=>{
     
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(result =>{
            const posts= result.data
            dispatch(fetchPostSuccess(posts))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchPostFailed(errorMsg))
        })
    }
}