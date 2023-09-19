//Selecting items from the DOM
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn');
const menuNavigation = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
//we will be creating a node list where we will get all the nav-items
//and placing them in the list
const navItems = document.querySelectorAll('nav-item');

//Setting the initial state of Menu
let showMenu = false;

//Creating an event listener for when we click the button
menuButton.addEventListener('click', toggleMenu);
function toggleMenu(){
    //if menu is not shown (we are in the homepage)
    if (!showMenu){
        //we open the menu showing a close button as well as the links 
        menuButton.classList.add('close'); //adding the close button
        menu.classList.add('show');
        menuNavigation.classList.add('show');
        menuBranding.classList.add('show');
        //for each item we set the class to show 
        navItems.forEach(item => item.classList.add('show'));
        
        //we also se the show menu to true
        showMenu = true;
    }
    //otherwise menu is being shown so we do the opposite and close
    else{
        menuButton.classList.remove('close'); //adding the close button
        menu.classList.remove('show');
        menuNavigation.classList.remove('show');
        menuBranding.classList.remove('show');
        //for each item we set the class to show 
        navItems.forEach(item => item.classList.remove('show'));
                
        //we also set the show menu to true
        showMenu = false;
    }
}