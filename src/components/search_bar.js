import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        // Call parent constructor
        super(props);

        // Set the state of the component. Initialize the term property to '' to be updated on change
        // when the state changes, the component and any children re-render
        this.state = { term: '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
