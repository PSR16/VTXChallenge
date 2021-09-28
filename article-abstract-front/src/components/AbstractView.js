import React from 'react';

function AbstractView ({abstract}) {

    return (
        <div>
            <h1>Abstract</h1>
            {abstract ? abstract : <div>No abstract available</div>}
        </div>
    )
}

export default AbstractView;