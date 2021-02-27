import {FETCHING_POST_FAILED, FETCHING_POST_SUCCESS, FETCHING_POST_START} from './ActionTypes'

const initailState={
    loading:false,
    posts: [{id:1}],
    error:""

}



export default function PostReducer(state=initailState, action) {
        switch(action.type){
            case (FETCHING_POST_START):
                return ({
                    ...state,
                    loading:false
                })
            case (FETCHING_POST_SUCCESS):
                return({
                    loading:false,
                    posts: action.payLoad,
                    error:""
                })
            case (FETCHING_POST_FAILED):
                return({
                    loading:false,
                    posts:[],
                    error:action.payLoad 
                })

            default:
            return state
        }
}
