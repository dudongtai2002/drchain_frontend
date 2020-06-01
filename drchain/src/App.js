import React from 'react';
import { render } from '@testing-library/react';

export default class App extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
}
