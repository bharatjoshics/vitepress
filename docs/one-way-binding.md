# One Way Binding
The double curly braces syntax (interpolation) is only available between opening and closing HTML tags. If you wanna pass in a dynamic value to an attribute like in a < a href=" " > then we need to use a different syntax and that's the vue binding syntax.

## Example
    <p>Learn More <a v-bind:href=" ">here</a></p>

This is the full syntax which vue will understand, to dynamically set a value of an HTML element attribute.

This tells vue, please find, please set the value of the ref attribute to something which is passed between the opening and closing double quotes (" ").

In simple words we can say,

You use interpolation between HTML tags and if you need to set the value on an HTML tag, you use v-bind.