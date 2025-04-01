# Computed Properties
Computed properties are like data properties, except they depend on other properties.

They are written like methods, but they do not accept any input arguments.

They are used when outputting something that depends on something else.

A computed property automatically tracks its reactive dependencies.

## Important
Instead of computed properties, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same.

However, a computed property will only re-evaluate when some if its reactive dependencies have changed.

We don't need to use parentheses '()' while calling the computed property.

**It is more efficient than methods**