## Hackathon Frontend Para MWC Comunidad NUWE!
***

Este proyecto hace parte de unos retos propuestos en la hackaton para la MWC

En el directorio raiz encontratas una carpeta llamada **frontend-reto** donde se describe el desarrollo a realizar y las pautas para llevarlo a cabo.

***

**Para divertirte sigue los pasos:**
- git clone https://github.com/santiagocxa/nuwe-mwc-hackathon-front.git 

- cd nuwe-mwc-hackathon-front 

*instala dependencias e inicia el proyecto*
- npm install
- npn run start

***

### **Como esta construido el proyecto:**

- **src**
  -  **Pages** -> *Econtratas la carpeta principal*
  - **Components** -> *Estan cada unos de los componentes funcionales de la app, no se usan class components*
  - **Assets** -> *Econtraras todos archivos de estilos,archivos estaticos y tambien el archivos de routas*

**Las Rutas:** para el manejo de rutas se usa la libreria **react-router-dom** para la elaboracion de este proyecto era una libreria que se acomodaba mucho a la necesidad del desarrollo

**Validaciones:** Los formularios de registro requerian una validacion de tipos, por lo cual se valida con ayuda de expresiones regulares las cuales puedes econtrar en la carpeta **src/assets/utils/**.


Para los estilos solo se usa css y algunas variables propias de este.

Tambien me apoyo en la libreria de iconos **@fortawesome** que me ayudo mucho a mejorar la experiencia del usuario con alertas sobre la informacion que se esta ingresando en los input. Te comparto las librerias por si deseas agregar a tu proyecto.

```sh
  npm i --save @fortawesome/fontawesome-svg-core
  npm install --save @fortawesome/free-solid-svg-icons
  npm install --save @fortawesome/react-fontawesome
```

Para este proyecto no se requeria persistencia de estado por lo caul no se agrego, pero muy posiblemente en proximos dias lo agregue. Normamete suelo usas **React-redux**

***

## **Por ultimo**:

Esta este es el deploy de la app https://santiagocxa.github.io/nuwe-mwc-hackathon-front/#/

**Bienvenido el feeback!!**

**hay mucho que podria aprender de vos!**



