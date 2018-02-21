// Import React module from node_modlues
import React from 'react';
// React and ReactDOM have diverged, use ReactDOM to interact with the DOM,
// React is used to create and manage components
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
    // const = Constant, the value will never change
    // function() {} === () => {} "fat arrow" to define functions
const App = () => {
    // JSX - javascript dialect - looks like HTML but is really just javascript
    // Webpack and babel are going to transpose this to javascript
    return <div>Hi!</div>;

    // How it looks after it's translated into vanilla JS (babeljs.io/repl)
    // return React.createElement(
    //      "div",
    //      null,
    //      "Hi!"
    // );
}

// Take this components generated HTML and put it on the page (in the DOM)
    // We need to create an instance of the App in order to render to the DOM
    // The "HTML" looking syntax actually creates an instance of the class
    // The second argument is the target for the rendering
ReactDOM.render(<App />, document.querySelector('.container'));