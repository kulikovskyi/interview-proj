import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {browserHistory}              from 'react-router';

import * as appActions               from '../../../actions/app-actions';

import CompositionView               from '../components/composition-view';

class CompositionsContainer extends Component {

    render() {
        return (
            <div className="row compositions-container">
                <div className="col-xs-12 col-md-6 col-md-offset-3">
                    {this.props.compositions.map(composition => {
                        return (
                            <CompositionView key={composition.id}
                                             id={composition.id}
                                             image={composition.image}
                                             onClickPreview={this.handleClickPreview}
                                             onClickEdit={this.handleClickEdit}
                                             onClickDelete={this.handleClickDelete}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    handleClickPreview = (id) => {
        browserHistory.push(`/preview/${id}`);
    };

    handleClickEdit = (id) => {
        browserHistory.push(`/edit/${id}`);
    };

    handleClickDelete = (id) => {
        this.props.DELETE_COMPOSITION(id);
    };
}

CompositionsContainer.propTypes = {
    compositions: PropTypes.any,
    DELETE_COMPOSITION: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    compositions: state.app.compositions
});

const mapDispatchToProps = dispatch => ({
    DELETE_COMPOSITION: id => dispatch(appActions.DELETE_COMPOSITION(id))
});

export default connect(mapStateToPros, mapDispatchToProps)(CompositionsContainer);
