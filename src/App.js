import React, { Component } from 'react';
import './App.css';

import { CardContainer } from './components/cardContainer/cardContainer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: '',
    };
  }

  onChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }))
      .catch('error fetching');
  }

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        {console.log(this.state.searchField)}
        <input
          type='search'
          placeholder='Search Users'
          onChange={this.onChange}
        />
        <CardContainer users={filteredUsers} />
      </div>
    );
  }
}

// FUNCTIONAL COMPONENTS VERSION

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
