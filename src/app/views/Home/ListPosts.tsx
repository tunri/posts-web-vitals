import React from "react";

import Post from "app/components/Post/Post";
import IPost from "app/@interfaces/Post";

interface Props {
	posts: IPost[];
}

const initialState: Props = {
	posts: [],
};

const ListPosts = ({ posts }: Props = initialState) => {
	return (
		<section className="container mx-auto">
			{posts.map((item) => (
				<Post post={item} key={`post-${item.userId}-${item.id}`} />
			))}
		</section>
	);
};

export default ListPosts;
