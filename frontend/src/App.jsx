import { useEffect,  useRef,useState } from "react";
import NavBar from "./components/NavBar";
import Sections from "./components/sections/Sections";
import MemberCard from "./components/memberCard/MemberCard";
import AboutText from "./components/about/AboutText";
import AboutImg from "./components/about/AboutImg";
import SponsorLogo from "./components/sponsors/SponsorLogo";
import SponsorVideoCard from "./components/sponsors/SponsorVideoCard";
import {ContactUs} from './components/contact/ContactForm';

import "./App.css";

function App() {
const logoRef = useRef(null);
const aboutSectionRef = useRef(null);
const [speed, setSpeed] = useState(45);
const [currentPage, setCurrentPage] = useState(0);

  const teamPages = [
    {
      id: "page1",
      content: [
        <MemberCard
          name="Julie Lee"
          role="President"
          img="/logo/julie.png"
        />,
        <MemberCard
          name="TBD"
          role="Vice-President"
          img="../public/Logo/specLogo.png"
        />,
        <MemberCard
          name="John Lee"
          role="Software Developer/ Finance Director"
          message="Providing guidance"
          img="../public/Logo/specLogo.png"
        />,
      ],
    },
    { id: "page2", content: [
        <MemberCard
        name="TBD"
        role="MARKETING DIRECTOR"
        message="Leading the team"
        img="../public/Logo/specLogo.png"
        />,
        <MemberCard
          name="TBD"
          role="EVENTS DIRECTOR"
          img="../public/Logo/specLogo.png"
        />,
        <MemberCard
          name="TBD"
          role="SOME"
          message="Providing guidance"
          img="../public/Logo/specLogo.png"
        />,
      ]},
    { id: "page3", content: [
        <MemberCard
          name="TBD"
          role="MARKETING DIRECTOR"
          message="Leading the team"
          img="../public/Logo/specLogo.png"
        />,
        <MemberCard
          name="TBD"
          role="SOME"
          img="../public/Logo/specLogo.png"
        />,
        <MemberCard
          name="TBD"
          role="SOME"
          message="Providing guidance"
          img="../public/Logo/specLogo.png"
        />,
      ],},
  ];
  useEffect(() => {

    const handleScroll = () => {
      animationFrame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const newSpeed = Math.max(5, 45 - scrollY / 100);
        setSpeed(newSpeed);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);


  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % teamPages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + teamPages.length) % teamPages.length);
  };

  return (
    <div className="app">
      <div
        className="spinning-logo"
        ref={logoRef}
        style={{ animationDuration: `${speed}s` }}
      ></div>
      <NavBar />
      <div className="content-wrapper">
        <section id="home" className="mainPage">
          {/* <h1 className="welcomeHeader">SPEC</h1> */}
          <a className="welcomeHeader" href="#about">
            SPEC
          </a>
          <h2 className="welcomeMessage">Are You Ready To Make Change?</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeBcw-hu09r98EA6_vuWPqtIkIpijtiiXy0Eks9UY2pgnhaPA/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>BECOME A MEMBER</button>
          </a>
        </section>
        <Sections id="about" className="about" ref={aboutSectionRef}>
          <AboutText id = "AboutText" />
          <div id = "About-Img-Container">
            <AboutImg />
            <div className = "fade-in" id = "About-metrics">
                <div id = "About-Messages">
                    <p>✅ Want to get fit?</p> 
                    <p>✅ Want to make friends?</p>
                    <p>✅ Want to fulfill your dream UNI life?</p>
                    <p>✅ Students often neglect their health, BUT health is one of the 
                        most valueable and important aspect of your life! 
                        Why dont you protect your health by having fun with SPEC?!
                    </p>
                    <div id = "About-Last-Message">
                    <p >💪Don't Worry! SPEC has your BACK!</p>
                </div>
                </div>
            </div>
          </div>
        </Sections>
        <Sections
          id="calendar"
          name="CALENDAR"
          message="COMING SOON"
        ></Sections>
        <Sections id="team" name="TEAM" message="Meet SPEC Team!">
          <div id="inner-container">
            {/* Left Arrow */}
            <button className="arrow_left" onClick={prevPage}>
              ◀
            </button>

            <div className="slider-wrapper">
              <div
                className="slider"
                style={{
                  transform: `translateX(-${currentPage * 100}%)`,
                }}
              >
                {teamPages.map((page) => (
                  <div className="page" key={page.id}>
                    {page.content}
                  </div>
                ))}
              </div>
            </div>
            <button className="arrow_right" onClick={nextPage}>
              ▶
            </button>

            <div className="indicator-container">
              {teamPages.map((_, index) => (
                <div
                  key={index}
                  className={`indicator-dot ${
                    currentPage === index ? "active" : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </Sections>
        <Sections id="sponsors">
            <div id = "Sponsors-sponsorList">
            <div id = "sponsors-headerContainer"><p id="sponsors-aboutHeader"> Our Sponsors</p></div>
                <SponsorLogo 
                website = "https://www.tenderbite.ca/"
                logo = 'logo/sponsorLogo1.png'/>
                <SponsorLogo 
                website = "https://www.vanmak.ca/"
                logo = 'logo/sponsorLogo2.webp'/>
                <SponsorLogo 
                website = "https://cobeesliquor.com/"
                logo = 'logo/sponsorLogo4.png'/>
            </div>
            <div id = "Sponsors-Video">
                <SponsorVideoCard
                video = "/logo/tenderbitReels.mp4"
                image ={"/logo/reels1Thumbnail.png"}
                />
                <SponsorVideoCard
                video ="/logo/soju_spirit_reels.mp4"
                image={"/logo/reels2Thumbnail.png"}/>

                <SponsorVideoCard
                video = "/logo/vanmakReels.mp4"
                image={"/logo/reels3Thumbnail.png"}/>
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/BpAaw0PsMdA"
                image="/logo/specLogoClearBack.png"/>
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/BpAaw0PsMdA"
                image="/logo/specLogoClearBack.png"/>
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/BpAaw0PsMdA"
                image="/logo/specLogoClearBack.png"/>
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/BpAaw0PsMdA"
                image="/logo/specLogoClearBack.png"/>
                
            </div>
            <div id = "right-Container">
            </div>
        </Sections>
        <Sections id = "contact">
            <div id = "mailingList">
            <div id = "mailing-headerContainer">
                <p id="sponsors-aboutHeader"> Mailing List</p>
            </div>
                <p id = "mailing-text">Have any questions?<br />Don’t hesitate to reach out <br /> We’d love to hear from you.</p>
            </div>
            <div id = "contactForm">
                <ContactUs></ContactUs>
            </div>
        </Sections>
      </div>
    </div>
  );
}

export default App;
