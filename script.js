window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.classList.add('with-border');
    } else {
        navbar.classList.remove('with-border');
    }
});


const homebtn1 = () => {
    const homebutton1 = document.getElementById('homepage1');
    const homebutton2 = document.getElementById('homepage2');
    const homebutton3 = document.getElementById('homepage3');
    const homeimg = document.getElementById('home-img');
    const homeh1 = document.getElementById('homeh1');
    const homep = document.getElementById('homep');
     homeh1.textContent = "BrewingTempest";
     homep.textContent = 'From cozy sweaters to the cutest wrap dresses, the collection has all of your chic and feminine favorites.fff';
     homeimg.src="IMG_7336.png";
     homebutton1.style.backgroundColor = 'black';
     homebutton2.style.backgroundColor = 'transparent';
     homebutton3.style.backgroundColor = 'transparent';

    }
    const homebtn2 = () => {
        const homebutton1 = document.getElementById('homepage1');
        const homebutton2 = document.getElementById('homepage2');
        const homebutton3 = document.getElementById('homepage3');
        const homeimg = document.getElementById('home-img');
        const homeh1 = document.getElementById('homeh1');
        const homep = document.getElementById('homep');
         homeh1.textContent = "Little  Co. Email is Here!";
         homep.textContent = 'From first looks at new collections to reminders about our sales,sign up now to stay in-the-know on all things Lttle Co.';
         homeimg.src="1280_lauren-1.webp";
         homebutton1.style.backgroundColor = 'transparent';
         homebutton2.style.backgroundColor = 'black';
         homebutton3.style.backgroundColor = 'transparent';
    
        }
        const homebtn3 = () => {
            const homebutton1 = document.getElementById('homepage1');
            const homebutton2 = document.getElementById('homepage2');
            const homebutton3 = document.getElementById('homepage3');
            const homeimg = document.getElementById('home-img');
            const homeh1 = document.getElementById('homeh1');
            const homep = document.getElementById('homep');
             homeh1.textContent = "Shop Little Co. by Lauren Conrad";
             homep.textContent = 'Shop the sweetest styles for baby, toddler, and big kids from Little Co. by Lauren Conrad';
             homeimg.src="Homepage_1280.webp";
             homebutton1.style.backgroundColor = 'transparent';
             homebutton2.style.backgroundColor = 'transparent';
             homebutton3.style.backgroundColor = 'black';
        
            }