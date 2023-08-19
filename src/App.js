import "./App.css";
import { useState } from "react";

const notsArray = [
  {
    id: 1,
    image: "./images/1660170815290.jpg",
    name: "Giorgi Julakidze",
    info: "hello, I am George and i love react",
    company: "Georgia",
    profile: "a",
    day: "1m ago",
    active: true,
  },
  {
    id: 2,
    image: "./images/avatar-angela-gray.webp",
    name: "Angela Gray",
    info: "followed you",
    day: "5m ago",
    active: true,
  },
  {
    id: 3,
    image: "./images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    info: "has joined your",
    company: "Chess Club",
    day: "1 day ago",
    active: true,
  },
  {
    id: 4,
    image: "./images/avatar-anna-kim.webp",
    name: "Rizky Hasanuddin",
    info: "sent you a private message",
    sms: `Hello, thanks for setting up the Chess Club. 
    I've been a member for a few weeks now and 
    I'm already having lots of fun and improving my game.`,
    day: "5 days ago",
    active: true,
  },
  {
    id: 5,
    image: "./images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    info: "reacted to your recent post",
    company: "5 end-game strategies to increase your win rate",
    day: "2 weeks ago",
    imageTwo: "./images/image-chess.webp",

    active: true,
  },

  {
    id: 6,
    image: "./images/avatar-rizky-hasanuddin.webp",
    name: "anna kim",
    info: "reacted to your recent post",
    company: "chess club",
    day: "1m ago",
    active: true,
  },
];

function App() {
  const [arr, setArr] = useState(notsArray);
  const [notification, setNotification] = useState(notsArray.length);
  const toggleActive = (id) => {
    const updatedArr = arr.map((item) =>
      item.id === id ? { ...item, active: false } : item
    );
    setArr(updatedArr);
  };

  const toggleAllActive = () => {
    const updatedArr = arr.map((item) => ({ ...item, active: false }));
    setArr(updatedArr);
    setNotification(0);
  };

  return (
    <div className="app">
      <div className="title">
        <div className="notificationBox font800">
          <span className="">Notifications</span>
          <div className="notificationNumber">{notification}</div>
        </div>
        <button className="font500 button" onClick={toggleAllActive}>
          Mark all as read
        </button>
      </div>

      {/* information  */}
      {arr.map((item) => (
        <div
          className={`box ${item.active ? "backColor" : ""}`}
          key={item.id}
          onClick={() => {
            if (item.active === true) {
              setNotification(notification - 1);
            }
            toggleActive(item.id);
          }}
        >
          <div className="imgBox">
            <img src={item.image} alt="avatar" className="image" />
          </div>

          <div className="boxAndDayInformation">
            <div className="boxInformationBox">
              <span className="name">{item.name}</span>
              <span className="info">{item.info}</span>
              <a
                href={`${item.profile ? item.profile : "a"}`}
                className="company"
              >
                {item.company}
              </a>
              <div className={`${!item.active ? undefined : "redBall"}`}></div>
            </div>
            <p className="day">{item.day}</p>
            <div className={`info ${item.id === 4 ? "sms" : undefined}`}>
              {item.sms}
            </div>
          </div>
          {item.id === 5 ? (
            <img
              src={item.imageTwo ? item.imageTwo : null}
              alt="avatarooo"
              className="imageTwo"
            />
          ) : null}

          {/* <div className="imageTwoBox">
            <img
              src={item.imageTwo ? item.imageTwo : null}
              alt="avatarooo"
              className="imageTwo"
            />
          </div> */}
          {/* მოკლედ სურათი ჩასვი, რომელიც მე–5 ობიექტშია, მასივის ცხრილში */}
        </div>
      ))}
    </div>
  );
}

export default App;
