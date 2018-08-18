function findSubStr(toCheck: string, stringToFind: string) {
  let mainString = toCheck.toLowerCase();
  let toFind = stringToFind.toLowerCase();

  return mainString.indexOf(toFind);
}

console.log(findSubStr("horse", "rs"));
