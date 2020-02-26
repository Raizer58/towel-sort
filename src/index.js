
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix){
    if (matrix.length > 1){
      return matrix.reduce((acc, arg, index)=> index % 2 ? acc.concat(arg.reverse()) : acc.concat(arg),[]).flat();
    };
  };
  return [];
}
