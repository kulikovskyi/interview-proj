import React, { Component, PropTypes } from 'react';

class FileChooser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chooser: null
        }
    }

    render() {
        return (
            <input type="file"
                   accept={this.props.acceptedFormats}
                   id={this.props.elementId}
                   hidden={this.props.isHidden}
                   ref={chooser => this.state.chooser = chooser}
                   onChange={this.handleChangeFile}
            />
        );
    }

    handleChangeFile = () => {
        var file = this.state.chooser.files[0];
        var reader = new FileReader();

        if (file && file.type.startsWith('image')) {
            reader.addEventListener("load", () => {
                if (file.type.startsWith('image')) {
                    this.props.onChooseImage(reader.result);
                }
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        }
    }
}

FileChooser.propTypes = {
    isHidden: PropTypes.bool,
    onChooseImage: PropTypes.func,
    acceptedFormats: PropTypes.string,
    elementId: PropTypes.string
};

FileChooser.defaultProps = {
    isHidden: false,
    acceptedFormats: "image/*",
    elementId: "upload-file"
};

export default FileChooser;