import React from 'react'

const Settings = () => {
    return(
        <div className="display__settings">
            <p className="task__amount"> <span className="task__amount__data"></span> items left</p>
            <div className="display__modes">
                <button className="mode__all">All</button>
                <button className="mode__active">Active</button>
                <button className="mode__completed">Completed</button>
            </div>
            <button className="clear__completed">Clear complited</button>
        </div>
    )
}

export default Settings