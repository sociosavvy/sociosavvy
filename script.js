const icon = document.querySelectorAll('.content__hero--mockup-icon-img');

let indexScroll = 0;
window.addEventListener('scroll', e => {
    if (document.body.getBoundingClientRect().top > indexScroll) {
        for (let i = 0; i < icon.length; i++) {
            icon[i].style.transform = 'translateY(20px)'
        }
        document.querySelector('.themeColors').style.top = '50%'
    } else {
        for (let i = 0; i < icon.length; i++) {
            icon[i].style.transform = 'translateY(-20px)';
        }
        document.querySelector('.themeColors').style.top = '20%'

    }
    indexScroll = (document.body.getBoundingClientRect()).top;
})

let ham = document.querySelector('.header__ham');
ham.addEventListener('click', e => {
    document.querySelector('.header__ham--menu').classList.toggle('hamOn');
})

document.querySelector('.themeColors').addEventListener('mouseover', e => {
    document.querySelector('.themeColors').style.right = '0';
})
document.querySelector('.themeColors').addEventListener('mouseleave', e => {
    document.querySelector('.themeColors').style.right = '-60px';
})

var primary = getComputedStyle(document.body).getPropertyValue('--primary-color');
var secondary = getComputedStyle(document.body).getPropertyValue('--secondary-color');


document.querySelector('.theme-red').addEventListener('click', e => {
    // document.documentElement.style.setProperty('--primary-color', '#ff0000');
    // document.documentElement.style.setProperty('--secondary-color', '#ffb7b7');
    primary = '#ff0000'
    secondary = '#ffb7b7'
    localStorage.setItem(primary, '#ff0000')
    localStorage.setItem(primary, '#ffb7b7')
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);

})
document.querySelector('.theme-blue').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#0080ff');
    document.documentElement.style.setProperty('--secondary-color', '#bcddff');
})
document.querySelector('.theme-purple').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#a600ff');
    document.documentElement.style.setProperty('--secondary-color', '#dcb7ff');
})
document.querySelector('.theme-black').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#000000');
    document.documentElement.style.setProperty('--secondary-color', '#c3c3c3');
})
document.querySelector('.theme-green').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#00ef5c');
    document.documentElement.style.setProperty('--secondary-color', '#b7ffe6');
})
document.querySelector('.theme-pink').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#f500ed');
    document.documentElement.style.setProperty('--secondary-color', '#ffb7fb');
})
document.querySelector('.theme-yellow').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#ffe604');
    document.documentElement.style.setProperty('--secondary-color', '#fffab7');
})
document.querySelector('.theme-turq').addEventListener('click', e => {
    document.documentElement.style.setProperty('--primary-color', '#04ffb4');
    document.documentElement.style.setProperty('--secondary-color', '#b7ffda');
})

// console.log(a);

// const form = document.querySelector('.content__contact--form');
// form.addEventListener('submit', mail)

/* paste this line in verbatim */
window.formbutton = window.formbutton || function () {
    (formbutton.q = formbutton.q || []).push(arguments)
};
/* customize formbutton below*/
formbutton("create", {
    action: "https://formspree.io/f/mayvrnvd",
    title: "How can we help?",
    fields: [{
            type: "Name",
            label: "Name",
            name: "Name",
            required: true,
            placeholder: "Your name"
        },
        {
            type: "Email",
            label: "Email",
            name: "Email",
            required: true,
            placeholder: "your@email.com"
        },
        {
            type: "Industry",
            label: "Industry",
            name: "Industry",
            // required: true,
            // placeholder: "your@email.com"
        },
        {
            type: "Country Code",
            label: "Country Code",
            name: "Country Code",
            // required: true,
            // placeholder: "your@email.com"
        },
        {
            type: "Number",
            label: "Ph. Number",
            name: "Number",
            // required: true,
            // placeholder: "your@email.com"
        },
        {
            type: "Message",
            label: "Message",
            name: "Message",
            required: true,
            placeholder: "Your message"
        },

        {
            type: "submit"
        }
    ],
    styles: {
        title: {
            backgroundColor: "gray"
        },
        button: {
            backgroundColor: "gray"
        }
    }
});