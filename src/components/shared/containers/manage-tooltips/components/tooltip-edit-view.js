import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

function TooltipEditView(props)  {
    return (
        <div key={props.id} className="row tooltip-edit-view">
            <div className="col-xs-6 text">
                <input className="form-control"
                       value={props.text}
                       onChange={props.onChangeTooltipText}
                />
            </div>
            <div className="col-xs-6 button-wrapper">
                <Button className="pull-right"
                        onClick={props.onDeleteTooltip.bind(null, props.id)}>
                    Delete tooltip
                </Button>
                <Button className="pull-right"
                        onClick={props.onSaveTooltip}>
                    Save tooltip
                </Button>
            </div>
        </div>
    );
}

TooltipEditView.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onChangeTooltipText: PropTypes.func.isRequired,
    onDeleteTooltip: PropTypes.func.isRequired,
    onSaveTooltip: PropTypes.func.isRequired,
};

export default TooltipEditView;