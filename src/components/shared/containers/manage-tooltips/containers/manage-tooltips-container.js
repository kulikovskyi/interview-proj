import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';

import TooltipView from '../components/tooltip-view';
import TooltipEditView from '../components/tooltip-edit-view';

class ManageTooltipContainer extends Component {

    render() {
        const {editTooltip, tooltips} = this.props;

        return (
            <div className="row manage-tooltip-container">
                <div className="col-xs-12">
                    {tooltips.map(tooltip => {
                        if (editTooltip && editTooltip.id === tooltip.id) {
                            return <TooltipEditView
                                key={editTooltip.id}
                                id={editTooltip.id}
                                text={editTooltip.text}
                                onDeleteTooltip={this.handleDeleteTooltip}
                                onSaveTooltip={this.handleSaveTooltip}
                                onChangeTooltipText={this.handleChangeTooltipText}
                            />
                        } else {
                            return <TooltipView
                                key={tooltip.id}
                                id={tooltip.id}
                                text={tooltip.text}
                                onDeleteTooltip={this.handleDeleteTooltip}
                                onEditTooltip={this.handleEditTooltip}
                            />
                        }
                    })}
                </div>
            </div>
        );
    }

    handleEditTooltip = (id) => {
        this.props.dispatch(this.props.EDIT_TOOLTIP(id));
    };

    handleDeleteTooltip = (id) => {
        this.props.dispatch(this.props.DELETE_TOOLTIP(id));
    };

    handleSaveTooltip = () => {
        this.props.dispatch(this.props.SAVE_TOOLTIP());
    };

    handleChangeTooltipText = (e) => {
        this.props.dispatch(this.props.SET_TOOLTIP_TEXT(e.target.value));
    };
}

ManageTooltipContainer.propTypes = {
    tooltips: PropTypes.array,
    editTooltip: PropTypes.object,
    DELETE_TOOLTIP: PropTypes.func.isRequired,
    EDIT_TOOLTIP: PropTypes.func.isRequired,
    SAVE_TOOLTIP: PropTypes.func.isRequired,
    SET_TOOLTIP_TEXT: PropTypes.func.isRequired
};

export default connect()(ManageTooltipContainer);
