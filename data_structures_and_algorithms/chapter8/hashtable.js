
function HashTable() {
    this.table = new Array(137);
}

HashTable.prototype = {

    simpleHash : function (data) {
        var total = 0;
        for (var i = 0, l = data.length; i < l; i ++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    },

    betterHash : function (string) {
        const H = 37;
        var total = 0;
        for (var i = 0, l = string.length; i < l; i ++) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if (total < 0) {
            total += this.table.length - 1;
        }
        console.log(string + ' ==> ' + total);
        return parseInt(total);
    },

    put : function (data) {
        //var pos = this.simpleHash(data);
        var pos = this.betterHash(data);
        this.table[pos] = data;
    },

    showDistro : function () {
        var n = 0;
        for (var i = 0, l = this.table.length; i < l; i ++) {
            if (this.table[i] != undefined) {
                console.log(i + ': ' + this.table[i]);
            }
        }
    }

}