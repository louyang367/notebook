import React, { FC } from "react";
import { gsap, RoughEase } from "../App";
import styles from "./BackCover.module.css";
import { useControlledAnime, random } from "./util";
import ClientOnlyPortal from "../ClientOnlyPortal";

const BackCover: FC<{ currPage: number }> = ({ currPage }) => {
	useControlledAnime([7], silentMovie, currPage);

	return (
		<ClientOnlyPortal selector="#backCover">
			<div>
				<div className={styles.movieBox}>
					<img className={styles.pic} src="/myself2.jpg" alt="myself" />
					<img className={styles.pic} src="/myself2.jpg" alt="myself" />
				</div>
				<div className={styles.text}>
					<p>Want to catch up with newly released movies? Search for old favorites and find out where to stream? Checkout my new <a href="https://movie-graphql-g7xff2hsd.vercel.app/" target="_blank" rel="noopener noreferrer">website</a>!</p>
					<hr/>
					<p>Lu lives and works in Redmond, Washington. </p>
					<p>
						Code base for this website can be found at: <br />
						<a href="https://github.com/louyang367/notebook" target="_blank" rel="noopener noreferrer">
							github.com/louyang367/notebook
						</a>
					</p>
					<p>
						Comments? Suggestions? Find her at:
					</p>
					<a href="mailto:luouyang01@gmail.com" target="_blank" rel="noopener noreferrer">luouyang01@gmail.com</a>
					<br />
					<a href="https://linkedin.com/in/luouyang367" target="_blank" rel="noopener noreferrer">
						linkedIn: linkedin.com/in/luouyang367
					</a>
				</div>
			</div>
		</ClientOnlyPortal>
	);
};

const silentMovie = () => {
	var pic = document?.querySelectorAll(`.${styles.pic}`)[0];
	var line = document?.createElement("div");
	line.className = "line";
	document?.querySelector(`.${styles.movieBox}`)?.appendChild(line);

	let tl = gsap.timeline({ repeat: -1 });

	for (let i = 50; i--; ) {
		tl.to(pic, random(0.03, 0.17), { opacity: random(0, 1), y: random(-5, 5) });
	}

	tl.to(
		line,
		tl.duration(),
		{
			opacity: random(0.5, 1),
			x: random(0, 300),
			ease: RoughEase.ease.config({
				strength: 0.5,
				points: 10,
				randomize: true,
				taper: "none",
			}),
			repeat: 1,
			yoyo: true,
		},
		0
	);
	return tl;
};

export default BackCover;
