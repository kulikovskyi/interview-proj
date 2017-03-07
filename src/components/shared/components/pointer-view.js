import React, {PropTypes} from 'react';
import classNames from 'classnames';

function PointerView(props) {
    return (
        <span className={classNames("tooltip-point glyphicon glyphicon-map-marker", {active: props.isActive})}
              style={ {
                  position: 'absolute',
                  top: `${props.y}%`,
                  left: `${props.x}%`
              } }/>
    );
}

PointerView.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isActive: PropTypes.bool
};

PointerView.defaultProps = {
    isActive: false
};

export default PointerView;
