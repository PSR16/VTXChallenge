# Article Abstract Viewer

This application uses a React front-end, Express.js back-end and MongoDB as the database. 

Presented to the user is a table of all of the article IDs stored in the database. A user can click on an article ID to render the respective abstract. The abstract is returned beside the table so that a user can, with ease, access other article abstracts as they wish without excessive navigation.

When an article ID is clicked, the API is called to scrape the abstract from the appropriate website and returns this information to the front-end. If no abstract is available for a particular article ID, a message appears in the abstract's place indicating this. 


#### To run:

1. Pull down the code
2. docker-compose build
3. docker-compose up

#### To view:

http://localhost:3000

#### Hitting API directly using Postman
- A GET request to http://localhost:8080/articles will return all articles
- A GET request to http://localhost:8080/articles/:articleId will return the abstract for an individual article