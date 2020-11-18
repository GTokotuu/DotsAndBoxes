/*  
    TODO: Implement a graph G with V vertexes and E edges
    V = {A, B, C, D, E, F, G, H, I}
    E = {{A, B}, {B, C}, {C, F}, {A, D}, {D, E}, {E, B}, {E, H}, {H, I}}
*/

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
}

const graph = new Graph(9);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

// Adding vertices
for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

// Adding edges
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'F');
graph.addEdge('A', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'B');
graph.addEdge('E', 'H');
graph.addEdge('H', 'I');

// Printing the graph
graph.printGraph();