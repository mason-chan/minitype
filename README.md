
# Minitype

Minitype is a minimalistic typing test website. 

[View live here!](https://mctekno.github.io/minitype)

![Minitype](src/components/minitype.png?raw=true)

## Purpose 

This project was created due to the interest I have in custom mechanical keyboards. Before venturing into the hobby, I used to think that I typed at a decent speed, above the universal average, but also knew that I did not type the 'proper' way. After I built my first custom mechanical keyboard, I started to learn how to touch type with all my fingers, and eventually it became second nature and I was able to reach my previous average words per minute. Since then, I challeneged myself to get faster and faster, so every day I spent some time doing typing tests to see how high I can get that day, and also to just enjoy my custom keyboard builds. 

This practice definitely payed off, as now I can average about 140 WPM and easily type over 100 WPM when I'm not trying. Before all this practice my highest WPM would probably be around 80 WPM. The website that I mained was monkeytype, and is still currently my favorite typing test website, but I've also used other sites like 10fastfingers and typing.com. I thought it would be a great project idea if I could make a typing test of my own, albiet not as nice as monkeytype. 

## Details

The technologies used to make this website are React v18.1 and Tailwind CSS v3.0.24. The focus of this project was utilizing React Hooks to create the functionality of the typing test website, as well as getting familiar with Typescript. I started out using the create-react-app boilerplate with the Typescript template and then added tailwindcss to the project. As I was researching on any guides on how to build a typing test, I came across a package made for React called react-typing-game-hook, in which it supplies the hook that takes care of the states and other details that are used when users type in a typing test. 

I also added other hooks in order to add further functionality to the typing test, like randomizing a list of words and giving the option to choose how many words you want to have in the test. One of the biggest obstacles I came across with when building this website was adding multiple theme functionality. I could only really find Tailwindcss guides to making a dark mode and other related guides, but was finally able to add this option with the useState hook. 

There was one functionality that I wish I could have incorporated into the website. The initial idea was to have the typing interface be just like monkeytype, where the user types directly over the words given. The function I wanted to add was the ability for the text to shift up after the user was finished with a line of words, so that the next line of words are shifted up to the middle portion of the text area, similar to how an old typewriter works physically. I was unable to figure out a solution and so I decided to change my approach to a simpler solution, where this function was not required.  

## Project Status

This project is essentially complete and playable. The only thing that was not added was the ability to save the user's overall test settings on a new page load, as the route that I went with currently has set defaults for the theme and word count on load. 