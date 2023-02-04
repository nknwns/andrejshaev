export default class Work {
	constructor({id, title, type, link, image, description, languages=null, links=null}) {
		this.id = id;
		this.title = title;
		this.type = type;
		this.link = link;
		this.image = image;
		this.description = description;
		this.languages = languages;
		this.links = links;
	}
}

