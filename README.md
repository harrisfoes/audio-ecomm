# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my first BIG project in React. A multi-page e-commerce website application that I implemented using React.js and Tailwind CSS. My biggest challenge yet since I started my front-end learning journey.

This project has:

- A hero page that features the website's project
- The ability to browse from three categories of products and see their features and pricing
- The ability to add them to your cart
- Check out form with validation

Limitations (out of scope):

- No backend
- Login / Auth

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./public/preview.jpg)

### Links

- Solution URL: [github](https://github.com/harrisfoes/audio-ecomm)
- Live Site URL: [Audio Ecomm Site](https://harrisfoes.github.io/audio-ecomm/)

## My process

    This is my first "big" project, as such I'll have to subdivide this into phases so that I can have an MVP (minimum viable product) to showcase while the rest of the functionality is still being worked on

    **note: this section is written as sort of a diary while implementing this**

    PHASE 1:
        Full home page working
        Done by December 20 2023
    PHASE 2:
        Category pages working
        Done by December 26 2023
    PHASE 3:
        Individual product pages working
        *Ongoing*
    PHASE 4:
        Add to cart UI working
        Add to cart functionality and pricing math working

        *Breaking down this phase because it's the most challenging relative to my skill level and knowledge*

        UI
        1 - Create add to cart UI
        2 - Create checkout UI
        3 - Create thank you page UI
        Data Integration
        1 - Make functioning cart page
        2 - Implement validation for all checkout
        3 - Implement final thank you page with accurate product display -- Done by January 24 (slowed down during holidays)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- Learned how to manage assets and reuse components
- Learned what considerations are needed in structuring the folders
- Learned how to use useContext api and why its necessary
- Learned how to use react-router and how SPA websites manages routing
- Managing version branching in git as I was already showcasing an MVP of the product while implementing the features for each new phase

### Continued development

Next steps for continued development:
None for now as I will move on to other projects

### Useful resources

TailwindCSS cheatsheet
Kevil Powell's Responsive Design Course

## Author

- Website - [Harris Escalante](https://harrisfoes.github.io/portfolio-page/)
- Frontend Mentor - [@harrisfoes](https://www.frontendmentor.io/profile/harrisfoes)

## Acknowledgments

Thanks to my wife :)
