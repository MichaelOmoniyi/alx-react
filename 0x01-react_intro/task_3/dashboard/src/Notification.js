import React from "react";
import { getLatestNotification } from "./utils";
import "./Notifications.css";

export default function Notifications() {
    return (
      <div className="Notifications">
        <button aria-label="Close" onClick={buttonClicked}>
          Close
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
            style={{ color: "rgb(243, 6, 6)" }}
          ></li>
        </ul>
      </div>
    );
}

function buttonClicked() {
    console.log("Close button has been clicked");
}
