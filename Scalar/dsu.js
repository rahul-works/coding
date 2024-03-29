
class DSU {
	constructor() {
		this.parents = [];
	}
	find(x) {
		if(typeof this.parents[x] != "undefined") {
			if(this.parents[x]<0) {
				return x; //x is a parent
			} else {
				//recurse until you find x's parent
				return this.find(this.parents[x]);
			}
		} else {
			// initialize this node to it's on parent (-1)
			this.parents[x]=-1;
			return x; //return the index of the parent
		}
	}
	union(x,y) {
		var xpar = this.find(x);
		var ypar = this.find(y);
		if(xpar != ypar) {
			// x's parent is now the parent of y also. 
			// if y was a parent to more than one node, then
			// all of those nodes are now also connected to x's parent.
			this.parents[xpar]+=this.parents[ypar]; 
			this.parents[ypar]=xpar;
			return false;
		} else {
			return true; //this link creates a cycle
		}
	}
	console_print() {
		console.log(this.parents);
	}
}

console.log('dsu working..');
var dsu = new DSU();
dsu.union(1,2);
dsu.console_print();
dsu.union(3,4);
dsu.console_print();
dsu.union(5,6);
dsu.console_print();
dsu.union(7,8);
dsu.console_print();
dsu.union(2,4);
dsu.console_print();
dsu.union(2,5);
dsu.console_print();
dsu.union(1,3);
dsu.console_print();
dsu.union(6,8);
dsu.console_print();
dsu.union(5,7);
dsu.console_print();