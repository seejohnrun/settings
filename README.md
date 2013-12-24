# Settings

A very simple settings object that can have default values set and overridden.

``` javascript
// Set defaults on instantiation
var obj = settings.create({ name: 'john' });

// Override something
obj.name; // 'john'
obj.name = 'nhoj';
obj.name // 'nhoj'

// Set a default on the fly
obj.setDefault('coolguy', true);
obj.coolguy; // true
```

And that's all there is.
