import React from 'react'
import LargeCard from "./LargeCard";
import ParentTasker from "../images/parent_tasker.jpg";
import RosterApplication from "../images/roster.jpeg";
import JobTracker from "../images/jobtracker.png";
import BeerBuddy from "../images/beer_buddy.png";
import node from "../images/programming_icons/nodejs.png";
import react from "../images/programming_icons/react.png";
import javascript from "../images/programming_icons/javascript.png";
import Sqlite from "../images/programming_icons/SQLite.png";
import ReactNative from "../images/programming_icons/react_native.png"
import Postgresql from "../images/programming_icons/postgresql.png"
import '../styles/Portfolio.css'
export default function Portfolio() {
    return (
        <div>
            <h1 style={{ color: "#c53211" }}>Here's some applications we created recently.</h1>
            <div className="portfolio_list">
                <LargeCard
                    images={[ReactNative, Sqlite]}
                    link="https://mistergjones.github.io/privacy/"
                    image={ParentTasker}
                    title="Parent Tasker"
                    content="This application let parents to create and assign tasks and rewards to their children. When children complete the assigned tasks, they can claim for reward associated with those tasks."
                />
                <LargeCard
                    images={[node, react, javascript, Postgresql]}
                    link="https://roster-application.herokuapp.com/"
                    image={RosterApplication}
                    title="Roster Application"
                    content="This app allows small businesses to manage their staff details, rosters, hourly rate payments with basic financial reports."
                />
                <LargeCard
                    images={[node, javascript, Postgresql]}
                    link="https://young-oasis-03810.herokuapp.com/"
                    image={JobTracker}
                    title="Job Tracker Application"
                    content="This app allows users/job seeekers to search jobs and save them for applying those jobs. Once user applies jobs, they can keep record of information about those jobs and set reminder for following up with job posters."
                />
                <LargeCard
                    images={[node, javascript, Postgresql]}
                    link="https://enigmatic-bastion-88209.herokuapp.com/"
                    image={BeerBuddy}
                    title="Beer Buddy"
                    content="This app shows bars in Melbourne and list of beers served by those bars. Users can rate their experience with the beer they had in particular bar which will help other people to decide/find which beers to have in given bar."
                />
            </div>
        </div>
    )
}
