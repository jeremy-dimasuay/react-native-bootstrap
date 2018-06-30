import React from 'react';
import PropTypes from 'prop-types';
import VectorIcon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

const Icon = ({ name, color }) => (
    <VectorIcon
        name={name}
        size={20}
        color={color}
    />
);

Icon.propTypes = propTypes;
export default Icon;
