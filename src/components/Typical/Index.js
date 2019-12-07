import React, { useRef, useEffect, memo } from "react";
import { type, type as loopedType } from "@camwiegert/typical";

import styles from './style.css'

/**
 * This component is a wrapper for {@link https://github.com/camwiegert/typical}
 * 
 * @param {steps} the concent your are passing to this
 * @param {loop} the number of time the animation work
 * @param {wrapper} the html balise to create
 * 
 * Example : <Typical
        steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
   />
 */
const Typical = ({ steps, loop, wrapper = "p" }) => {
  const typicalRef = useRef(null);
  const Component = wrapper;
  const classNames = [styles.typicalWrapper];

  useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current, ...steps, loopedType);
    } else if (typeof loop === "number") {
      type(
        typicalRef.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(typicalRef.current, ...steps);
    }
  });

  return <Component ref={typicalRef} className={classNames.join(' ')}/>;
}

export default memo(Typical)
