/** Stylesheet **/
import '../scss/style.scss';

/** Algolia CSS **/
//import algoliamincss from 'instantsearch.css';

/** HTML in JS **/
//document.write("<h1>Hello Webpack Demo!</h1>");
//document.write('<div class="ais-InstantSearch"><h2>InstantSearch.js e-commerce demo</h2><div class="right-panel"><div id="searchbox"></div><div id="hits"></div><div id="pagination"></div></div></div>');
//document.write("<h6>Attention:: All this code is coming from javascript - that's preety cool.</h6>");
//document.write('<div id="image"></div>');

//document.write("<h2>Firebase Tutorial</h2><h3 id='hotDogOutput'>Hot dog status:</h3><input type='textfield' id='latestHotDogStatus'><button id='saveButton'>Save</button><button id='loadButton'>Load</button>");

/** Algolia JS **/
import algoliasearch from 'algoliasearch/lite';
//import instantsearch from 'instantsearch.js';
import instantsearchjs from 'instantsearch.js';

import {
    searchBox,
    hits
} from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('O966BSY3LD', '6db67900bfa16b4173055f87526117a7');

const search = instantsearch({
    indexName: 'testing_manenos',
    searchClient,
});

search.addWidgets([
    searchBox({
        container: "#searchbox"
    }),

    hits({
        container: "#hits"
    })
]);

search.start();