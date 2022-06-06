import { memo } from "react";
import { SearchProps } from "app/@interfaces/Search";

import InputSearch from "app/components/InputSearch/InputSearch";
import Today from "app/components/Today/Today";
import ToggleTheme from "app/components/ToggleTheme/ToggleTheme";

import "./Header.scss";

const Header = ({ onSearch }: SearchProps) => {
	return (
		<header className="ui-header">
			<div className="container mx-auto">
				<div className="ui-header__banner ">
					<Today />

					<h1 className="ui-header__logo">Minuto a minuto</h1>

					<ToggleTheme />
				</div>
			</div>

			<div className="ui-header__navigation">
				<div className="ui-header__navigation-wrapper container mx-auto">
					<div className="ui-header__btn-menu">menu</div>

					<ul className="ui-header__routes">
						<li>
							<a
								href="https://jsonplaceholder.typicode.com/"
								target="_blank"
							>
								News
							</a>
						</li>
						<li>
							<a
								href="https://jsonplaceholder.typicode.com/"
								target="_blank"
							>
								Video
							</a>
						</li>
						<li>
							<a
								href="https://jsonplaceholder.typicode.com/"
								target="_blank"
							>
								Music
							</a>
						</li>
						<li>
							<a
								href="https://jsonplaceholder.typicode.com/"
								target="_blank"
							>
								Articles
							</a>
						</li>
						<li>
							<a
								href="https://jsonplaceholder.typicode.com/"
								target="_blank"
							>
								Market
							</a>
						</li>
					</ul>
					<InputSearch onSearch={onSearch} />
				</div>
			</div>
		</header>
	);
};

export default memo(Header);
