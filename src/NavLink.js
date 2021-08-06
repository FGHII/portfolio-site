import React from 'react';

const styles = {
    linkContainer: {
        display: 'flex',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      linkIcon: {
        margin: '0px 5px 0px 30px',
        color: 'white',
        fontSize: 22,
      },
      linkText: {
        color: 'white',
        fontSize: 22,
        fontFamily: 'Lato',
        margin: 15,
      }
}

const NavLink = props => {

  const selectPage = (pageName) => {
    props.sideBarHandler(pageName);
  }

    return (
        <div style={styles.linkContainer} onClick={() => {selectPage(props.name)}}>
        <i style={styles.linkIcon} className={props.icon}></i>
        <p style={styles.linkText}>{props.name}</p>
        </div>
    )
}

export default NavLink;