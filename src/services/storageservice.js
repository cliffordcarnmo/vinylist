import sqlite3 from "sqlite3"
import { open } from "sqlite"

export class VinylistStorageService {
	async openStorage() {
		this.db = await open({
			filename: './data/vinylist.db',
			driver: sqlite3.Database
		});
	}

	async closeStorage() {
		await this.db.close();
	}

	async executeStatement(query, parameters = {}) {
		await this.openStorage();

		let statement = await this.db.prepare(query);
		await statement.bind(parameters);
		let result = await statement.all();
		await statement.finalize();

		await this.closeStorage();
		return result;
	}

	async getArtist(artistId) {
		return await this.executeStatement("select * from artists where id = @artistId", { "@artistId": artistId });
	}

	async getArtists() {
		return await this.executeStatement("select * from artists order by artistname asc");
	}

	async getRecord(recordId) {
		return await this.executeStatement("select * from artists a, records r where r.artistid = a.id and r.id = @recordId", { "@recordId": recordId });
	}

	async getRecords() {
		return await this.executeStatement("select * from records order by recordname asc");
	}

	async getCatalog() {
		return await this.executeStatement("select * from artists a, records r where r.artistid = a.id order by a.artistname asc, r.recordname asc");
	}
}