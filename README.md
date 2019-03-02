# Vue + Typescript + Reactive Store

This project presents an alternative way to implement a reactive store (state management) without third-party libraries when using [Vue](https://vuejs.org/).

The approach benefits from the fully-typed checks using Typescript.

This project is based on the Meiosis concept [explained here](https://medium.com/@foxdonut00/you-dont-need-redux-mobx-rxjs-cerebral-6a735b150a02) [and here](http://meiosis.js.org/).

The essential aspect is the use of _streams_ to notify listeners of the updates.

Please check our [Medium Artice](https://medium.com/@dorival.pedroso/simple-reactive-state-management-in-react-hooks-65c23062c5f) for further information.

The GIF below shows the changes being updated on [Meiosis Tracer](https://github.com/foxdonut/meiosis-tracer) tool.

![](Vue-App.gif)
