import React, {Component, PropTypes} from 'react';

import TooltipsView from './tooltips-view';
import PointerView from './pointer-view';

class ImageView extends Component {

    render() {
        const {x, y} = this.props.newTooltipPosition;

        return (
            <div className="image-view row">
                <div className="col-xs-12">
                    <div className="image-wrapper">
                        <img src={this.props.url}
                             onClick={this.handleClickImage}
                        />
                        <TooltipsView tooltips={this.props.tooltips} isExpandTooltips={this.props.isExpandTooltips}/>
                        { x && y ?
                            <PointerView x={x}
                                         y={y}
                                         isActive={true}
                            /> : null
                        }
                    </div>
                </div>
            </div>
        );
    }

    handleClickImage = (e) => {
        const positionX = e.nativeEvent.clientX - e.target.x;
        const positionY = e.nativeEvent.clientY - e.target.y;
        const positionPercentX = (positionX * 100) / e.target.width;
        const positionPercentY = (positionY * 100) / e.target.height;

        this.props.onClick({
            x: positionPercentX,
            y: positionPercentY,
        });
    }
}

ImageView.propTypes = {
    tooltips: PropTypes.array,
    newTooltipPosition: PropTypes.object,
    isExpandTooltips: PropTypes.bool,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

ImageView.defaultProps = {
    tooltips: [],
    isExpandTooltips: false,
};

export default ImageView;
