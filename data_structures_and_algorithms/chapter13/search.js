
function swap(arr, x, y)
{
    var tmp = arr[y];
    arr[y] = arr[x];
    arr[x] = tmp;
}

function seqSearch(arr, data)
{
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] == data) {

            if (i > 0) {
                swap(arr, i, i - 1);
            }
            // better 更好的自组织方式
            //if (i > (arr.length * 0.2)) {
            //    swap(arr, i, 0);
            //}

            return i;
        }
    }

    return -1;
}

function findMin(arr)
{
    var min = arr[0];
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function findMax(arr)
{
    var max = arr[0];
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// 二分查找法
function binSearch(arr, data)
{
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        } else if (arr[mid] > data) {
            upperBound = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}