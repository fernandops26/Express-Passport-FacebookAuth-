# Express-Passport-Login-and-Signup-

### Signup and login with passport(FacebookmTwitter,Local) and express

### Registro y login con Passport(Local,Facebook,Twitter) y express

* Para esta pequeña aplicacion de autenticacion se utilizó:
* ED-GRID 1.2(Recomendado)
* Normalize
* Node.js en su version 5.9.1
* El Framework Express v.4.13.1
* Mongoose para la conexion con mongo db.
* Passport para la autenticación y manejo de sesiones.
* Jade como motor de vistas.
* El preprocesador de css Sass.


Los datos que pide la aplicacion para crear un nuevo usuario mediante Facebook o Twitter son:

* proveedor(Facebook o Twitter).
* id_usuario(proporcionado por el proveedor)
* nombres
* foto de perfil
* email(solo en Facebook)


#### Nota importante:

Para utlizar la autenticación online se debe "crear una app" en el área de *developers* en **Facebook** y **Twitter**, para obtener el **id** y la **key** de la app respectivamente, ademas del **secret** en ambos casos. Estos datos se utilizan para identificar a la aplicación(web,android,etc.) que quiere utilizar las respectivas api`s.

Esta información deben ser colocarlos en la configuración ubicada en *config/config.js*, una vez realizado ese paso, podra utlizar la autenticación online.

La razón de ser de las imágenes ubicadas en *public/img/* es que cuando un usuario se esta registrando localmente, la aplicación le asigna una imagen correspondiente al primer caraacter de su nommbre. En el caso de registrarse vía Twitter o Facebook se le asignará la imagen correspodiente a su perfil social.



#### Consultas


Tienes mi [Facebook](https://www.facebook.com/fernando.palacios.587606).
