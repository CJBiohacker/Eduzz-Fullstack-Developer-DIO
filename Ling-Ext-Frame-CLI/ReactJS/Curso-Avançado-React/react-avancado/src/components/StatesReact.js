import React, { Component } from 'react'

class States extends Component {

  state = {
    inform: 'title'
  }

  componentDidMount() {
    const { posts, loading } = this.props
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido.');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return this.state.inform !== nextState.inform
    // return true
    return this.state.inform !== nextState.inform || nextProps.loading !== this.props.loading
  }

  render() {
    const { posts } = this.props
    console.log('render', posts);
    return (
      <div>
        Teste em formato de classe extensa do React Component
      </div>
    )
  }
}

export default States