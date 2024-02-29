# MMM-Keypress

**MMM-Keypress** is a module for [MagicMirror²](https://magicmirror.builders/). It allows you to send notifications to other modules based on the keys pressed on your keyboard or numpad etc.

## Installation

Clone the MMM-Keypress repository:

```shell
cd ~/MagicMirror/modules
git clone https://github.com/ItsMeBrille/MMM-Keypress
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
      {key: "Numpad0", notification: "SHOW_HIDDEN_PAGE", payload: "minimal"}
    ]
  }
},
```

The example above is used to control the default newsfeed module. You can customize the notifications array with the desired key-to-notification mappings. Each element with the following properties:

- `key` (int, String): The key to listen for (e.g., "A", 66, "67"). You can use both _key_, _keyCode_, _code_ and _mouse scroll_ events.
- `notification` (String): The name of the notification to send when the key is pressed.
- `payload` (JSON): Optional payload for the notification.

### Keycodes

List of keycodes for the most common keys.

<!--prettier-ignore-start-->
| Key             | Keycode   |
|-----------------|-----------|
| `"Backspace"`   | `8`       |
| `"Tab"`         | `9`       |
| `"Enter"`       | `13`      |
| `"Shift"`       | `16`      |
| `"Control"`     | `17`      |
| `"Alt"`         | `18`      |
| `"Space"`       | `32`      |
| `"Arrow Left"`  | `37`      |
| `"Arrow Up"`    | `38`      |
| `"Arrow Right"` | `39`      |
| `"Arrow Down"`  | `40`      |
| `0`-`9`         | `48`-`57` |
<!--prettier-ignore-end-->

For the number keys `0` to `9` use of _keyCode_ is required. `0` corresponds to `48`, `1` to `49` and so on.

When mapping the numpad using the _keyCode_ is not recommended as it depends on whether or not `NumLock` is pressed. Therefore the _code_ attribute fits better for that application: `Numpad0`

### Mouse scrolling

The module does also support mouse scrolling events. The syntax for mouse scrolling is `"MOUSE_SCROLL_DOWN"` and `"MOUSE_SCROLL_UP"`, also written in the _key_ property.

## Dependencies

- MagicMirror² (not tested on versions below 2.12.0)

## License

MMM-Keypress is licensed under the [MIT License](LICENSE).
