# Locking Content with v-once
Sometimes you want a value to be locked and not changed. In that case, v-once is used.

## Example
```html
<p v-once>Starting Counter: {{ Counter }}</p>
<p>Result: {{ Counter }}</p>
```