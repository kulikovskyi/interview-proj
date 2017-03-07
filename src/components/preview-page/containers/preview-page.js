import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';
import {browserHistory}              from 'react-router';
import {ButtonGroup, Button}         from 'react-bootstrap';

import ImageView from '../../shared/components/image-view';

class PreviewPage extends Component {

    render() {
        const compositionId = this.props.routeParams.id;
        const composition = _.find(this.props.compositions, {id: compositionId});
        const image = composition ? composition.image : "";
        const tooltips = composition ? composition.tooltips : [];

        return (
            <div className="container preview-page">
                <div className="row">
                    <div className="col-xs-12 col-md-6 col-md-offset-3">
                        <ImageView
                            url={image}
                            tooltips={tooltips}
                        />
                        <ButtonGroup vertical block>
                            <Button onClick={this.handleClickBack}>
                                Back
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }

    handleClickBack = (e) => {
        e.preventDefault();
        browserHistory.goBack();
    }
}

PreviewPage.propTypes = {
    compositions: PropTypes.array.isRequired
};

const mapStateToPros = state => ({
    compositions: state.app.compositions
});

export default connect(mapStateToPros)(PreviewPage);
