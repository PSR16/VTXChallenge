import React from 'react';

function AbstractView ({abstract}) {
    return (
        <div>
            <h1>Abstract</h1>
            {abstract ? abstract : <div>No abstract available. Click on another Article ID to view an abstract.</div>}
        </div>
    )
}

export default AbstractView;