import React from 'react';
import './Header.css';

export default function Header(props) {
    let baseClasses = "inline menu-item";
    let hoverClass = "hover";
    const classes = {
        'home': `${baseClasses} ${props.currentPage === 'home' ? hoverClass : ''}`,
        'code': `${baseClasses} ${props.currentPage === 'code' ? hoverClass : ''}`,
        'contact': `${baseClasses} ${props.currentPage === 'contact' ? hoverClass : ''}`,
    }

    return (
        <nav className="container">
            <div className="columns header">
                <div className="column col-2 col-xs-1"></div>
                <div className="column col-8 col-xs-10">
                    <div className="animated_logo inline" onClick={() => props.onClick("home")}>
                        <h3 className={classes['home']}>
                            Home
                        </h3>
                        <img src="icons/home.svg" alt="Home logo" />
                    </div>

                    <div className="inline ultrabold"></div>

                    <div className="animated_logo inline" onClick={() => props.onClick("code")}>
                        <h3 className={classes['code']}>
                            Code
                        </h3>
                        <img src="icons/code.svg" alt="Coding logo" />
                    </div>

                    <div className="inline ultrabold"></div>

                    <div className="animated_logo inline" onClick={() => props.onClick("contact")}>
                        <h3 className={classes['contact']}>
                            Info
                        </h3>
                        <img src="icons/mail.svg" alt="Mail logo" />
                    </div>
                </div>
                <div className="column col-2 col-xs-1"></div>
            </div>
        </nav>
    )
}
