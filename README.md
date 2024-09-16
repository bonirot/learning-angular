# MiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Local Installation (By me)

- Instalación: npm install @angular/cli --save-dev
- poner 'npx' delante de cada comando
- ng new bases --no-standalone (no standalone es para trabajar con un angular más fiel al originario y usar módulos)
- marcar NO a SSR
- ng new <nombre de la aplicación> --standalone false
- npx ng serve / npm start (para runear el proyecto)
- ng g m nombreNuevoModulo / npx ng g m nombreNuevoModulo (el primero es si tienes angular en global y el segundo en local)

Cada carpeta dentro de 'app' va a ser un módulo. Va a ser un ente que funcione por sí solo.

## Comandos

- (npx) ng g component (puedo escribir 'c' solamente) <nombrecarpeta>. Ej.: npx ng g c heroes/hero
- \*ngIf si un valor es verdadero, muestra el elemento
- \*ngFor

## Crear componentes

botón dcho en la carpeta de componentes > Angular Schematics: Generate file > escribir el nombre del componente > common component > OK

asegurarme de que ese componente nuevo aparezca en el module.
