import Vue from 'vue'

window.jQuery = require('jquery');
require('jquery.terminal');

const $terminal = Vue.prototype.$terminal

export default () => {
 return {
   state: {
     instance: null,
     type: 'jquery-terminal'
   },

   getters: {
     instance(state) {
       return state.instance
     },
     instanceType(state) {
       return state.type
     }
   },

   mutations: {
     SET_INSTANCE(state, instance) {
       state.instance = instance
     }
   },

   actions: {
     terminalCreate({commit}, consoleId) {
       // initialize jQuery Terminal
       const terminalElement = window.jQuery(`#${consoleId}`);

       // create jQuery Terminal
       const terminalInstance = terminalElement.terminal(
         $terminal.commands,
         {
           greetings: $terminal.greetings,
           prompt: '> ',
           checkArity: false,
           onCommandNotFound: () => false,
           keydown: () => {
             // eslint-disable-next-line no-prototype-builtins
             if ($terminal.events && $terminal.events.hasOwnProperty('keydown')) {
               // run each keydown event
               if ($terminal.events['keydown'].length > 0) {
                 $terminal.events['keydown'].forEach(event => event(terminalInstance))
               }
             }
           }
         }
       );

       // unfocus it
       terminalInstance.focus(false)

       // set instance
       commit('SET_INSTANCE', terminalInstance)
     },
     terminalDestroy({getters}) {
       getters['instance'].destroy()
     },
     terminalExec({getters}, command) {
       getters['instance'].exec(command)
     },
     terminalSetInput({getters}, command) {
       getters['instance'].set_command(command)
     }
   }
 }
}