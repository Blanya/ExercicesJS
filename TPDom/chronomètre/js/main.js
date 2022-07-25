let time = document.getElementById("time");
let reset = document.getElementById("reset");
let start = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let ms = 0, sec = 0, min = 0, hrs = 0, t;

function convert()
{
    ms++
    if (ms>=100)
    {
        ms = 0;
        sec++;
        if (sec >= 60) 
        {
            sec = 0;
            min++;
            if (min >= 60) 
            {
                min = 0;
                hrs++;
            }
        }
    }
}

function play() 
{
    convert();
    // if(hrs > 9)
    // {
    //     hrs = hrs;
    // }
    //     else
    //     {
    //         hrs = "0" + hrs;
    //     }
    // if(min > 9)
    // {
    //     min = min;
    // }
    // else
    // {
    //     min = "0" + min;
    // }
    // if(sec > 9)
    // {
    //     sec = sec;
    // }
    // else
    // {
    //     sec = "0" + sec;
    // }
    // if(ms > 9)
    // {
    //     if(ms > 99)
    //     {
    //         ms = ms;
    //     }
    //     ms = "0" + ms;
    // }
    // else
    // {
    //     ms = "00" + ms;
    // }
    // time.textContent = hrs + ":" + min + ":" + sec + ":" + ms;

    //same 
    time.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec)
             + ":" + ( ms);
    timer();
}

function stop()
{
    clearTimeout(t);    
    stopBtn.style.display = "none";
    start.style.display = "block";
}

function timer()
{
    t = setTimeout(play, 10);
}

function reload() 
{
    time.textContent = "00:00:00:000";
    clearTimeout(t);
    ms = 0; 
    sec = 0; 
    min = 0; 
    hrs = 0;
    pause = true;
}

function startChrono()
{
    timer();
    start.style.display = "none";
    stopBtn.style.display = "block";
}