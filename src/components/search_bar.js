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
            <div className='search-bar'>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
