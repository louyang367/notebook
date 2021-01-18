import React, { FC } from "react";
import { gsap, Linear, Sine } from "../App";
import { useControlledAnime, random } from "./util";
import styles from "./InnerBack.module.css";
import ClientOnlyPortal from "../ClientOnlyPortal";

const InnerBack: FC<{ currPage: number }> = ({ currPage }) => {
	useControlledAnime([5, 6], leavesFall, currPage);

	return (
		<ClientOnlyPortal selector="#innerBack">
			<div className={styles.mapleBox}>
				<img
					src="/mapleBranch.png"
					alt="maple branch"
					className={styles.mbranch}
				/>
			</div>
			<div className={styles.text}>
				<p>
					<strong>Hosting choices</strong>: Deploying this SPA as is to Heroku
					or AWS S3 would have been the simplest option. However, I can't ignore
					the fact that this little app is a prime candidate for server side
					rendering, or to be more specific, static generation. And for SSR, I
					considered AWS lambda + S3, Gatsby, and Next.js. AWS lambda needs too
					much custom code on the server side which feels like re-inventing the
					wheel. Gatsby pioneered the idea of static generation, but Next.js now
					automatically does that on top of SSR. I do plan to expand this site
					with more dynamic and server side functionalities, and Next.js has the
					structure laid out.
				</p>
				<p>
					Porting this create-react-app bootstrapped page to Next.js was not very straightforward. Below I'm listing the things I had to figure out, but also glad to report that Next.js is actually able to handle almost any customization scenarios.
					<ul>
						<li>Where to place the third-part library script;</li>
						<li>
							How and when to load it and make it work within the file structure
							with React;
						</li>
						<li>How to use React Portal on Next;</li>
						<li>
							How to load svg that's not just a still image but needs to be
							animated;
						</li>
						<li>
							Even though CSS modules is now supported by Next.js, it
							still works a bit differently;
						</li>
					</ul>
				</p>
			</div>
			
		</ClientOnlyPortal>
	);
};

const leavesFall = () => {
	const tl = gsap.timeline();
	tl.set(`.${styles.mapleBox}`, { perspective: 600 });

	var total = 10;
	var container = document?.querySelector(`.${styles.mapleBox}`);
	let w = container?.clientWidth || 400,
		h = container?.clientHeight || 300;

	for (let i = 0; i < total; i++) {
		var leaf = document?.createElement("div");
		tl.set(leaf, {
			attr: { class: styles.leaf },
			left: random(0, w),
			top: random(0, 30),
			z: random(-200, 200),
		});
		container?.appendChild(leaf);
		animm(leaf);
	}

	function animm(elm: HTMLDivElement) {
		tl.to(elm, random(6, 15), {
			y: h + 100,
			ease: Linear.easeNone,
			repeat: -1,
			delay: -15,
		});
		tl.to(elm, random(4, 8), {
			x: "-=100",
			rotationZ: random(0, 180),
			repeat: -1,
			yoyo: true,
			ease: Sine.easeInOut,
		});
		tl.to(elm, random(2, 8), {
			rotationX: random(0, 360),
			rotationY: random(0, 360),
			repeat: -1,
			yoyo: true,
			ease: Sine.easeInOut,
			delay: -5,
		});
	}

	return tl;
};

export default InnerBack;
