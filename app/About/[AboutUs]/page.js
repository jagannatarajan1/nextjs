import React from "react";

const SingleUser = ({ params: { AboutUs } }) => {
  console.log(AboutUs);
  let userDetails;
  switch (parseInt(AboutUs)) {
    case 1:
      userDetails = <h2>role: "Senior Developer"</h2>;
      break;
    case 2:
      userDetails = <p> role: "Backend Developer"</p>;
      break;
    case 3:
      userDetails = <p> role: "Frontend Developer"</p>;
      break;
    default:
      userDetails = " Developer doesn't exist";
  }
  console.log(userDetails);

  return <div className="text-center mt-80">{userDetails}</div>;
};

export default SingleUser;
