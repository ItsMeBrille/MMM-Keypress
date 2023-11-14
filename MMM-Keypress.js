Module.register("MMM-Keypress", {
  defaults: {
    notifications: [
      { key: 39, notification: "ARTICLE_NEXT" }, // Key code 39 corresponds to the right arrow key
      { key: 37, notification: "ARTICLE_PREVIOUS" }, // Key code 37 corresponds to the left arrow key
      { key: "MOUSE_SCROLL_UP", notification: "ARTICLE_NEXT" }, // Mouse scroll up
    ]
  },

  start: function () {
    // Log module start
    Log.info(`Starting module: ${this.name}`);

    // Add event listeners for both "keydown" and "scroll wheel" events
    document.addEventListener("keydown", this.handleKeyEvent.bind(this));
    document.addEventListener("wheel", this.handleWheelEvent.bind(this));
  },

  getDom: function () {
    // Create a wrapper div element
    const wrapper = document.createElement("div");
    return wrapper;
  },

  handleKeyEvent: function (event) {
    // Extract key information from the event
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const code = event.code;

    // Find a matching notification based on the pressed key
    const matchingNotification = this.config.notifications.find(
      (notification) =>
        notification.key === keyCode || notification.key == key || notification.key == code
    );

    // Send notification to other modules if there is a match
    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, matchingNotification.payload);
    }
  },

  handleWheelEvent: function (event) {
    // Determine the direction of the mouse scroll
    const scrollDirection = event.deltaY > 0 ? "MOUSE_SCROLL_DOWN" : "MOUSE_SCROLL_UP";

    // Find a matching notification based on the scroll direction
    const matchingNotification = this.config.notifications.find(
      (notification) => notification.key === scrollDirection
    );

    // Send notification to other modules if there is a match
    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, matchingNotification.payload);
    }
  }
});
