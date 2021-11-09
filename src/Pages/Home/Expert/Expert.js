import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-12 col-sm-6">
            <img src={img} alt="" />
            <p>{name}</p>
            <p className="text-danger">{expertize}</p>
        </div>
    );
};

export default Expert;