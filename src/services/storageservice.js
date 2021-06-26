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

	async getRecord(recordId) {
		await this.openStorage();
		let result = await this.db.get("select * from artists a, records r where r.artistid = a.id and r.id = ? order by a.artistname asc, r.recordname asc", recordId);
		console.log(result);

		await this.closeStorage();
		return result;
	}

	async getAll() {
		await this.openStorage();
		let result = await this.db.all("select * from artists a, records r where r.artistid = a.id order by a.artistname asc, r.recordname asc");
		await this.closeStorage();
		return result;
	}
}