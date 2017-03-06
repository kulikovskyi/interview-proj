import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {Button}                      from 'react-bootstrap';

import * as cpActions from '../../../actions/create-actions';

class ManageTooltipContainer extends Component {

    render() {
        return (
            <div className="row manage-tooltip-container">
                <div className="col-xs-12">
                    {this.props.tooltips.map(tooltip => {
                        return (
                            <div key={tooltip.id} className="row">
                                <div className="col-xs-9">
                                    {tooltip.text}
                                </div>
                                <div className="col-xs-3 button-wrapper">
                                    <Button className="pull-right"
                                            onClick={this.handleDeleteTooltip.bind(null, tooltip.id)}> Delete tooltip </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    handleDeleteTooltip = (id) => {
        this.props.DELETE_TOOLTIP(id);
    }
}

ManageTooltipContainer.propTypes = {
    tooltips: PropTypes.array,
    DELETE_TOOLTIP: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    tooltips: state.createPage.tooltips
});

const mapDispatchToProps = dispatch => ({
    DELETE_TOOLTIP: id => dispatch(cpActions.DELETE_TOOLTIP(id))
});

export default connect(mapStateToPros, mapDispatchToProps)(ManageTooltipContainer);
