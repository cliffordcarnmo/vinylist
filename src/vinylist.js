import express from "express";
import { VinylistRecordService } from "./services/recordservice.js";
import { VinylistCatalogService } from "./services/catalogservice.js"
import { VinylistArtistService } from "./services/artistservice.js"

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
			response.render("home", { catalog: await new VinylistCatalogService().getCatalog() });
		});

		this.express.get("/artists/", async (request, response) => {
			response.render("artists", { artists: await new VinylistArtistService().getArtists() });
		});

		this.express.get("/artist/:artistId", async (request, response) => {
			response.render("artist", { artist: await new VinylistArtistService().getArtist(request.params.artistId) });
		});

		this.express.get("/records/", async (request, response) => {
			response.render("records", { records: await new VinylistRecordService().getRecords() });
		});

		this.express.get("/record/:recordId", async (request, response) => {
			response.render("record", { record: await new VinylistRecordService().getRecord(request.params.recordId) });
		});
	}
}

new Vinylist().start();