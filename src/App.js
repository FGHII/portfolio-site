import React from "react";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import TechPage from "./TechPage";
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
  return (
    <div style={styles.app}>
      <SideBar />
      <TechPage />
    </div>
  );
};

export default App;
