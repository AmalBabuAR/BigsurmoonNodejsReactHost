/**
 * @file TittleWrapper.js
 * @description TittleWrapper component.
 * 
 */

import React, { useEffect } from 'react';

export default function TittleWrapper({ title, children }) {
    useEffect(() => {
        let t = 'Bigsurmoon'
        if (title) {
            t = `${title} | ${t}`
        }
        document.title = t;
    }, [title]);

    return (
        <>
            {children}
        </>
    );
}