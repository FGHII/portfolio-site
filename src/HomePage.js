import React from "react";
import background from "./images/abstract-1802971_1920.jpg";

const styles = {
  pageContainer: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    color: "white",
    fontFamily: "Lato",
    margin: "0px 0px 25px 0px",
    fontSize: 38,
  },
  button: {
    border: "none",
    color: "white",
    backgroundColor: "rgba(99,1,145,0.8)",
    textAlign: "center",
    textDecoration: "none",
    fontFamily: "Lato",
    fontSize: 18,
    padding: "15px 15px",
    borderRadius: 10,
    marginTop: 10,
  },
};

const HomePage = (props) => {
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.text}>Hello, my name is Eric.</h1>
      <h1 style={styles.text}>I make things.</h1>
      <button style={styles.button}>
        <i class="fas fa-code"></i> View My Work
      </button>
    </div>
  );
};

export default HomePage;
