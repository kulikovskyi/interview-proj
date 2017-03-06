import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {ButtonGroup, Button}                      from 'react-bootstrap';
import {browserHistory}              from 'react-router';

import * as cpActions                from '../../../actions/create-actions';
import * as appActions               from '../../../actions/app-actions';

import ManageTooltipContainer        from './manage-tooltips-container';
import ImageChooserContainer         from './image-chooser-container';
import AddTooltipContainer           from './add-tooltip-container';
import ImageView                     from '../components/image-view';

class CreatePage extends Component {

    componentWillUnmount() {
        this.props.CLEAR();
    }

    render() {
        const {image, tooltips, newTooltipPosition} = this.props;

        return (
            <div className="create-page container">
                { !image ? <ImageChooserContainer /> : null }
                { image ? <ImageView
                    url={image}
                    onClick={this.handleClickImage}
                    tooltips={tooltips}
                    newTooltipPosition={newTooltipPosition}
                    isExpandTooltips={true}
                /> : null
                }
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <AddTooltipContainer />
                        <ManageTooltipContainer />
                        <ButtonGroup className="save-wrapper" vertical block>
                            <Button onClick={this.handleClickSave} bsStyle="primary"> Save </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }

    handleClickImage = (position) => {
        this.props.SET_TOOLTIP_POSITION(position);
    };

    handleClickSave = () => {
        this.props.ADD_COMPOSITION(this.props.image, this.props.tooltips);
        browserHistory.push("/home");
    };
}

CreatePage.propTypes = {
    image: PropTypes.string,
    tooltips: PropTypes.array,
    newTooltipPosition: PropTypes.object,
    ADD_COMPOSITION: PropTypes.func.isRequired,
    SET_TOOLTIP_POSITION: PropTypes.func.isRequired,
    CLEAR: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    image: state.createPage.image,
    tooltips: state.createPage.tooltips,
    newTooltipPosition: state.createPage.newTooltipPosition,
});

const mapDispatchToProps = dispatch => ({
    ADD_COMPOSITION: (image, tooltips) => dispatch(appActions.ADD_COMPOSITION(image, tooltips)),
    SET_TOOLTIP_POSITION: position => dispatch(cpActions.SET_TOOLTIP_POSITION(position)),
    CLEAR: () => dispatch(cpActions.CLEAR())
});

export default connect(mapStateToPros, mapDispatchToProps)(CreatePage);
