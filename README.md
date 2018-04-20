# WeConnect

[![Build Status](https://travis-ci.org/Luckzman/WeConnect.svg?branch=develop)](https://travis-ci.org/Luckzman/WeConnect)
[![Coverage Status](https://coveralls.io/repos/github/Luckzman/WeConnect/badge.svg?branch=develop)](https://coveralls.io/github/Luckzman/WeConnect?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/f932ae84432d2c032498/maintainability)](https://codeclimate.com/github/Luckzman/WeConnect/maintainability)

WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with.  

Click here to access the app <https://luckzman.github.io/WeConnect/template/index.html>

## Description


WeConnect is a simple app which simply connect its users to businesses (business ownner). This app is built with two types of users in mind.
1. Non - Authenticated Users (Ordinary Users)
2. Authenticated Users (Business Owners)

**Non-authenticated Users:** These users can only search for several businesses or services of their interest that is available on **WeConnect**. They can also provide reviews on their various experiences encountered while using those business.

**Authenticated Users:** These users are the business owners that use **WeConnect** to showcase their business. An Authenticated or SignIn user has more previleges than the ordinary user. They are able to advertise their business(es) for other users to see. They can also manage there businesses by adding to the existing ones, updates business profile and delete businesses that don't have relevance to them.

## Design

**WeConnect** UI is designed using BootStrap 4.0 and some custom styles. The app has several pages which include:
1. Index page (Home Page)
2. Catalog Page (allows user to search for businesses)
3. Profile Page (pages shows details able a particular business and allows for users review)
4. SignIn / SignUp Page (BootStrap Modal in used to implement it)
5. DashBoard (which is only available to authenticated user / CRUD operations are done here)
