import React from 'react';
import './HorizontalLine.css';

export default function HorizontalLine() {
    return (
        <div className="container">
            <div className="columns">
                <div className="column col-2 col-xs-1"></div>
                <div className="column col-8 col-xs-10">
                    <div className="horizontal-line"></div>
                </div>
                <div className="column col-2 col-xs-1"></div>
            </div>
        </div>
    )
}
