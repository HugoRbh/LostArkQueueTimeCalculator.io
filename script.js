function Calculator() {
  var s1 = document.getElementById("firstNumber").value;
  var s2 = document.getElementById("secondNumber").value;
  var update_time = 15;
  var queue_delta = s1 - s2;
  var rate_per_second = queue_delta / 15;
  var remaining_time = s2 / rate_per_second;
  var h = Math.floor(remaining_time / 3600);
  var m = Math.floor((remaining_time % 3600) / 60);
  var s = Math.floor((remaining_time % 3600) % 60);
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  document.getElementById("result").innerHTML = hDisplay + mDisplay + sDisplay;
}
