import React, { Component } from 'react';
import '../NewsItem.css';

class NewsItem extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1 className="title">Hello React</h1>
                <p>
                    Aliqua proident est ex ex duis irure sint aliqua fugiat.
                </p>
            </div>
        );
    }
}

export default NewsItem;