Module.register("MMM-Keypress", {
  defaults: {
    notifications: [
      {key: "39", notification: "ARTICLE_NEXT"}
    ]
  },

  start: function () {
    document.addEventListener("keydown", this.sendNotifications.bind(this));
  },

  sendNotifications: function (event) {
    const key = event.key.toUpperCase();
    const matchingNotification = this.config.notifications.find(
      (notification) => notification.key === key
    );

    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, undefined);
    }
  }
});