import React from 'react';
import './Home.css';

export default function Home() {
    const highlitedProjects = [
        { name: "Clumsy Pigeon", year: "2016", link: "https://github.com/TrinTragula/ClumsyPigeon", description: "An extremely simple chess engine written in Fortran" },
        { name: "Nuclear toi", year: "2018", link: "https://www.npmjs.com/package/nuclear-toi", description: "An npm package to query data from the Lund/LBNL Table of Isotopes" },
        { name: "MEAN", year: "2018", link: "https://github.com/TrinTragula/MEAN", description: "An Electron App for Nuclear Physics" },
        { name: "api-trenitalia", year: "2018-2020", link: "https://www.npmjs.com/package/api-trenitalia", description: "An Electron App for Nuclear Physics" },
    ];

    const renderHighlights = () => highlitedProjects.map(x => {
        return (
            <React.Fragment key={x.name}>
                <dt><a href={x.link} alt={x.name} target="_blank" rel="noopener noreferrer">{x.name}</a> ({x.year})</dt>
                <dd>{x.description}</dd>
            </React.Fragment>
        );
    })

    return (
        <div className="page">
            <img src="icons/meh.svg" alt="Meh logo" className="meh-logo" />
            <h1>WHOAMI<span className="blinking-cursor">_</span></h1>
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
            <p>
                Some of my open source projects (look at the <b>Code</b> section for more projects):
            </p>
            <dl style={{ paddingLeft: '5%' }}>
                {renderHighlights()}
            </dl>
        </div >
    )
}
