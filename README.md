# MMM-Keypress
MMM-Keypress is a module for the MagicMirror² project by Michael Teeuw. It allows you to send notifications to other modules based on the keys pressed on your keyboard.

![MMM-Keypress Demo](demo.png)

## Installation

Clone the MMM-Keypress repository:
```shell
cd ~/MagicMirror/modules
git clone https://github.com/ItsMeBrille/MMM-Keypress.git
```

## Configuration
To use MMM-Keypress, add it to the modules array in the config/config.js file of your MagicMirror installation:
```js
{
  module: "MMM-Keypress",
  position: "bottom_right",
  config: {
    notifications: [
      {key: "D", notification: "ARTICLE_NEXT", payload: {greeting: "Hello from A"}},
      {key: "A", notification: "ARTICLE_PREVIOUS", payload: {greeting: "Hello from A"}}
    ]
  }
},
```
