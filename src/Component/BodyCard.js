import React from 'react';
import PropTypes from 'prop-types';

function BodyCard({ header, skills, className }) {
    return (
        <div
            className={`frame ${className}`}
            style={{ width: '30%', height: 'unset', flex: '1 1 200px' }}
        >
            <div className="bodycard-content">
                <div className="f2 bodycard-header">
                    {header.toUpperCase()}
                </div>
                <ul>
                    {skills.map((sk, index) => (
                        <li key={index}>• {sk}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

BodyCard.propTypes = {
    header: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string
};

BodyCard.defaultProps = {
    skills: [],
    className: ''
};

export default BodyCard;
