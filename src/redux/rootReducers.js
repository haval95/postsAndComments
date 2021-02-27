import {combineReducers} from 'redux';
import PostReducer from "./postReducerF/PostReducer";
import CommentReducer from "./CommentReducerF/CommentReducer";

const rootReducer = combineReducers({
    posts:PostReducer,
    comments: CommentReducer
})

export default rootReducer;