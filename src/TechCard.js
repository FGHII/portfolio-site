import React from "react";

const styles = {
  techCard: {
    width: 90,
    height: 90,
    display: "flex",
    flex: "0 0 auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Lato",
    backgroundColor: "#f5ecf4",
    boxShadow: "1px 1px 5px 0px rgba(0,0,0,0.5)",
    borderRadius: 15,
    margin: 15,
  },
  techIcon: {
    height: 48,
    width: 48,
  },
  techCardText: {
    margin: "5px 0px 2px 0px",
  },
};

const TechCard = (props) => {
  return (
    <div style={styles.techCard}>
      <img style={styles.techIcon} alt={props.name} src={props.icon} />
      <p style={styles.techCardText}>{props.name}</p>
    </div>
  );
};

export default TechCard;
