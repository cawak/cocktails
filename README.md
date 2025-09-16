# Cocktails apps

In order to run the project you'll need to:
```bash
npm install
npm run dev
```

In this exercise you'll need to work with the following APIs:
https://www.thecocktaildb.com/api.php

Base API is given in .env file, so you'll not need to worry about it


# Exercise 1
## Warmup
Project is not loading. 
Can you find out the reason?

# Exercise 2
## Navigation
Link to 'ingredients' doesn't work. 
Can you find the reason and fix it?

Hint:
Mind the 'ingredients'. The path of `ingredient/:ingredient` is correct and should not be changed

# Exercise 3
## Hooks
Once we access ingredients, we would like to click on it and routed to a new page which will show drinks by this ingredient. Unfortunately this page is not working. Please help us to fix it.
Use 'filter' api aka https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka (mind the `https://` prefix)

Hint
1. At first lets identify the components participating in the process
2. Now we can set ingredient value correctly
3. Once we obtained 'ingredient', we are ready to fetch the relevant data

# Exercise 4
## Code review and hooks 2
Now we would like to search a drink by ingredient or name (Home page). 
1. We would like the search to be focused on search input, but unfortunately it doesn't work
2. Unfortunately, search itself doesn't work. Can you fix this?
3. Can you explain how Home and SearchForm components work? How do they interact?
4. What tests would you write? When should we run them?
5. Code review - what do you think of this code? How would you improve it? 
