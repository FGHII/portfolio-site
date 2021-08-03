import React from 'react';

const styles = {
    linkContainer: {
        display: 'flex',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      linkIcon: {
        marginLeft: 25,
        marginRight: 10,
        color: 'white',
        fontSize: 26,
      },
      linkText: {
        color: 'white',
        fontSize: 26,
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