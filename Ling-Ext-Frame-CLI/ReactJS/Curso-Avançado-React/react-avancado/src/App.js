import React, { Component } from 'react'
import States from './components/States'

class App extends Component {     // Renderizando a aplicação através de classe extendida de Component do React.

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 2500)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render() {

    const posts = [{
      title: 'Potato',
      description: 'The Potato Master'
    }, {
      title: 'Ape',
      description: 'The Strong-Bonded Ape'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Clique p/ Remover o Componente</button>
        {this.state.actived && (
          <States posts={posts} />)}
      </div>
    )
  }
}

export default App


// import logo from './logo.svg';
// import './App.css';

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

// export default App;
