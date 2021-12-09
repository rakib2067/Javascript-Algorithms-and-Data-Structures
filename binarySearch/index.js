// Implement a Binary Search Algorithm that searches a Sorted Array
// for the provided value.
// The Binary Search Algorithm will return the index of value found, or -1 if not found.

//Binary search has time complexity of O(log n) for sorted arrays
const binarySearch = (sortedArr, value) => {
  let leftPointer = 0;
  //left pointer will always start at the first value of the array
  let rightPointer = sortedArr.length - 1;
  //will always start at the last value in the array

  while (leftPointer <= rightPointer) {
    //this while loop checks that the value is within the array

    let middleIndex = Math.floor((leftPointer + rightPointer) / 2);
    //we get the middleindex by either using Floor or Ceil, and dividing the sum of left and right pointers

    let middleValue = sortedArr[middleIndex];
    //middle Index value

    if (middleValue === value) {
      return middleIndex;
      //the value is within the array and we return its index
    } else if (middleValue < value) {
      leftPointer = middleIndex + 1;

      //if the middle value is smaller than the value, then we reset leftpointer to the position after the middleindex
      //on reset this will cause the middle index calculation to target the upper half the array
    } else {
      rightPointer = middleIndex - 1;

      //if the middle value is larger than the value, then we reset rightPointer to the position before the middleindex
      //on reset this will cause the middle index calculation to target the bottom half the array
    }
  }
  //if the value is not within the array we return -1
  //this will be indicated by the leftpointer being greater than the right pointer
  return -1;
};

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

const sortedNumsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("binarySearch()", () => {
  it("returns correct index on sortedArray with just one number", () => {
    assert.equal(binarySearch([5], 5), 0);
    assert.equal(binarySearch([15], 5), -1);
  });
  it("works on sorted array with 10 numbers", () => {
    assert.equal(binarySearch(sortedNumsArray, 10), 10);
    assert.equal(binarySearch(sortedNumsArray, 0), 0);
    assert.equal(binarySearch(sortedNumsArray, 5), 5);
    assert.equal(binarySearch(sortedNumsArray, 7), 7);
    assert.equal(binarySearch(sortedNumsArray, 1337), -1);
  });
});

mocha.run();
