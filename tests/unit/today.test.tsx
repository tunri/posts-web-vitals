import React from "react";
import { expect, it } from 'vitest'
import renderer from "react-test-renderer";
import Today from "../../src/app/components/Today/Today";

it("render current text today", () => {

	const date = new Date();
	const weekday = date.toLocaleDateString("es-ES", { weekday: "short" });

	const component = renderer.create(<Today />);

	const { children } = component.toJSON();

	const weekdayJson = children[0]; // first span
	const textWeekday = weekdayJson.children[0]; // text element
	

	expect(textWeekday).toBe(weekday);

});
