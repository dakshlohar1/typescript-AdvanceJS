// Example - 1

const censor = (words: Array<string>) => {
  const filtered: string[] = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};
censor(["oops", "gasp", "shout", "sun"]);

// Example - 2

const startsWithS = (words: string[]) => {
  const filtered: string[] = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.startsWith("s")) filtered.push(word);
  }
  return filtered;
};
startsWithS(["oops", "gasp", "shout", "sun"]);

// Abstraction
const reduce = <T>(
  reducer: (previousValue: T, currentValue: T) => T,
  initial: T,
  arr: T[]
) => {
  let acc = initial;
  for (let i = 0, { length } = arr; i < length; i++) {
    acc = reducer(acc, arr[i]); // unique or random stuff
  }
  return acc;
};
console.log(reduce((acc, curr) => acc + curr, 0, [1, 2, 3]));
