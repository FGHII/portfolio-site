import React from "react";
import headerBackground from './images/industry-3087393_1920.jpg'

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
};

const ProjectsPage = (props) => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1 style={styles.headerText}>Projects</h1>
      </div>
      <div style={styles.contentContainer}>
        <h1 style={styles.titleText}>Projects</h1>
        <p style={styles.text}>
          My projects go here.
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;