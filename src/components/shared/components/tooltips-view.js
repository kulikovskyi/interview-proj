import React, {PropTypes} from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

function TooltipsView(props) {
    return (
        <div className="tooltips-view">
            {props.tooltips.map(tooltip => {

                const tooltipView = (
                    <Tooltip id="tooltip">
                        {tooltip.text}
                    </Tooltip>
                );

                return (
                    <OverlayTrigger defaultOverlayShown={props.isExpandTooltips} key={tooltip.id} placement="left"
                                    overlay={tooltipView}>
                        <span className="tooltip-point glyphicon glyphicon-map-marker"
                              style={ {
                                  position: 'absolute',
                                  top: `${tooltip.position.y}%`,
                                  left: `${tooltip.position.x}%`
                              } }/>
                    </OverlayTrigger>
                );
            })}
        </div>
    );
}

TooltipsView.propTypes = {
    isExpandTooltips: PropTypes.bool,
    tooltips: PropTypes.array
};

TooltipsView.defaultProps = {
    isExpandTooltips: false,
    tooltips: []
};

export default TooltipsView;
