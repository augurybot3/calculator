
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // so follow the link then get out the dev tools inspector and find out what contains the
    // items in question. So we fist need to get the DOM elements.




    const category = document.querySelector('.mw-category');

    // type this out in the inspector console on the wikipedia page
    // then type the word <category> minus the brackets
    // it should return the div element on the page:
    //  <div class="mw-category mw-category-columns">...</div>

    // next you want to get all the links so type this into the console on the
    // wikipedia page as well:




    //-- returns error ---------------------------------------------------------------------------------------------------
    
    const links = category.querySelectorAll('a');

    // in order to obtain all the 'a' elements of 'category'
    // then type <links> into the console again to return the list of 'a' elements
    // NodeList(39) [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a]
    
    const de = links.map(link => link.textContent);

    
    
    // if we type this into the wikipedia page's console this returns an error
    // because map() returns a node list - NOT an array
    // and so right now our defined element <links> is just coming out as a nodeList
      // so we need to change the definition of our 'links' const.
      
      // there's two ways we can do that
      
    //-----------------------------------------------------------------------------------------------------




    //-- solution 1 ---------------------------------------------------------------------------------------------------
    
    // the first way is to just wrap the entire thing into an
    
    
    const links2 = Array.from(category.querySelectorAll('a'));

    const de2 = links2.map(link => link.textContent);

    //-----------------------------------------------------------------------------------------------------




    //-- solution 2 ---------------------------------------------------------------------------------------------------

    // the second way is to put it into square brackets [] and then use the ES6 spread
    // to spread every single item into the array

    const links3 = [...category.querySelectorAll('a')];

    const de3 = links3.map(link => link.textContent);
                          
    
    //-----------------------------------------------------------------------------------------------------



    // from here you can filter it. so you want to links.map() and
    // and links.filter()
    // we can split this into two lines like so:




    // -- FULL SOLUTION 1 -----------------------------------------------------------------------------------

      const categories4 = document.querySelector('.mw-category');
      const links4 = Array.from(categories4.querySelectorAll('a'));
      const de4 = links4
                        .map(link => link.textContent)
                        .filter(streetName => streetName.includes('de'));


    // ------------------------------------------------------------------------------------------------------




    // -- FULL SOLUTION 2 -----------------------------------------------------------------------------------


    const categories5 = document.querySelector('.mw-category');
    const links5 = [...categories5.querySelectorAll('a')];
    const de5 = links5.map
                          (link => link.textContent)
                          .filter(streetName => streetName.includes('de'));


    // ------------------------------------------------------------------------------------------------------


