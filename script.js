class Graph {
    constructor() {
        this.nComponent = 0;
        this.adjList = new Map();
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
                this.dfs(key);
            }
        }

        return this.nComponent;
    }

    // Graph traversal function using dfs, prints when finding a cycle
    dfs(start, parent) {
        const neighbors = this.adjList.get(start);

        console.log(start);
        this.visited.add(start);

        for (let neighbor of neighbors) {
            if (!this.visited.has(neighbor))
                this.dfs(neighbor, start);
            else if (parent != neighbor && parent !== undefined) {
                console.log('There is a cycle ! :D');
            }
        }
    }
}

const graph = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const edges = [
    ['E', 'A'],
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'D'],
    ['B', 'F'],
    ['F', 'G'],
    ['G', 'C'],
    ['I', 'J'],
    ['J', 'N'],
    ['H', 'L'],
    ['L', 'P'],
    ['P', 'O'],
    ['O', 'K'],
    ['K', 'L']
];

// Adding vertices
for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

// Adding edges
edges.forEach(edge => graph.addEdge(...edge));

// Printing the graph
graph.printGraph();

// Doing a Depth First Search
console.log('\n*** DFS ***');
console.log(graph.countComponent());