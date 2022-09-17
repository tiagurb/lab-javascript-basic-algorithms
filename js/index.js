// Iteration 1: Names and Input
//
// Iteration 2: Conditionals


// Iteration 3: Loops


// Iteration 1

let hacker1 = "Tiago"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "José"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length < hacker2.length) {
    console.log(`It seems like the Navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker2.length < hacker1.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Iteration 3.1

let hacker1ToUperCase = "";
for (i = 0; i < hacker1.length; i++) {
    hacker1ToUperCase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1ToUperCase);


// Iteration 3.2
let result = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    result += hacker2[i];
}
console.log(result)

// Iteration 3.3
//A menor do que B em codigo

if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first");
}
else if (hacker1[0] > hacker2[0]) {
    console.log("Yoo, the navigator goes first");
}
else {
    console.log("What?! You both have the same name!")
}



// Bonus 1


let text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac odio pulvinar, bibendum metus ut, sodales tellus. Vestibulum mauris mi, iaculis nec cursus cursus, porttitor tincidunt arcu. Nunc molestie mauris at dolor fermentum, nec pellentesque elit lacinia. Maecenas ultricies est erat, nec consequat ligula semper a. Aliquam tincidunt, justo et consequat ullamcorper, lacus lacus ornare dolor, quis porta mi eros in justo. Fusce at nisl imperdiet, cursus augue ac, laoreet est. Nulla in ullamcorper ipsum, commodo tempus diam. Sed interdum cursus urna sed auctor. Pellentesque ac elementum lorem. Curabitur dui lacus, commodo ut risus at, dapibus luctus odio. Etiam posuere augue eget neque pellentesque molestie. Duis pellentesque nunc venenatis luctus gravida. Integer auctor, erat non ultrices euismod, est velit luctus ligula, eu iaculis lectus neque a sapien. Pellentesque nec tellus dolor. Proin molestie pharetra neque in venenatis. In est ante, vestibulum ac pharetra et, feugiat non nibh. Aliquam sit amet enim erat. Fusce commodo neque ut dolor fringilla gravida. Ut non orci quis neque maximus placerat ut eu velit. Fusce vitae condimentum dolor. Aenean lobortis augue libero, in elementum nunc accumsan et. Sed ac ipsum ipsum. Ut nec tristique est. Integer velit purus, cursus in aliquet vitae, pretium vitae dui. Curabitur ornare velit eget nibh fermentum sodales. Mauris tempus lacus eget purus pretium, vitae consequat justo pellentesque. Phasellus tempus vel lorem auctor pharetra. Pellentesque accumsan lectus erat, ut malesuada lorem elementum vitae. Suspendisse sem lectus, molestie id laoreet sit amet, vulputate et dolor. Proin eu dictum diam. Sed bibendum purus sit amet placerat porta. Aliquam cursus lectus eu est dapibus aliquet. Sed vel mi eu orci tristique ornare. Etiam id sem mollis, varius elit non, scelerisque erat. Integer massa mi, consectetur at blandit suscipit, placerat sed purus. Aenean at ligula pharetra, hendrerit nisl in, consectetur justo. Pellentesque metus massa, ultricies id gravida in, pharetra sed ex. Praesent eget odio volutpat, porttitor ex ut, vestibulum ex. Nulla facilisi. Aenean pharetra diam ante. Vivamus tempus eleifend erat nec tempus. Nam ac eleifend tortor. Mauris eget metus consectetur, porttitor diam quis, maximus risus. Integer sed tortor enim.";

console.log(text.split(" ").length); // Number of words in text
console.log(text.split("et").length + 1); // Number of "et" in text



// Bonus 2


let phraseToCheck;



