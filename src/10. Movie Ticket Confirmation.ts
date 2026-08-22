type Ticket = {
  name: string;
  movie: string;
  time: string;
};

const formatTicketConfirmation = (ticket: Ticket): string => {
  return `"${ticket.name}'s ticket for ${ticket.movie} is confirmed at ${ticket.time} PM."

`;
};
console.log(
  formatTicketConfirmation({
    name: 'Nabila',
    movie: 'Interstellar',
    time: '9:15 PM',
  }),
);
console.log(
  formatTicketConfirmation({
    name: 'Jamal',
    movie: 'Inception',
    time: '6:00 PM',
  }),
);
