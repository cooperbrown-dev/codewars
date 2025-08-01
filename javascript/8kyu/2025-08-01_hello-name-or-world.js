// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// My solution:
function hello(name) {
  if(!name){
    return "Hello, World!"
  }else{
  let nameLowerCase = name.toLowerCase()
  let nameCapitalized = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1)
  return `Hello, ${nameCapitalized}!`;
    }
}

// Other solution for review:
function hello(name) {
  return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}