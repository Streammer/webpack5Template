import './main.scss';
import './fonts/fonts.scss';
import { createApp } from "vue";
import App from "./App.vue";

// function component(text) {
//     const element = document.createElement('h1');
//     element.textContent = text;
//     return element;
//   }
  
//   document.body.prepend(component('Проект собран на Webpack'));

createApp(App).mount("#app");