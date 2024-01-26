# React Button Component

Constantly learning by building stuff.

In this case, building a reusable button component with lots of customization, including:
- anchor or button
- text
- text case (uppercase)
- button variant
- color
- size
- border raidus
- disabled
- onClick function
- add icon

### Things to Remember
- if using sass don't forget to install it, `npm i sass`
  - and then don't forget to compile it or use the extension Live Sass Compiler 

### Installing and using FontAwesome
Learned some things about installing and using FontAwesome for a front-end application:

1) 
```bash
npm i --save @fortawesome/fontawesome-svg-core
```
2) 
```bash
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```
3) 
```bash
npm i --save @fortawesome/react-fontawesome@latest
```
4) 
```typescript
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'

// This exports the whole icon packs for Brand and Solid.
library.add(fas, fab, far);
```
5) 
```typescript
// in App file
// the import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// the props setup
export interface ButtonProps {
    ...
    icon?: IconProp;
    ...
}

// IconProp is a FontAwesome type
(alias) type IconProp = IconLookup | IconName | [IconPrefix, IconName]
import IconProp

// set up the prop
<button className={buttonObj} disabled={props.disabled}>
  {props.icon && <FontAwesomeIcon icon={props.icon} />}
  {props.text} 
</button>
```

6) 
```typescript
// how to pass icon to component
<Button text="Second Button" icon={['far', 'envelope']} />
```