import React, { Component} from 'react';
import BookList from './BookList';


class Home extends Component{

  render(){
    return(
      <div className = "Home">
        <h1>List of Books </h1>
        <BookList/>
      </div>
    );
  }
}

export default Home;
