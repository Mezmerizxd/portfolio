import React from 'react';
import { Link } from 'react-scroll';

// Styles
import './styles.scss';

// Components
import Section from '../../components/Section';
import Project from '../../components/Project';

const Home = () => {
    return (
        <div className="Home">
            <div className="Header" id="header">
                <h1>Welcome to my Portolio!</h1>
                <p>
                    Scroll down to find out more about me. <br />
                    My Email, Rorypearson2003@hotmail.com
                </p>
                <Link
                    to="about_me"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button>See More!</button>
                </Link>
            </div>
            <div className="About" id="about_me">
                <Section
                    title="About Me"
                    content="I'm a efficient and industrious person seeking
                    employment and committed to utilizing my skills to
                    further the mission of a company. I do have autism but I
                    will not let it stop me from working hard and motivating
                    me to do my best.
                    I enjoy coding, It's really all I do in my free
                    time. I love to create things and I love to learn new
                    things that I can use in the future to create something
                    bigger and better.
                    My aim is to be an excellent software developer in a
                    company that values my skills and can benefit from my
                    experience in this field."
                />
            </div>
            <div className="Skills" id="skills">
                <Section
                    title="Skills"
                    content="I have very good Computer Skills and I am able to
                    develope a wide range of applications across multiple
                    platforms.
                    My ability to learn fast and over come difficult
                    problems is something that I am very proud of."
                />
            </div>
            <div className="Projects" id="projects">
                <h1 className="Title">My Projects</h1>
                <Project
                    title="Conversel"
                    content="Conversel is a cross-platorm social app, this is my main
                    project that I am working on as of 12/06/2022. This
                    project has 3 platforms that you can use it on, Desktop
                    - windows/linux/macos, Mobile - android/ios and Web
                    Browsers. I am the CTO of this and have done all of
                    the backend code and pretty much all of the frontend
                    code too."
                    respository="https://github.com/Conversel"
                    isPrivate={true}
                    website="https://conversel.com"
                />
                <Project
                    title="Project Sicario"
                    content="This Project introduced me into using frameworks like React and Vue. It was a addon to a Video Game called Grand Theft Auto V and it allowed you to heavily modify the Game."
                    isPrivate={false}
                    respository="https://github.com/mezmerizxd/redm-projectsicario"
                />
                <Project
                    title="Connect"
                    content="Using Xbox Live and the Xbox API, It allowed you to see your friendslist and Xbox partys inside a React App."
                    isPrivate={true}
                    respository="https://github.com/mezmerizxd/connect"
                />
                <Project
                    title="iVritex"
                    content="This project was something that wasn't easy to work on,
                    I had to learn about reverse engineering and
                    manipulating functions in a Video Game."
                    respository="https://github.com/mezmerizxd/ivritex"
                    isPrivate={false}
                />
                {/* <Project
                    title="Purge Engine"
                    content="Project Description"
                    respository="https://github.com/mezmerizxd/PurgeEngine"
                    isPrivate={true}
                /> */}
                <div className="Go-back">
                    <Link
                        to="header"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <button>Back to Top</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
