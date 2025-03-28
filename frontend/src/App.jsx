import { useEffect,  useRef,useState } from "react";
import NavBar from "./components/NavBar";
import Sections from "./components/sections/Sections";
import MemberCard from "./components/memberCard/MemberCard";
import AboutText from "./components/about/AboutText";
import AboutImg from "./components/about/AboutImg";
import SponsorLogo from "./components/sponsors/SponsorLogo";
import SponsorVideoCard from "./components/sponsors/SponsorVideoCard";

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
          message="Leading the team"
          img="../public/Logo/julie.png"
        />,
        <MemberCard
          name="Jiwon"
          role="President"
          img="../public/Logo/jiwon.png"
        />,
        <MemberCard
          name="Charlie"
          role="Advisor"
          message="Providing guidance"
          img="../public/Logo/specLogo.png"
        />,
      ],
    },
    { id: "page2", content: "Page 2: Engineers" },
    { id: "page3", content: "Page 3: Marketing" },
  ];


  const sponsorPages = [];

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
                    <p>✅ something something something?</p>
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
          message="what we are going to do"
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
                logo = 'logo/sponsorLogo3.jpeg'/>
            </div>
            <div id = "Sponsors-Video">
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/wh2bqpN2-xs/"
                sponsor = "logo/sponsorLogo1.png"
                eventName = "Pajama Party"/>
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/BpAaw0PsMdA"/>
                <SponsorVideoCard
                video = "https://www.youtube.com/embed/BpAaw0PsMdA"/>
            </div>
            <div id = "right-Container">
            </div>
        </Sections>
        <Sections id = "contact">
            <div id = "mailingList">
            </div>
            <div id = "contactForm"></div>
        </Sections>
      </div>
    </div>
  );
}

export default App;
