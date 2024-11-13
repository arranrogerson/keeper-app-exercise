import React from "react";

function Footer () {

	const date = new Date().getFullYear();

	return (
		<footer>
			<p>Copyright Arran Rogerson {date}</p>
		</footer>
	)
}

export default Footer;