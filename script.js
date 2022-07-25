

function binarny() {
  const now = new Date();
  let hours = now.getHours();
  // let hours = 19;
  hours = hours.toString();
  if (hours < 10) {
    hours = "0" + hours;
  }
  let h = Array.from(hours);
  var h1 = Number(h[0]);
  var h2 = Number(h[1]);
  var h1bin = h1.toString(2);
  var h2bin = h2.toString(2);  
  var h1binSep = Array.from(h1bin);
  var h2binSep = Array.from(h2bin);

  // minuty
  let minutes = now.getMinutes();
  // let minutes = 49;
  minutes = minutes.toString();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let m = Array.from(minutes);
  var m1 = Number(m[0]);
  var m2 = Number(m[1]);
  var m1bin = m1.toString(2);
  var m2bin = m2.toString(2);
  let m1binSep = Array.from(m1bin);
  let m2binSep = Array.from(m2bin);

  // sekundy
  let sec = now.getSeconds();
  sec = Number(sec);
//test
  

  //funkcja, która uzupełnia puste miejsca w tablicy
   //###############################################
// CZWARTA WERSJA UZUPEŁNIANIA PUSTYCH MIEJSC W TABLICY
    var outputArray = [];

  function emptySpaces(a) {
    var innerArray = [];
    for (let i=0; i<a.length; i++) {
      innerArray.push(a[i]);
      // console.log(innerArray)
    }
      var lengthOfBinaryArray = innerArray.length;

      function missingSpaces(b) {
        if(b>3) {
          return [];
        } else {
         outputArray = missingSpaces(b+1);
         outputArray.unshift('0');
         return outputArray;
    
        }
      }
      missingSpaces(lengthOfBinaryArray);
      Array.prototype.push.apply(outputArray, innerArray);
      // outputArray = outputArray.slice(0, 4);
      console.log(outputArray);

      }


  emptySpaces(m1binSep);
  m1binSep = outputArray;
  m1binSep.reverse();
  outputArray = outputArray.slice(0, 4);

  // console.log(outputArray);
  // console.log(m1binSep);

  emptySpaces(m2binSep);
  m2binSep = outputArray;
  m2binSep.reverse();
  outputArray = outputArray.slice(0, 4);

  // console.log(outputArray);

  emptySpaces(h1binSep);
  h1binSep = outputArray;
  h1binSep.reverse();
  outputArray = outputArray.slice(0, 4);

  // console.log(outputArray);

  emptySpaces(h2binSep);
  h2binSep = outputArray;
  h2binSep.reverse();
  outputArray = outputArray.slice(0, 4);

  // console.log(outputArray);


 //###############################################




  //chwytak pierwszej składowej godziny
  var h1bin3 = document.getElementById("h1bin3");
  var h1bin2 = document.getElementById("h1bin2");
  var h1bin1 = document.getElementById("h1bin1");
  var h1bin0 = document.getElementById("h1bin0");

  //chwytak drugiej składowej godziny
  var h2bin3 = document.getElementById("h2bin3");
  var h2bin2 = document.getElementById("h2bin2");
  var h2bin1 = document.getElementById("h2bin1");
  var h2bin0 = document.getElementById("h2bin0");

  //chwytak pierwszej składowej minuty
  var m1bin3 = document.getElementById("m1bin3");
  var m1bin2 = document.getElementById("m1bin2");
  var m1bin1 = document.getElementById("m1bin1");
  var m1bin0 = document.getElementById("m1bin0");

  //chwytak drugiej składowej minuty
  var m2bin3 = document.getElementById("m2bin3");
  var m2bin2 = document.getElementById("m2bin2");
  var m2bin1 = document.getElementById("m2bin1");
  var m2bin0 = document.getElementById("m2bin0");

  //chywytak sekundnika
  var sekundnik = document.querySelector(".seconds");
  var sekundnik2 = document.querySelector(".seconds2");




  var lol = (a,b) => {
    if (a!=0) {
      b.classList.add("clock");
    } else {
      b.classList.remove("clock");
    }
  }



  var zamianaKlas = () => {

    //pierwszy element godziny
   
    lol(h1binSep[0],h1bin0);
    lol(h1binSep[1],h1bin1);
    lol(h1binSep[2],h1bin2);
    lol(h1binSep[3],h1bin3);
  

    //drugi element godziny

    lol(h2binSep[0],h2bin0);
    lol(h2binSep[1],h2bin1);
    lol(h2binSep[2],h2bin2);
    lol(h2binSep[3],h2bin3);


    //pierwszy element minuty

    lol(m1binSep[0],m1bin0);
    lol(m1binSep[1],m1bin1);
    lol(m1binSep[2],m1bin2);
    lol(m1binSep[3],m1bin3);


    //drugi element minuty

    lol(m2binSep[0],m2bin0);
    lol(m2binSep[1],m2bin1);
    lol(m2binSep[2],m2bin2);
    lol(m2binSep[3],m2bin3);


    var sekundy = () => {
      if (sec % 2) {
        sekundnik.classList.add("off");
        sekundnik2.classList.add("off");
      } else {
        sekundnik.classList.remove("off");
        sekundnik2.classList.remove("off");
      }
    };
    sekundy();
  };
  zamianaKlas();
}
// binarny();
setInterval("binarny()", 1000);

