import React from "react";
import headerBackground from "./images/computer-1209641_1920.jpg";
import TechCard from "./TechCard";

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
  techCardContainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
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
        <div styles={styles.techCardContainer}>
          <TechCard
            name={"Javascript"}
            icon={"https://img.icons8.com/color/48/000000/javascript--v1.png"}
          />
          <TechCard
            name={"ReactJS"}
            icon={"https://img.icons8.com/officel/80/000000/react.png"}
          />
        </div>
        <p>Icons provided by https://icons8.com</p>
      </div>
    </div>
  );
};

export default TechPage;
