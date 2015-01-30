
function Vertex (label)
{
    this.label = labe;
}

function Graph (v)
{
    this.vertices = v;
    this.edges = 0;
    this.edgeTo = [];
    this.adj = [];
    for (var i = 0; i < this.vertices; i ++) {
        this.adj[i] = [];
        //this.adj[i].push('');
    }
    this.marked = [];
    for (var i = 0; i < this.vertices; i ++) {
        this.marked[i] = false;
    }
}

Graph.prototype = {

    addEdge : function (v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    },

    showGraph : function () {
        for (var i = 0; i < this.vertices; i ++) {
            var arr = [];
            arr.push(i + ' ->');
            for (var j = 0; j < this.vertices; j ++) {
                if (this.adj[i][j] != undefined) {
                    arr.push(this.adj[i][j] + ' ');
                }
            }
            console.log(arr.join(' '));
        }
    },

    dfs : function (v) {
        this.marked[v] = true;
        if (this.adj[v] != undefined) {
            console.log('Visited vertex: ' + v);
        }
        for (var i = 0; i < this.adj[v].length; i ++) {
            var w = this.adj[v][i];
            if (!this.marked[w]) {
                this.dfs(w);
            }
        }
    },

    bfs : function (s) {
        var queue = [];
        this.marked[s] = true;
        queue.push(s);
        while (queue.length > 0) {
            var v = queue.shift();
            if (v !== undefined) {
                console.log('Visited vertex: ' + v);
            }
            for (var i = 0; i < this.adj[v].length; i++ ) {
                var w = this.adj[v][i];
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.push(w);
                }
            }
        }
    },

    hasPathTo : function (v) {
        return this.marked[v];
    },

    pathTo : function (v) {
        var source = 0;
        if (!this.hasPathTo(v)) {
            return undefined;
        }
        var path = [];
        for (var i = v; i != source; i = this.edgeTo[i]) {
            path.push(i);
        }
        path.push(source);
        return path;
    },

    toString : function () {

    }

}
