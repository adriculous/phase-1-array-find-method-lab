// code your solution here
// Practice using find() to Isolate a Specific Result

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

function superbowlWin(record) {
  function winningYear(year) {
    if (year.result === "W") {
      return true;
    } else {
      return false;
    }
  }
  const victoryYears = record.find(winningYear);
  if (victoryYears) {
    return victoryYears.year;
  }
}
