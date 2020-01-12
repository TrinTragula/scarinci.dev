import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="page">
            <img src="icons/meh.svg" alt="Meh logo" className="meh-logo" />
            <h1>WHOAMI<span className="blinking-cursor">_</span></h1>
            <p>
                I'm <b>Daniele Scarinci</b>, an italian software engineer with a degree in physics. I love learning, I love creating, but most of all I love telling computers how to learn and create.
            </p>
            <p>
                By day, I'm a full stack developer working with .NET, Javascript, NodeJS, HTML, CSS, MongoDB and data analysis in Python. I've graduated in 2018 with a master degree in Physics.
            </p>
            <p>
                csharp logodotnet logojavascript logonode logomongodb logopython logo
            </p>
            <p>
                By night, I try to use machine learning to teach my laptop how to play tetris, program chess engines in Fortran, study Network Security, dive deep into Linux magic and make some people angry with open source software I have to take down before they get even angrier.
          </p>
        </div >
    )
}
