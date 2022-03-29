    //use querySelector to change the fontSize on the h1 element


    //use querySelector and innerHTML to add text using #firstDiv id


    //add class or Ids with querySelector to change p tags to red

    //use querySelector to select the paragraph class and set it's display to none


    //use getElementsById and innerHTML to add text using #secondDiv id
    //change the font size to 64px
    //add an h1 element inside the div
    //add id to the h1 you just created
    //add border around h1

    document.querySelector('.header').style.fontSize = '80px';

    document.querySelector('#firstDiv').innerHTML = 'Hi!';
    
    document.querySelector('.paragraph').style.color = 'red';

    document.querySelector('.paragraph1').style.color = 'red';

    document.querySelector('.paragraph').style.display = 'none';

    document.querySelector('#secondDiv').innerHTML = 'Hi! Again!';

    document.querySelector('#secondDiv').style.fontSize = '64px';

    document.querySelector('#secondDiv').innerHTML = '<h1>'+'Second Header'+'</h1>';

    document.querySelector('#secondDiv').style.border = '10px solid black';