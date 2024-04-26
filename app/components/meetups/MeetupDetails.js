import React, { Fragment } from "react";

export const MeetupDetails = (props) => {
  return (
    <Fragment>
      <img src={props.image} alt={props.alt} />
      <h3 className="text-center p-3 ">{props.title}</h3>
      <address className="text-center">{props.address}</address>
    </Fragment>
  );
};
