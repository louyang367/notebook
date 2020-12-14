import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<div className="container">
						<div className="imgbox"></div>
						<div id="book" className="book">
							<div className="page" data-density="soft">
								<div id="frontCover" className="page-content"></div>
							</div>
							<div className="page" data-density="soft">
								<div id="innerFront" className="page-content">
									<div className="footer"></div>
								</div>
							</div>
							<div className="page" data-density="soft">
								<div id="toc" className="page-content">
									<div className="footer"></div>
								</div>
							</div>
							<div className="page" data-density="soft">
								<div id="page1" className="page-content">
									<div className="footer">1</div>
								</div>
							</div>
							<div className="page" data-density="soft">
								<div id="page2" className="page-content">
									<div className="footer">2</div>
								</div>
							</div>
							<div className="page" data-density="soft">
								<div id="page3" className="page-content">
									<div className="footer">3</div>
								</div>
							</div>
							<div className="page" data-density="soft">
								<div id="innerBack" className="page-content">
									<div className="footer"></div>
								</div>
							</div>
							<div className="page" data-density="soft">
								<div id="backCover" className="page-content"></div>
							</div>
							<img
								src="/wood-feather.png"
								alt="bookmark"
								className="bookmark hide"
							/>
						</div>
					</div>

					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/EasePack.min.js"></script>
					<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/TextPlugin.min.js"></script>
					{/* <script src="./pageFlip.browser.js"></script> */}
					<NextScript />
				</body>
			</Html>
		);
	}
}
