import React from "react";
import AboutUs from "../components/AboutUs";

import "../styles/OurProcessPage.css";

export default function OurProcessPage() {
    return (
        <>
            <center>
                <div>
                    <h3>Our development processes are:</h3>
                    <h1>
                        Note it is not perfect and needs a lot of refinement
                    </h1>
                </div>

                <div>
                    Our easy to understand development process is highlighted
                    below. We use these phases in an iterative fashion to ensure
                    your requirements are delivered upon.{" "}
                </div>
            </center>

            <div>
                <AboutUs
                    personName="Planning"
                    content="“What do we want?” In this stage of the project, our team determines the cost and resources required for implementing your analysed requirements. It also details any risks involved and provides sub-plans for minimising these risks.
                    "
                />

                <AboutUs
                    personName="Design"
                    content="How will we get what we want?” This phase of the SDLC starts by turning the software specifications into a design plan called the Design Specification. All stakeholders then review this plan and offer feedback and suggestions. It’s crucial to have a plan for collecting and incorporating stakeholder input into this document. Failure at this stage will almost certainly result in cost overruns at best and the total collapse of the project at worst."
                />

                <AboutUs
                    personName="Development"
                    content="Let’s create what we want.

                    At this stage, the actual development starts. It’s important that every developer sticks to the agreed blueprint. Also, make sure you have proper guidelines in place about the code style and practices.
                    
                    For example, define a nomenclature for files or define a variable naming style such as camelCase. This will help your team to produce organized and consistent code that is easier to understand but also to test during the next phase."
                />

                <AboutUs
                    personName="Testing"
                    content="“Did we get what we want?” In this stage, we test for defects and deficiencies. We fix those issues until the product meets the original specifications.

                    In short, we want to verify if the code meets the defined requirements."
                />

                <AboutUs
                    personName="Training and User Acceptance Testing"
                    content="After the team has conducted internal testing and ensured it has met all the requirements, we now involve yourself as part of walking you through the solution and ensuring you have the time to test your solution. "
                />

                <AboutUs
                    personName="Solution Deployment"
                    content="“Let’s start using what we got.”

                    At this stage, the goal is to deploy the software to the production environment so users can start using the product. However, many organizations choose to move the product through different deployment environments such as a testing or staging environment.
                    
                    This allows any stakeholders to safely play with the product before releasing it to the market. Besides, this allows any final mistakes to be caught before releasing the product."
                />

                <AboutUs
                    personName="Software Lifecycle Maintenance"
                    content="“Let’s get this closer to what we want.” The plan almost never turns out perfect when it meets reality. Further, as conditions in the real world change, we need to update and advance the software to match.

                    If you do purchase our Software Lifecycle maintenance option, we will continue to provide updates and test your site to ensure working functionality."
                />
            </div>
        </>
    );
}
