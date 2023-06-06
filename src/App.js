import React, { Component } from "react";
import './App.css';
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search-box";
// const React = require('react');
// const App = () => {
//    return <div>Hello, World!</div>;
// };
export default class App extends Component {
   constructor(){
      super();

      this.state = {
         robots: [],
         searchField: ""
      }
   }
   componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then( response => response.json())
         .then( data => this.setState( { robots: data} ));
   }
   onSearchChanged = event => {
      this.setState({searchField: event.target.value})
      // console.log(event.target.value);
   }
   render() {
      const {robots, searchField } = this.state;
      const filteredRobots = robots.filter(el => el.name.toLowerCase().includes(searchField.toLowerCase()));
      return (
         <div className="container">
            <h1>Муурнууд</h1>
            <SearchBox onSearch={this.onSearchChanged}/>
            <CardList robots={filteredRobots} /> 
         </div> 
      )
   }
}
// export default App;