export const handleContentLoaded = () => {


  const show = () => {
    const element = document.querySelector("#popup");
    element.style.visibility = "visible";
    element.style.opacity = "1";
    element.style.transform = "scale(1)";
    element.style.transition = ".4s, opacity .4s";


  };

  const hide = () => {
    const element = document.querySelector("#popup");
    element.style.visibility = "hidden";
    element.style.opacity = "0";
    element.style.transform = "scale(.5)";
    element.style.transition = ".2s, opacity .2s, visibility 0s .2s";


  }

	document.addEventListener("mouseout", (event) => {
		if (!event.toElement && !event.relatedTarget) {
			setTimeout(() => {
				show();
			}, 500);
    }
    
    document.onkeydown = event => {
      event = event || window.event
      if (event.keyCode === 27) {
        hide();
      }
    }
	});
};




