Module.register("MMM-Keypress", {
  defaults: {
    notifications: [
      {key: "39", notification: "ARTICLE_NEXT"}
    ]
  },

  start: function () {

    Log.info(`Starting module: ${this.name}`);

    document.addEventListener("keydown", this.sendNotifications.bind(this));
  },

  sendNotifications: function (event) {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const matchingNotification = this.config.notifications.find(
      (notification) => notification.key === key || notification.key == keyCode
    );

    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, undefined);
    }
  }
});
