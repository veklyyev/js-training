var artist = 'Reverb King';
var track = "Just Don't";

var song = artist + track;

for (var x = 0; x < song.length; x++) {
    console.log(song[x]);
}

for(x of new Array(song)) {
    console.log(x);
}

let result = 1;
for (let i = 1; i <= 10; i++) {
  result *= i;
}
console.log(result);

var start = 1;
var factorial = 1;
switch(start) {
    case 1: factorial*=1; 
    case 2: factorial*=2;
    case 3: factorial*=3;
    case 4: factorial*=4;
    case 5: factorial*=5;
    case 6: factorial*=6;
    case 7: factorial*=7;
    case 8: factorial*=8;
    case 9: factorial*=9;
    case 10: factorial*=10;
}
console.log(factorial);