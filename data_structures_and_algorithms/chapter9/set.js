
function Set()
{
    this.dataStore = [];
}

Set.prototype = {

    add : function (data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    },

    remove : function (data) {
        var pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    },

    contains : function (data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    },
    // 并集
    union : function (set) {
        var tempSet = new Set();
        for (var i = 0, l = this.dataStore.length; i < l; i ++) {
            tempSet.add(this.dataStore[i]);
        }
        for (var i = 0, l = set.dataStore.length; i < l; i ++) {
            if (!tempSet.contains(set.dataStore[i])) {
                tempSet.dataset.push(set.dataStore[i]);
            }
        }
        return tempSet;
    },
    // 交集
    intersect : function (set) {
        var tempSet = new Set();
        for (var i = 0, l = this.dataStore.length; i < l; i ++) {
            if (set.contains(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet;
    },

    subset : function (set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for (var member in this.dataStore) {
                if (!set.contains(member)) {
                    return false;
                }
            }
        }
        return true;
    },

    difference : function (set) {
        var tempSet = new Set();
        for (var i = 0, l = this.dataStore.length; i < l; i ++) {
            tempSet.add(this.dataStore[i]);
        }
        return tempSet;
    },

    size : function () {
        return this.dataStore.length;
    },

    show : function () {
        return this.dataStore;
    }

}