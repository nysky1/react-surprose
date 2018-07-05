import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayType: 'button'
        }
    }

    setDisplayType() {
        this.setState({
            displayType: 'image'
        });
    }
    render() {
        // Show the button to start with
        if (this.state.displayType === 'button') {
        return <SurpriseButton onClick={e => this.setDisplayType()} />;
        }
        else {
            return (<SurpriseImage />)
        }
    }
}
