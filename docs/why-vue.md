# Why Vue?
Mobile apps and desktop apps feels very reactive. Things happen instantly, you don't wait for new pages to load or action to start.

Traditionally, in web apps, you click a link and wait for a new page to load. You click a button and wait for some action to complete.


                                Request
            Browser <---------------------------------->Server
                                HTML Page

## JavaScript to the Rescue
- JavaScript runs in the browser - on the loaded page.

- You can manipulate the HTML structure Document Object Model(DOM) of the page.

- No request to the server required, no need to wait for a new HTML page as a response.

## But "Just JavaScript" may not be Ideal
You can build any kind of web application with just "Vanilla JavaScript". No framework like Vue is needed. But :-

- You have to write all code on your own ("re-invent the wheel").

- You might write sub-optimal code or introduce errors and bugs.

- Working in a team might be harder because not everyone knows your structure and code philosophy.

**That's why we use something like Vue, it gives us a clear rule set in which we have to work, which everyone in a team has to use and we don't have to figure out all the small nitty  gritty  details like updating a part on the page, instead we can focus on our core business logic with Vue and let Vue do the heavy lifting of all the annoying stuff which we would have to do otherwise.**