# Remaining tasks
- Show modal when a champion is clicked, add champion abilities.
- Add design to all components.
- Add progress bars on components
 USEFUL BACKGROUND https://css-tricks.com/perfect-full-page-background-image/
 - Check if data exist in textbox - navbar
 
https://coursetro.com/posts/code/79/A-Quick-and-Easy-Angular-Carousel-in-a-Few-Minutes-(Angular-2-and-4+)
# Current doubts

- What's a Constructor
- Observables
- Pipes
- Closure
- Practicas usando map, observable and pipes.
- Unit testing

http://reactivex.io/rxjs/

https://electron.atom.io/

Bootstrap studio

https://angular.io/tutorial/toh-pt1

- Cheat Sheet
https://angular.io/guide/cheatsheet

- Popups 
http://valor-software.com/ngx-bootstrap/#/modals
https://github.com/ng2-ui/popup
https://medium.com/@ladyleet/popups-modals-and-navigation-using-angular-material-2-components-in-your-angular-2-project-faf510dbcdee

# Iterate on a JSON Object
https://stackoverflow.com/questions/37046138/how-to-use-ngfor-with-object/37046743#37046743

https://webcake.co/object-properties-in-angular-2s-ngfor/

# Observables
http://jasonwatmore.com/post/2016/12/01/angular-2-communicating-between-components-with-observable-subject

# Pipes
http://www.concretepage.com/angular-2/images/angular-2-custom-pipe-example-1.jpg
http://www.concretepage.com/angular-2/angular-2-custom-pipe-example

# Cache cases
 Guardar request ‘getplayerId’ de riotapi2 en cache.
Si la respuesta existe en la base de datos, cargar respuesta del cache.
Si la respuesta no existe se guardará en el cache y se almacenará en la base de datos.
Si el usuario lo require, tras un evento se forzará la petición y sobre escribirá la respuesta en la base de datos.
Actualizar cache después del tiempo propuesto.

Hacer petición, si existe en la base de datos lo carga de la base de datos, si no, guarda la respuesta de la petición en la base de datos.
Si es la misma petición, usar la que se encuentra en cache.
Si se envía yellow flag actualizar request y base de datos.

Caso 1: Cachear peticion de riot con duración de 1 día, usuario hace busqueda y la cachea (cuando presiona el botón guarda la busqueda en caché)

Caso 2: Usuario consulta datos cacheados del mismo día, Si existe en cache cargarlos localstorage.getItem(data)

Caso 3: Usuario hace consulta forzando petición riot (actualizando cache), Usuario presiona boton para actualizar realizar la request y la información del cache

Caso 4: Caché expiró y se debe actualizar. Después de 1 día se realiza otra request para actualizar la base de datos.

