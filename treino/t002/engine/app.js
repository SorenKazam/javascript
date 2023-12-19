console.log('app.js initialized')

import { initializeHeader } from "../components/header.js";
import { navigateTo } from "./router.js";
import * as pages from "./pages.js"



// iniciar o cabecalho
initializeHeader();

// funcao para manipular as alteracoes da URL
function handlePageChange(){
    const path = window.location.pathname
    navigateTo(path)
}

// adicionar um ouvinte de eventos para a alteracao da url
window.addEventListener('popstate', handlePageChange)

// carregar a pagina inicial
handlePageChange()

