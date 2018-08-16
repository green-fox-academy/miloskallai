// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let changeTo: string = "Every second element should be a star";

function putAsterisk(stringToChange: string): string {
  let tempArray = stringToChange.split("");
  let strToWork = tempArray.join("#");
  
  return clean(strToWork);

  function clean(strToWork) {
    if(strToWork.indexOf("# #") !== -1) {
      strToWork = strToWork.replace("# #", "* ");
      return clean(strToWork);
    } else if (strToWork.indexOf("#") !== -1) {
      strToWork = strToWork.replace("#", "*");
      return clean(strToWork);
    }
    return strToWork;
  }
  
}

console.log(putAsterisk(changeTo));
