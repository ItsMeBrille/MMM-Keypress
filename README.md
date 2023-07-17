# MMM-Keypress
MMM-Keypress is a module for the MagicMirror² project by Michael Teeuw. It allows you to send notifications to other modules based on the keys pressed on your keyboard or numpad etc.

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
      {key: 39, notification: "ARTICLE_NEXT"},
      {key: "P", notification: "ARTICLE_PREVIOUS"},
      {key: "Numpad0", notification: "ARTICLE_TOGGLE_FULL"}
    ]
  }
},
```
The example above is used to control the default newsfeed module. You can customize the notifications array with the desired key-to-notification mappings. Each element with the following properties:

* key: The key to listen for (e.g., "A", 66, "67"). You can use both *key*, *keyCode* and *code* attributes.
* notification: The name of the notification to send when the key is pressed.

### Keycodes
List of keycodes for the most common keys
| Key          | Keycode |
|--------------|---------|
| `Backspace`  | 8       |
| `Tab`        | 9       |
| `Enter`      | 13      |
| `Shift`      | 16      |
| `Control`    | 17      |
| `Alt`        | 18      |
| `Space`      | 32      |
| `Arrow Left` | 37      |
| `Arrow Up`   | 38      |
| `Arrow Right`| 39      |
| `Arrow Down` | 40      |
| 0-9          | 48-57   |

When mapping the numpad using the keyCode is not recommended as it depends on whether or not NumLock is pressed. Therefore the *code* attribute fits better for that application.

## Dependencies
* MagicMirror² (version 2.12.0 or higher)

## License
MMM-Keypress is licensed under the [MIT License](LICENSE).
The MIT License (MIT)
