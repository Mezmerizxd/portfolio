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
                <h1>Welcome to my Portfolio!</h1>
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
                    content="I feel that I have a lot of skills and I am constantly learning new things. I have experience with the following technologies: Python, PHP, CSS, HTML, JavaScript, TypeScript, MongoDB, MySql, ExpressJs, ReactJs, Svelte, Git, GitHub and Linux. I also have experience with C# and C++ but I wouldn't say that I'm a C# or C++ expert. You can view most of my work on GitHub"
                    linkName="GitHub"
                    link="https://github.com/mezmerizxd"
                />
            </div>
            <div className="DeeperDive" id="deeper_dive">
                <Section
                    title="Deeper Dive Into My Skills and Experience"
                    content="I want to be a Software Engineer and I have been learning since 2017 when I was 13 years old. I started out in Python using a module called Turtle to make small games. After I understood the basics I moved onto HTML & CSS and I was making simple sites for my friends on my schools computers. Then in 2020 I wanted to build a cheat for the game Grand Theft Auto V (because I didn't want to dedicate 20 years of my life earning money in a video game) so I started using C# to manipulate values inside the game and then I switched to someone's existing cheat base that was made in C++ and that's how I learned the basics of C# & C++. From 2021 to 2022 I've been learning how to use Web Frameworks like React & Svelte and also have built some servers using ExpressJs, MySql and MongoDB."
                />
            </div>
            <div className="Projects" id="projects">
                <h1 className="Title">My Projects</h1>
                <Project
                    title="Conversel"
                    content="Conversel is a cross-platform social app, this is my main
                    project that I am working on as of 12/06/2022. This
                    project has 3 platforms that you can use it on, Desktop
                    - windows/linux/macos, Mobile - android/ios and Web
                    Browsers. I am the CTO of this and have done all of
                    the backend code and pretty much all of the frontend
                    code too."
                    respository="https://github.com/Conversel"
                    isPrivate={true}
                />
                <Project
                    title="Project Sicario"
                    content="This Project introduced me into using frameworks like React and Vue. It was a addon to a Video Game called Grand Theft Auto V and it allowed you to heavily modify the Game."
                    isPrivate={false}
                    respository="https://github.com/mezmerizxd/redm-projectsicario"
                />
                <Project
                    title="Connect"
                    content="Using Xbox Live and the Xbox API, It allowed you to see your friends list and Xbox parties inside a React App."
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
