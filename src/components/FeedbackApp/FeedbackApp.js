import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackApp.module.css';

function FeedbackApp({options, increment}) {
    return (
        <ul className={styles.feedback_list}>
            {Object.keys(options).map(key => (
                <li key={key} className={styles.feedback_list_item}>
                    <button className={styles.feedback_list_item_button} type="button" onClick={() => increment(key)}>
                        {key}</button>
                </li>
               ))}
        </ul>
    ) 
};

FeedbackApp.propTypes = {
    options: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired
};
    
export default FeedbackApp;