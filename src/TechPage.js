import React from "react";
import headerBackground from "./images/computer-1209641_1920.jpg";
import TechCard from "./TechCard";
import ReactNativeIcon from './images/react-native-custom.png';
import VSCodeIcon from './images/vscode.png';

const styles = {
  pageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
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
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerText}>Technology</h1>
      </div>
      <div style={styles.contentContainer}>
        <h1 style={styles.titleText}>Skills & Technologies</h1>
        <p style={styles.text}>
          I am familiar with: HTML, CSS, Javascript, NodeJS, ExpressJS, ReactJS,
          ReactNative, MongoDB, MySQL, Git, NPM, VSCode, Atom, Heroku,
          MaterialUI
        </p>
        <div style={styles.techCardContainer}>
          <TechCard
            name={"HTML"}
            icon={"https://img.icons8.com/color/48/000000/html-5--v1.png"}
          />
          <TechCard
            name={"CSS"}
            icon={"https://img.icons8.com/color/48/000000/css3.png"}
          />
          <TechCard
            name={"Javascript"}
            icon={"https://img.icons8.com/color/48/000000/javascript--v1.png"}
          />
          <TechCard
            name={"NodeJS"}
            icon={"https://img.icons8.com/color/48/000000/nodejs.png"}
          />
          <TechCard
            name={"ExpressJS"}
            icon={'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg'}
          />
          <TechCard
            name={"ReactJS"}
            icon={"https://img.icons8.com/color/48/000000/react-native.png"}
          />
          <TechCard
            name={"React Native"}
            icon={ReactNativeIcon}
          />
          <TechCard
            name={"MongoDB"}
            icon={"https://img.icons8.com/color/48/000000/mongodb.png"}
          />
          <TechCard
            name={"MySQL"}
            icon={"https://img.icons8.com/ios/50/000000/mysql.png"}
          />
          <TechCard
            name={"Git"}
            icon={"https://img.icons8.com/ios-filled/50/000000/git.png"}
          />
          <TechCard
            name={"NPM"}
            icon={"https://img.icons8.com/color/48/000000/npm.png"}
          />
          <TechCard
            name={"VSCode"}
            icon={VSCodeIcon}
          />
          <TechCard
            name={"Atom"}
            icon={"https://img.icons8.com/ios/50/000000/atom-editor.png"}
          />
          <TechCard
            name={"Heroku"}
            icon={"https://img.icons8.com/color/48/000000/heroku.png"}
          />
          <TechCard
            name={"MaterialUI"}
            icon={"https://img.icons8.com/color/48/000000/material-ui.png"}
          />
        </div>
        <p style={styles.attributionText}>Icons provided by <a href='https://icons8.com'>Icons8.com </a>
         and <a href='https://www.freepik.com'>Freepik.com</a></p>
      </div>
    </div>
  );
};

export default TechPage;