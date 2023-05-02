// FORK THIS PEN

// 1. Wire up the buttons to the lights

// You'll have to select and store the lights as a variable (although it may help you later to have a reference to all of them at once via the 'light' class)

// You'll have to select and store the buttons as separate variables

// then, add an event listener to each of the buttons

// in the 'handler' (the function you give to the listener) you add a class of 'on' to the relevant light

// Also make the lights go on and off on hover (of the light!!)

// 2. (Extra credit): Have a go at making it so that only one light can be on at one time

// 3. (wild&crazy credit) See if you can set up a timer of some sort to do that automatically (You'll have to add new start and stop buttons to the page)

// const { log } = console;

// document.addEventListener("DOMContentLoaded", () => {

//   const stopButton = document.getElementById("stop");
//   const stopLight = document.querySelector(".light.stop");

//   stopButton.addEventListener("click", (e) => {
//     log("evt ibj", e);
//     stopLight.classList.add("on");
//   });

// });

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

const stopButton = document.getElementById("stop");
const stopLight = document.querySelector(".light.stop");

stopButton.addEventListener("click", () => {
  removeRest(lights);
  stopLight.classList.add("on");
  
});

const cautionButton = document.getElementById("caution");
const cautionLight = document.querySelector(".light.caution");

cautionButton.addEventListener("click", () => {
  removeRest(lights);
  cautionLight.classList.add("on");
  
});

const goButton = document.getElementById("go");
const goLight = document.querySelector(".light.go");

goButton.addEventListener("click", () => {
  removeRest(lights);
  goLight.classList.add("on");
  
});

//  clear button
const lights = [stopLight, cautionLight, goLight];
const resetButton = document.getElementById("reset");


resetButton.addEventListener("click", () => {
  for (const light of lights) {
    light.classList.remove("on");
  }
});


// make one at a time
const removeRest = (lights) => {
  for (const light of lights) {
    light.classList.remove("on");
    
  }
};




// ----------------------------------------------------------------------------------------
// set interval:
const startTraffic = document.getElementById("startTraffic");
const stopTraffic = document.getElementById("stopTraffic");

startTraffic.addEventListener("click", () => {
  changeLights();
});




//  just reminder what's  in the lights array
// const lights = [stopLight, cautionLight, goLight];


function changeLights(lights) {

   for ( i in lights) {
      console.log(lights[i]);
      lights[i].classList.add("on");
    };
    //  if ( i >= lights.lenght ) {
    //   i = 0;
    //  } else {
    //   i++;
    //  }

    
     setInterval(redLight,2000);
     setInterval(yellowLight,4000);
     setInterval(greenLight, 6000); 
  
};

const redLight = () => {
  removeRest(lights);
   document.querySelector(".light.stop").classList.add("on");
   
  
};

const yellowLight = () => {
  removeRest(lights);
  document.querySelector(".light.caution").classList.add("on");
  
};

const greenLight = () => {
  removeRest(lights);
  document.querySelector(".light.go").classList.add("on");
  
};


// Note: -  stop button just resets color temporary, but does not clear interval, don't know how to call for it

stopTraffic.addEventListener("click", () => {
  removeRest(lights);
  clearInterval();
  
  
});




//-----------------------------------------------------------------------------------
//  Also make the lights go on and off on hover (of the light!!)

goLight.addEventListener("mouseover", () => {
  goLight.classList.add("on");
});
goLight.addEventListener("mouseout", () => {
  goLight.classList.remove("on");
});

cautionLight.addEventListener("mouseover", () => {
  cautionLight.classList.add("on");
});
cautionLight.addEventListener("mouseout", () => {
  cautionLight.classList.remove("on");
});

stopLight.addEventListener("mouseover", () => {
  stopLight.classList.add("on");
});
stopLight.addEventListener("mouseout", () => {
  stopLight.classList.remove("on");
});


// -------------------------------------------------------------------------------







