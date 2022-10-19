import React from "react";
import "../../components/app/App.css";
const FooterComponent = () => {
  return (
    <div>
      <div className="footer">
        <p> Web page designed using React Js | {new Date().getFullYear()}</p>
        <p> by Serkan Sonmez</p>
      </div>
    </div>
  );
};

export default FooterComponent;
