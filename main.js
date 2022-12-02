/**
 *
 * @Genius
 *
 */

"use strict";
let json = `{ "name": "John", "age": 30 }`;

class validationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends validationError {
  constructor(property) {
    super("No property" + property);
    this.name = "PropertyReqiredError";
    this.property = property;
  }
}

//Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  } else if (!user.name) {
    throw new PropertyRequiredError("name");
  }
  return user;
}

try {
  let user = readUser('{"age": 18}');
} catch (err) {
  if (err instanceof validationError) {
    console.log("Invalid date: " + err.message);
    console.log(err.name);
    console.log(err.property);
  } else {
    throw err;
  }
}
