let date = parseInt(prompt("Please enter date: "));
let month = parseInt(prompt("Please enter month: "));
let year = parseInt(prompt("Please enter year: "));
let flagDate = false;
let flagMonth = true;
let flagYear = false;

// Kiểm tra ngày tháng năm xem có hợp lệ không
if (month < 0 || month > 12) {
  let flagMonth = false;
  console.log("month is error");
} else if (date > 31 || date < 0) {
  console.log("date is error");
} else {
  test();
  if (test() == true) {
    switch (month) {
      case 2:
        if (date > 29 || date < 0) {
          console.log("date is error");
        } else {
          console.log("correct");
          flagDate = true;
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (date > 31 || date < 0) {
          console.log("date is error");
        } else {
          flagDate = true;
          console.log("correct");
        }
        break;
      default:
        if (date > 30 || date < 0) {
          console.log("date is error");
        } else {
          flagDate = true;
          console.log("correct");
        }
    }
  } else {
    switch (month) {
      case 2:
        if (date > 28 || date < 0) {
          console.log("date is error");
        } else {
          console.log("correct");
          flagDate = true;
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (date > 31 || date < 0) {
          console.log("date is error");
        } else {
          flagDate = true;
          console.log("correct");
        }
        break;
      default:
        if (date > 30 || date < 0) {
          console.log("date is error");
        } else {
          flagDate = true;
          console.log("correct");
        }
    }
  }
}
function test() {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
// console.log(flagDate);
// console.log(flagMonth);

// xác định ngày tiếp theo

let showDate;
let showMonth = month;
let showYear = year;

if (flagDate == true && flagMonth == true) {
  if (test() == true) {
    switch (month) {
      case 2:
        if (date < 28) {
          showDate = date + 1;
        } else {
          showDate = 1;
          showMonth = month + 1;
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (date < 30) {
          showDate = date + 1;
        } else {
          if (month == 12) {
            showDate = 1;
            showMonth = 1;
            showYear = year + 1;
          } else {
            showDate = 1;
            showMonth = month + 1;
          }
        }
        break;
      default:
        if (date < 29) {
          showDate = date + 1;
        } else {
          showDate = 1;
          showMonth = month + 1;
        }
    }
  } else {
    switch (month) {
      case 2:
        if (date < 27) {
          showDate = date + 1;
        } else {
          showDate = 1;
          showMonth = month + 1;
        }
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if (date < 30) {
          showDate = date + 1;
        } else {
          if (month == 12) {
            showDate = 1;
            showMonth = 1;
            showYear = year + 1;
          } else {
            showDate = 1;
            showMonth = month + 1;
          }
        }
        break;
      default:
        if (date < 29) {
          showDate = date + 1;
        } else {
          showDate = 1;
          showMonth = month + 1;
        }
    }
  }
}

console.log("ngày bạn nhập: ", date, "/", month, "/", year);
console.log("ngày tiếp theo: ", showDate, "/", showMonth, "/", showYear);
// console.log("ngày", date);
// console.log("tháng", month);
// console.log("năm", year);
// console.log("ngày tiếp theo", showDate);
// console.log("ngày tiếp theo", showMonth);
// console.log("ngày tiếp theo", showYear);
