import React, { FC, useEffect } from "react";
import Cat from "./svg/cat-clipart.svg";
import styles from "./Page1.module.css";
import ClientOnlyPortal from "../ClientOnlyPortal";

const Page1: FC = () => {
	const elemPage1 =
		typeof window !== "undefined" && document.querySelector("#page1");
	const innerback =
		typeof window !== "undefined" && document.querySelector("#innerBack");
	useEffect(() => {
		if (elemPage1) {
			elemPage1.addEventListener(
				"mousemove",
				animate as EventListenerOrEventListenerObject
			);
			innerback?.addEventListener(
				"mousemove",
				animate as EventListenerOrEventListenerObject
			);
		}
	}, [elemPage1, innerback]);

	return (
		<ClientOnlyPortal selector="#page1">
			<div className={styles.container}>
				<div className={styles.text}>
					<h1>About This Website</h1>
					<p>
						The front end of this site uses React and is built upon the
						'St. Page Flilp' library by Oleg Nodlik
						<a href="https://github.com/Nodlik"> (https://github.com/Nodlik) </a>.
						What amazingly realistic page flipping effect he has created! I feel
						like I'd been looking for an excuse to use it every since I saw the
						demo.
					</p>
					<p>
						I'm only a newcomer to the powerful animation framework GSAP, so most of the animations are built upon googled examples. Special credit goes to
						Diaco Lotfollahi.
					</p>
					<p>
						The architecture of this site is shaping up to be a JAMStack. And believe it or
						not there's an official website for this term
						<a href="https://jamstack.org/"> jamstack.org </a>
					</p>
				</div>

				<Cat className={styles.cat} alt="cat" />
				<img className={styles.family} src="/family.svg" alt="family" />
			</div>
		</ClientOnlyPortal>
	);
};

function animate(e: MouseEvent) {
	let eyes = document?.querySelectorAll(".eye");
	eyes.forEach(function (eye) {
		let eyeBall = eye.querySelector(".eyeball") as any,
			pupil = eye.querySelector(".pupil") as any,
			glare = eye.querySelector(".glare") as any,
			eyeR = eyeBall?.rx?.baseVal.value,
			pupilR = pupil?.rx?.baseVal.value,
			glareR = glare?.rx?.baseVal.value,
			bound = eyeBall?.getBoundingClientRect(),
			cx = bound?.left + eyeR,
			cy = bound?.bottom - eyeR,
			x = e.clientX - cx,
			y = e.clientY - cy,
			d = Math.sqrt(x * x + y * y),
			theta = Math.atan2(y, x),
			angle = (theta * 180) / Math.PI + 360;

		let max = 200.0;
		if (d > max) d = max;

		let tp = (d / max) * (eyeR - pupilR),
			tg = (d / max) * (eyeR - glareR);

		pupil.style.transform = `translate(${tp + "px"}) rotate(${angle + "deg"})`;
		pupil.style.transformOrigin = `${eyeBall?.cx?.baseVal.value - tp + "px"} ${
			eyeBall.cy.baseVal.value + "px"
		}`;

		glare.style.transform = `translate(${tg + "px"}) rotate(${angle + "deg"})`;
		glare.style.transformOrigin = `${eyeBall?.cx?.baseVal.value - tg + "px"} ${
			eyeBall.cy.baseVal.value + "px"
		}`;
	});
}

export default Page1;
