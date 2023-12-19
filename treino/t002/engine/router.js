import * as pages from "./pages.js"

export function navigateTo(path){
    console.log('router called!')
    const content = document.querySelector('div#content')
    switch (path) {
        case '/about':
            pages.aboutPage
            break
        default:
            pages.notFoundPage
    }
}