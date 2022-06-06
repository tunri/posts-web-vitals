import { Dispatch, SetStateAction } from "react";

export interface SearchProps {
	onSearch: Dispatch<SetStateAction<string>>;
}
