class Graph {
    constructor(nVertices) {
        this.nVertices = nVertices;
        this.adjList = new Map();
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
            let values = this.adjList.get(key);
            let conc = '';
    
            for (let val of values)
                conc += `${val} `;
    
            console.log(`${key} -> ${conc}`);
        }
    }

    // Graph traversal function using dfs, prints when finding a cycle
    dfs(start, parent, visited = new Set()) {
        const neighbors = this.adjList.get(start);

        console.log(start);
        visited.add(start);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor))
                this.dfs(neighbor, start, visited);
            else if (parent != neighbor && parent !== undefined) {
                console.log('There is a cycle ! :D');
            }
        }
    }
}

const graph = new Graph(9);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const edges = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'F'],
    ['A', 'D'],
    ['D', 'E'],
    ['E', 'B'],
    ['E', 'H'],
    ['H', 'I']
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
graph.dfs('A');