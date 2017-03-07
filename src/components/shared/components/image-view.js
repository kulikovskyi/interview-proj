import React, {Component, PropTypes} from 'react';

import TooltipsView                  from './tooltips-view';
import PointerView                   from './pointer-view';

class ImageView extends Component {

    render() {
        const {editTooltip, tooltips, isExpandTooltips, url} = this.props;
        let {x, y} = this.props.newTooltipPosition;
        let resultTooltips = tooltips;

        if (editTooltip) {
            resultTooltips = tooltips.filter(t => t.id !== editTooltip.id)
            x = editTooltip.position.x;
            y = editTooltip.position.y;
        }

        return (
            <div className="image-view row">
                <div className="col-xs-12">
                    <div className="image-wrapper">
                        <img src={url}
                             onClick={this.handleClickImage}
                        />
                        <TooltipsView tooltips={resultTooltips} isExpandTooltips={isExpandTooltips}/>
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
        const positionX = e.nativeEvent.pageX - e.target.x;
        const positionY = e.nativeEvent.pageY - e.target.y;
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
    editTooltip: PropTypes.object,
    newTooltipPosition: PropTypes.object,
    isExpandTooltips: PropTypes.bool,
    url: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

ImageView.defaultProps = {
    tooltips: [],
    isExpandTooltips: false,
    newTooltipPosition: {x: null, y: null}
};

export default ImageView;
