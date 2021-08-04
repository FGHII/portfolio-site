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
    return (
        <div style={styles.linkContainer}>
        <i style={styles.linkIcon} class={props.icon}></i>
        <p style={styles.linkText}>{props.name}</p>
        </div>
    )
}

export default NavLink;