## Hackathon Frontend For MWC Community NUWE!

---

This project is part of some challenges proposed in the hackathon for the MWC

In the root directory you will find a folder called **frontend-challenge** where the development to be carried out and the guidelines to carry it out are described.

---

**To start follow the steps:**

```sh
git clone https://github.com/santiagocxa/nuwe-mwc-hackathon-front.git

cd nuwe-mwc-hackathon-front
```

_install dependencies and start the project_

```sh
npm install
npn run start
```

---

### **How the project is built:**

- **src**
  - **Pages** -> _Find the main folder_
  - **Components** -> _They are each of the functional components of the app, class components are not used_
  - **Assets** -> _You will find all style files, static files and also the route files_

**The Routes:** for the management of routes the **react-router-dom** library is used for the elaboration of this project it was a library that was very accommodating to the needs of the development, I use **HashRouter** so as not to have to create a server that serves the routes of my app

**Validations:** The registration forms required a type validation, so it is validated with the help of regular expressions which you can find in the folder **src/assets/utils/**.

For the styles, only css and some of its own variables are used.

I also rely on the **@fortawesome** icon library that helped me a lot to improve the user experience with alerts about the information that is being entered in the input. I share the libraries in case you want to add to your project.

```sh
  npm install --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome
```

For this project, state persistence was not required, so it was not added, but very possibly in the next few days I will add it. Normally I usually use **React-redux**

---

## **Finally :**:

This is the deploy of the app https://santiagocxa.github.io/nuwe-mwc-hackathon-front/#/

**Welcome the feedback!!**

**There is a lot I could learn from you!**
