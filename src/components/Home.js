import React from "react";
import Logo from "./Logo";
import InformationPara from "./InformationPara";
import LinkButton from "./LinkButton";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import AboutUs from "./AboutUs";
import "../styles/Home.css";

export default function Home() {
    return (
        <>
            <div className="wrapper">
                <Logo />
                <InformationPara
                    title="Hi, we are Glen, Peter and Shailesh."
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
                <h3> Large Card Example below</h3>
            </center>
            <div className="thirds">
                <LargeCard
                    title="Project 1"
                    content="Example text for the first project and all technologies used goes here"
                />
                <LargeCard
                    title="Project 2"
                    content="Example text for the second project and all technologies used goes here"
                />
                <LargeCard
                    title="Project 3"
                    content="Example text for the third project and all technologies used goes here"
                />
            </div>

            <div className="thirds">
                <LargeCard
                    title="Project 4"
                    content="Example text for the fourth project and all technologies used goes here"
                />
                <LargeCard
                    title="Project 5"
                    content="Example text for the fifth project and all technologies used goes here"
                />
                <LargeCard
                    title="Project 6"
                    content="Example text for the sixth project and all technologies used goes here"
                />
            </div>

            <center>
                <h3> Small Card Example below</h3>
            </center>

            <div className="thirds">
                <SmallCard
                    iconName="user"
                    color="red"
                    title="Project 1"
                    content="Example text for the first project and all technologies used goes here"
                />
                <SmallCard
                    iconName="question"
                    color="red"
                    title="Project 2"
                    content="Example text for the second project and all technologies used goes here"
                />
                <SmallCard
                    iconName="dog"
                    color="red"
                    title="Project 3"
                    content="Example text for the third project and all technologies used goes here"
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
                content="DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS"
            />

            <AboutUs
                personName="Glen J"
                jobTitle="Software Engineer"
                content="DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS"
            />
        </>
    );
}
