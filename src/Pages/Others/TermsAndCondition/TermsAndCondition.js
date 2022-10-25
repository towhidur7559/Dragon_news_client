import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>TermsAndCondition</h1>
            <p>Go Back to Registration: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;