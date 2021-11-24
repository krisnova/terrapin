# Vuex

[Vuex](https://vuex.vuejs.org/#what-is-a-state-management-pattern) is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.

# Terrapin

This means that all data transactions with the backend service need to come through this library. This library is the "local source of truth" that runs in the browser.

As users begin to mutate state locally it will need to come through here.
The state is then "synchronised" with the backend service via request/actions.
