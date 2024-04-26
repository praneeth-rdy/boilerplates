import React, { useEffect } from 'react';
import Styles from './style.module.css';
import logger from '../../utils/logger';

function HelloWorld() {
    useEffect(() => {
      logger.log("Hello World!");
    }, []);
    
    return (
        <div className={Styles.base}>
            Hello World
        </div>
    )
}

export default HelloWorld;