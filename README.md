# Learning-React-Hooks aka useState

The code provided includes three React components that render three different types of buttons: an "Add Item" button, a plus/minus counter, and a yes/no button. Each component is defined in its own file and imported as a default export.

The AddItems component uses the useState hook to manage an array of items that are displayed on the page as a series of <p> elements. Clicking the "Add Item" button adds a new item to the array, and clicking the "Reset" button sets the array back to its initial state with a single item.

The PlusMinus component also uses the useState hook to manage a numeric counter. Clicking the "+" button increments the counter, and clicking the "-" button decrements it.

The YesNo component uses the useState hook to manage a string that is either "Yes" or "No". Clicking on the button toggles the string between these two values.

Each component is styled with CSS to create a consistent look and feel. The styles include custom fonts, colors, and sizes for the buttons and their surrounding containers. The AddItems and PlusMinus components use flexbox to center their content and align their buttons, and the PlusMinus component uses a circular background for its counter display.
