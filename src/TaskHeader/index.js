import React from "react";

function TaskHeader ({ children, loading }) {
    return (
        <header>
            {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))
            }
        </header>
    )
}

export { TaskHeader }