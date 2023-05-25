const attracted = document.querySelector(".attracted");
const repelled = document.querySelector(".repelled");

document.addEventListener("mousemove", (e) => {
	const { clientX, clientY } = e;

	attracted.animate(
		{
			transform: `translate(${clientX}px, ${clientY}px)`
		},
		{ duration: 3000, fill: "forwards", easing: "ease-in" }
	);

	repelled.animate(
		{
			transform: `translate(${-clientX}px, ${-clientY}px)`
		},
		{ duration: 7000, fill: "forwards", easing: "ease-in" }
	);
});
