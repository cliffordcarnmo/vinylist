import { VinylistStorageService } from "./storageservice.js"

export class VinylistArtistService {
	constructor() {
		this.storageService = new VinylistStorageService();
	}

	async getArtist(artistId) {
		return await this.storageService.getArtist(artistId);
	}

	async getArtists() {
		return await this.storageService.getArtists();
	}
}