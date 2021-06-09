import React from 'react'
import Notification from "../Notification";
import PropTypes from 'prop-types';

function Statistics({options,total,positivePercentage}) {
    return (
        <>
        <h2>Statistics</h2>
            {total >= 1
                ? <>
                    <ul>
                       {Object.entries(options).map(entry => (
                          <li key={entry[0]}>{entry[0]}: {entry[1] }</li>
                        ))}
                    </ul>
                    <p>Total:{total}</p>
                    <p>Positive Feedback: {positivePercentage} %</p>
                  </>
                : <Notification message="No feedback given"/>
            }
        </>
    )
};

Statistics.propTypes = {
    options: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;