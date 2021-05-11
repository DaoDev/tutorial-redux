import React from 'react';
import PropTypes from 'prop-types';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: "text",
    label: '',
    placeholder: '',
    disabled: false
}

function InputField(props) {
    return (
        <div>
            InputF Field
        </div>
    );
}

export default InputField;