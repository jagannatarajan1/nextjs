import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

export const getting_meetinglist = async () => {
  try {
    const response = await fetch("http://localhost:3000/api", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Fetching the data was unsuccessful");
    }

    const fetchdata = await response.json();
    // console.log(fetchdata);
    return fetchdata;
  } catch (error) {
    console.error("Error while fetching the data", error);
    return []; // Return empty array in case of error
  }
};

async function MeetupList() {
  try {
    const meetinglist = await getting_meetinglist();
    console.log("Data:", meetinglist);

    return (
      <ul className={classes.list}>
        {meetinglist.allMeeting.map((meetup) => (
          <MeetupItem
            key={meetup._id}
            id={meetup._id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
    );
  } catch (error) {
    console.error("Error:", error);
    return null; // Return null or handle the error case appropriately
  }
}

export default MeetupList;
