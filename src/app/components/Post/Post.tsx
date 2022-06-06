import IPost from "app/@interfaces/Post";

interface Props {
	post: IPost;
}

import "./Post.scss";

const Post = ({ post }: Props) => {
	return (
		<>
			<article className="post">
				<h2 className="post__title">{post.title}</h2>
				<p className="post__text">{post.description}</p>
				<p className="post__owner">
					<cite>User {post.userId}</cite>
				</p>
			</article>
			<hr className="divider" />
		</>
	);
};

export default Post;
