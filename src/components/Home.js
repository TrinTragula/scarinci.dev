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
        { name: "Cronache Maceratesi (unofficial)", year: "2020", link: "https://www.amazon.it/TrinTragula-Cronache-Maceratesi-unofficial/dp/B08BWQ32NY", description: "(Only in italian) Una skill Alexa per leggere le ultime notizie presenti sul sito Cronache Maceratesi" },
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
                I graduated in 2018 with a master degree in Physics and since then I've been working a software engineer.
            </p>
            <p>
                <mark className="day">By day</mark>, I'm a full stack developer using .NET and Typescript to work with event sourcing, Angular and cross-platform mobile developent.
            </p>
            <p>
                <mark className="night">By night</mark>, I try to use machine learning to teach my laptop how to play tetris, program chess engines in Fortran, study Network Security, dive deep into Linux magic and make Android apps to have fun with statistics.
            </p>
            <div className="divider"></div>
            <h3 className="info">
                Main projects
            </h3>
            <p>
                I currently mantain these projects, some of the code isn't open source yet but it will probably be sooner or later.
            </p>
            <dl className="left-padded">
                <dt className="project-info">
                    <a href="https://play.google.com/store/apps/details?id=dev.scarinci.chatanalyzer" alt="Chat Analyzer for WhatsApp" target="_blank" rel="noopener noreferrer">
                        Chat Analyzer for WhatsApp (Android)
                    </a>
                </dt>
                <dd className="project-info">
                    An android app written in Kotlin that lets you analyze your WhatsApp chats and provides you with fun stats and cool graphs.
                </dd>
            </dl>
            <dl className="left-padded">
                <dt className="project-info">
                    <a href="https://github.com/TrinTragula/rusty-pigeon" alt="Rusty Pigeon" target="_blank" rel="noopener noreferrer">
                        Rusty Pigeon (Rust, WASM)
                    </a>
                </dt>
                <dd className="project-info">
                    UCI chess engine written in Rust. You can also play against it in a <a href="https://rusty-pigeon.netlify.app/" alt="Rusty Pigeon WASM version" target="_blank" rel="noopener noreferrer">web browser</a>.
                </dd>
            </dl>
            <dl className="left-padded">
                <dt className="project-info">
                    <a href="https://www.mcseeder.com/" alt="Seeder" target="_blank" rel="noopener noreferrer">
                        Seeder (WASM, React)
                    </a>
                </dt>
                <dd className="project-info">
                    A webapp to find, show and share Minecraft Java edition seeds.
                    <small className="ml-2">
                        <a href="https://github.com/TrinTragula/seeder" alt="Seeder code on Github" target="_blank" rel="noopener noreferrer">
                            link to the code
                        </a>
                    </small>
                </dd>
            </dl>
            <div className="divider"></div>
            <h3 className="info">
                Other projects
            </h3>
            <p>
                Some of my open source projects that I enjoyed the most coding. Take a look at the <b>Code</b> section for a complete list of all of my open source stuff.
            </p>
            <dl className="left-padded">
                {renderHighlights()}
            </dl>
        </div >
    )
}
