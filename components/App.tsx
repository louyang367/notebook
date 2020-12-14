import React, { useEffect, useState } from "react";
import BackCover from "./bookPages/BackCover";
import InnerBack from "./bookPages/InnerBack";
import FrontCover from "./bookPages/FrontCover";
import InnerFront from "./bookPages/InnerFront";
import Page1 from "./bookPages/Page1";
import Page2 from "./bookPages/Page2";
import Page3 from "./bookPages/Page3";
import TOC from "./bookPages/TOC";

declare global {
	interface Window {
		St: { PageFlip: any };
		gsap: any;
		TweenLite: any;
		TweenMax: any;
		Linear: { easeNone: any };
		Sine: { easeInOut: any };
		TimelineMax: any;
		RoughEase: { ease: any };
		TextPlugin: any;
	}
}
export let St, gsap, TweenLite, TweenMax, Linear, Sine, TimelineMax, RoughEase;
export let pageFlip;
export default function App() {
	const [currPage, setCurrPage] = useState(0);
	useEffect(() => {
		if (typeof document !== "undefined") {
			let flipScript = document.createElement("script");
			flipScript.src = "/pageFlip.browser.js";
			document.head.append(flipScript);
			flipScript.onload = () => {
				St = window.St;
				gsap = window.gsap;
				TweenLite = window.TweenLite;
				TweenMax = window.TweenMax;
				Linear = window.Linear;
				Sine = window.Sine;
				TimelineMax = window.TimelineMax;
				RoughEase = window.RoughEase;

				// if (typeof window !== "undefined" && St) {
				const width = 1100;
				const height = 1466;
				pageFlip = new St.PageFlip(document?.getElementById("book"), {
					width, // base page width
					height, // base page height
					showCover: true,
					size: "stretch",
					minWidth: 315,
					minHeight: 420,
					maxWidth: 1100,
					maxHeight: 1466,
					maxShadowOpacity: 0.5, // Half shadow intensity
				});
				pageFlip.loadFromHTML(
					typeof window !== "undefined" && document.querySelectorAll(".page")
				);

				const bookmark = document.querySelector(".bookmark") as HTMLElement;
				bookmark.addEventListener("click", () => pageFlip.flip(2));
				pageFlip.on("flip", (e: any) => {
					setCurrPage(pageFlip.getCurrentPageIndex());
					const book = document.querySelector("#book") as HTMLElement;
					if (e.data === 0 || e.data === 1 || e.data === 2) {
						bookmark.classList.add("hide");
					} else {
						// bookmark.style.zIndex = "-1";
						bookmark.classList.remove("hide");
					}
				});
			};
		}
		return () => {
			pageFlip?.destroy();
		};
	}, []);

	return (
		<>
			<FrontCover />
			<InnerFront />
			<TOC />
			<Page1 />
			<Page2/>
			<Page3 />
			<InnerBack currPage={currPage} />
			<BackCover currPage={currPage} />
		</>
	);
}
