### Client Interface 
-----

> The Scheming Lion interface is built using the [Twitter Bootstrap](http://getbootstrap.com) framework.  The source code for our main page is located at index.html.  The framework we used was enhanced using the [Superhero template](http://bootswatch.com/superhero/).

### Features
-----

>We currently provide users 3 features. 
* see the top 10 stories an individual user has posted
* track and see changes to a specific post
* track and see changes to a specific user

#### Top 10 stories

> We first request user data from the HN Api, filter out all data types that are not stories, sort the remaining data by upvotes, then return the first ten results.

#### Track a post/user

> We initiate a firebase request for a specific post/user and use Firebase events to track changes. As soon as any property of the post JSON object changes, Firebase sends an event and the data is re-rendered on the page.




