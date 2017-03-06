import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {Button}                      from 'react-bootstrap';

import * as cpActions                from '../../../actions/create-actions';

class AddTooltipContainer extends Component {

    render() {
        return (
            <div className="row add-tooltip-container">
                <div className="col-xs-9">
                    <input className="form-control"
                           type="text"
                           placeholder="Type tooltip text"
                           value={this.props.newTooltipText}
                           onChange={this.handleChangeText}
                    />
                </div>
                <div className="col-xs-3">
                    <Button className="pull-right" onClick={this.handleClickAdd}> Add tooltip </Button>
                </div>
            </div>
        );
    }

    handleChangeText = (e) => {
        this.props.SET_TOOLTIP_TEXT(e.target.value);
    };

    handleClickAdd = () => {
        this.props.ADD_TOOLTIP(this.props.newTooltipPosition, this.props.newTooltipText);
        this.props.SET_TOOLTIP_TEXT('');
        this.props.SET_TOOLTIP_POSITION({
            x: null,
            y: null
        });
    };
}

AddTooltipContainer.propTypes = {
    newTooltipText: PropTypes.string,
    newTooltipPosition: PropTypes.object,
    SET_TOOLTIP_TEXT: PropTypes.func.isRequired,
    SET_TOOLTIP_POSITION: PropTypes.func.isRequired,
    ADD_TOOLTIP: PropTypes.func.isRequired,
};

const mapStateToPros = state => ({
    newTooltipText: state.createPage.newTooltipText,
    newTooltipPosition: state.createPage.newTooltipPosition,
});

const mapDispatchToProps = dispatch => ({
    SET_TOOLTIP_TEXT: text => dispatch(cpActions.SET_TOOLTIP_TEXT(text)),
    SET_TOOLTIP_POSITION: position => dispatch(cpActions.SET_TOOLTIP_POSITION(position)),
    ADD_TOOLTIP: (position, text) => dispatch(cpActions.ADD_TOOLTIP(position, text)),
    CLEAR: () => dispatch(cpActions.CLEAR())
});

export default connect(mapStateToPros, mapDispatchToProps)(AddTooltipContainer);
