# vue-persian-numbers-directive
A Vue directive that converts Persian char numbers to English char numbers

## Install the dependency
```bash
yarn add vue-persian-numbers-directive
# or
npm i vue-persian-numbers-directive
```

### How to use
```bash
import { toEnglishNumbersDirective, toOnlyEnglishNumbersDirective } from 'vue-persian-numbers-directive/src/vue-persian-numbers-directive'
```

Convert Persian numbers to English numbers and allow other characters:
```bash
  app.directive('englishNumbers', toEnglishNumbersDirective)
```
Then use the directive as v-english-numbers on input component like this:
```bash
  <any-input
        v-english-numbers
        v-model="theModel"
        anything else...>
  </any-input>
```


Convert Persian numbers to English numbers and not allow any other character:
```bash
  app.directive('onlyEnglishNumbers', toOnlyEnglishNumbersDirective)
```
Then use the directive as v-only-english-numbers on input component like this:
```bash
  <any-input
        v-only-english-numbers
        v-model="theModel"
        anything else...>
  </any-input>
```
