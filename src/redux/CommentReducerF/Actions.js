import {FETCHING_COMMENT_FAILED, FETCHING_COMMENT_SUCCESS, FETCHING_COMMENT_START} from './ActionTypes'
import axios from 'axios'

export const fetchCOMMENTStart=()=>{
    return{
        type: FETCHING_COMMENT_START
    }
}
export const fetchCOMMENTSuccess=(comments)=>{
    return{
        type: FETCHING_COMMENT_SUCCESS,
        payLoad:comments
    }
}
export const fetchCOMMENTFailed=(error)=>{
    return{
        type: FETCHING_COMMENT_FAILED,
        payLoad:error
    }
}

export const FetchingCOMMENTData=(id)=>{
    return (dispatch)=>{
        dispatch(fetchCOMMENTStart())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(result =>{
            const comments= result.data
            dispatch(fetchCOMMENTSuccess(comments))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchCOMMENTFailed(errorMsg))
        })
    }
}