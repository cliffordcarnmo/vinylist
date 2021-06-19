import { VinylistStorageService } from "./storageservice.js"

export class VinylistArtistService {
	constructor() {
		this.storageService = new VinylistStorageService();
	}

	async getArtist(artistid) {
		return await this.storageService.getArtist(artistid).then(result => {
			return result;
		});
	}

	async getArtists() {
		return await this.storageService.getArtists().then(result => {
			return result;
		});
	}

}