export function initializeHeader(){
    console.log('Header initialized')

    // get elements
    const headerElement = document.querySelector('div#header')

    // create elements
    const navigationBar = document.createElement('nav')
    const navigationAboutBtn = document.createElement('button')

    // giving context
    navigationAboutBtn.textContent = 'About'

    // event listeners
    navigationAboutBtn.addEventListener('click', function(){
        navigateTo('/about')
    })

    // giving id's
    navigationBar.id = 'navBar'
    navigationAboutBtn.id = 'navBtnAbout'

    //giving classes
    navigationAboutBtn.classList.add('navigationBar-button')

    // blocking blocks
    navigationBar.appendChild(navigationAboutBtn)
    headerElement.appendChild(navigationBar)
}