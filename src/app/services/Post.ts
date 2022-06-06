export const findPosts = (userId: number) => {
	return fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}/posts`
	).then((res) => res.json());
};
