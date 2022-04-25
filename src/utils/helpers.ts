export const shuffle = (array: Array<any>) => {
  for (var n = 0; n < array.length - 1; n++) {
    var k = n + Math.floor(Math.random() * (array.length - n));

    var temp = array[k];
    array[k] = array[n];
    array[n] = temp;
  }

  return array;
};
