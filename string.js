//String Methods
//1. charAt() - Returns the character at the specified index (position)
let str = "HELLO WORLD";
console.log(str.length);
console.log(str.charAt(4)); 
console.log(str.charAt(6));
//2. charCodeAt() - Returns the Unicode of the character at the specified index
let str1 = "JavaScript";    
console.log(str.charCodeAt(0)); 

//3. concat() - Joins two or more strings, and returns a new joined strings
console.log(str.concat(" ", "I am learning JavaScript"));
console.log(str.concat(str1));

//4. endsWith() - Checks whether a string ends with specified string/characters
console.log(str.endsWith("D"));
console.log(str.endsWith("E"));

//5. uppercase() - Converts a string to uppercase letters
console.log(str1.toUpperCase());

//6. lowercase() - Converts a string to lowercase letters
console.log(str.toLowerCase());

//7. includes() - Checks whether a string contains the specified string/characters
console.log(str.includes("W"));
console.log(str.includes("w"));
console.log(str.includes("z"));

//8. indexOf() - Returns the position of the first found occurrence of a specified value in a string
console.log(str.indexOf("W"));

//9. split() - Splits a string into an array of substrings
console.log(str.split("O"));
console.log(str.split(" "));

//10. replace() - Searches a string for a specified value, or a regular expression, 
// and returns a new string where the specified values are replaced
console.log(str.replace("WORLD", "JavaScript"));
console.log(str.replaceAll( "JavaScript"));
let text = "Hello world, world is great!";
console.log(text.replace("world", "JavaScript"));
console.log(text.replaceAll("world", "JavaScript"));

//11.trim() - Removes whitespace from both ends of a string
let str2 = "    Hello      World!    ";
console.log(str2.trim());











