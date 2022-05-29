import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="contentPadding">
            <h1>
                About
            </h1>

            Welcome to the map of cultural differences regarding globally distributed software engineering!
            <br />
            We have compiled a summary of distinct differences between cultures, collected in a map such that users can quickly go through important cultural differences between them and their team members.
            <br />
            We used three separate categories: organisational structure, meetings, and social work settings.
            <br />
            <div className='disclaimer'>
                ❗️ The list of differences is not exhaustive, and the information is taken from various information resources that are mentioned on the web pages.
                <br />
                The information on this page is compiled by a group of students from the Netherlands. Readers should be aware of the Western perspective of the writers.
            </div>

            <h2>General Tips</h2>

            Working in a team with team members from many different cultures can be challenging. Therefore we have compiled some general tips and tricks for working in a multicultural team.

            Be mindful of cultural differences without relying on stereotypes. Frequently remind yourself that:
            <ul>
                <li>Each team member has a unique way of working and communicating.</li>
                <li>Culture shapes behaviour but does not dictate it.</li>
                <li>Overcome language and cultural barriers.</li>
                <li>Choose the language the majority feels comfortable with, this language should be used in all meetings and formal events.</li>
                <li>If colleagues are not fluent in a specific language, avoid using it.</li>
                <li>Schedule a moment for the entire team to be together, and do this regularly.</li>
                <li>Consider different communication styles. (see below)</li>
            </ul>


            <h2>Communication Style</h2>

            Being an effective communicator is vital to being able to efficiently work together with a multicultural team.
            <br />
            The key to being an effective communicator is understanding the communication style of the colleague/team member you are working with.
            <br />
            We distinct cultures and their communication styles with high context and low context
            <ul>
                <li>High-context: Good communication is sophisticated, nuanced, and layered. Messages are both spoken and read between the lines. Messages are often implied but not plainly expressed.</li>
                <li>Low-context: Good communication is precise, simple, and clear. Messages are expressed and understood at face value. Repetition is appreciated if it helps clarify the communication.</li>
            </ul>
            Research has shown that in multicultural teams, high-context communication gets lost since high-context communication works best when two people are from the same culture.
            <br/>
            Therefore multicultural teams need low-context processes.
            <br/>
            To ensure that every team member understands each other, an explicit level of verification is recommended, to take place after every meeting and individual phone call:
            <ul>
                <li>One person recaps the key points orally, with the task rotating from each team member to another.</li>
                <li>Each person would summarize orally what he would do next.</li>
                <li>One person would send out a written recap, again on a rotating basis.</li>
            </ul>
        </div>
    );
};

export default About;