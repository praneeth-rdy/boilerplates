import React, { useEffect } from 'react';
import Styles from './styles.module.css';
import logger from '../../utils/logger';

function HelloWorld() {
  useEffect(() => {
    logger.log("Hello World component is called!")
  }, [])
  
  return (
    <div className={Styles.base}>
        Hello World
    </div>
  )
}

export default HelloWorld;