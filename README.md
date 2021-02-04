# Time Capsule 🚀

**"Time Capsule"** is a student project developed by <a href="https://sofiavazs.netlify.app/">Sofia Vaz Sousa</a> and <a href="https://vanessa-portfolio.netlify.app/">Vanessa Sue Smith</a>. Sofia has experience working as a neonatal ICU nurse where she used to write daily log books for premature babies who did not end up immediately under their parents' care.
Originally this was done in paper format. Our idea was to take this to the next level and create a web app that every parent can use to log on details about their child, from birth until they are toddlers: a digital "time capsule". 👶

**Read more about Time Capsule here:** https://time-capsule-final.netlify.app/about

In "Time Capsule", users will be able to initially create a detailed profile of a new Baby and then make daily entries which will log data about the activities performed that day, weight and a reflection. There are sections in which we show the progress based on the data we have stored: latest entries and a weight chart 📊

## How We Built it 💪👩‍💻

This is a **multi-page React app built using React Router and Redux with Toolkit**.
We started by building the Sign Up and Log In flow, which will take first users to an initial form to create a new Baby Profile, while returning users will be taken directly to the Dashboard.
The Dashboard is a restricted area: we have implemented **authentication** so only registered users can access it.
This is all achieved with redirecting between components thanks to Router, in combination with state management in the Redux Store.

- The Dashboard shows a static header including the Baby Profile and a sidebar which controls what to show in the dashboard's main content. This is all controlled via a **local state** and **conditional rendering**.
- Most of the sections are performing a **fetch to the backend to either GET, POST, PATCH or DELETE data**.
- Latest Entries section will show EDIT and DELETE buttons, which gives the user the possibility to update an older entry or remove it.
- Weight History (which we are super proud of! ✨), is built using the <a href="https://www.chartjs.org/">Chart.js</a>, connecting to the data we get from a performed fetch.
- We have also implemented an Image Upload feature 📸 in which the user can set up a photo for the Baby Profile. This is achieved using <a href="https://cloudinary.com/">Cloudinary</a> for picture storage.
- Styling is mostly done using Styled Components 💅, only with the exception of custom checkboxes which are styled on CSS.

## Additional Packages used
- Moment.js
- Chart.js
- React date picker and time picker
- Sweetalert 💗

## Backend 😎

We have also developed the Backend for this application which consists of a **RESTful API built with Node.js and Express** and with data collected via **MongoDB and mongoose**.

You can find the repository for it here: https://github.com/VanessaSue27/final-project-backend

## View it Live!
Here you can have a look at what **Time Capsule**🚀 is all about, super proud to present it to you at: https://time-capsule-final.netlify.app/
