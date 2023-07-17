Module.register("MMM-Keypress", {
  defaults: {
    notifications: [
      {key: 39, notification: "ARTICLE_NEXT"},
      {key: 37, notification: "ARTICLE_PREVIOUS"}
    ]
  },


  start: function () {

    Log.info(`Starting module: ${this.name}`);

    document.addEventListener("keydown", this.sendNotifications.bind(this));
  },


  getDom: function () {
    const wrapper = document.createElement("div");
    return wrapper;
  },


  sendNotifications: function (event) {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const code = event.code;
    const matchingNotification = this.config.notifications.find(
      (notification) => notification.key === keyCode || notification.key == key || notification.key == code
    );

    if (matchingNotification) {
      this.sendNotification(matchingNotification.notification, undefined);
    }
  }

});