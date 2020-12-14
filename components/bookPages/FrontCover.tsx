import React, { FC } from "react";
import styles from "./FrontCover.module.css";
import ClientOnlyPortal from "../ClientOnlyPortal";

const FrontCover: FC = () => {
	return <ClientOnlyPortal selector='#frontCover'>
		<div className={styles.container}>
			<div className={styles.terminal}>
					<p>
						<span className={styles.name}>Lu Ouyang</span>
					</p>
					<p>software engineer &#38;</p> 
					<p>web developer &#38;</p>
					<p><span className={styles.rectangle}>&#9608;</span></p>
			</div>
			{/* <div className={styles.imgbox} /> */}
		</div>,
	</ClientOnlyPortal>
};

export default FrontCover;
