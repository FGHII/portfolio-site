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
    height: 625,
    width: "95%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 15,
  },
};

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
      return <AboutPage />;
    },
    Projects: () => {
      return <ProjectsPage />;
    },
    Tech: () => {
      return <TechPage />
    },
    Contact: () => {
      return <ContactPage />;
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
