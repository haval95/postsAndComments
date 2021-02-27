import {FETCHING_COMMENT_FAILED, FETCHING_COMMENT_SUCCESS, FETCHING_COMMENT_START} from './ActionTypes'

const initailState={
    loading:false,
    comments: [],
    error:""

}



export default function CommentReducer(state=initailState, action) {
        switch(action.type){
            case (FETCHING_COMMENT_START):
                return ({
                    ...state,
                    loading:true
                })
            case (FETCHING_COMMENT_SUCCESS):
                return({
                    loading:false,
                    comments: action.payLoad,
                    error:""
                })
            case (FETCHING_COMMENT_FAILED):
                return({
                    loading:false,
                    comments:[],
                    error:action.payLoad 
                })

            default:
            return state
        }
}
