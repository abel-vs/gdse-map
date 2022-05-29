import React from "react";
import SpiderGraph from "../components/SpiderGraph";
import styles from "./hofstede.module.css"

function Ref() {
    return (
        <div>
            <h1 className={styles.header}>Hofstede Cultural dimensions</h1>
            <div className={styles.container_body}>
                <div className={styles.explanation}>
                    <h3>Explanation</h3>
                    The Hofstede model contains six dimensions>
                    Geert Hofstede developed it at the end of the 1970s and it has become an internationally recognized standard for understanding cultural differences.
                    Hofstede studied people in more than 50 countries who worked for IBM.
                    The dimensions go from 0 to 100, where 0 indicates a low score and 100 indicates a high score.

                    <h4>Power Distance Index (PDI)</h4>
                    The Power Distance dimension refers to the degree of inequality between team members and whether the inequality is accepted between them.
                    A high PDI indicates that team members accept an unequal, hierarchical distribution of power.
                    A low PDI indicates that power is shared, and team members and leadership are considered almost as equals.
                    <h5>Tips for working with team members with a high PDI score</h5>
                    <ul>
                        <li>Communicate with the team member at your level. If you want to go to another level, ask for explicit permission.</li>
                        <li>If you contact a team member from a lower level, include the boss.</li>
                        <li>When contacting a team member, first address them by their last name, unless indicated otherwise.</li>
                    </ul>
                    <h5>Tips for working with team members with a low PDI score</h5>
                    <ul>
                        <li>Go directly to the source. There is no need to bother the boss when this is not indicated.</li>
                        <li>Think before involving the boss in communication between team members. This could indicate distrust.</li>
                        <li>Skipping hierarchical levels probably will not be a problem.</li>
                    </ul>

                    <h4>Individualism Versus Collectivism (IDV)</h4>
                    Individualism refers to the strength of the ties that people have to others within their team/community.
                    A high IDV indicates a weak connection to a community. People take less responsibility for others actions and outcomes.
                    A low IDV indicates that people are loyal to the group to which they belong, and this group will defend their interests.
                    <h5>Tips for working with team members with a high IDV</h5>
                    <ul>
                        <li>Acknowledge individual accomplishments.</li>
                        <li>There is no need to mix work life with social life too much.</li>
                        <li>Encourage team members to express their own ideas and have a debate amongst them.</li>
                    </ul>
                    <h5>Tips for working with team members with a low IDV</h5>
                    <ul>
                        <li>Ensure harmony, even if this means you have to suppress your feelings and emotions</li>
                        <li>Avoid giving negative feedback in public</li>
                    </ul>

                    <h4>Masculinity Versus Femininity (MAS)</h4>


                    <h4>Uncertainty Avoidance</h4>

                    <h4>Long Term Orientation</h4>

                    <h4>Indulgence</h4>


                </div>
                <div className={styles.graph_container}>
                    <SpiderGraph/>
                </div>
            </div>
        </div>
    )
}

export default Ref;