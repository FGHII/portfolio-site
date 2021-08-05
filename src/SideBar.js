import React from "react";
import headshot from "./images/headshot.jpg";
import NavLink from "./NavLink";

const styles = {
  sideBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: "linear-gradient(135deg, #c21a2c 25%, #2F65FF 100%)",
    height: "100%",
    width: 300,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  headerText: {
    margin: 5,
    fontFamily: "Lato",
    color: "white",
  },
  headshot: {
    width: 125,
    height: 125,
    objectFit: "cover",
    objectPosition: "center top",
    borderRadius: 150,
    marginTop: 25,
  },
  externalLinkContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 35,
      justifyContent: 'space-around',
      width: '70%',
  },
  externalLink: {
      color: 'white',
      fontSize: 30,

  }
};

const SideBar = (props) => {
  return (
    <div style={styles.sideBar}>
      <img style={styles.headshot} src={headshot} alt="headshot" />
      <h1 style={{ ...styles.headerText, fontSize: 28 }}>Eric Klosterman</h1>
      <h1 style={{ ...styles.headerText, fontSize: 22 }}>Developer</h1>
      <NavLink name={"Home"} icon={"fab fa-fort-awesome"} />
      <NavLink name={"About"} icon={"fas fa-user"} />
      <NavLink name={"Projects"} icon={"fas fa-project-diagram"} />
      <NavLink name={"Tech"} icon={"fas fa-cog"} />
      <NavLink name={"Contact"} icon={"fas fa-envelope-open"} />
      <div style={styles.externalLinkContainer}>
      <a href='https://www.linkedin.com/in/eric-klosterman/'><i style={styles.externalLink} class="fab fa-linkedin"></i></a>
      <a href='https://github.com/FGHII'><i style={styles.externalLink} class="fab fa-github-square"></i></a>
      </div>
    </div>
  );
};

export default SideBar;
