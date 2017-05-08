const eventArray = [
  {
    date : 'May 1, 2018 00:00:00',
    title: 'Aikaa wappuun',
    expiredText: 'WAPPUUU!!!',
  },
  {
    date : 'Oct 19, 2017 00:00:00',
    title: 'Aikaa marathoniin',
    expiredText: 'Bussi kulkee!',
  },
];

const activeEvent = eventArray[1]

const pad = num => {
  let s = num + "";
  while (s.length < 2) s = "0" + s;
  return s;
}

const countDownDate = new Date(activeEvent.date).getTime();

const countTime = () => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));

  document.getElementById("eventHeader").innerHTML = activeEvent.title;
  document.getElementById("eventTime").innerHTML = `<span>${days}</span> <span>${hours}</span> <span>${minutes}</span> <span>${seconds}</span>`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("eventTime").innerHTML = `<span>${activeEvent.expiredText}</span>`;
  }
};

const initMenus = () => {
  countTime();
  window.setInterval(() => {
    countTime();
  }, 1000);
}
