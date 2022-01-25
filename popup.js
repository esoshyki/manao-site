const opener = document.getElementById("open-rules-popup");
const popup = document.querySelector(".popup-rules");

const showPopup = () => {

    popup.classList.remove("popup-rules-hidden");
};

const hidePopUp = () => {

    popup.classList.add("popup-rules-hidden");
};

const handleClick = (e) => {
    if (e.target.classList.contains("close-popup")) {
        hidePopUp()
    }
};

popup.addEventListener("click", handleClick);

opener.addEventListener("click", showPopup);