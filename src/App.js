import React from 'react';
import headshot from './images/headshot.jpg';
import NavLink from './NavLink';
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
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to bottom right, #9EC2D1, #246EB9)',
    height: '100%',
    width: 250,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  headerText: {
    margin: 5,
    fontFamily: 'Lato',
    color: 'white',
  },
  headshot: {
    width: 125,
    height: 125,
    objectFit: 'cover',
    objectPosition: 'center top',
    borderRadius: 150,
    marginTop: 25,
  },
  
}

const App = props => {
  return (
    <div style={styles.app}>
      <div style={styles.sideBar}>
        <img style={styles.headshot} src={headshot} alt='headshot'/>
        <h1 style={{...styles.headerText, fontSize: 32}}>Eric Klosterman</h1>
        <h1 style={{...styles.headerText, fontSize: 26}}>Developer</h1>
        <NavLink name={'Home'} icon={"fab fa-fort-awesome"}/>
        <NavLink name={'About'} icon={"fas fa-user"}/>
        <NavLink name={'Projects'} icon={"fas fa-project-diagram"}/>
        <NavLink name={'Tech'} icon={"fas fa-cog"}/>
        <NavLink name={'Contact'} icon={"fas fa-envelope-open"}/>
      </div>
    </div>
  );
}

export default App;
