

module.exports = function(time, opts){

  if(!opts){ opts = {}; }
  
  //convert down from milliseconds
  if(opts.milliseconds){ time = time/1000; }

  var hour = 3600;
  var minute = 60;
  var times = [0,0,0];

  times[0] = Math.floor(time / hour);
  times[1] = Math.floor((time - times[0]*hour) / minute);
  times[2] = (time - (times[0]*hour) + (times[2]*minute));

  if(opts.zeropad != false){
    //zeropad
    times.forEach(function(d,index){
      //skip hour
      if(index>0){
        times[index] = (d < 10) ? "0"+d : d;
      }
    });
  }

  if(opts.type=='array'){
    return times;
  }else{
    return times.join(':');
  }

}
