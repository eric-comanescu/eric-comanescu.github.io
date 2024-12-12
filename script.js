function openUrl(url) {
	window.open(url)
}

let curScreen = 0

const hero = document.getElementById("Hero")
const ribbon = document.getElementById("ribbon")
const heroObserver = new IntersectionObserver(
	(entry) => {
		if (!ribbon)
			return;

		if (entry[0].isIntersecting)
			ribbon.style.display = "none"
		else
			ribbon.style.display = "initial"
	},
	{
		threshold: 0.0001
	}
)
const aboutObserver = new IntersectionObserver(
	(entry) => {
		if (!ribbon)
			return;

		if (entry[0].isIntersecting)
			curScreen = 1;
	},
	{
		threshold: 0.0001
	}
)
const projObserver = new IntersectionObserver(
	(entry) => {
		if (!ribbon)
			return;

		if (entry[0].isIntersecting)
			curScreen = 2;
	},
	{
		threshold: 0.0001
	}
)
const contactObserver = new IntersectionObserver(
	(entry) => {
		if (!ribbon)
			return;

		if (entry[0].isIntersecting)
			curScreen = 3;
	},
	{
		threshold: 0.0001
	}
)

// @ts-ignore
heroObserver.observe(document.getElementById("Hero"));
// @ts-ignore
aboutObserver.observe(document.getElementById("About"));
// @ts-ignore
projObserver.observe(document.getElementById("Projects"));
// @ts-ignore
contactObserver.observe(document.getElementById("Contact"));

function goUp() {
	switch (curScreen) {
		case 1:
			// @ts-ignore
			ribbon.style.display = "none";
			document.getElementById("Hero")?.scrollIntoView()
			break;
		case 2:
			document.getElementById("About")?.scrollIntoView()
			break;
		case 3:
			document.getElementById("Projects")?.scrollIntoView()
			break;
	
		default:
			break;
	}
}
