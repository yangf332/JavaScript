
function CArray(numElements)
{
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    for (var i = 0; i < numElements; i ++) {
        this.dataStore[i] = i;
    }
}

CArray.prototype = {

    setData : function () {
        for (var i = 0; i < this.numElements; i ++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    },

    clear : function () {
        for (var i = 0; i < this.numElements; i ++) {
            this.dataStore[i] = 0;
        }
    },

    toString : function () {
        var retstr = '';
        for (var i = 0; i < this.dataStore.length; i ++) {
            retstr += this.dataStore[i] + ' ';
            if (i > 0 & i % 10 == 0) {
                retstr += "\n";
            }
        }
        return retstr;
    },

    swap : function (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    },

    // 冒泡排序
    bubbleSort : function () {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; outer --) {
            for (var inner = 0; inner <= outer - 1; inner ++) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(this.dataStore, inner, inner + 1);
                }
            }
            console.log(this.toString());
        }
    },

    // 选择排序
    selectionSort : function () {
        var min, temp;
        for (var outer = 0; outer < this.dataStore.length - 1; outer ++) {
            min = outer;
            for (var inner = outer + 1; inner < this.dataStore.length; inner ++) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }

            }
            if (min != outer) {
                this.swap(this.dataStore, outer, min);
            }
            console.log(this.toString());
        }
    },

    // 插入排序
    insertionSort : function () {
        var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length - 1; outer ++) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                inner --;
            }
            this.dataStore[inner] = temp;
            console.log(this.toString());
        }
    }

}