import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <nav className="container">
            <div className="columns header">
                <div className="column col-2 col-xs-1"></div>
                <div className="column col-8 col-xs-10">
                    <h3 className="inline menu-item" onClick={() => props.onClick("code")}>
                        Code
                        <img src="icons/code.svg" alt="Coding logo" />
                    </h3>
                    <div className="inline ultrabold"></div>
                    <h3 className="inline menu-item" onClick={() => props.onClick("contact")}>
                        Info
                        <img src="icons/mail.svg" alt="Mail logo" />
                    </h3>
                    <div className="inline ultrabold"></div>
                    <h3 className="inline menu-item" onClick={() => props.onClick("social")}>
                        Social
                        <img src="icons/group.svg" alt="Group logo" />
                    </h3>
                </div>
                <div className="column col-2 col-xs-1"></div>
            </div>
        </nav>
    )
}
