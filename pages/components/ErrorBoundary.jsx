import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {hasError: false, error: null}

  static getDerivedStateFromError(error) {
    return {hasError: true, error}
  }


  render() {
    if (this.state.hasError) {
      return 'Ah crap.'
    }
    return this.props.children;
  }
}
