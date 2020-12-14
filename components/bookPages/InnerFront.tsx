import React, { FC } from "react";
import styles from "./InnerFront.module.css";
import ClientOnlyPortal from "../ClientOnlyPortal";

const InnerFront: FC = () => {
	return (
		<ClientOnlyPortal selector="#innerFront">
			<div className={styles.text}>
				<p>
					I created this "notebook" over the Thanksgiving holiday in 2020.
					Trapped by the COVID pandemic, I wanted to pick up a small project to do at
					home that was not only fun, but would also end up with something that
					was at least semi useful. The idea of setting up a personal web page
					came along.
				</p>
				<p>
					This turned out to be a great opportunity to experiment the
					technologies that I don't get to use at work, to dabble in
					tools and libraries that I'd always wanted to give a try, and to gain a
					better perspective of how individual pieces come together in the
					process of web development. Looking back, it sure was a joy ride!
				</p>
				<p>
					Now that I have this site and this notebook, all I need to do is keep adding new pages to it. Imagine all the new ideas I can experiment here!
				</p>
				<p>So, here we are. Welcome, and happy flipping!</p>
			</div>
		</ClientOnlyPortal>
	);
};

export default InnerFront;
