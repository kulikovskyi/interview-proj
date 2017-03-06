import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {browserHistory}              from 'react-router';
import {ButtonGroup, Button}         from 'react-bootstrap';

import * as appActions               from '../../../actions/app-actions';

import CompositionsContainer         from './compositions-container';

class HomePage extends Component {

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

HomePage.propTypes = {
    test: PropTypes.any,
    CLEAR: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    test: state.app.test
});

const mapDispatchToProps = dispatch => ({
    CLEAR: () => dispatch(appActions.CLEAR())
});

export default connect(mapStateToPros, mapDispatchToProps)(HomePage);
