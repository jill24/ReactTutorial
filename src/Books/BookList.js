import React, { Component} from 'react';
import BookDetails from './BookDetails';

const bookList = [
  {title:'MoneyChangers', author: 'Arthur Hailey'},
  {title:'Rogue', author: 'Danielle Steele'}
];

export default class BookList extends Component{

  constructor (props){
    super(props);
    this.state = {title: '', author: ''};
  }

  renderList() {
    return bookList.map((book) => {
    return(
      <li key={book.title} onClick={() => this.setState(book)}>
        {book.title}
      </li>
      );
    });
  }
  render() {
    return(
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <BookDetails book = {this.state}/>
      </div>
    );
  }
}
