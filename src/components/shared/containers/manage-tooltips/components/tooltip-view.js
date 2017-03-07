import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

function TooltipView(props)  {
    return (
        <div key={props.id} className="row">
            <div className="col-xs-6 text">
                {props.text}
            </div>
            <div className="col-xs-6 button-wrapper">
                <Button className="pull-right"
                        onClick={props.onDeleteTooltip.bind(null, props.id)}>
                    Delete tooltip
                </Button>
                <Button className="pull-right"
                        onClick={props.onEditTooltip.bind(null, props.id)}>
                    Edit tooltip
                </Button>
            </div>
        </div>
    );
}

TooltipView.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onDeleteTooltip: PropTypes.func.isRequired,
    onEditTooltip: PropTypes.func.isRequired,
};

export default TooltipView;