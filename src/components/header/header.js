import React from 'react';

import "./header.css";

export default class Header extends React.Component {

    state = {
        description: ""
    }

    onLabelChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.description)
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo"
                           placeholder="What needs to be done?"
                           onChange={this.onLabelChange}
                           autoFocus />
                </form>

            </header>

        );
    }


};

