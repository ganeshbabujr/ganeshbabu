import React from 'react';
import PropTypes from 'prop-types';

function BodyCard({ header, skills, className }) {
    return (
        <div
            className={`frame ${className}`}
            style={{
                width: '100%',
                maxWidth: '300px',
                flex: '1 1 200px',
                margin: '0.5rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '10px',
                padding: '1rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
        >
            <div className="bodycard-content">
                <div className="f2 bodycard-header" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {header.toUpperCase()}
                </div>
                <ul style={{ paddingLeft: '1.2rem' }}>
                    {skills.map((sk, index) => (
                        <li key={index} style={{ marginBottom: '0.3rem' }}>• {sk}</li>
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
