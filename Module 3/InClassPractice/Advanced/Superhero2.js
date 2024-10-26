// Exercise 2: “Team Meeting” - Passing Arguments with apply
// Goal: Learn how to use apply to invoke a function with a specific context and an array of arguments.
// Instructions:
// Create an object teamLeader with a name and a method announceMeeting.
// Write a function startMeeting that logs which team members are attending.
// Use apply to invoke startMeeting in the context of teamLeader, passing an array of team members.



// Here's the class solution example:

const teamLeader = {
    name: "Iron Man"
  };
  
  function startMeeting(teamMembers) {
    console.log(`${this.name} is starting a meeting with: ${teamMembers.join(", ")}`);
  }
  
  const teamMembers = ["Captain America", "Thor", "Hulk"];

  startMeeting.apply(teamLeader, [teamMembers]);