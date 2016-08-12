/**
 * Created by win808mac on 8/11/16.
 */

/**StringKatasHomework - Summary: Create a script that contains a set of functions
 * that manipulate strings. */


// function Explode(str) {
//
//     for(var i = 0;i < str.length(-1); i++) {
//
//         var result = str.add(str.charAt(i));
//
//         if (i == str.length(i)) {
//             result = result.add(' ');
//         }
//         else {
//             console.log(result.toString())
//         }
//     }
// }
//
// var explode = new Explode("example");

/* Given a string, return a new string where "not " has
 //been added to the front. However, if the string already begins with "not",
 //return the string unchanged. */

function NotString(str) {

    if (str.length >= 3 && str.startsWith("not")) {
        console.log("Example of Notstring --> " + str);
    }
    else {
        console.log("Example of Notstring --> not " + str);
    }

}
var candy = new NotString("candy");
var silly = new NotString("silly");
var nottingham = new NotString("nottingham");
var belly = new NotString("belly");
var kettlebell = new NotString("kettlebell");
var serious = new NotString("serious");

/* Missing Character - Given a non-empty string and an integer, return a new string where
 //the character at the specified index has been removed. The specified
 //index will be a valid index of in the original string.  */

function MissingCharacter(str, n) {
    var front = str.substring(0, n);
    var back = str.slice(n + 1);


    console.log("Example of MissingCharacter --> " + front + back);

}

console.log("");

MissingCharacter("Helium", 3);
MissingCharacter("olympic", 2);
MissingCharacter("serendipity", 5);
MissingCharacter("platter", 1);
MissingCharacter("healthy", 0);
MissingCharacter("rarely", 4);

/*Given a string, return a new string where the first and last characters
 //have been exchanged. */

function FrontBack(str) {

    if (str.length <= 1) console.log(str);
    var mid = str.slice(1, (str.length - 1));

    console.log("Example of FrontBack --> " + str.charAt(str.length - 1) + mid + str.charAt(0))


}
console.log("");

FrontBack("Javascript");
FrontBack("Chocolate");
FrontBack("abc");
FrontBack("Helium");
FrontBack("settlement");
FrontBack("progress");

/* Given a string, take the last character and return a new string
 //with the last character added at the front and back,
 //so "cat" yields "tcatt". The original string will be length 1 or more. */

function BackAround(str) {
    var last = str.charAt(str.length - 1);
    console.log("Example of BackAround --> " + last + str + last);

}

console.log("");

BackAround("cat");
BackAround("Hello");
BackAround("a");
BackAround("ohyeah");
BackAround("RandomAccess");
BackAround("everyday");

/* Given a string, take the first 2 characters and return the string with the
 //2 characters added at both the front and back, so "kitten" yields"kikittenki".
 //If the string length is less than 2, use whatever characters are there. */

function Front22(str) {
    if (str.length >= 2) {
        var first2 = str.slice(0, 2);
        console.log("Example of Front22 --> " + first2 + str + first2);
    }
    else {
        console.log("Example of Front22 --> " + str);
    }
}

console.log("");
Front22("kitten");
Front22("Ha");
Front22("abc");
Front22("carbon");
Front22("strong");
Front22("Future");

/* Given a string, if the string "del" appears starting at index 1,
//return a string where that "del" has been deleted. Otherwise,
//return the string unchanged. */

function DelDel(str) {
    if ((str.length >= 4) && (str.substring(1,4).localeCompare("del") == 0)) {
        console.log("Example of DelDel --> " + str.slice(0,1) + str.slice(4));

    }else {
        console.log("Example of DelDel --> "+ str);
    }

}

console.log("");

DelDel("adelbc");
DelDel("hellod");
DelDel("Hellodel");
DelDel("Adelesings")
DelDel("SinglikeAdele");
DelDel("idelnclude() isnt a valid function");












