var angle = 0;

setInterval(function() {
  var date = new Date();
  var time = {
    hour: date.getHours(),
    min: date.getMinutes(),
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };

  var h = time.hour;
  var minute = time.min;
  var m_ten = parseInt(time.min / 10);
  var apm = 0;

  if (h > 12) {
    h -= 12;
    apm = 1;
  }
  if (h < 10) {
    $('#hour').text("0" + h);
  } else {
    $('#hour').text(h);
  }

  if (minute < 10) {
    $('#minute').text("0" + minute);
  } else {
    $('#minute').text(minute);
  }

  $('.year').text(time.year);

  if (time.month < 10) {
    $('.month').text("0" + time.month);
  } else {
    $('.month').text(time.month);
  }

  if (time.day < 10) {
    $('.day').text("0" + time.day);
  } else {
    $('.day').text(time.day);
  }

 h = time.hour;
  var m1 = parseInt(time.min / 10);
  var m2 = time.min % 10;

  if (h >= 18 || h <= 6) {
    angle = 90 + h * 15;
  } else {
    h -= 6;
    angle = 180 + h * 15;
  }

  if (m1 >= 1 && m1 <= 5) {
    angle += m1 * 2.5;
  }

  if (apm == 1) {
    $(".P").css("display", "block");
    $(".M").css("display", "block");
    $(".A").css("display", "none");
  }
  else {
    $(".M").css("display", "block");
    $(".A").css("display", "block");
    $(".P").css("display", "none");
  }


  $(".sun_moon").css("background", "linear-gradient(to left, #f1f1f1, skyblue , black)");
  angle += m2 * 0.25;

  $(".moon").css("transform", "rotate(-" + angle + "deg)");
  $(".sun_moon").css("transform", "rotate(" + angle + "deg)");
}, 500);
