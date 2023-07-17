Module.register("MMM-Keypress", {
  defaults: {
    notifications: [
      {key: 39, notification: "ARTICLE_NEXT"}, // Key code 39 corresponds to the right arrow key
      {key: 37, notification: "ARTICLE_PREVIOUS"} // Key code 37 corresponds to the left arrow key
    ]
  },

  start: function () {
    // Log module start
    Log.info(`Starting module: ${this.name}`);

    // Add event listener for the "keydown" event
    document.addEventListener("keydown", this.sendNotifications.bind(this));
  },

  getDom: function () {
    // Create a wrapper div element
    const wrapper = document.createElement("div");
    return wrapper;
  },

  sendNotifications: function (event) {
    // Extract key information from the event
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const code = event.code;

    // Find a matching notification based on the pressed key
    const matchingNotification = this.config.notifications.find(
      (notification) => notification.key === keyCode || notification.key == key || notification.key == code
    );

    // Send notification to other modules if there are a match
    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, matchingNotification.payload);
    }
  }
});