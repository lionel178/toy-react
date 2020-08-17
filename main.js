import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>my component</h1>
        {this.children}
      </div>
    );
  }
}

render(
  <MyComponent id='a' class='c'>
    <div id='children'>aaa</div>
    <div id='children2'>bbbb</div>
    <div id='children3'>ccc</div>
  </MyComponent>,
  document.body
);
