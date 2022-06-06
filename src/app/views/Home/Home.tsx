import { useState } from "react";

import Header from "app/layout/Header/Header";
import Post from "app/components/Post/Post";
import useInfinitePosts from "app/hooks/useInfinitePosts";

import "./Home.scss";

const Home = () => {
	const { posts } = useInfinitePosts();
	const [query, setQuery] = useState("");

	return (
		<div className="o-page">
			<Header onSearch={setQuery} />

			<main className="o-content py-8">
				<section className="container mx-auto">
					{posts
						.filter((post) => post.title?.includes(query))
						.map((item) => (
							<Post
								post={item}
								key={`post-${item.userId}${item.id}`}
							/>
						))}
				</section>
			</main>
		</div>
	);
};

export default Home;
