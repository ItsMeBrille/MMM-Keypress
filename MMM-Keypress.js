Module.register("MMM-Keypress", {
  defaults: {
    notifications: [
      {key: 39, notification: "ARTICLE_NEXT"}, // Key code 39 corresponds to the right arrow key
      {key: 37, notification: "ARTICLE_PREVIOUS"} // Key code 37 corresponds to the left arrow key
    ]
  },

  start () {
    // Log module start
    Log.info(`Starting module: ${this.name}`);

    // Add event listeners for both "keydown" and "scroll wheel" events
    document.addEventListener("keydown", this.handleKeyEvent.bind(this));
    document.addEventListener("wheel", this.handleWheelEvent.bind(this));
    document.addEventListener("mousedown", this.handleMouseClickEvent.bind(this));
  },

  getDom () {
    // Create a wrapper div element
    const wrapper = document.createElement("div");
    return wrapper;
  },

  handleKeyEvent (event) {
    // Extract key information from the event
    const key = event.key.toUpperCase();
    const {keyCode} = event;
    const {code} = event;

    // Find a matching notification based on the pressed key
    const matchingNotification = this.config.notifications.find((notification) => notification.key === keyCode || notification.key === key || notification.key === code);

    // Send notification to other modules if there is a match
    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, matchingNotification.payload);
    }
  },

  handleWheelEvent (event) {
    // Determine the direction of the mouse scroll
    const scrollDirection = event.deltaY > 0 ? "MOUSE_SCROLL_DOWN" : "MOUSE_SCROLL_UP";

    // Find a matching notification based on the scroll direction
    const matchingNotification = this.config.notifications.find((notification) => notification.key === scrollDirection);

    // Send notification to other modules if there is a match
    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, matchingNotification.payload);
    }
  },

  handleMouseClickEvent(event) {
    // Determine the mouse button clicked
    let mouseButton;
    if (event.button === 0) {
      mouseButton = "LEFT_CLICK";
    } else if (event.button === 2) {
      mouseButton = "RIGHT_CLICK";
    } else {
      return; // Do nothing for other mouse buttons
    }

    // Find a matching notification based on the mouse button
    const matchingNotification = this.config.notifications.find((notification) => notification.key === mouseButton);

    // Send notification to other modules if there is a match
    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, matchingNotification.payload);
    }
  }
});
