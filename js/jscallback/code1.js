
// khai báo 1 function hỗ trợ callback khi cung cấp cho người khác để đảm bảo sự linh hoạt của ứng dụng
function myCalculator(num1, num2, myCallback) {

  let sum = num1 + num2;
  myCallback(sum);
}

function callbackExamp(content) {
  document.getElementById("demo").innerHTML = content;
}

// gọi hàm và truyền callback
myCalculator(100,12, callbackExamp);
