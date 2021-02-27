
import './App.css';
import React, {useEffect} from 'react';
import Posts from './components/Posts'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Comment from './components/Comment';
import {FetchingPostData} from './redux/postReducerF/Actions'
import {useDispatch} from 'react-redux' ;
function App() {
  const dispatch = useDispatch()
 
  useEffect(() => {
     dispatch(FetchingPostData())
  },[])

  return (
    <div className="App">
    <Router basename="/posts">
   

   <Switch>
   <Route path="/" exact component={Posts}/>
   <Route path="/comment/:id" exact component={Comment}/>{" "}
   </Switch>
     
     

    
    </Router>
      
      
    </div>
  );
}

export default App;
