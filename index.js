//Write your code here



//Needed for the tests to work. Don't modify

const attendee = {
  name: "Alice Smith",
  ticketType: "VIP",
  ticketPrice: 150,
  event: "JavaScript Conference",
  attendeeId: "T001"
}

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
} 

function updateTicketType(attendee, newType) {
  attendee.ticketType = newType;
  return attendee;
}

function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
  return attendee;
}

function removeEventProperty(attendee) {
  delete attendee.event;
  return attendee;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
  return attendee;
}






module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};