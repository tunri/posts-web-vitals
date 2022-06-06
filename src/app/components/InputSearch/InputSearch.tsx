import { SearchProps } from "app/@interfaces/Search";
import { SetStateAction, Dispatch } from "react";

import "./InputSearch.scss";

const InputSearch = ({ onSearch }: SearchProps) => {
	return (
		<input
			className="input-search"
			placeholder="Search by Title"
			type="search"
			onChange={(e) => onSearch(e.target.value)}
		/>
	);
};

export default InputSearch;
