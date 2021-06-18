import { VinylistStorageService } from "./storageservice.js"

export class VinylistCatalogService {
	storageService;

	constructor() {
		this.storageService = new VinylistStorageService();
	}

	async getCatalog() {
		return await this.storageService.getAll().then(result => {
			return result;
		});
	}
}