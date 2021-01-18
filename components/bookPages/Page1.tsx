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
					<h1>About Me</h1>
					<p>
						I started my career working as a financial software developer. After
						five years at the job and earning a Master's degree in computer
						science, life's adventures called and I switched tracks. Three years
						ago I decided it was time to settle down. I started by taking
						courses and training in web development, and now I'm happily working
						as a contractor for Microsoft to transition their Commercial Sales
						and Marketing website.
					</p>
					<p>
						Web technology is changing so fast that learning new skills is part
						of the norm. Having basically taught myself into this field, I am
						well prepared and adapted to this norm. I also love to solve
						problems, dig into the bottom of bugs, and engage in technical
						discussions with teammates that often lead to new insights. Being a
						web developer at this time is both challenging and exciting. I enjoy
						the fact that I have learned something new literally every day!
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
