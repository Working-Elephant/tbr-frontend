import { useEffect } from "react";
//import { errorToast } from "../components/shared";
//import AuthService from "../services/user";
// import { Redirect } from "react-router-dom";
// import moment from "moment";
// import AuthService from "../services/auth";
//import { errorToast } from "../components/toast/toast";

export var url = "";
if (process.env.NODE_ENV === "development") {
  url = "";
} else {
  url = window.location.host.split("/")[1];
  if (url) {
    url = `/${window.location.host.split("/")[1]}`;
  } else url = process.env.PUBLIC_URL; /// ADD YOUR CPANEL SUB-URL
}

//Function to validate and return errors for a form
export const checkForm = (formData) => {
  let errorState = {};
  Object.keys(formData).forEach((item) => {
    if (formData[item] === null || formData[item] === "") {
      errorState[item] = "This field is required";
    }
  });
  return errorState;
};
export const convertDate = (dateInput) => {
  const date = moment(dateInput).utc().format("DD-MM-YYYY h:mm:ss a");
  return date;
};
//Function that calculates the from current date
export const setDeadline = (days) => {
  let todayDate = new Date();
  var newDate = new Date(todayDate);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

// Function to structure date ex : Jun 4, 2011;
export const getDateStructured = (date) => {
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let final = monthNames[m] + " " + d + ", " + y;
  return final;
};

// Function to structure date ex: YYYY-MM-DD
// export const setDateForPicker = (rdate) => {
//   let d = rdate.getDate();
//   d < 10 && (d = "0" + d);
//   let m = rdate.getMonth() + 1;
//   m < 10 && (m = "0" + m);
//   let y = rdate.getFullYear();
//   rdate = y + "-" + m + "-" + d;

//   return rdate;
// };

// Set deadlines for projects
// export const setDeadlineDays = (deadline) => {
//   var currentDate = new Date();
//   var difference = deadline.getTime() - currentDate.getTime();
//   var days = Math.ceil(difference / (1000 * 3600 * 24));
//   return days;
// };

//Date formatter function Example : 10-02-2004
// export const dateFormatterAlt = (date, reverse) => {
//   let d = date.getDate();
//   let m = date.getMonth() + 1;
//   let y = date.getFullYear();
//   if (d < 10) d = "0" + d;
//   if (m < 10) m = "0" + m;

//   reverse ? (date = d + "-" + m + "-" + y) : (date = d + "-" + m + "-" + y);
//   return date;
// };

//Date formatter function
export const dateFormatter = (date, reverse, string) => {
  var dateformat = date.split("-");
  //var date = dateformat[1]+"-"+dateformat[2]+"-"+dateformat[0];
  reverse
    ? (date = dateformat[2] + "-" + dateformat[0] + "-" + dateformat[1])
    : (date = dateformat[1] + "-" + dateformat[2] + "-" + dateformat[0]);

  return date;
};

//todays Date
export const todaysDate = new Date();

//current Time
export const currentTime = () => {
  var hours = todaysDate.getHours();
  var minutes = todaysDate.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

//Percentage calculation
export const calcPercentage = (str1, str2) => {
  let result = Number(str2) / Number(str1);
  result = result * 100;
  return Math.floor(result);
};

export const truncate = (str, n) => {
  return str.length > n
    ? str.substr(0, n - 1) + " " + truncate(str.substr(n - 1, str.length), n)
    : str;
};

// export const RedirectAs404 = ({ location }) => (
//   <Redirect to={Object.assign({}, location, { state: { is404: true } })} />
// );

// returns upload url
// export const getUploadParams = () => {
//   return { url: "https://httpbin.org/post" };
// };

// Converts KB to MB
export const bytesToMegaBytes = (bytes) => {
  let result = bytes / (1024 * 1024);
  return result.toFixed(2);
};

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// checks for email validity
export const isValidEmail = (email) =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
export const checkToken = (res) => {
  if (res.status === 401) {
    errorToast(res.statusText);
    return AuthService.logout();
  }
  return;
};

//Function that returns the first or first two letters from a name
export const findUpper = (string) => {
  if (string) {
    let extractedString = [];

    for (var i = 0; i < string.length; i++) {
      if (
        string.charAt(i) === string.charAt(i).toUpperCase() &&
        string.charAt(i) !== " "
      ) {
        extractedString.push(string.charAt(i));
      }
    }
    if (extractedString.length > 1) {
      return extractedString[0] + extractedString[1];
    } else {
      return extractedString[0];
    }
  } else {
    return "U";
  }
};

export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;

    const listener = (event) => {
      // Do nothing if `mousedown` or `touchstart` started inside ref element
      if (startedInside || !startedWhenMounted) return;
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    };

    const validateEventStart = (event) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };

    document.addEventListener("mousedown", validateEventStart);
    document.addEventListener("touchstart", validateEventStart);
    document.addEventListener("click", listener);

    return () => {
      document.removeEventListener("mousedown", validateEventStart);
      document.removeEventListener("touchstart", validateEventStart);
      document.removeEventListener("click", listener);
    };
  }, [ref, handler]);
};
