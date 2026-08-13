import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import Sections from "./components/sections/Sections";
import MemberCard from "./components/memberCard/MemberCard";
import AboutText from "./components/about/AboutText";
import AboutImg from "./components/about/AboutImg";
import SponsorLogo from "./components/sponsors/SponsorLogo";
import SponsorVideoCard from "./components/sponsors/SponsorVideoCard";
import { ContactUs } from "./components/contact/ContactForm";
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
        <MemberCard key="julie" name="Julie Lee" role="President" img="/logo/julie.png" />,
        <MemberCard key="vp" name="TBD" role="Vice-President" img="/logo/specLogo.png" />,
        <MemberCard key="john" name="John Lee" role="Software Developer / Finance Director" img="/logo/specLogo.png" />,
      ],
    },
    {
      id: "page2",
      content: [
        <MemberCard key="marketing" name="TBD" role="Marketing Director" img="/logo/specLogo.png" />,
        <MemberCard key="events" name="TBD" role="Events Director" img="/logo/specLogo.png" />,
        <MemberCard key="team-1" name="TBD" role="Team Member" img="/logo/specLogo.png" />,
      ],
    },
    {
      id: "page3",
      content: [
        <MemberCard key="team-2" name="TBD" role="Marketing Team" img="/logo/specLogo.png" />,
        <MemberCard key="team-3" name="TBD" role="Team Member" img="/logo/specLogo.png" />,
        <MemberCard key="team-4" name="TBD" role="Team Member" img="/logo/specLogo.png" />,
      ],
    },
  ];

  // Keep the existing spinning logo scroll-speed behavior unchanged.
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

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % teamPages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + teamPages.length) % teamPages.length);

  return (
    <div className="app">
      <div
        className="spinning-logo"
        ref={logoRef}
        style={{ animationDuration: `${speed}s` }}
      ></div>

      <NavBar />

      <main className="content-wrapper">
        <section id="home" className="mainPage">
          <div className="hero-content">
            <span className="eyebrow">SPORTS · COMMUNITY · UBC</span>
            <a className="welcomeHeader" href="#about">SPEC</a>
            <h1 className="hero-title">Move together.<br />Make university count.</h1>
            <p className="welcomeMessage">
              A community built around staying active, meeting people, and making memories beyond the classroom.
            </p>
            <div className="hero-actions">
              <a
                className="primary-action"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBcw-hu09r98EA6_vuWPqtIkIpijtiiXy0Eks9UY2pgnhaPA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a member <span>↗</span>
              </a>
              <a className="secondary-action" href="#about">Explore SPEC ↓</a>
            </div>
          </div>
          <div className="hero-note">SPORTS & ENHANCEMENT CLUB</div>
        </section>

        <Sections id="about" className="about" ref={aboutSectionRef}>
          <div className="section-shell about-shell">
            <AboutText />
            <div id="About-Img-Container">
              <AboutImg />
              <div className="fade-in" id="About-metrics">
                <span className="eyebrow">WHY SPEC?</span>
                <h2>Good people make healthy habits easier.</h2>
                <div id="About-Messages">
                  <div className="benefit"><span>01</span><div><strong>Stay active</strong><p>Hiking, skiing, skating, and seasonal activities that get you moving.</p></div></div>
                  <div className="benefit"><span>02</span><div><strong>Find your people</strong><p>Meet students through sports, trips, socials, and shared experiences.</p></div></div>
                  <div className="benefit"><span>03</span><div><strong>Make uni memorable</strong><p>Build the kind of university life that exists outside lectures and deadlines.</p></div></div>
                </div>
                <div id="About-Last-Message">
                  <span>SPEC HAS YOUR BACK</span>
                  <p>Show up for the activity. Stay for the community.</p>
                </div>
              </div>
            </div>
          </div>
        </Sections>

        <Sections id="calendar">
          <div className="section-shell calendar-shell">
            <div className="section-heading">
              <span className="eyebrow">WHAT'S NEXT</span>
              <h2>Calendar</h2>
              <p>New events are on the way.</p>
            </div>
            <div className="coming-soon-card">
              <span className="coming-index">01</span>
              <div><p>Upcoming events</p><h3>Coming soon.</h3></div>
              <span className="coming-arrow">→</span>
            </div>
          </div>
        </Sections>

        <Sections id="team">
          <div className="section-shell team-shell">
            <div className="section-heading team-heading">
              <div><span className="eyebrow">THE PEOPLE</span><h2>Meet the team.</h2></div>
              <p>The people helping turn ideas into events, experiences, and community.</p>
            </div>
            <div id="inner-container">
              <button className="slider-arrow arrow_left" onClick={prevPage} aria-label="Previous team members">←</button>
              <div className="slider-wrapper">
                <div className="slider" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                  {teamPages.map((page) => <div className="page" key={page.id}>{page.content}</div>)}
                </div>
              </div>
              <button className="slider-arrow arrow_right" onClick={nextPage} aria-label="Next team members">→</button>
              <div className="indicator-container">
                {teamPages.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Team page ${index + 1}`}
                    className={`indicator-dot ${currentPage === index ? "active" : ""}`}
                    onClick={() => setCurrentPage(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Sections>

        <Sections id="sponsors">
          <div className="section-shell sponsors-shell">
            <div className="section-heading sponsors-heading">
              <div><span className="eyebrow">OUR PARTNERS</span><h2>Supported by local brands.</h2></div>
              <p>Partners who help make SPEC events and experiences possible.</p>
            </div>
            <div id="Sponsors-sponsorList">
              <SponsorLogo website="https://www.tenderbite.ca/" logo="/logo/sponsorLogo1.png" />
              <SponsorLogo website="https://www.vanmak.ca/" logo="/logo/sponsorLogo2.webp" />
              <SponsorLogo website="https://cobeesliquor.com/" logo="/logo/sponsorLogo4.png" />
            </div>
            <div className="video-heading"><span>FROM OUR COMMUNITY</span><p>Highlights, events, and collaborations.</p></div>
            <div id="Sponsors-Video">
              <SponsorVideoCard video="/logo/tenderbitReels.mp4" image="/logo/reels1Thumbnail.png" />
              <SponsorVideoCard video="/logo/soju_spirit_reels.mp4" image="/logo/reels2Thumbnail.png" />
              <SponsorVideoCard video="/logo/vanmakReels.mp4" image="/logo/reels3Thumbnail.png" />
            </div>
          </div>
        </Sections>

        <Sections id="contact">
          <div className="section-shell contact-shell">
            <div id="mailingList">
              <span className="eyebrow">GET IN TOUCH</span>
              <h2>Have a question?<br />Say hello.</h2>
              <p id="mailing-text">Whether you want to join, collaborate, or learn more about SPEC, we'd love to hear from you.</p>
              <a href="https://www.instagram.com/spec_ubc/" target="_blank" rel="noopener noreferrer">@spec_ubc ↗</a>
            </div>
            <div id="contactForm"><ContactUs /></div>
          </div>
        </Sections>
      </main>
    </div>
  );
}

export default App;
