/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Code.css';

export default class Code extends React.Component {
    state = {
        activeTab: null,
        tabs: {}
    }

    componentDidMount = () => {
        const self = this;
        self._mounted = true;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/trintragula/repos');
        xhr.onload = function () {
            if (xhr.status === 200 && self._mounted) {
                const json = JSON.parse(xhr.responseText);
                const repos = self.getRepos(json);
                console.log(repos);
                self.setState({ tabs: repos, activeTab: "JavaScript" });
            }
            else {
                console.log('Request failed with status code ' + xhr.status);
            }
        };
        xhr.send();
    }

    componentWillUnmount = () => {
        this._mounted = false;
    }

    getRepos = (json) => {
        var groupedByLanguage = json.reduce(function (repoDict, repo) {
            if (!repo) return repoDict;
            if (repo.language === "Jupyter Notebook") repo.language = "Jupyter";
            if (repo.language.length > 15) repo.language = repo.language.substring(0, 12) + "...";
            if (!repo.fork) {
                if (!repoDict[repo.language]) repoDict[repo.language] = [];
                repoDict[repo.language].push({
                    id: repo.id,
                    name: repo.name,
                    url: repo.html_url,
                    description: repo.description,
                    created: repo.created_at,
                    pushed: repo.pushed_at,
                    stars: repo.stargazers_count,
                    watches: repo.watchers_count,
                    license: repo.license ? repo.license.spdx_id : null,
                    forks: repo.forks_count
                });
            }
            return repoDict;
        }, {});
        return groupedByLanguage;
    }

    renderCode = () => {
        if (this.state.tabs && Object.keys(this.state.tabs).length > 0) {
            return (
                <React.Fragment>
                    <ul className="tab tab-block">
                        {this.renderTabs()}
                    </ul>
                    <div>
                        {this.renderRepos()}
                    </div>
                </React.Fragment>);
        } else {
            return <div className="loading loading-lg" style={{ margin: 'auto' }}></div>;
        }
    }

    renderRepos = () => {
        const repos = this.state.tabs[this.state.activeTab];
        return repos.map(repo => {
            return (
                <div className="tile" key={repo.id}>
                    <div className="tile-content">
                        <h4 className="tile-title">{repo.name}</h4>
                        <p className="tile-subtitle">{repo.description}</p>
                    </div>
                    <div className="tile-action">
                        <button className="btn btn-primary" href={repo.url} target="_blank" rel="noopener noreferrer">Go to GitHub</button>
                    </div>
                </div>
            );
        }
        );
    }

    renderTabs = () => {
        return Object.keys(this.state.tabs).sort().map((language) => {
            return (<li className={this.state.activeTab === language ? "active tab-item" : "tab-item"} key={language}>
                <a href="#" onClick={() => this.setState({ activeTab: language })}>{language}</a>
            </li>);
        });
    }

    render() {
        return (<div className="page">
            <h1><b>&lt;</b> CODE  <b>/&gt;</b></h1>
            {this.renderCode()}
        </div >
        );
    }
}
