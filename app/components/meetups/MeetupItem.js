"use client";
import { useState } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsHandler = () => {
    setShowDetails((pre) => !pre);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        {showDetails && (
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
        )}
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
