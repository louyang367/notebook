import React, { FC } from "react";
import styles from "./Page2.module.css";
import ClientOnlyPortal from "../ClientOnlyPortal";

const Page2: FC<{}> = () => {
	return (
		<ClientOnlyPortal selector="#page2">
			<div>
				<div className={`${styles.textBox} ${styles.text}`}>
					<h1>About This Website</h1>
					<p>
						The front end of this site uses React and is built upon the 'St.
						Page Flilp' library by Oleg Nodlik {' '}
						<a href="https://github.com/Nodlik">
							(https://github.com/Nodlik)
						</a>
						. What amazingly realistic page flipping effect he has created! It
						feels like I'd been looking for an excuse to use it every since I
						saw the demo.
					</p>
					<p>
						I'm only a newcomer to the simple yet powerful animation framework
						GSAP. Many of the animations are built upon googled examples.
						Special credit goes to Diaco Lotfollahi.
					</p>
					<p>
						This site is by no means meant to demonstrate best practices. It
						started out more like an front-end experiment. React.js was my entry
						into the world of web development and I had always been curious
						about the plain Javascript DOM manipulation and its interaction with
						React. I also wanted to try out new styling tools otherthan plain
						css. Creating this site gave me a chance to see how things work out
						in those aspects. ... And, one day I'll fix the FOUC problem.
					</p>
				</div>
			</div>
		</ClientOnlyPortal>
	);
};

export default Page2;
