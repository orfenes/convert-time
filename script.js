var formatTime = function (num) {
  var s = num+"";
  if (num < 10) s = "0" + s;
  return s;
};

var getCalcDuration = function(duration) {
    if(duration === 0) return "0:00:00";
    var hour = Math.floor( duration / 3600 ) % 24,
        minutes = Math.floor( duration / 60 ) % 60,
        seconds = Math.floor( duration % 60 );
    if(hour >= 1) {
        return [hour, formatTime(minutes), formatTime(seconds)].join(":");
    }
    if(minutes >= 1) {
        return [minutes, formatTime(seconds)].join(":");
    }
    return "0:" + formatTime(seconds);
};

var time = getCalcDuration(3600);
console.log('convertendo segundos ->', time);

