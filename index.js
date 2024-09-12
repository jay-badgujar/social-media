// slidbar

const menuItems = document.querySelectorAll(".menu-item");

const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        console.log(item.id);
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else {
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector("#notifications .notification-count").style.display = "none";
        }
    });
});

// messages

const messageNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");

messageNotification.addEventListener("click", () => {
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    document.querySelector("#messages-notifications .notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

// messages search

const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((user) => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        }
    });
};

messageSearch.addEventListener("keyup", searchMessage);

// theme settings

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

const openThemeModal = () => {
    themeModal.style.display = "grid";
};

const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
};

themeModal.addEventListener("click", closeThemeModal);
theme.addEventListener("click", openThemeModal);

const root = document.querySelector(":root");

// managing font size

const removeSizeSelector = () => {
    fontSize.forEach((size) => {
        size.classList.remove("active");
    });
};


messageCategory = document.querySelectorAll('.category h6');

const removeactiveclass = () => {
    messageCategory.forEach((activeclassadder) => {
        activeclassadder.classList.remove("active");
    });
};

messageCategory.forEach((activeclassadder)=>{
    activeclassadder.addEventListener('click',()=>{
        removeactiveclass();
        activeclassadder.classList.add('active');
    })
})

const fontSize = document.querySelectorAll(".choose-size span");
fontSize.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.add("active");
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
            root.style.setProperty("--sticky-top-left", "5.4rem");
            root.style.setProperty("--sticky-top-right", "-7rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
            root.style.setProperty("--sticky-top-left", "-2rem");
            root.style.setProperty("--sticky-top-right", "-17rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
            root.style.setProperty("--sticky-top-left", "-5rem");
            root.style.setProperty("--sticky-top-right", "-25rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
            root.style.setProperty("--sticky-top-left", "-12rem");
            root.style.setProperty("--sticky-top-right", "-35rem");
        }
        document.querySelector("html").style.fontSize = fontSize;
    });
});

// color

const colorPalette = document.querySelectorAll(".choose-color span");

const removeColorSelector = () => {
    colorPalette.forEach((color) => {
        color.classList.remove("active");
    });
};

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        removeColorSelector();
        let primarHue;
        color.classList.add("active");
        if (color.classList.contains("color-1")) {
            primarHue = 252;
        } else if (color.classList.contains("color-2")) {
            primarHue = 52;
        } else if (color.classList.contains("color-3")) {
            primarHue = 352;
        } else if (color.classList.contains("color-4")) {
            primarHue = 152;
        } else if (color.classList.contains("color-5")) {
            primarHue = 202;
        }

        root.style.setProperty('--primary-color-hue',primarHue)
    });
});



// change background

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
}

Bg2.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg()
})


Bg3.addEventListener('click',()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');

    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBg()
})


Bg1.addEventListener('click',()=>{
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    Bg1.classList.add('active');

    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg()
})

// document.addEventListener('contextmenu',function(event){
//     event.preventDefault()
// })


show_storie = document.querySelector('.show-stories');
video = document.querySelector('#video');

show_stories = () => {
    show_storie.style.display = "grid"
    video.play();
}

const closeThemeModal1 = (e) => {
    console.log(e.target.classList)
    if (e.target.classList.contains("show-stories")) {
        show_storie.style.display = "none";
        video.pause();
    }
};

show_storie.addEventListener("click", closeThemeModal1);
