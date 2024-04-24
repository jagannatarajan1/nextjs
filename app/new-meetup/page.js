// File: NewMeetup.js (or .jsx)

"use client";
import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const newMeetUpHandler = (meetUpData) => {
    console.log(meetUpData);
  };
  return (
    <div>
      <NewMeetupForm onAddMeetup={newMeetUpHandler} />
    </div>
  );
};

export default NewMeetup;
