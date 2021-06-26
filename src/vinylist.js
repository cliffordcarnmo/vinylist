import express from "express";
import { VinylistRecordService } from "./services/recordservice.js";
import { VinylistCatalogService } from "./services/catalogservice.js"

class Vinylist {
	constructor() {
		this.port = 8080;
		this.express = express();
		this.express.set("views", "./views");
		this.express.set("view engine", "ejs");
	}

	async start() {
		this.express.listen(this.port);

		this.express.get("/", async (request, response) => {
			let result = await new VinylistCatalogService().getCatalog();
			response.render("home", { catalog: result });
		});

		this.express.get("/record/:recordId", async (request, response) => {
			let result = await new VinylistRecordService().getRecord(request.params.recordId);
			response.render("record", { record: result });
		});
	}
}

new Vinylist().start();