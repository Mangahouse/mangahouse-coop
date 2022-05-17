# MangaHouse - Homepage

## Scripts
Run `gatsby develop` in the terminal to start the dev site.
Open http://localhost:8000 with your browser to see the result.

## Notes
need to setup gitignore, also...
.eslintrc & .prettierrc integrated into gitignore

Officially recommended to use shadow for chakra-ui custom theme with gatsby.  
But customizing the chakra theme by shadowing doesn't work now.  
* /src/@chakra-ui/gatsby-plugin/theme.js
So using chakra provider with the directory as it is.

## **Warning**
Use yarn for your package manager!
May be broken, if Add plugin with npm.