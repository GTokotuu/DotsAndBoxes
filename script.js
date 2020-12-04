class Graph {
    constructor() {
        this.nComponent = 0;
        this.adjList = new Map();
        this.cycleList = new Map();
        this.visited = new Set();
    }

    // Adds the vertex v as key to adjList and initialize its values with an empty array
    addVertex(v) {
        this.adjList.set(v, []);
    }

    // Adds an edge between v and w
    addEdge(v, w) {
        this.adjList.get(v).push(w);
        this.adjList.get(w).push(v);
    }

    // Prints vertices and its adjacency list
    printGraph() {
        const keys = this.adjList.keys();
        
        for (let key of keys) {
            const values = this.adjList.get(key);
            let conc = '';
    
            for (let val of values)
                conc += `${val} `;
    
            console.log(`${key} -> ${conc}`);
        }
    }

    // Return the number of components in the graph and explore all of them with dfs
    countComponent() {
        const keys = this.adjList.keys();

        for (let key of keys) {
            if (!this.visited.has(key)) {
                this.nComponent++;
                this.dfs(key, -1);
            }
        }

        console.log(`Number of component: ${this.nComponent}`);
    }

    // Graph traversal function using dfs, prints when finding a back edge
    dfs(vertex, parent) {
        const children = this.adjList.get(vertex);

        console.log(vertex);

        this.visited.add(vertex);

        for (let child of children) {
            if (child == parent)
                continue;
            if (this.visited.has(child))                                    // {vertex, child} is a back edge
                console.log(`{${vertex}, ${child}} is a back edge`);
            else                                                            // {vertex, child} is a forward edge
                this.dfs(child, vertex);
        }
    }
}

const graph = new Graph();
const vertices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// Adding vertices (simulating a game board of a 3v3 size)
for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

// Adding edges (simulating a player clicking and creating edges by linking vertices)
graph.addEdge(0, 4);        // TURN1
graph.addEdge(4, 5);        // TURN2
graph.addEdge(1, 2);        // TURN3
graph.addEdge(2, 6);        // TURN4
graph.addEdge(2, 3);        // TURN5
graph.addEdge(6, 7);        // TURN6
graph.addEdge(3, 7);        // TURN7
graph.addEdge(10, 11);      // TURN8
graph.addEdge(9, 10);       // TURN9
graph.addEdge(5, 9);        // TURN10
graph.addEdge(8, 12);       // TURN11
graph.addEdge(12, 13);      // TURN12
graph.addEdge(13, 14);      // TURN13
graph.addEdge(14, 15);      // TURN14
graph.addEdge(15, 11);      // TURN15
graph.addEdge(10, 14);      // TURN16

// Printing the graph
graph.printGraph();

// Counting number of components
graph.countComponent();