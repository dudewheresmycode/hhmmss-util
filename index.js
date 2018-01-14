

module.exports = function(time, opts){
  if(!opts){ opts = {}; }

  //convert down from milliseconds
  if(opts.milliseconds){ time = time/1000; }

  var hour = 3600;
  var minute = 60;
  var times = [0,0,0];

  times[0] = Math.floor(time / hour);
  times[1] = Math.floor((time - times[0]*hour) / minute);
  times[2] = (time - (times[0]*hour) - (times[1]*minute));

  if(opts.precision && opts.precision > 1){
    times[2] = parseFloat(times[2].toFixed(opts.precision));
  }else{
    times[2] = Math.round(times[2]);
  }
	//remove hour if zero
  if(times[0]==0){ times.shift(); }

  if(opts.zeropad != false){
    //zeropad
    times.forEach(function(d,index){
      //skip hour
      if(times.length>2 && index==0){ return; }
      times[index] = (d < 10) ? "0"+d : d.toString();
    });
  }

  if(opts.type=='array'){
    return times;
  }else{
    return times.join(':');
  }
}
