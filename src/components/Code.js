/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Code.css';

export default class Code extends React.Component {
    state = {
        activeTab: null,
        tabs: [{ active: true, name: "c#" }, { name: "JavaScript" }, { name: "Jupyter Notebook" },
        { active: true, name: "c#" }, { name: "JavaScript" }, { name: "Jupyter Notebook" },
        { active: true, name: "c#" }, { name: "JavaScript" }, { name: "Jupyter Notebook" }]
    }

    renderTabs = () => {
        return this.state.tabs.map((tab) => {
            return (<li className={tab.active ? "tab-item active" : "tab-item"} key={tab.name}>
                <a href="#">{tab.name}</a>
            </li>);
        });
    }

    render() {
        return (<div className="page">
            <h1><b>&lt;</b> CODE  <b>/&gt;</b></h1>
            <ul className="tab tab-block">
                {this.renderTabs()}
            </ul>
        </div >
        );
    }
}
