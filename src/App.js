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

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ users: users }));
  }

  render() {
    return (
      <div className='App'>
        <CardContainer />
        {this.state.users.map((user) => (
          <h1 key={user.id}>{user.name}</h1>
        ))}
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
