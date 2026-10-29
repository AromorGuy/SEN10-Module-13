/**
 * Builds a greeting based on the time of day, plus a countdown to the weekend.
 * @param {Date} date - The moment to build the greeting for.
 * @returns {string} e.g. "Good morning! 3 days until the weekend."
 */
function buildVisitGreeting(date) {
  const hour = date.getHours();
  let timeOfDay;
  if (hour < 12) {
    timeOfDay = "Good morning";
  } else if (hour < 18) {
    timeOfDay = "Good afternoon";
  } else {
    timeOfDay = "Good evening";
  }

  // getDay(): 0 = Sunday, 6 = Saturday
  const day = date.getDay();
  let weekend;
  if (day === 0 || day === 6) {
    weekend = "It's the weekend!";
  } else {
    const daysLeft = 6 - day;
    weekend = `${daysLeft} day${daysLeft === 1 ? "" : "s"} until the weekend.`;
  }

  return `${timeOfDay}! ${weekend}`;
}

// Run on page load in the browser.
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("greeting");
    if (el) {
      el.textContent = buildVisitGreeting(new Date());
    }
  });
}

// Export for Jest (Node); ignored in the browser.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { buildVisitGreeting };
}
