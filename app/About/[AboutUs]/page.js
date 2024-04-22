import React from "react";

const SingleUser = ({ params: { AboutUs } }) => {
  console.log(AboutUs);
  let userDetails;
  switch (parseInt(AboutUs)) {
    case 1:
      userDetails = <h2>name: "Yash", role: "Senior Developer"</h2>;
      break;
    case 2:
      userDetails = <p>name: "Vaibhav", role: "Backend Developer"</p>;
      break;
    case 3:
      userDetails = <p>name: "Suresh", role: "Frontend Developer"</p>;
      break;
    default:
      userDetails = " Developer doesn't exist";
  }
  console.log(userDetails);

  return <div className="text-center">gg{userDetails}</div>;
};

export default SingleUser;
