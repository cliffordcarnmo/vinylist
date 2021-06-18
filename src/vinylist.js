import express from "express";
import { VinylistCatalogService } from "./services/catalogservice.js"

class Vinylist {
	port = 8080;
	express;

	constructor() {
		this.express = express();
		this.express.set("views", "./views");
		this.express.set("view engine", "ejs");
	}

	async start() {
		this.express.listen(this.port, () => {
			console.log("Vinylist running at port " + this.port);
		});

		this.express.get("/", (req, res) => {
			new VinylistCatalogService().getCatalog().then(result => {
				res.render("home", { catalog: result });
			});
		});
	}
}

let vinylist = await new Vinylist().start();