arr = [3,4,3,1,2];
arr2 = [1,1,5,2,1,1,5,5,3,1,1,1,1,1,1,3,4,5,2,1,2,1,1,1,1,1,1,1,1,3,1,1,5,4,5,1,5,3,1,3,2,1,1,1,1,2,4,1,5,1,1,1,4,4,1,1,1,1,1,1,3,4,5,1,1,2,1,1,5,1,1,4,1,4,4,2,4,4,2,2,1,2,3,1,1,2,5,3,1,1,1,4,1,2,2,1,4,1,1,2,5,1,3,2,5,2,5,1,1,1,5,3,1,3,1,5,3,3,4,1,1,4,4,1,3,3,2,5,5,1,1,1,1,3,1,5,2,1,3,5,1,4,3,1,3,1,1,3,1,1,1,1,1,1,5,1,1,5,5,2,1,5,1,4,1,1,5,1,1,1,5,5,5,1,4,5,1,3,1,2,5,1,1,1,5,1,1,4,1,1,2,3,1,3,4,1,2,1,4,3,1,2,4,1,5,1,1,1,1,1,3,4,1,1,5,1,1,3,1,1,2,1,3,1,2,1,1,3,3,4,5,3,5,1,1,1,1,1,1,1,1,1,5,4,1,5,1,3,1,1,2,5,1,1,4,1,1,4,4,3,1,2,1,2,4,4,4,1,2,1,3,2,4,4,1,1,1,1,4,1,1,1,1,1,4,1,5,4,1,5,4,1,1,2,5,5,1,1,1,5];

multiply = (arr, days, start = 0) => {
  if (start === days) return arr;
  const babies = arr.filter(x => x === 0).map( () => 8);
  const pop = arr.map( x => ( x > 0 ? x - 1 : x = 6 ) );
  pop.push(...babies);
  start++;
  console.log(start, pop.length);
  multiply(pop, days, start);
}

// arr.map( x => ( x > 0 ? x - 1 : x = 6 ) );

// visual part 1
// console.log(multiply(arr, 18));
// console.log(multiply(arr, 80));
// console.log(multiply(arr2, 80));

growth = (arr, days) => {
  count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i <= 8; i++ ) {
    count[i] += arr.filter( x => x == i ).length;
  }

  multiply2(count, days);
}

multiply2 = (count, days, start = 0) => {
  
  if (start === days) return count;
  babies = count.shift();
  count.push(babies);
  count[6] += babies;
  start++;
  console.log(start, count.reduce((a, c) => a + c));
  multiply2(count, days, start);
}

// better part 1 + part 2
// console.log(growth(arr, 80));
console.log(growth(arr2, 80));
// console.log(growth(arr, 256));
console.log(growth(arr2, 256));


