# MMM-Keypress
MMM-Keypress is a module for the MagicMirror² project by Michael Teeuw. It allows you to send notifications to other modules based on the keys pressed on your keyboard.

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
You can customize the notifications array with the desired key-to-notification mappings. Each element with the following properties:

* key: The key to listen for (e.g., "A", "B").
* notification: The name of the notification to send when the key is pressed.

## Dependencies
* MagicMirror² (version 2.12.0 or higher)

## License
MMM-Keypress is licensed under the [MIT License](LICENSE).
The MIT License (MIT)
