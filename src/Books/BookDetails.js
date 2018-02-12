import React, { Component} from 'react';

export default class BookDetails extends Component{
   constructor (props){
     super(props);
   }

   selectedBook(){
     return(
       <div>
        <h1>{this.props.book.title} : { this.props.book.author}</h1>
        <p>Book available for reading!!</p>
       </div>
     )
   }
   render(){
     return(
     <div>
     {this.selectedBook()}
     </div>
   )}

}
