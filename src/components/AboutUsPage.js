import React from "react";
import SmallCard from "./SmallCard";
import "../styles/AboutUsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutUsPage(props) {
    return (
        <div>
            <center>
                <h1>
                    THIS NEEDS MORE REFINEMENT - needs 3 components across. Not
                    2
                </h1>
                <h3>A little about us</h3>

                <p>
                    XXX is a boutique web development business based in
                    Melbourne. We focus on providing great and user-friendly
                    websites matching your specific needs.
                </p>

                <p>
                    From fast turn-around template based websites to fully
                    customised development, we deliver quality work on time and
                    on budget.
                </p>

                <h3>Why choose us?</h3>

                <p>
                    We pride ourselves in being polite and professional when you
                    engage with us. PUT MORE INFORMATION HERE....The core
                    reasons to utilise our services are as follows:{" "}
                </p>
            </center>

            <div className="tech-stack-container">
                <div className="tech-stack-card-wrapper">
                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="dollar-sign"
                            color="#2e3830"
                            title="Great Value"
                            content="We deliver great solutions at a pragmatic price to suit everyone without compromising on quality."
                        />
                    </div>
                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="lightbulb"
                            color="#2e3830"
                            title="Easy"
                            content="We will explain our technical solution to your needs in an easy to understand manner."
                        />
                    </div>

                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="copyright"
                            color="#2e3830"
                            title="Copyright"
                            content="All your Intellectual Property and content remains with you."
                        />
                    </div>

                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="smile-beam"
                            color="#2e3830"
                            title="Friendly"
                            content="We are all friendly and genuinely like meeting and interacting with new people.."
                        />
                    </div>

                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="rocket"
                            color="#2e3830"
                            title="Responsive"
                            content="We are quick and responsive and will always keep you informed."
                        />
                    </div>

                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="search"
                            color="#2e3830"
                            title="Transparent"
                            content="We are transparent in everything we do meaning no hiden extras or suprises."
                        />
                    </div>

                    <div className="center-tech-stack">
                        <SmallCard
                            iconName="headset"
                            color="#2e3830"
                            title="Supportive"
                            content="We are transparent in everything we do meaning no hiden extras or suprises."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
