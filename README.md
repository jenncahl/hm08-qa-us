In project 8, I wrote tests to check functionality of Urban Routes. I wrote tests by using 
 WebDriver IO. I used DevTools to correctly locate and name elements on the website.
I used in my file page.js selectors and Xpath to define elements on the website
I wrote my tests using functions ''describe'' and ''it'' to make my tests more organize and visible.
In general, my tests checking functionality of Urban Routes map and if its possible to make an order. But thanks to ''it'' functions we can split it to more specific testing and keep it organized and easier to understand errors on the way(if any)
For input fields I used' SetValue' method.
On every button and checkboxes I used 'click' method. 
I used also command ''Wait for clickable'', ''Wait for displayed'', ''wait for exist'' and ''Wait untill'' 
Those commands helped me to interact with page elements.
I used module.export to not copy and past part of codes and this way I could import data from page.js or helper.js
To see mistakes on the way and understand more,what went wrong, I configured my wdio.conf.js file,
for example baseUrl to avoid repeating url everytime in every test, 
I changed log level to ''error'' from ''info'',  I added ''intercept''service, to be able to use API
To better understand where is a mistake in my code, I was testing one by one, using ''it.only'' in my code.
Was easier for me to understand mistakes.
In the end I push and commit all changes to my github account.

