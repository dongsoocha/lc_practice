var numUniqueEmails = function (emails) {
  let uniques = {};

  for (let idx = 0; idx < emails.length; idx++) {
    // email string with . ignored, + ignore all till @
    let returnedString = "";
    const email = emails[idx];
    let i = 0;
    let index = email.indexOf("@");
    while (i < index) {
      if (email[i] === "+") {
        i++;
        while (email[i] !== "@") {
          i++;
        }
      } else if (email[i] === ".") {
        i++;
      } else {
        returnedString += email[i];
        i++;
      }
    }
    returnedString += email.slice(index);
    uniques[returnedString] = true;
  }
  return Object.keys(uniques).length;
};

//  faster than 86