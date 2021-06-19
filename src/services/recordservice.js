import { VinylistStorageService } from "./storageservice.js"

export class VinylistRecordService {
	constructor() {
		this.storageService = new VinylistStorageService();
	}

	async getArtistRecords(artistid) {
		return await this.storageService.getArtistRecords(artistid).then(result => {
			return result;
		});
	}

	async getRecord(recordid) {
		return await this.storageService.getRecord(recordid).then(result => {
			return result;
		});
	}

	async getRecords() {
		return await this.storageService.getRecords().then(result => {
			return result;
		});
	}
}