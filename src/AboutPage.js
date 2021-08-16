import React from "react";
import headerBackground from "./images/turntable-2154823_1920.jpg";

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

const AboutPage = (props) => {
  return (
    <div style={props.containerStyle}>
      <div style={styles.header}>
        <h1 style={styles.headerText}>About</h1>
      </div>
      <div style={styles.contentContainer}>
        <h1 style={styles.titleText}>About Me</h1>
        <p style={styles.text}>
          My name is Eric Klosterman and I am a Web and App developer. I'm inspired to 
          create digital interactive experiences.  I began
          my coding journey in the Fall of 2020. My current focus is on
          Front-End Development but I also enjoy Back-End Development as well! I
          enjoy solving real-world problems with technical solutions, and
          continuously look to further enrich my coding knowledge in order to
          solve problems of increasing complexity and sophistication.
        </p>
        <p style={styles.text}>
          I enjoy building interactive website and apps primarily using HTML,
          CSS, Node.js, Javascript, React, and React Native.
        </p>
        <p style={styles.text}>
          In addition to coding, I enjoy listening to records and playing music.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
