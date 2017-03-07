import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {Button}                      from 'react-bootstrap';

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
        this.props.dispatch(this.props.SET_TOOLTIP_TEXT(e.target.value));
    };

    handleClickAdd = () => {
        this.props.dispatch(this.props.ADD_TOOLTIP(this.props.newTooltipPosition, this.props.newTooltipText));
        this.props.dispatch(this.props.SET_TOOLTIP_TEXT(''));
        this.props.dispatch(this.props.SET_TOOLTIP_POSITION({
            x: null,
            y: null
        }));
    };
}

AddTooltipContainer.propTypes = {
    newTooltipText: PropTypes.string,
    newTooltipPosition: PropTypes.object,
    SET_TOOLTIP_TEXT: PropTypes.func.isRequired,
    SET_TOOLTIP_POSITION: PropTypes.func.isRequired,
    ADD_TOOLTIP: PropTypes.func.isRequired,
};

export default connect()(AddTooltipContainer);
