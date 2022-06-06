import IPost from "app/@interfaces/Post";

export const mapToPost = (items: any[]): IPost[] =>
	items.map((item) => ({
		id: item.id,
		title: item.title,
		description: item.body,
		userId: item.userId,
	}));
