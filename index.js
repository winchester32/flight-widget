const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "NAIROBI",
    flight: "NRB 456",
    gate: "A 2",
    remarks: "DELAYED",
  },
  {
    time: "09:28",
    destination: "AMSTERDAM",
    flight: "AM 486",
    gate: "B 5",
    remarks: "ON TIME",
  },
  {
    time: "10:34",
    destination: "JAKARTA",
    flight: "JK 890",
    gate: "C 7",
    remarks: "CANCELLED",
  },
  {
    time: "13:47",
    destination: "MUMBAI",
    flight: "MB 890",
    gate: "D 3",
    remarks: "BOARDING",
  },
  {
    time: "14:50",
    destination: "DUBLIN",
    flight: "DB 890",
    gate: "E 9",
    remarks: "DELAYED",
  },
];

const destinations = ["TOKYO", "SHANGHAI", "LONDON", "BEIRUT"];
const remarks = ["ON TIME", "DELAYED", "BOARDING", "CANCELLED"];
let hour = 15;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");
    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");

        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 200 * index);
      }

      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}
populateTable();

function generateRandomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber(maxNumber) {
  const number = "0123456789";
  if (maxNumber) {
    const newNumber = number.slice(0, maxNumber + 1);
    return newNumber.charAt(Math.floor(Math.random() * maxNumber.length));
  }
  return number.charAt(Math.floor(Math.random() * number.length));
}

function generateTime() {
  let displayHour = hour;
  if (hour < 24) {
    hour++;
  }
  if (hour >= 24) {
    hour = 1;
    displayHour = hour;
  }
  if (hour < 10) {
    displayHour = "0" + hour;
  }
  return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber();
}

function shuffle() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinations[Math.floor(Math.random() * destinations.length)],
    flight:
      generateRandomLetter() +
      generateRandomLetter() +
      "" +
      generateRandomNumber(),
    gate: generateRandomLetter() + "" + generateRandomNumber(),
    remarks: remarks[Math.floor(Math.random() * remarks.length)],
  });

  tableBody.textContent = "";
  populateTable();
}

setInterval(shuffle, 2000);
