// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//bubbleSort works by having sorted data accumulate at end of array
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //iterate over length of array
    for (let j = 0; j < arr.length - i; j++) {
      //for each iteration we iterate over the whole array and resort
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//selectionSort works by having sorted data accumulate at start of array
function selectionSort(arr) {
  for (let outer = 0; outer < arr.length; outer++) {
    //we loop through whole array
    let swapIdx = outer;
    //in each iteration we initially store current index position

    //at end of each loop there will be a swap with the outer index and the swap idx
    //In cases where we start at the smallest number already, the outer and swap values are the same
    //therefore a swap will not happen

    for (let inner = outer + 1; inner < arr.length; inner++) {
      //we then loop over the array again, only now starting from the index after
      if (arr[inner] < arr[swapIdx]) {
        //if right index smaller than left it will be stored in swapidx
        //for each number we compare it to the swapidx, and try find the smallest number
        //ultimately, the smallest number pos will be in swapidx and be swapped
        swapIdx = inner;
      }
    }
    swap(arr, outer, swapIdx);
    //at the end of each iteration we perform the swap with the outeridx to swapidx
  }
  return arr;
}

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

describe("swap()", () => {
  it("swaps values in an array when provided with 2 indexes.", () => {
    const arr = [13, 2, 4];
    swap(arr, 0, 1);
    assert.deepEqual(arr, [2, 13, 4]);
  });
});

describe("Bubble Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(bubbleSort([5, 1, 3, 7, 6, 2, 4]), [1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("Selection Sort", () => {
  it("sorts an array", () => {
    assert.deepEqual(selectionSort([5, 1, 3, 2, 4]), [1, 2, 3, 4, 5]);
  });
});

mocha.run();
