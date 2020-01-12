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
            <object type="image/svg+xml" data="icons/code.svg" className="logo">Coding logo</object>
                    </h3>
                    <div className="inline ultrabold"></div>
                    <h3 className="inline menu-item" onClick={() => props.onClick("contact")}>
                        Info
            <object type="image/svg+xml" data="icons/mail.svg" className="logo">Mail logo</object>
                    </h3>
                    <div className="inline ultrabold"></div>
                    <h3 className="inline menu-item" onClick={() => props.onClick("social")}>
                        Social
            <object type="image/svg+xml" data="icons/group.svg" className="logo">Group logo</object>
                    </h3>
                </div>
                <div className="column col-2 col-xs-1"></div>
            </div>
        </nav>
    )
}
