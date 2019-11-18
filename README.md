BACKEND
----------------------------------------------------------
list of endpoints and structure
---------------------------------------------------------
Register new user

https://weddingplannerlambda.herokuapp.com/api/auth/register

# a POST request will register a new user. Will also provide a JSON Web Token.
# Required: username, password, email, and location

{
	"username": "testing1",
	"password": "testing",
	"email": "testing@gmail.com",
	"location": "testing"
}

---------------------------------------------------------------

Login as user

https://weddingplannerlambda.herokuapp.com/api/auth/login

# a POST request will login an already registered user. Will also provide a JSON Web Token.
# Required: username field and password field.

{
	"username": "testing1",
	"password": "testing"
	
}

----------------------------------------------------------

Post request after Login:

https://weddingplannerlambda.herokuapp.com/api/posts

# a POST request to this route will return the post object that is created for the logged in user.
# Required: couple_name
# Optional but recommended: wedding_theme, wedding_date, item_photo, wedding_location, wedding_photographer

  {
    "id": 2,
    "couple_name": "James and Lynn's Wedding",
    "wedding_theme": "Modern",
    "wedding_date": "2019-08-24",
    "item_photo": "https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "wedding_location": "Fremont, CA",
    "wedding_photographer": "Kate Khan",
    "user_id": 2
  }

-----------------------------------------------------------------
Get request by ID

https://weddingplannerlambda.herokuapp.com/api/posts/:id

# a GET request to this route will return the post with the specified ID. Will only return specified ID if associated with user

----------------------------------------------------------------------

Put request by ID

https://weddingplannerlambda.herokuapp.com/api/posts/:id


# a PUT request to this route will return the UPDATED object that is created for the logged in user.
# Required: couple_name
# Optional but recommended: wedding_theme, wedding_date, item_photo, wedding_location, wedding_photographer

-------------------------------------------------------------------------

Delete request by ID

https://weddingplannerlambda.herokuapp.com/api/posts/:id

# a DELETE request to this route will return the number of wedding posts deleted for the logged in user.

---------------------------------------------------------------------------

Get all posts without being signed in: 

https://weddingplannerlambda.herokuapp.com/api/posts/all

# a GET request to this route will return a list of all of the wedding planner posts.