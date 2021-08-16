import React, { useState } from "react";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import TechPage from "./TechPage";
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
//type 'npm start' to start up the app server!!!!

const styles = {
  app: {
    display: "flex",
    height: '95%',
    width: "95%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 15,
  },
};
const containerStyles = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  borderTopRightRadius: 15,
  borderBottomRightRadius: 15,
  overflowY: 'scroll',
}
//make it always show the scroll bar!
const App = (props) => {
  const [activePage, setActivePage] = useState('Home');

  const sideBarHandler = (pageName) => {
    setActivePage(pageName);
  }

const selectActivePage = (activePage) => {
  const pages = {
    Home: () => {
      return <HomePage />;
    },
    About: () => {
      return <AboutPage containerStyle={containerStyles} />;
    },
    Projects: () => {
      return <ProjectsPage containerStyle={containerStyles} />;
    },
    Tech: () => {
      return <TechPage containerStyle={containerStyles} />
    },
    Contact: () => {
      return <ContactPage containerStyle={containerStyles} />;
    },
    default: () => {
      return <HomePage />;
    }
  };
  return (pages[activePage] || pages['default'])();
}

let content = selectActivePage(activePage);

  return (
    <div style={styles.app}>
      <SideBar sideBarHandler={sideBarHandler}/>
      {content}
    </div>
  );
};

export default App;
