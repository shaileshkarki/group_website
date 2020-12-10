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
                content="Afer 15 years in transport logistics moved into software development. Initially with ios and now have branched out to be a full stack software engineer. I have built websites, apps for mobile and really enjoy the challenges of software development and the satisfaction of beoing able to create a product from scratch and deliver a software sollution that the client is happy with and plays a role in their day to day business lives."
            />

            <AboutUs
                personName="Glen J"
                jobTitle="Software Engineer"
                content="DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS DASFDSSDFDSF ASDFASFASDFASDF ASDFASFASDF AS ASDFASFASDF ASASDFASDFASDFSAD ASDFASFD ASDFJKASFJKD  AJSKDFHAJKSHFD ASDFK JADSKFJH  ASDFJHASJDHF ASJDF ASJDHF AJSDHF JAKSDHFASJDFSADJFHASJFHASDF ASJDHFASKJDFHASJDKFH ASJKDFH ASJKDHF ASJKDFH AJKSDHF JAKSHF AJDHAJDSFH ASKDJHFASKJFH ASKDJHF AKJSDHF JKAHDSFJKA HDFJK HKJAHDSFJKASHDF JA AJKSDHF JAKSDFH AKJSDH AJKSDH DFS"
            />
        </>
    );
}
