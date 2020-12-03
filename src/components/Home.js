import React from 'react'
import Logo from './Logo';
import InformationPara from './InformationPara';
import LinkButton from './LinkButton'

export default function Home() {
    return (
        <div className="wrapper">
            <Logo />
            <InformationPara title="Hi, we are Glen, Peter and Shailesh." body="And, this is a website to showcase some of the projects we have done together." titleFontSize="2rem" bodyFontSize="1.5rem" />
            <LinkButton target="/TechnicalStack" link="Know about our Technology Stack" />
        </div>
    )
}
