import React, { Component } from 'react'

export default class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.items = [
            'A hotel',
            'Hotel o Bert',
            'Hotel Tester dot com',
            'Steve',
            'Bob',
            'testing',
        ];
        this.state = {
            suggestions: [],
            test: '',
        }
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
             suggestions =this.items.sort().filter(v => regex.test(v));
            
        }
        this.setState(() => ({suggestions, test: value }));
    }

    suggestionsSelected (value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionsSelected(item)}>{item}</li>)}
            </ul>
        )
    }
    render() {
        const { text } = this.state;
        return (
            <div>
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}
