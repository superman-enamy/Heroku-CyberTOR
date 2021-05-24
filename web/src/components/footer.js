import React from "react";

function footer() {
  return (
    <div className="nav">
      <div className="content">
        <div className="nav-logo">
          <h1 className="h4 m-0">Copyright @ 2020. <a className="alpha" href="https://tx.me/B0RNTOLE4RN">CyberTOR-Beta</a></h1>
        </div>
        <div className="nav-links" style={{flexDirection: "row"}}>
          <a className="btn primary" href="https://tx.me/@enamyh" style={{color: "#f7fafc"}}>
    <span className="bnt-icon">
        <ion-icon name="person" />
      </span> Devloper
    </a>
     <a className="btn" href="https://tx.me/B0RNTOLE4RN" style={{color: "#f7fafc"}}>
    <span className="bnt-icon">
        <ion-icon name="send" />
      </span> Telegram Channel
    </a>
        </div>
      </div>
    </div>
  );
}

export default footer;
