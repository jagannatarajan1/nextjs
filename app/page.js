// IndexPage.js
import React from "react";
import MeetupList from "./components/meetups/MeetupList";

const data = [
  {
    id: "m1",
    image:
      "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg", // Direct image URL
    title: "Car",
    address: "Chennai",
  },
  {
    id: "m2",
    image: "https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg",
    title: "Car",
    address: "Chennai",
  },
];

const IndexPage = () => {
  return <MeetupList meetups={data} />;
};

export default IndexPage;
