import React from 'react';
import InternetIcons from './InternetIcons';
import './Home.css';

export default function Home() {
    const icons = [
        'facebook', 'twitter', 'youtube', 'google', 'wikipedia', 'reddit', 'instagram', 'linkedin', 'twitch', 'slack', 'trello', 'telegram', 'spotify', 'snapchat', 'vimeo', 'steam', 'stack-overflow', 'font-awesome', 'github', 'paypal', 'pinterest', 'soundcloud', 'apple', 'bitbucket', 'medium', 'tripadvisor', 'yahoo', 'adobe', 'amazon', 'whatsapp', 'yc'
    ];

    const highlitedProjects = [
        { name: "Clumsy Pigeon", year: "2016", link: "https://github.com/TrinTragula/ClumsyPigeon", description: "An extremely simple chess engine written in Fortran" },
        { name: "Nuclear toi", year: "2018", link: "https://www.npmjs.com/package/nuclear-toi", description: "An npm package to query data from the Lund/LBNL Table of Isotopes" },
        { name: "MEAN", year: "2018", link: "https://github.com/TrinTragula/MEAN", description: "An Electron App for Nuclear Physics" },
        { name: "Api Trenitalia", year: "2018-2020", link: "https://www.npmjs.com/package/api-trenitalia", description: "An npm package to grab info from Trenitalia APIs" },

    ];

    const renderHighlights = () => highlitedProjects.map(x => {
        return (
            <React.Fragment key={x.name}>
                <dt className="project-info"><a href={x.link} alt={x.name} target="_blank" rel="noopener noreferrer">{x.name}</a> ({x.year})</dt>
                <dd className="project-info">{x.description}</dd>
            </React.Fragment>
        );
    })

    return (
        <div className="page">
            <h1 className="ciao_internet">
                Ciao, Internet.
                <InternetIcons icons={icons} />
            </h1>
            <img src="icons/meh.svg" alt="Meh logo" className="meh_logo" />
            <p>
                I'm <b>Daniele Scarinci</b>, an italian software engineer with a degree in physics.
                I love learning, I love creating, but most of all I love telling computers how to learn and create.
                I graduated in 2018 with a master degree in Physics.
            </p>
            <p>
                <mark className="day">By day</mark>, I'm a full stack developer working with .NET, Javascript, NodeJS, HTML, CSS, MongoDB and data analysis in Python.
            </p>
            <p>
                <mark className="night">By night</mark>, I try to use machine learning to teach my laptop how to play tetris, program chess engines in Fortran, study Network Security, dive deep into Linux magic and make some people angry with open source software I have to take down before they get even angrier.
            </p>
            <div className="divider"></div>
            <h3 className="info">
                Projects
            </h3>
            <p>
                I currently mantain these projects, whose code it's still not open source but will probably be sooner or later.
            </p>
            <dl className="left-padded">
                <dt className="project-info">
                    <a href="https://whatsapp-web.scarinci.dev/" alt="Whatsapp analyzer" target="_blank" rel="noopener noreferrer">Whatsapp analyzer</a>
                </dt>
                <dd className="project-info">
                    A website to analyze your Whatsapp chats and create wonderful graphs and informations out of it. With the privacy of the user in mind.
                </dd>
            </dl>
            <div className="divider"></div>
            <h3 className="info">
                Open source
            </h3>
            <p>
                Some of my open source projects that I enjoyed the most coding (look at the <b>Code</b> section for even more stuff):
            </p>
            <dl className="left-padded">
                {renderHighlights()}
            </dl>
        </div >
    )
}
