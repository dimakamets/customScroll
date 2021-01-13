import scrollOnElementDirective from "./directives/scroll-on-element-directive";
import mousewheelDirective from "./directives/mousewheel-derective";
import Vue from 'vue';
import App from './App.vue';


Vue.directive('mousewheel', mousewheelDirective);
Vue.directive('scroll-on-element', scrollOnElementDirective);
new Vue({
    el: '#app',
    render: h => h(App)
});

