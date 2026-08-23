// Problem 1 — Battery Level Status
function getBatteryStatus(percentage: number): string {
  if (percentage >= 0 && percentage <= 20) {
    return 'Low';
  } else if (percentage >= 21 && percentage <= 50) {
    return 'Medium';
  } else if (percentage >= 51 && percentage <= 90) {
    return 'High';
  } else {
    return 'Full';
  }
}

// Problem 2 — Table Booking Confirmation
type Booking = {
  name: string;
  guests: number;
  time: string;
};
function formatBookingConfirmation(booking: Booking): string {
  return `${booking.name}'s table for ${booking.guests} uests is confirmed at ${booking.time} `;
}

// Problem 3 — Weekly Expense Tracker

function calculateWeeklyTotal(expenses: number[]): number {
  const total = expenses.reduce((sum, num) => sum + num, 0);
  return total;
}

// Problem 4 — Traffic Light Action
type Light = 'red' | 'yellow' | 'green';
function getTrafficAction(light: Light): string {
  if (light === 'red') {
    return 'Stop';
  } else if (light === 'yellow') {
    return 'Slow Down';
  } else if (light === 'green') {
    return 'Go';
  }
  return 'Invaild';
}

// Problem 5 — Quiz Score Summary
type Score = {
  total: number;
  average: number;
};
function getQuizSummary(scores: number[]): Score {
  const total = scores.reduce((sum, num) => sum + num, 0);
  const average = scores.length === 0 ? 0 : total / scores.length;
  return {
    total,
    average,
  };
}
