import React from 'react'
import PropTypes from "prop-types"

const TextDetail = ({label, detail, subDetail}) => (
    <div className="detail component">
        <span className="label">{label}</span>
        <span className="detail" >{detail}</span>
        <p className="sub-detail">{subDetail}</p>
    </div>
);

TextDetail.propTypes = {
    label:PropTypes.string.isRequired,
    detail:PropTypes.string.isRequired,
    subDetail:PropTypes.string
};

export default TextDetail;