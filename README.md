# MMM-Keypress

**MMM-Keypress** is a module for [MagicMirror²](https://magicmirror.builders/). It allows you to send notifications to other modules based on the keys pressed on your keyboard or numpad etc.

## Installation

Clone the MMM-Keypress repository:

```shell
cd ~/MagicMirror/modules
git clone https://github.com/ItsMeBrille/MMM-Keypress
```

## Configuration

To use MMM-Keypress, just add it to your config.js. Use the config parameter to setup your notifications:

```js
{
  module: "MMM-Keypress",
  position: "bottom_right",
  config: {
    notifications: [
      {key: 39, notification: "ARTICLE_NEXT"}, // Arrow right
      {key: "P", notification: "ARTICLE_PREVIOUS"}, // P key
      {key: "Numpad0", notification: "SHOW_PAGE", payload: {page: "minimal"}} // The number 0 on the numpad, even if NumLock is not pressed
    ]
  }
},
```

The example above is used to control the default newsfeed module. You can customize the notifications array with the desired key-to-notification mappings. Each element with the following properties:

- `key` *(int or str)*: The key to listen for (e.g., "A", 66, "67"). You can listen for *key*, *keyCode*, *code*, or mouse scroll events.
- `notification` *(str)*: The name of the notification to send when the key is pressed.
- `payload` *(JSON)*: Optional payload for the notification.

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

For the number keys `0` to `9` the use of *keyCode* is required. `0` corresponds to `48`, `1` to `49` and so on.

Mapping the keys at the numpad using *keyCode* is not recommended as it depends on whether or not the `NumLock` key is pressed. Therefore the *code* attribute fits better for that application: `Numpad0`, `Numpad1` etc.

### Mouse clicks & scrolling

The module also supports listening for mouse clicks and scrolling events. The used key to listen for this event, also written in the *key* property, are: 
  * `"MOUSE_SCROLL_DOWN"`
  * `"MOUSE_SCROLL_UP"`
  * `"LEFT_CLICK"`
  * `"MIDDLE_CLICK"`
  * `"RIGHT_CLICK"`

## License

MMM-Keypress is licensed under the [MIT License](LICENSE).
