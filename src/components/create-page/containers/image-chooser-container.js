import React, {PropTypes, Component} from 'react';
import {connect}                     from 'react-redux';

import * as cpActions                from '../../../actions/create-actions';

import FileChooser                   from '../../shared/components/file-chooser';

class ImageChooserContainer extends Component {

    render() {
        return (
            <div className="row image-chooser-container">
                <div className="col-xs-12">
                    <label htmlFor="upload-file" className="item __upload">
                        Choose image
                        <FileChooser
                            isHidden={true}
                            onChooseImage={this.handleChooseImage}
                        />
                    </label>
                </div>
            </div>
        );
    }

    handleChooseImage = (image) => {
        this.props.SET_IMAGE(image);
    }
}

ImageChooserContainer.propTypes = {
    SET_IMAGE: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    SET_IMAGE: image => dispatch(cpActions.SET_IMAGE(image)),
});

export default connect(null, mapDispatchToProps)(ImageChooserContainer);
