export type RunLengthEncodedString = [string, number][];
const CHAR = 0;
const COUNT = 1;

// given a string, return each repeating character and it's run count, for example:
// "aaaabbbbccc" => [["a", 4], ["b", 3], ["c", 3]]
//
// see https://en.wikipedia.org/wiki/Run-length_encoding
export function rle(plain: String): RunLengthEncodedString {
  const result: RunLengthEncodedString = [];
  let current: [string, number];

  for (let char of plain) {
    // If its the same char as before, increment current count
    if (current && current[CHAR] == char) {
      current[COUNT]++;
    }
    // Otherwise, create a new pair and push it to the result array
    else {
      current = [char, 1];
      result.push(current);
    }
  }

  return result;
}
