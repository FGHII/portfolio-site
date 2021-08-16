import React from "react";
import headerBackground from "./images/computer-1209641_1920.jpg";
import TechCard from "./TechCard";
import techPortfolio from './techPortfolio';

const styles = {
  header: {
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: "100%",
    backgroundPosition: "center",
    width: "100%",
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 15,
  },
  headerText: {
    fontFamily: "Lato",
    color: "white",
    fontSize: 48,
  },
  contentContainer: {
    // width: '100%',
    flex: 1,
    backgroundImage:
      "linear-gradient(180deg, rgba(212,212,212,1) 0%, #f5ecf4 15%)",
    padding: 30,
    borderBottomRightRadius: 15,
  },
  titleText: {
    fontFamily: "Lato",
    fontSize: 36,
  },
  text: {
    fontFamily: "Lato",
    fontSize: 18,
    lineHeight: 1.5,
  },
  attributionText: {
    fontFamily: 'Lato',
    fontSize: 12,
    textAlign: 'center',
    width: '100%',
  },
  techCardContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
  },
};

const TechPage = (props) => {
  return (
    <div style={props.containerStyle}>
      <div style={styles.header}>
        <h1 style={styles.headerText}>Technology</h1>
      </div>
      <div style={styles.contentContainer}>
        <h1 style={styles.titleText}>Skills & Technologies</h1>
        <p style={styles.text}>
          I am familiar with: HTML, CSS, Javascript, NodeJS, ExpressJS, ReactJS,
          ReactNative, MongoDB, MySQL, Git, NPM, VSCode, Atom, Heroku,
          MaterialUI.

          This website was made using ReactJS, HTML, CSS, NPM, and VSCode.
        </p>
        <div style={styles.techCardContainer}>
          {techPortfolio.map((tech) => (
            <TechCard name={tech.name} icon={tech.icon}/>
          ))}
        </div>
        <p style={styles.attributionText}>Icons provided by <a href='https://icons8.com'>Icons8.com </a> 
        and <a href='https://www.freepik.com'>Freepik.com</a></p>
      </div>
    </div>
  );
};

export default TechPage;