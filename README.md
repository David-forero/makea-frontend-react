
![Captura de pantalla de 2023-05-07 22-54-59](https://user-images.githubusercontent.com/54685136/236823169-154350aa-0555-4207-b6cf-98adc299b4f9.png)

# PROYECTO MAKEA 
Proyecto elaborado con el fin de demostrar conocimiento y soluciones a una empresa ficticia que dedica a vender muebles modernos basado en una
sala de exposición de habitaciones decoradas en lo cual permiten a los clientes interactuar con
los artículos disponibles en el sitio.

Pd: Tuve que soñar y pensar como mueble para realizar este proyecto :(

## 🛠️ Instalación

### ⚠️ Requerimientos

`🔹Tener instalado la db de Mongodb (opcional)`

`🔹Tener instalado stripe CLI (opcional)`

`🔹Tener Visual Studio o cualquier editor de código`

`🔹Tener Node.js instalado`

### Clonar proyecto
```bash
git clone https://github.com/David-forero/makea-frontend-react.git
``` 

```bash
cd makea-frontend-react
```

### Instalar dependencias

```bash
yarn install
``` 
ó
```bash
npm i 
``` 

### Si tienes stripe usa este comando para el webhook del proyecto 

```bash
stripe listen --forward-to localhost:3000/stripe_webhooks
``` 
> **👉️ Te va a generar un token secreto para el webhook, copia y pegalo como valor en la variable STRIPE_SIGNING_SECRET en  el archivo env**

### Envs Beckend
```bash
 "STRIPE_SIGNING_SECRET":"whsec_fCdWRiLJmrG3TIJf0h9ELBtiAPdnDAFj",
      "STRIPE_SECRET_KEY": "sk_test_51Mv6VHIfOreT1iriuiyl9ezB5TTS0I69zUMsnemPqiMEXR7B26PLWcBBZLEFNtkgRt3garma8ykEe7QHFObQO2y300JUrSbe4Q",
      "STRIPE_PUBLIC_KEY": "pk_test_51Mv6VHIfOreT1iriQicUaa305lWrK9cdqrKeEIdpE00Zjf64uRMskaCsBgafm8KJrgfZLi3r3KrnyjI0oG1mShus003w2cZbvh",
      "BACKEND": "http://localhost:3000"
``` 

### Envs App
```bash
 "STRIPE_SIGNING_SECRET":"whsec_fCdWRiLJmrG3TIJf0h9ELBtiAPdnDAFj",
      "STRIPE_SECRET_KEY": "sk_test_51Mv6VHIfOreT1iriuiyl9ezB5TTS0I69zUMsnemPqiMEXR7B26PLWcBBZLEFNtkgRt3garma8ykEe7QHFObQO2y300JUrSbe4Q",
      "STRIPE_PUBLIC_KEY": "pk_test_51Mv6VHIfOreT1iriQicUaa305lWrK9cdqrKeEIdpE00Zjf64uRMskaCsBgafm8KJrgfZLi3r3KrnyjI0oG1mShus003w2cZbvh",
       "BACKEND": "http://10.0.2.2:3000",
``` 

### Envs FrontWeb
```bash
 VITE_HOST=http://localhost:5173
=foobar
VITE_STRIPE_SIGNING_SECRET=whsec_fCdWRiLJmrG3TIJf0h9ELBtiAPdnDAFj
VITE_STRIPE_SECRET_KEY=sk_test_51Mv6VHIfOreT1iriuiyl9ezB5TTS0I69zUMsnemPqiMEXR7B26PLWcBBZLEFNtkgRt3garma8ykEe7QHFObQO2y300JUrSbe4Q
VITE_STRIPE_PUBLIC_KEY=pk_test_51Mv6VHIfOreT1iriQicUaa305lWrK9cdqrKeEIdpE00Zjf64uRMskaCsBgafm8KJrgfZLi3r3KrnyjI0oG1mShus003w2cZbvh
VITE_BACKEND=http://localhost:3000
``` 



## 📌 Las necesidades del negocio en forma de producto tecnológico

En esta sección se hablará cuales son los obstáculos que Makea enfrenta y como brindar una mejor solucion, utilizando tegnologías mordernas y prácticas en
lo cual vamos a hablar paso a paso para una mejor compresión! 👍️. Dado ejemplos visuales e información necesaria.



<details>
  <summary>
	1. 📈 Descripción del problema
	</summary>
  
  Makea es una tienda de muebles modernos que se ha mantenido tradicional en cuanto a sus métodos de venta. Sin embargo, ha surgido una problemática en el negocio debido a que Makea no cuenta con una tienda virtual para la venta de sus productos.

Uno de los principales problemas de no tener una tienda virtual es que la competencia en el mercado actual es muy fuerte. Las personas buscan comodidad y rapidez en sus compras, y es por eso que cada vez más tiendas están adoptando un modelo de ventas en línea. La ausencia de una tienda virtual para Makea significa que se están perdiendo oportunidades valiosas para expandir su mercado y llegar a nuevos clientes.

Además, no tener una tienda virtual también limita la capacidad de Makea para ofrecer una experiencia de compra más personalizada. En una tienda virtual, se pueden implementar diversas herramientas que permiten al cliente configurar su espacio, elegir colores, materiales y tamaños para cada mueble. Con estas opciones personalizadas, se puede mejorar la experiencia del cliente y aumentar la probabilidad de una venta exitosa.

Otro problema que enfrenta Makea sin una tienda virtual es la dificultad de mantenerse al día con las últimas tendencias y tecnologías en el mercado. Una tienda virtual bien implementada puede ofrecer análisis de datos y herramientas de marketing que ayudan a la empresa a entender mejor a su público objetivo y adaptarse a las tendencias cambiantes en el mercado.
</details>

<details>
  <summary>
	2. 📉 Solución propuesta:
	</summary>
  
 La solución que se propone para el problema de Makea, la tienda de muebles modernos que no tiene una tienda virtual.

Para solucionar el problema, se propone que Makea cree una tienda virtual en su sitio web. Esto significa que los clientes podrán visitar la tienda en línea y ver todos los productos de la tienda sin tener que ir físicamente a al lugar o hacer citas. Además, podrán comprar los productos desde la comodidad de sus hogares y recibirlos en la puerta de su casa.

La tienda virtual también permitirá a Makea mostrar sus productos de manera más efectiva, con imágenes de alta calidad y descripciones detalladas. También puede incluir funciones como reseñas de productos y recomendaciones de productos relacionados.

Otra ventaja de tener una tienda virtual es que puede expandir el alcance de la tienda. Makea podrá llegar a más clientes que no se encuentran en la zona geográfica de la tienda física, lo que aumentará su base de clientes potenciales, análisis de datos y herramientas de marketing que ayudan a la empresa a entender mejor a su público objetivo y adaptarse a las tendencias cambiantes en el mercado.
  
</details>

<details>
  <summary>
	3. 🖼️ Diagrama:
	</summary>
  
![_Diagrama de flujo](https://user-images.githubusercontent.com/54685136/236823430-b1f43d75-53bb-4926-9842-c9793f2f4c45.png)
  
</details>

<details>
  <summary>
	4. ✍️ Psudocodigo:
	</summary>
  
 ```
 function init(){
    let carrito = []
    let agregarProductoAlCarrito;
    let comprarProducto;
    let isAuthenticated = false;
    let tieneCuenta = false;

    function crearCuenta() {
        let isAuthenticated = true;
    }

    function iniciarSession() {
        //Tiene cuenta?
        if (tieneCuenta) {
            isAuthenticated = true
        }else{
            crearCuenta()
        }
    }

    //Primero se obtiene los productos de makea, mi parce 🧐
    const catalogo = obtenerCatalogoDeProductos();

    //Obtengo mi producto que he seleccionado 👀
    const producto = traerProducto(catalogo[0].id)

    //Agregar al producto al carrito? 🤔
    if (agregarProductoAlCarrito === true) {
        carrito.push({...producto, cantidad: 1});
    }else{
        return;
    }

    //comprar producto/s? 📦️
    if (comprarProducto === true) {
        //No esta autenticado? va a tener que iniciar sesión
        if (!isAuthenticated) {
            return iniciarSession()
        }

        //Haciendo compra del producto... 🤞
        pagadoComprarProducto(){
            return creandoOrden();
        }

        
    }else{
        return;
    }
}
 ```
  
</details>

<details>
  <summary>
	5. 📊 Aplicabilidad:
	</summary>
  
 Esta solución encaja perfectamente en el mundo de Makea, ya que la mayoría de los consumidores actualmente prefieren hacer compras en línea desde la comodidad de sus hogares.
  
  En general, aunque implementar una tienda virtual puede llevar tiempo y esfuerzo, es una solución valiosa para Makea que puede permitirles llegar a un público más amplio y aumentar sus ventas. Además, la inversión en una tienda virtual puede ser rentable a largo plazo, ya que las compras en línea continúan en aumento y se espera que esta tendencia continúe en el futuro previsible.
</details>

<details>
  <summary>
	6. 👨‍🍳 Pasos de implementación:
	</summary>
  
🔹Crear una base de datos MongoDB y configurar Prisma para conectarse a ella.

🔹Crear un modelo de usuario en Prisma para almacenar información de inicio de sesión del usuario.

🔹Configurar el servidor Nest.js para autenticar a los usuarios y proteger las rutas que requieren inicio de sesión.

🔹Implementar una interfaz de inicio de sesión y registro en la tienda virtual utilizando React con el motor Vite para mas rapidez del desarrollo y Tailwind CSS para el diseño.

🔹Crear una ruta para procesar el pago de la compra utilizando Stripe.

🔹Implementar la integración de Stripe en el front-end utilizando la biblioteca de Stripe para React.

🔹Configurar la comunicación entre el front-end y el back-end utilizando Axios para enviar y recibir solicitudes HTTP.

🔹Implementar la funcionalidad de agregar productos al carrito de compras utilizando useContext de React.

🔹Implementar la funcionalidad de mostrar el carrito de compras y permitir al usuario eliminar elementos del carrito o finalizar la compra.

🔹Crear un catálogo de productos en la vista principal.

🔹Desarrollar la vista del detalle del producto.

🔹Implementar Hook de stripe para recibir eventos de la compra.

🔹Desarrollar funcionalidad de guardar la orden de la compra realizada en Mongodb.

🔹Agregar propiedades y etiquetas especiales para el SEO en el html

🔹Desplegar la aplicación en un servidor de producción.

</details>

<details>
  <summary>
	7. 🧐 Pros y contras:
	</summary>
  
## Ventajas:

🔹Disponibilidad las 24 horas del día, los 7 días de la semana, lo que permite que los clientes puedan comprar en cualquier momento.

🔹Ahorro en costos operativos, como alquiler de local y sueldos de personal de venta, lo que puede traducirse en precios más competitivos para los clientes.
Mayor alcance geográfico, lo que permite llegar a una audiencia más amplia y potencialmente aumentar las ventas.

🔹Facilidad para mostrar una amplia variedad de productos y estilos de muebles, sin preocuparse por el espacio físico disponible en una tienda física.

🔹Posibilidad de ofrecer una experiencia de compra más personalizada y recomendaciones de productos específicos basados en las preferencias de los clientes.

## Desventajas:

🔹Los clientes no pueden ver o tocar los muebles antes de comprarlos, lo que puede disminuir la confianza y aumentar la probabilidad de devoluciones.

🔹No se pueden ofrecer descuentos o promociones exclusivas en la tienda física, lo que puede ser una desventaja competitiva frente a otras tiendas.

🔹La logística de envío y entrega puede ser complicada y costosa, especialmente para muebles grandes y pesados.

🔹Los clientes pueden tener dudas o preguntas sobre los productos que no pueden ser resueltas en línea, lo que puede disminuir la satisfacción del cliente.

🔹Los clientes pueden preferir visitar una tienda física para ver y probar los muebles antes de comprar, lo que puede disminuir las ventas en línea.
  
</details>

## 📲 Aplicativo movil

### Descarga de la apk
https://expo.dev/accounts/daele/projects/makea_app/builds/c4e72081-ee40-417d-bce9-8bb20df567ff

### QR si tienes ExpoGo
![Captura de pantalla de 2023-05-08 11-36-02](https://user-images.githubusercontent.com/54685136/236876838-12b1106d-5769-4422-b999-f25711fcdff0.png)


### 📦️ Repositorio

> **Backend de Nest:** https://github.com/David-forero/makea-backend

> **App React Native:** https://github.com/David-forero/makea-app
