import React from "react";
import Link from "next/link";

const About = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <div className="mt-28">
      {details.map((detail) => (
        <li key={detail.id} className=" text-center ">
          <Link href={`/About/${detail.id}`}>{detail.name}</Link>
        </li>
      ))}
    </div>
  );
};
export default About;
