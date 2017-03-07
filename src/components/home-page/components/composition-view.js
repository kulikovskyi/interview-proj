import React, {PropTypes}      from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

function CompositionView(props) {
    return (
        <div className="row composition-view">
            <div className="col-xs-6">
                <img className="img-rounded" src={props.image}/>
            </div>
            <div className="col-xs-6">
                <ButtonToolbar className="pull-right">
                    <Button onClick={props.onClickPreview.bind(null, props.id)}>Preview</Button>
                    <Button onClick={props.onClickEdit.bind(null, props.id)}>Edit</Button>
                    <Button bsStyle="danger" onClick={props.onClickDelete.bind(null, props.id)}>Delete</Button>
                </ButtonToolbar>
            </div>
        </div>
    );
}

CompositionView.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClickPreview: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
};
CompositionView.defaultProps = {};

export default CompositionView;
