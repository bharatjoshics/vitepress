# Conditional Rendering
Conditional Rendering in Vue makes it easy to toggle the presence of any element in the DOM based on a certain condition. The directives v-if and v-else are used for this purpose. 

The v-if directive can be used to conditionally render a block. It can be assigned a boolean variable and based on the value it toggles the underlying DOM element. The v-else directive can be used to render a block that does not fulfill the condition of the v-if directive. This directive must immediately follow the v-if directive for it to work. 

The v-else-if directive can also be used to chain multiple conditionals.

## Directives for Conditional Rendering
This overview describes how the different Vue directives used for conditional rendering are used together.
- **v-if** -> Can be used alone, or with v-else-if and/or v-else. If the condition inside v-if is 'true', v-else-if or v-else are not considered.

- **v-else-if** -> Must be used after v-if or another v-else-if. If the condition inside v-else-if is 'true', v-else-if or v-else that comes after are not considered.

- **v-else** -> This part will happen if the first part of the if-statement is false. Must be placed at the very end of the if-statement, after v-if and v-else-if.