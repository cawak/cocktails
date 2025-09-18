# Cocktails apps

# Exercise 0
## Disable copilot in VScode
You may revert these changes once the interview is over
* Find Copilot plugin and click on 'disable'
* Go to 'settings' -> editor.inlineSuggest.enabled=false

# Exercise 1
## Boot the project by running:
```bash
npm install
npm run dev
```

# Exercise 2
## Warmup
Project is not loading. 
Can you find out the reason?

# Exercise 3
## Navigation
Link to 'ingredients' doesn't work. 
Can you find the reason and fix it?

Hint:
Mind the 'ingredients'. The path of `ingredient/:ingredient` is correct and should not be changed

# Exercise 4
## Note
In this task you'll need to work with the following APIs:
https://www.thecocktaildb.com/api.php
You may user existing base API which is given in .env file, so you'll not need to worry about it

## Hooks
Once we access ingredients, we would like to click on it and routed to a new page which will show drinks by this ingredient. Unfortunately this page is not working. Please help us to fix it.
Use 'filter' api aka https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka (mind the `https://` prefix)

Hint
1. At first lets identify the components participating in the process
2. Now we can set ingredient value correctly
3. Once we obtained 'ingredient', we are ready to fetch the relevant data

# Exercise 5
## Code review and hooks 2
Now we would like to search a drink by ingredient or name (Home page). 
1. We would like the search to be focused on search input, but unfortunately it doesn't work
2. Unfortunately, search itself doesn't work. Can you fix this?
3. Can you explain how Home and SearchForm components work? How do they interact?
4. What tests would you write? When should we run them?
5. Code review - what do you think of this code? How would you improve it? 
