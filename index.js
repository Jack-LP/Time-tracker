const timeData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const hourDisplays = document.querySelectorAll("#hours-display");
const hourDisplaysPrevious = document.querySelectorAll(
  "#hours-display-previous"
);
const cardTitle = document.querySelectorAll("#card-title-text");

const dailyBtn = document.querySelector("#daily-button");
const weeklyBtn = document.querySelector("#weekly-button");
const monthlyBtn = document.querySelector("#monthly-button");

dailyBtn.addEventListener("click", daily);
weeklyBtn.addEventListener("click", weekly);
monthlyBtn.addEventListener("click", monthly);

function daily() {
  hourDisplays[0].innerHTML = timeData[0].timeframes.daily.current + "hrs";
  hourDisplaysPrevious[0].innerHTML =
    "Yesterday - " + timeData[0].timeframes.daily.previous + "hrs";

  hourDisplays[1].innerHTML = timeData[1].timeframes.daily.current + "hrs";
  hourDisplaysPrevious[1].innerHTML =
    "Yesterday - " + timeData[1].timeframes.daily.previous + "hrs";

  hourDisplays[2].innerHTML = timeData[2].timeframes.daily.current + "hrs";
  hourDisplaysPrevious[2].innerHTML =
    "Yesterday - " + timeData[2].timeframes.daily.previous + "hrs";

  hourDisplays[3].innerHTML = timeData[3].timeframes.daily.current + "hrs";
  hourDisplaysPrevious[3].innerHTML =
    "Yesterday - " + timeData[3].timeframes.daily.previous + "hrs";

  hourDisplays[4].innerHTML = timeData[4].timeframes.daily.current + "hrs";
  hourDisplaysPrevious[4].innerHTML =
    "Yesterday - " + timeData[4].timeframes.daily.previous + "hrs";

  hourDisplays[5].innerHTML = timeData[5].timeframes.daily.current + "hrs";
  hourDisplaysPrevious[5].innerHTML =
    "Yesterday - " + timeData[5].timeframes.daily.previous + "hrs";
}

function weekly() {
  hourDisplays[0].innerHTML = timeData[0].timeframes.weekly.current + "hrs";
  hourDisplaysPrevious[0].innerHTML =
    "Last Week - " + timeData[0].timeframes.weekly.previous + "hrs";

  hourDisplays[1].innerHTML = timeData[1].timeframes.weekly.current + "hrs";
  hourDisplaysPrevious[1].innerHTML =
    "Last Week - " + timeData[1].timeframes.weekly.previous + "hrs";

  hourDisplays[2].innerHTML = timeData[2].timeframes.weekly.current + "hrs";
  hourDisplaysPrevious[2].innerHTML =
    "Last Week - " + timeData[2].timeframes.weekly.previous + "hrs";

  hourDisplays[3].innerHTML = timeData[3].timeframes.weekly.current + "hrs";
  hourDisplaysPrevious[3].innerHTML =
    "Last Week - " + timeData[3].timeframes.weekly.previous + "hrs";

  hourDisplays[4].innerHTML = timeData[4].timeframes.weekly.current + "hrs";
  hourDisplaysPrevious[4].innerHTML =
    "Last Week - " + timeData[4].timeframes.weekly.previous + "hrs";

  hourDisplays[5].innerHTML = timeData[5].timeframes.weekly.current + "hrs";
  hourDisplaysPrevious[5].innerHTML =
    "Last Week - " + timeData[5].timeframes.weekly.previous + "hrs";
}

function monthly() {
  hourDisplays[0].innerHTML = timeData[0].timeframes.monthly.current + "hrs";
  hourDisplaysPrevious[0].innerHTML =
    "Last Month - " + timeData[0].timeframes.monthly.previous + "hrs";

  hourDisplays[1].innerHTML = timeData[1].timeframes.monthly.current + "hrs";
  hourDisplaysPrevious[1].innerHTML =
    "Last Month - " + timeData[1].timeframes.monthly.previous + "hrs";

  hourDisplays[2].innerHTML = timeData[2].timeframes.monthly.current + "hrs";
  hourDisplaysPrevious[2].innerHTML =
    "Last Month - " + timeData[2].timeframes.monthly.previous + "hrs";

  hourDisplays[3].innerHTML = timeData[3].timeframes.monthly.current + "hrs";
  hourDisplaysPrevious[3].innerHTML =
    "Last Month - " + timeData[3].timeframes.monthly.previous + "hrs";

  hourDisplays[4].innerHTML = timeData[4].timeframes.monthly.current + "hrs";
  hourDisplaysPrevious[4].innerHTML =
    "Last Month - " + timeData[4].timeframes.monthly.previous + "hrs";

  hourDisplays[5].innerHTML = timeData[5].timeframes.monthly.current + "hrs";
  hourDisplaysPrevious[5].innerHTML =
    "Last Month - " + timeData[5].timeframes.monthly.previous + "hrs";
}

daily();
