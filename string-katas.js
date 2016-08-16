/**
 * Created by win808mac on 8/11/16.
 */

/**StringKatasHomework - Summary: Create a script that contains a set of functions
 //that manipulate strings. */

/*Given a string, return a new string where spaces have been
 //inserted between each letter. Do not include any additional
 //spaces before the first character or after the last character. */


function explode(str) {

    return str.split('').join(' ');
}

console.log("Example of explode -->> ",explode("example"));
console.log("Example of explode -->> ",explode("cat"));
console.log("Example of explode -->> ",explode("c"));
console.log("Example of explode -->> ",explode("wheel"));
console.log("Example of explode -->> ",explode("wideload"));
console.log("Example of explode -->> ",explode("rolling"));


//* Given a string, return a new string where "not " has
//been added to the front. However, if the string already begins with "not",
//return the string unchanged. *!/*/

function notString(str) {

    if (str.length >= 3 && str.startsWith("not")) {
        return  str;
    }
    else {
        return "not " + str;
    }

}
console.log("");

console.log("Example of Notstring --> ",notString("candy"));
console.log("Example of Notstring --> ",notString("silly"));
console.log("Example of Notstring --> ",notString("nottingham"));
console.log("Example of Notstring --> ",notString("belly"));
console.log("Example of Notstring --> ",notString("kettlebell"));
console.log("Example of Notstring --> ",notString("serious"));

/* Missing Character - Given a non-empty string and an integer, return a new string where
 //the character at the specified index has been removed. The specified
 //index will be a valid index of in the original string.  */

function missingCharacter(str, n) {
    var front = str.substring(0, n);
    var back = str.slice(n + 1);


    return front + back;

}

console.log("");

console.log("Example of MissingCharacter --> ",missingCharacter("Helium", 3));
console.log("Example of MissingCharacter --> ",missingCharacter("olympic", 2));
console.log("Example of MissingCharacter --> ",missingCharacter("serendipity", 5));
console.log("Example of MissingCharacter --> ",missingCharacter("platter", 1));
console.log("Example of MissingCharacter --> ",missingCharacter("healthy", 0));
console.log("Example of MissingCharacter --> ",missingCharacter("rarely", 4));

/*Given a string, return a new string where the first and last characters
 //have been exchanged. */

function frontBack(str) {

    if (str.length <= 1) console.log(str);
    var mid = str.slice(1, (str.length - 1));

    return str.charAt(str.length - 1) + mid + str.charAt(0);


}
console.log("");

console.log("Example of FrontBack --> " ,frontBack("Javascript"));
console.log("Example of FrontBack --> " ,frontBack("Chocolate"));
console.log("Example of FrontBack --> " ,frontBack("abc"));
console.log("Example of FrontBack --> " ,frontBack("Helium"));
console.log("Example of FrontBack --> " ,frontBack("settlement"));
console.log("Example of FrontBack --> " ,frontBack("progress"));

/* Given a string, take the last character and return a new string
 //with the last character added at the front and back,
 //so "cat" yields "tcatt". The original string will be length 1 or more. */

function backAround(str) {
    var last = str.charAt(str.length - 1);
    return last + str + last;

}

console.log("");

console.log("Example of BackAround --> ", backAround("cat"));
console.log("Example of BackAround --> ", backAround("Hello"));
console.log("Example of BackAround --> ", backAround("a"));
console.log("Example of BackAround --> ", backAround("ohyeah"));
console.log("Example of BackAround --> ", backAround("RandomAccess"));
console.log("Example of BackAround --> ", backAround("everyday"));

/* Given a string, take the first 2 characters and return the string with the
 //2 characters added at both the front and back, so "kitten" yields"kikittenki".
 //If the string length is less than 2, use whatever characters are there. */

function front22(str) {
    if (str.length >= 2) {
        var first2 = str.slice(0, 2);
        return first2 + str + first2;
    }
    else {
        return str;
    }
}

console.log("");
console.log("Example of Front22 --> " ,front22("kitten"));
console.log("Example of Front22 --> " ,front22("Ha"));
console.log("Example of Front22 --> " ,front22("abc"));
console.log("Example of Front22 --> " ,front22("carbon"));
console.log("Example of Front22 --> " ,front22("strong"));
console.log("Example of Front22 --> " ,front22("Future"));

/* Given a string, if the string "del" appears starting at index 1,
 //return a string where that "del" has been deleted. Otherwise,
 //return the string unchanged. */

function delDel(str) {
    if ((str.length >= 4) && (str.substring(1, 4).localeCompare("del") == 0)) {
        return str.slice(0, 1) + str.slice(4);

    } else {
        return str;
    }

}

console.log("");

console.log("Example of DelDel --> " ,delDel("adelbc"));
console.log("Example of DelDel --> " ,delDel("hellod"));
console.log("Example of DelDel --> " ,delDel("Hellodel"));
console.log("Example of DelDel --> " ,delDel("Adelesings"));
console.log("Example of DelDel --> " ,delDel("SinglikeAdele"));
console.log("Example of DelDel --> " ,delDel("idelnclude() isnt a valid function"));


/*Given a string, return a string made of the first 2 characters (if present),
 //however include first char only if it is 'o' and include the second
 //only if it is 'z', so "ozymandias" yields "oz". */

function startOz(str) {
    var result = "";
    if (str.length > 1 && (str.charAt(0) == 'o')) {
        result = result + str.charAt(0);
    }
    if (str.length > 2 && (str.charAt(1) == 'z')) {
        result = result + str.charAt(1);
    }
    return result;
}

console.log("");

console.log("Example of StartOz --> " ,startOz("ozymandias"));
console.log("Example of StartOz --> " ,startOz("bzoo"));
console.log("Example of StartOz --> " ,startOz("oxxx"));
console.log("Example of StartOz --> " ,startOz("kitten"));
console.log("Example of StartOz --> " ,startOz("loozy"));
console.log("Example of StartOz --> " ,startOz("Ozzcar"));

function endUp(str) {
    if (str.length <= -3) {
        console.log(str);
    }
    var last3 = str.length - 3;
    var front = str.slice(0, last3);
    var back = str.slice(last3);

    return front + back.toUpperCase();

}

console.log("");

console.log("Example of EndUp --> ", endUp("hello"));
console.log("Example of EndUp --> ", endUp("hi there"));
console.log("Example of EndUp --> ", endUp("rooar"));
console.log("Example of EndUp --> ", endUp("whoop"));
console.log("Example of EndUp --> ", endUp("abc"));










