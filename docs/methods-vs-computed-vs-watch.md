# Methods vs Computed vs Watch
## Mehods
- Use with event binding or data binding.
- Methods is exceuted for "every re-render" cycle of the component
- Use for events or data that really needs to be re-evaluated all the time

## Computed 
- Use with Data binding.
- They are only re-evaluated if one of their "used values" changed.
- Use for data that depends on other data.

## Watch
- Not use directly in template.
- Allows you to run any code in reaction to some changed data.
- Use for any non-data update you want to make.