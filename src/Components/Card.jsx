import React from "react";

const Card = () => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.header}>
        <span style={styles.icon}>💻</span>
        <span style={styles.title}>Remote desktop to</span>
        <a href="#" style={styles.link}>il-terminal-wp1</a>
        <button style={styles.expandButton}>−</button>
      </div>
      <div style={styles.infoRow}>
        <div style={styles.infoItem}>
          <span style={styles.label}>SRC IP</span>
          <span style={styles.value}>24.12.48.203</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>USER ID</span>
          <span style={styles.value}>tom.mclane</span>
        </div>
        <div style={styles.infoItem}>
          <span style={styles.label}>INTERNAL IP</span>
          <span style={styles.value}>24.12.48.203</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    border: "1px solid #ddd",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  icon: {
    fontSize: "20px",
    marginRight: "8px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "bold",
    marginRight: "5px",
  },
  link: {
    fontSize: "14px",
    color: "#0073e6",
    textDecoration: "none",
    marginRight: "auto",
  },
  expandButton: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "16px",
    cursor: "pointer",
    color: "#888",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  infoItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "10px",
  },
  label: {
    fontSize: "12px",
    color: "#888",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  value: {
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default Card;
