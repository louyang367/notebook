import React, { FC } from "react";
import styles from "./TOC.module.css";
import { pageFlip } from "../App";
import ClientOnlyPortal from "../ClientOnlyPortal";

const TOC: FC = () => {
	const turn = (
		page: number,
		e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
	) => {
		e.stopPropagation();
		e.preventDefault();
		pageFlip.flip(page);
	};
	return (
		<ClientOnlyPortal selector="#toc">
			<div>
				<img src="/clear-feather.png" alt="quill" className={styles.quill} />
				<h1>Table of Content</h1>
				<div className={styles.text}>
				<p className={styles.toc__line} onClick={(e) => turn(0, e)}>
					{fillDots("Preface", "0")}
				</p>
				<p className={styles.toc__line} onClick={() => pageFlip.flip(1)}>
					{fillDots("About This Web Page", "1")}
				</p>
				<p className={styles.toc__line} onClick={(e) => turn(1, e)}>
					{fillDots("About Me", "2")}
				</p>
				<p className={styles.toc__line} onClick={() => pageFlip.flip(3)}>
					{fillDots("Gettting Technical", "3")}
				</p>
				<p className={styles.toc__line} onClick={() => pageFlip.flip(5)}>
					{fillDots("Contact", "Back cover")}
				</p>
				</div>
			</div>
		</ClientOnlyPortal>
	);
};

const fillDots = (begin: string, end: string, length: number = 30) => {
	return begin.padEnd(length - end.length, ".") + end;
};

export default TOC;
