function merge(arr1, arr2) {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j >= arr2.length) {
      sorted.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || i >= arr1.length) {
      sorted.push(arr2[j]);
      j++;
    }
  }

  return sorted;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

mocha.setup("bdd");
const { assert } = chai;

describe("mergeSort()", () => {
  it("merge([4, 2, 3, 1] returns  [1, 2, 3, 4]", () => {
    assert.deepEqual(mergeSort([4, 2, 3, 1]), [1, 2, 3, 4]);
  });
  it("mergeSort([5, 1, 7, 4, 6]) returns [1, 4, 5, 6, 7]", () => {
    assert.deepEqual(mergeSort([5, 1, 7, 4, 6]), [1, 4, 5, 6, 7]);
  });
  it("mergeSort([], []) returns []", () => {
    assert.deepEqual(mergeSort([]), []);
  });
});

mocha.run();
