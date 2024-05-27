var SortingLibrary = (function() {

    function isUndefined(element) {
      return typeof element === 'undefined';
    };
    function exchangeSort(arr, sortOrder) {
      var comparisons = 0;
      var exchanges = 0;
      for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (!isUndefined(arr[i]) && !isUndefined(arr[j])) {
            comparisons++;
            if ((sortOrder === 'asc' && arr[i] > arr[j]) || (sortOrder === 'desc' && arr[i] < arr[j])) {
              [arr[i], arr[j]] = [arr[j], arr[i]];
              exchanges++;
            }
          }
        }
      }
      console.log('Sort array:',arr,'Exchange sort comparisons:', comparisons, 'exchanges:', exchanges);
    };
    function selectionSort(arr, sortOrder) {
      var comparisons = 0;
      var exchanges = 0;
      for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
           comparisons++;
          if (!isUndefined(arr[j]) && ((sortOrder === 'asc' && arr[j] < arr[min]) || (sortOrder === 'desc' && arr[j] > arr[min]))) {
            min= j;
          }        
        }
        if (!isUndefined(arr[min])) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
          exchanges++;
        }
      }
      console.log('Sort array:',arr,'Selection sort comparisons:', comparisons, 'exchanges:', exchanges);
  };
  function insertionSort(arr, sortOrder) {
    var comparisons = 0;
    var exchanges = 0;
    for (var i = 1; i < arr.length; i++) {
      var k = arr[i];
      var j = i - 1;
      while (j >= 0 && !isUndefined(arr[j]) && ((sortOrder === 'asc' && arr[j] > k) || (sortOrder === 'desc' && arr[j] < k))) {
        comparisons++;
        arr[j + 1] = arr[j];
        j = j - 1;
        exchanges++;
      }
      arr[j + 1] = k;
    }
    console.log('Sort array:',arr,'Insertion sort comparisons:', comparisons, 'exchanges:', exchanges);
  };
  function shellSort(arr, sortOrder) {
    var comparisons = 0;
    var exchanges = 0;
    var n = arr.length;
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
      for (var i = gap; i < n; i++) {
        var temp = arr[i];
        var j = i;
        while (j >= gap && !isUndefined(arr[j - gap]) && ((sortOrder === 'asc' && arr[j - gap] > temp) || (sortOrder === 'desc' && arr[j - gap] < temp))) {
          comparisons++;
          arr[j] = arr[j - gap];
          j -= gap;
          exchanges++;
        }
        arr[j] = temp;
      }
    }
    console.log('Sort array:',arr,'Shell sort comparisons:', comparisons, 'exchanges:', exchanges);
  };

function quickSort(arr, sortOrder) {
  function partition(arr, low, high) {
    var length = arr[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
      if (!isUndefined(arr[j]) && ((sortOrder === 'asc' && arr[j] < length) || (sortOrder === 'desc' && arr[j] > length))) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function quickSortRecursive(arr, low, high) {
    if (low < high) {
      var pi = partition(arr, low, high);
      quickSortRecursive(arr, low, pi - 1);
      quickSortRecursive(arr, pi + 1, high);
    }
  }

  var comparisons = 0;
  var exchanges = 0;
  quickSortRecursive(arr, 0, arr.length - 1);
  console.log('Sort array:',arr,'Quick sort comparisons:', comparisons, 'exchanges:', exchanges);
}

return {
  exchangeSort: exchangeSort,
  selectionSort: selectionSort,
  insertionSort: insertionSort,
  shellSort: shellSort,
  quickSort: quickSort
};
  })();
var array = [];
        for (var i = 0; i < 100; i++) {
            array.push(Math.floor(Math.random() * 1000));
        }

        // Вивід початкового масиву
        console.log("Нерозріджений масив:", array);

        // Виклик функцій сортування з бібліотеки
        SortingLibrary.exchangeSort(array, 'asc');
        SortingLibrary.selectionSort(array, 'asc');
        SortingLibrary.insertionSort(array, 'asc');
        SortingLibrary.shellSort(array, 'asc');
        SortingLibrary.quickSort(array, 'asc');
        
        const sparseArray = Array.from({ length: 100 }, (_, index) => index % 2 === 0 ? index : undefined);
        console.log("Розріджений масив:", sparseArray);
        SortingLibrary.exchangeSort(sparseArray.filter(el => el !== undefined), 'asc');
        SortingLibrary.selectionSort(sparseArray.filter(el => el !== undefined), 'desc');
        SortingLibrary.insertionSort(sparseArray.filter(el => el !== undefined), 'asc');
        SortingLibrary.shellSort(sparseArray.filter(el => el !== undefined), 'desc');
        SortingLibrary.quickSort(sparseArray.filter(el => el !== undefined), 'desc');