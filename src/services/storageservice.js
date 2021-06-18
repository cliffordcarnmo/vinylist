import sqlite3 from "sqlite3"
import { open } from "sqlite"

export class VinylistStorageService {
	db;

	async getAll() {
		this.db = await open({
			filename: './data/vinylist.db',
			driver: sqlite3.Database
		});

		return await this.db.all("select * from artists a, records r where r.artistid = a.id order by a.artistname asc, r.recordname asc");
	}
}