import IPost from "app/@interfaces/Post";
import { mapToPost } from "app/@transforms/mapToPost";
import { findPosts } from "app/services/Post";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

interface IStorage {
	lastUserId: number;
	allPosts: IPost[];
}

const initialState: IStorage = {
	lastUserId: 1,
	allPosts: [],
};

interface Props {
	posts: IPost[];
}

const useInfinitePosts = (): Props => {
	const [storage, setStorage] = useLocalStorage<IStorage>(
		"storage",
		initialState
	);

	const [counter, setCounter] = useState(storage.lastUserId);

	const getNews = async (userId: number) => {
		try {
			const response = await findPosts(userId);
			setStorage({
				lastUserId: counter,
				allPosts: [...storage.allPosts, ...mapToPost(response)],
			});
		} catch (error) {
			alert(error);
		}
	};

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
			setCounter((c) => c + 1);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (
			counter > 10 ||
			(counter === storage.lastUserId && storage.allPosts.length)
		)
			return;

		getNews(counter);
	}, [counter]);

	return {
		posts: storage.allPosts,
	};
};

export default useInfinitePosts;
