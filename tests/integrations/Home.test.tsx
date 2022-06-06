import React from "react";
import { expect, test } from "vitest";
import renderer from "react-test-renderer";
import ListPosts from "../../src/app/views/Home/ListPosts";

const getAllPosts = (userId) => {
	return fetch(
		`https://jsonplaceholder.typicode.com/users/${userId}/posts`
	).then((r) => r.json());
};

test("get data and render <ListPosts> for user 1", async () => {
	const component = renderer.create(<ListPosts posts={[]} />);
	// :( timeout
});
