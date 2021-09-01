
# Textbook-Rails <!-- omit in toc -->

- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview
### [Textbook Rails](https://confident-agnesi-4db176.netlify.app/)

**Textbook Rails** is a website to buy and sell college textbooks.

### Goals

- _Textbooks from multiple categories,_
- _Users to be able to search and buy the textbook they need._
- _Users to be able to resgister and login into website to purchase and sell textbooks._
- _Users to be able to uplpad their textbook and sell it._
- _Users be able to edit and delete their own textbooks only (not all the textbooks)._
- _Styling with Tailwind._
<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Textbook Rails** users will have more access to textbooks after registering in the website. They can buy - sell - edit - and delete the textbooks they add to the website._

### Client (Front End)

#### Wireframes

[Wireframes](https://www.figma.com/file/XwUn8oMvn8DORbVd1blfKH/Textbook-Rails?node-id=0%3A1)

[Desktop Landing](https://drive.google.com/file/d/1WshccCQPWImOXXN4gVxe7IgEwqdIATPd/view?usp=sharing)

[All Products Screen](https://drive.google.com/file/d/1sDrgGKZMFDyK8fPrgg24g-uS5MWGKVhD/view?usp=sharing)

[Login Screen](https://drive.google.com/file/d/1VLvQBoSbxzn2t8EL-P0GZ5JjifDfA6r7/view?usp=sharing)

[Register Screen](https://drive.google.com/file/d/14i9VXOMmGsysRIzJ0Nis8x5gOohrBjst/view?usp=sharing)

[Product Detail Screen](https://drive.google.com/file/d/18x_qTaTnIt_jbkhDkROyWDOP8nASp5uL/view?usp=sharing)

[Add Product Screen](https://drive.google.com/file/d/12t6UcKSTeDqT3usE8JtNeSqDH7fmMLGW/view?usp=sharing)

[Edit Product Screen](https://drive.google.com/file/d/1cMEzY06EW92NbiG0m2UzcShjT6-j6jXr/view?usp=sharing)



#### Component Hierarchy
[Component Heirarchy](https://whimsical.com/textbook-rails-XaJz9qfDFvYVagEEF3LJgw)

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ CSS
|__ containers
      |mainContainer.jsx
|__ Layout/
      |__ Layout.jsx
      |__ Navbar.jsx
      |__ Footer.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ textbooks.js
|__ screens/
      |__ Textbook.jsx
      |__ TextbookDetail.jsx
      |__ TextbookCreate.jsx
      |__ TextbookEdit.jsx

```

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| pseudocode   |    H     |     2 hrs      |     2 hrs     |    2 hrs    |
| backend |    H     |     3 hrs      |      3 hrs     |     3 hrs    |
| Create CRUD Actions |    H     |     4 hrs      |      6 hrs     |     6 hrs     |
| Create Seed Data |    H     |     2 hrs      |       3 hrs     |     3 hrs     |
| Test|    H     |     1 hrs      |       3 hrs     |     3 hrs     |
| Debugging  |    H     |     4 hrs      |      8 hrs     |     8 hrs     |
| Create Client |    H     |     2 hrs      |      2 hrs     |     2 hrs     |
| Create Directories in client |    H     |     2 hrs      |      1 hrs     |     1 hrs     |
| Create Services files |    H     |     4 hrs      |      2 hrs     |     2 hrs     |
| Create Login.jsx|    H     |     3 hrs      |      3 hrs     |     3 hrs     |
| Create Homepage.jsx |    H     |     4 hrs      |      5 hrs     |     5 hrs     |
| Create Register.jsx |    H     |     3 hrs      |      3 hrs     |     3 hrs      |
| Create Add.jsx|    H     |     4 hrs      |      4 hrs     |    4 hrs     |
| Create Edit.jsx |    H     |     4 hrs      |      6 hrs     |     6 hrs     |
| Create Navbar.jsx |    H     |     2 hrs      |      4 hrs     |     4 hrs     |
| Create Footer.jsx |    H     |     2 hrs      |      2 hrs     |    2 hrs    |
| Delete Functionality  |    H     |     3 hrs      |      2 hrs     |     2 hrs     |
| Media Query |    H     |     3 hrs      |      3 hrs     |     3 hrs    |
| Styling with Tailwind |    H     |     4 hrs      |      5 hrs     |    5 hrs    |
| TOTAL               |       H   |     63 hrs      |      67 hrs     |     67 hrs     |


> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1yeUTebT-7Q0waPfu_PqFbf5cFvSszy5m/view?usp=sharing)


### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _React is a free and open-source front-end JavaScript library for building user interfaces or UI components._ |
|   React Router   | _React Router is a standard library for routing in React._ |
|     Axios        | _Axios is used to communicate with the backend and it also supports the Promise API that is native to JS ES6._ |
|     Ruby         | _Ruby is an interpreted, high-level, general-purpose programming language._ |
|     Rails        | _Rails, is a server-side web application framework written in Ruby. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages._ |

<br> 

## Post-MVP

> - Seearch functionality for users to find the textbook they need by name, author and ISBN number.
> - Sorting by subject categories to make it easier for users to find the textbook they are looking for.

***

## Code Showcase

``` useEffect(() => {
    if (allCategories.length) {
      const oneCategory = allCategories.find(category => category.id === Number(id))
      setCategory(oneCategory)
    }
  }, [id])
   ```
    Finding textbooks of one particular category and fetch them on the page

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
