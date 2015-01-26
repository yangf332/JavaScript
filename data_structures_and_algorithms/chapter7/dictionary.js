
function Dictionary() {
    this.dataStore = [];
}

Dictionary.prototype = {
    add : function (key, value) {
        this.dataStore[key] = value;
    },

    find : function (key) {
        return this.dataStore[key];
    },

    remove : function (key) {
        delete this.dataStore[key];
    },

    clear : function () {
        for (var key in this.dataStore) {
            delete this.dataStore[key];
        }
    },

    count : function () {
        var n = 0;
        for (var key in this.dataStore) {
            n ++;
        }

        return n;
    },

    showAll : function () {
        for (var key in this.dataStore) {
            console.log(key + ' -> ' + this.dataStore[key]);
        }
    }
}