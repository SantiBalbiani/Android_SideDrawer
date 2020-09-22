# Curso Nativescript Modulo 1
Side drawer for Android.

1.  que el proyecto está basado en el template https://github.com/NativeScript/template-drawer-navigation-ng. Esto se comprueba con la implementación del enrutador modularizado en features del side drawer.
>Se utilizó el template indicado.
2. al menos 2 componentes nuevos.
>Se crearon 2 componentes nuevos: AboutMe y MoreDetails.
3. un nuevo módulo (creado) de features/funcionalidad.
>Se creó un nuevo módulo: aboutme.module
4. un submódulo específico de ruteo creado para el nuevo módulo.
>Se creó un submódulo de ruteo: aboutme.routing-module
5. que la navegación se integra al side drawer preexistente.
>Se integró el componente AboutMe al módulo de navegación principal
6. un nuevo service de angular (creado) que se use a través de inyección de dependencias a nivel global.
>Se creó el servicio "NoticiasService" y se inyectó en app.module.ts.
7. al menos una vista donde se use el ngfor.
>Se utiliza ngfor en search.component.html
8. al menos un archivo de estilos css que presente sobrecarga de nombres para Android e iOS, es decir, para que se personalicen los estilos en cada sistema operativo.
>WIP
9. al menos un ícono que esté personalizado dentro de App_resources, dentro de los recursos de imágenes.
>Pending
10. al menos en un componente typescript, un código que asigne un valor a una variable, cuando se está en Android solamente.
>WIP
