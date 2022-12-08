import React from "react";
import './TaskIcon.css'

import{ ReactComponent as CheckSVG } from './check.svg' 
import{ ReactComponent as DeleteSVG } from './delete.svg' 

const iconTypes = {
    "check": color => (<CheckSVG className="Icon-svg Icon-svg--check" stroke={color} />),
    "delete": color => (<DeleteSVG className="Icon-svg Icon-svg--delete" stroke={color} />)
}

function TaskIcon ({type, color = 'gray', onClick}) {
    return (
        <span onClick={onClick} className={`Icon-container Icon-container--${type}`}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TaskIcon }