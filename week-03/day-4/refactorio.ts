function refactorio(num: number): number {
  if (1 < num) {
    return num * refactorio(num - 1);
  }
  return num;
}

console.log(refactorio(5));
