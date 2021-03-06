function Polygon(){
	this.vertices = [];
	this.edges = [];

	this.addVertex = (x,y)=>{
		let a = createVector(x,y);
		let	total = this.vertices.length;
		if(total > 0){
			let previous = this.vertices[total-1];
			let edge = new Edge(previous,a);
			this.edges.push(edge);
		}
		this.vertices.push(a);
	}

	this.close = ()=>{
		let	total = this.vertices.length;
		let last = this.vertices[total-1];
		let first = this.vertices[0];
		let edge = new Edge(last,first);
		this.edges.push(edge);
	}

	this.middle = () =>{
		for(let i in this.edges){
			this.edges[i].middle();
		}
		for(let i in this.edges){
			for(let j in this.edges){
				if(i !== j){
					this.edges[i].findEnds(this.edges[j]);
				}
			}
		}
	}

	this.show = ()=>{
		for(let i in this.edges){
			this.edges[i].show();
		}
	}
}