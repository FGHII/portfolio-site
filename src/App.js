import React from 'react';
import background from './images/abstract-1802971_1920.jpg';
import SideBar from './SideBar';
//type 'npm start' to start up the app server!!!!

const styles = {
  app: {
    display: 'flex',
    backgroundColor: 'red',
    height: 600,
    width: '90%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: 15,
  }, 
  contentContainer: {
    backgroundImage: `url(${background})`,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontFamily: 'Lato',
  }
}

const App = props => {
  return (
    <div style={styles.app}>
      <SideBar />
      <div style={styles.contentContainer}>
        <h1 style={styles.text}>Hello, my name is Eric.</h1>
        <h1 style={styles.text}>I make things.</h1>
      </div>
    </div>
  );
}

export default App;
