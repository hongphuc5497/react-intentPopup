export const handleContentLoaded = () => {
	document.addEventListener("mouseout", (event) => {
		if (!event.toElement && !event.relatedTarget) {
			setTimeout(() => {
				show();
			}, 1000);
		}

		document.onkeydown = (event) => {
			event = event || window.event;
			if (event.keyCode === 27) {
				hide();
			}
		};
	});
};

let eventListener;
let showed = false;

const show = () => {
  checkCookie();

	const element = document.querySelector("#popup");

	element.style.visibility = "visible";
	element.style.opacity = "1";
	element.style.transform = "scale(1)";
	element.style.transition = ".4s, opacity .4s";

	eventListener = document.addEventListener("click", (clickEvent) => {
		let el = clickEvent.target;
		let inPopup = false;

		if (el.id === "popup") {
			inPopup = true;
		}

		while ((el = el.parentNode)) {
			if (el.id === "popup") {
				inPopup = true;
			}
		}

		if (!inPopup) hide();
	});
};

const hide = () => {
	const element = document.querySelector("#popup");

	element.style.visibility = "hidden";
	element.style.opacity = "0";
	element.style.transform = "scale(.5)";
	element.style.transition = ".2s, opacity .2s, visibility 0s .2s";

	if (eventListener) {
		document.removeEventListener(eventListener);
	}
};

const checkCookie = () => {
  if (showed) return;

  if (
    document.cookie.split(";").filter((item) => {
      return item.includes("popup=");
    }).length
  ) {
    return;
  } else {
    console.log(
      document.cookie.split(";").filter((item) => {
        return item.includes("popup=");
      }).length
    )

    console.log(document.cookie.split(";"));
  }

  document.cookie = "popup=true;path=/;max-age=15768000";
  showed = true;
}