import { useState } from "react";

import Header from "app/layout/Header/Header";

import useInfinitePosts from "app/hooks/useInfinitePosts";
import ListPosts from "./ListPosts";

import "./Home.scss";

const Home = () => {
	const { posts } = useInfinitePosts();
	const [query, setQuery] = useState("");

	return (
		<div className="o-page">
			<Header onSearch={setQuery} />

			<main className="o-content py-8">
				<section className="container mx-auto">
					<ListPosts
						posts={posts.filter((post) =>
							post.title?.includes(query)
						)}
					/>
				</section>
			</main>
		</div>
	);
};

export default Home;
