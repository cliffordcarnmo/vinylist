import { VinylistStorageService } from "./storageservice.js"

export class VinylistRecordService {
	constructor() {
		this.storageService = new VinylistStorageService();
	}

	async getRecord(recordId) {
		return await this.storageService.getRecord(recordId);
	}

	async getRecords() {
		return await this.storageService.getRecords();
	}

	async getArtistRecords(artistId) {
		return await this.storageService.getArtistRecords(artistId);
	}
}