import React, {PropTypes, Component} from 'react';
import {browserHistory}              from 'react-router';
import {ButtonGroup, Button}         from 'react-bootstrap';

import CompositionsContainer         from './compositions-container';

export default class HomePage extends Component {

    render() {
        return (
            <div className="container home-page">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3 create-container">
                        <ButtonGroup vertical block>
                            <Button onClick={this.handleClickCreate}>
                                Create
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
                <CompositionsContainer />
            </div>
        );
    }

    handleClickCreate = (e) => {
        e.preventDefault();
        browserHistory.push("/create");
    }
}