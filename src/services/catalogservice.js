import { VinylistStorageService } from "./storageservice.js"

export class VinylistCatalogService {
	constructor() {
		this.storageService = new VinylistStorageService();
	}

	async getCatalog() {
		return await this.storageService.getAll();
	}
}