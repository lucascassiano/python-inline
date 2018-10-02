# python-inline (🚨experimental)
NPM package to run inline python code inside a JS script (using python-shell

```javascript
npm install --save python-inline
```

# example
```
import {compile} from "python-inline"

compile ` 
x = "hello"
print(x)
`

```

## milestones
- remove (or at least reduce) dependencies
- use something more like https://github.com/vshymanskyy/node-inline-cpp
