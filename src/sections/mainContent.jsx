import React, { Component } from 'react';

class MainContent extends React.Component {
    render () {
        return (
            <div id="mainContent" className={!this.props.visible ? 'display-none' : 'full-screen'}>
                &nbsp;
            </div>
        )
    }
}

export default MainContent;