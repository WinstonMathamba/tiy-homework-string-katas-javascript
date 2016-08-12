/**
 * Created by win808mac on 8/11/16.
 */

/**StringKatasHomework - Summary: Create a script that contains a set of functions
 //that manipulate strings. */

/*Given a string, return a new string where spaces have been
 //inserted between each letter. Do not include any additional
 //spaces before the first character or after the last character. */


function Explode(str) {

    console.log("Example of Explode --> " + str.split('').join(' '));
}

Explode("example");
Explode("cat");
Explode("c");
Explode("wheel");
Explode("wideload");
Explode("rolling");


//* Given a string, return a new string where "not " has
//been added to the front. However, if the string already begins with "not",
//return the string unchanged. *!/*/

function NotString(str) {

    if (str.length >= 3 && str.startsWith("not")) {
        console.log("Example of Notstring --> " + str);
    }
    else {
        console.log("Example of Notstring --> not " + str);
    }

}
console.log("");

NotString("candy");
NotString("silly");
NotString("nottingham");
NotString("belly");
NotString("kettlebell");
NotString("serious");

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
    if ((str.length >= 4) && (str.substring(1, 4).localeCompare("del") == 0)) {
        console.log("Example of DelDel --> " + str.slice(0, 1) + str.slice(4));

    } else {
        console.log("Example of DelDel --> " + str);
    }

}

console.log("");

DelDel("adelbc");
DelDel("hellod");
DelDel("Hellodel");
DelDel("Adelesings")
DelDel("SinglikeAdele");
DelDel("idelnclude() isnt a valid function");


/*Given a string, return a string made of the first 2 characters (if present),
 //however include first char only if it is 'o' and include the second
 //only if it is 'z', so "ozymandias" yields "oz". */

function StartOz(str) {
    var result = "";
    if (str.length > 1 && (str.charAt(0) == 'o')) {
        result = result + str.charAt(0);
    }
    if (str.length > 2 && (str.charAt(1) == 'z')) {
        result = result + str.charAt(1);
    }
    console.log("Example of StartOz --> " + result);
}

console.log("");

StartOz("ozymandias");
StartOz("bzoo");
StartOz("oxxx");
StartOz("kitten");
StartOz("loozy");
StartOz("Ozzcar");

function EndUp(str) {
    if (str.length <= -3) {
        console.log(str);
    }
    var last3 = str.length - 3;
    var front = str.slice(0, last3);
    var back = str.slice(last3);

    console.log("Example of EndUp --> " + front + back.toUpperCase());

}

console.log("");

EndUp("hello");
EndUp("hi there");
EndUp("rooar");
EndUp("whoop");
EndUp("abc");










