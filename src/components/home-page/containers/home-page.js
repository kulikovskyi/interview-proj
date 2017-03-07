import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {browserHistory}              from 'react-router';
import {ButtonGroup, Button}         from 'react-bootstrap';

import * as appActions               from '../../../actions/app-actions';

import CompositionsContainer         from './compositions-container';

import compositions                  from "../../../sources/compositions.json";

class HomePage extends Component {

    componentWillMount() {
        if (!this.props.compositions.length) this.props.SET_COMPOSITIONS(compositions);
    }

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
    compositions: PropTypes.array.isRequired,
    SET_COMPOSITIONS: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    compositions: state.app.compositions
});

const mapDispatchToProps = dispatch => ({
    SET_COMPOSITIONS: compositions => dispatch(appActions.SET_COMPOSITIONS(compositions)),
});

export default connect(mapStateToPros, mapDispatchToProps)(HomePage);
