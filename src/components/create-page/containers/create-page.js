import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {ButtonGroup, Button}                      from 'react-bootstrap';
import {browserHistory}              from 'react-router';

import * as cpActions                from '../../../actions/create-actions';
import * as appActions               from '../../../actions/app-actions';

import ManageTooltipContainer        from '../../shared/containers/manage-tooltips';
import ImageChooserContainer         from '../../shared/containers/image-chooser-container';
import AddTooltipContainer           from '../../shared/containers/add-tooltip-container';
import ImageView                     from '../../shared/components/image-view';

class CreatePage extends Component {

    componentWillUnmount() {
        this.props.CLEAR();
    }

    render() {
        const {image, tooltips, newTooltipText, newTooltipPosition, editTooltip} = this.props;

        return (
            <div className="create-page container">
                { !image ? <ImageChooserContainer
                    SET_IMAGE={cpActions.SET_IMAGE}
                /> : null }
                { image ? <ImageView
                    url={image}
                    onClick={this.handleClickImage}
                    tooltips={tooltips}
                    editTooltip={editTooltip}
                    newTooltipPosition={newTooltipPosition}
                    isExpandTooltips={true}
                /> : null
                }
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <AddTooltipContainer
                            newTooltipText={newTooltipText}
                            newTooltipPosition={newTooltipPosition}
                            ADD_TOOLTIP={cpActions.ADD_TOOLTIP}
                            SET_TOOLTIP_TEXT={cpActions.SET_TOOLTIP_TEXT}
                            SET_TOOLTIP_POSITION={cpActions.SET_TOOLTIP_POSITION}
                        />
                        <ManageTooltipContainer
                            tooltips={tooltips}
                            editTooltip={editTooltip}
                            DELETE_TOOLTIP={cpActions.DELETE_TOOLTIP}
                            EDIT_TOOLTIP={cpActions.SET_EDIT_TOOLTIP}
                            SET_TOOLTIP_TEXT={cpActions.SET_EDIT_TOOLTIP_TEXT}
                            SAVE_TOOLTIP={cpActions.SAVE_EDIT_TOOLTIP}
                        />
                        <ButtonGroup className="save-wrapper" vertical block>
                            <Button onClick={this.handleClickSave} bsStyle="primary"> Save </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }

    handleClickImage = (position) => {
        if (this.props.editTooltip) {
            this.props.SET_EDIT_TOOLTIP_POSITION(position);
        } else {
            this.props.SET_TOOLTIP_POSITION(position);
        }
    };

    handleClickSave = () => {
        this.props.ADD_COMPOSITION(this.props.image, this.props.tooltips);
        browserHistory.push("/home");
    };
}

CreatePage.propTypes = {
    image: PropTypes.string,
    tooltips: PropTypes.array,
    editTooltip: PropTypes.object,
    newTooltipText: PropTypes.string,
    newTooltipPosition: PropTypes.object,
    ADD_COMPOSITION: PropTypes.func.isRequired,
    SET_TOOLTIP_POSITION: PropTypes.func.isRequired,
    SET_EDIT_TOOLTIP_POSITION: PropTypes.func.isRequired,
    CLEAR: PropTypes.func.isRequired
};

const mapStateToPros = state => ({
    image: state.createPage.image,
    tooltips: state.createPage.tooltips,
    editTooltip: state.createPage.editTooltip,
    newTooltipText: state.createPage.newTooltipText,
    newTooltipPosition: state.createPage.newTooltipPosition
});

const mapDispatchToProps = dispatch => ({
    ADD_COMPOSITION: (image, tooltips) => dispatch(appActions.ADD_COMPOSITION(image, tooltips)),
    SET_TOOLTIP_POSITION: position => dispatch(cpActions.SET_TOOLTIP_POSITION(position)),
    SET_EDIT_TOOLTIP_POSITION: position => dispatch(cpActions.SET_EDIT_TOOLTIP_POSITION(position)),
    CLEAR: () => dispatch(cpActions.CLEAR())
});

export default connect(mapStateToPros, mapDispatchToProps)(CreatePage);
