import React, { FC } from "react";
import styles from './Page3.module.css';
import ClientOnlyPortal from "../ClientOnlyPortal";

const Page3: FC = () => {
	return <ClientOnlyPortal selector='#page3'>
		<div>
			<div className={styles.text}>
				<h1>Getting Technical ...</h1>
				<p><strong>React</strong>: Animations over different pages are cool and breathe life into the site. They also add a little bit of complexity that gives me an excuse to use React. I use portal to make React work with the javascript from the PageFlip package. React custom hook is created to turn on and off animation depending on which page is navigated to.</p>
				<p><strong>CSS modules</strong>: In my humble opinion, the biggest problem with CSS is its global scope. CSS modules is a simple approach to address this problem head-on without compromising any functionality that css provides. Since create-react-app already has this feature pre-configured, I decided to give it a try. The official github doc for CSS modules isn't that detailed. <a href='https://www.javascriptstuff.com/css-modules-by-example/'>This article </a> gives some useful examples. CSS modules can't do anything with elements created by an outside library, or created dynamically by javascript, but otherwise I think it's easy to use, and fits very well with the component structure of react.</p>

			</div>
		</div>
		</ClientOnlyPortal>
};

export default Page3;
