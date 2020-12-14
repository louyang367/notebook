import React, { FC } from "react";
import styles from "./Page2.module.css";
import ClientOnlyPortal from "../ClientOnlyPortal";

const Page2: FC<{}> = () => {
	return (
		<ClientOnlyPortal selector="#page2">
			<div>
				<div className={`${styles.textBox} ${styles.text}`}>
					<h1>About Me</h1>
					<p>
						I studied Computer Science and finance in college. Earlier in my
						career I zigzagged between these two fields. I have worked for
						Bloomberg, Infosys, Microsoft, traded financial commodities, and even
						started a business venture for a brief time. Life is full of
						vairables, but what remains constant for me is curiosity, desire to
						learn, and courage to take on new challenges.
					</p>
					<p>
					Currently I am working for Microsoft on a Commercial Sales and Marketing project
						. My role centers on front end, including React
						component design, UI feature implementation, stlying, accessibility, and
						writing tests. </p>
					<p> I am passionate about React, javascript, and anything
						related to web developement. For me these are the things that made programming fun again!
					</p>
				</div>
			</div>
		</ClientOnlyPortal>
	);
};

export default Page2;
