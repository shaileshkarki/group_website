import React from "react";
import Logo from "./Logo";
import InformationPara from "./InformationPara";
import LinkButton from "./LinkButton";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import AboutUs from "./AboutUs";
import "../styles/Home.css";
import theImage from "../images/2020.jpg";

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <Logo />
                <InformationPara
                    title="Hi, we are Peter, Glen and Shailesh."
                    body="And, this is a website to showcase some of the projects we have done together."
                    titleFontSize="2rem"
                    bodyFontSize="1.5rem"
                />
                <LinkButton
                    target="/TechnicalStack"
                    link="Know about our Technology Stack"
                />
            </div>

            <center>
                <h3>About Us Card Example</h3>
            </center>
            <AboutUs
                personName="Shailesh K"
                jobTitle="Software Engineer"
                content="DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS"
            />

            <AboutUs
                personName="Peter H"
                jobTitle="Software Engineer"
                content="Afer 15 years in transport logistics, I have moved into software development. Initially with iOS and now have branched out to be a Full Stack Software Engineer. I have built websites, apps for mobile and really enjoy the challenges of software development and the satisfaction of being able to create a product from scratch and deliver a software solution that the client is happy with and plays a role in their day to day business lives."
            />

            <AboutUs
                personName="Glen Jones"
                jobTitle="Software Engineer"
                content="Having operated as a small business providing IT project management expertise for 10+ years with an overall combined 20+ years within the IT industry, I really enjoy the challenges in delivering great solutions satisfying customer needs. Operating as Full Stack Software Engineer allows me to interact closely with everyone and be creative in delivering these great solutions."
            />
        </>
    );
}
