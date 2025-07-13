(function() {
  // Required: register the widget interface with JotForm
  JFCustomWidget.subscribe("ready", function() {
    // Notify JotForm the widget is ready
    JFCustomWidget.sendData({});
  });

  // Listen for field changes (real-time)
  JFCustomWidget.subscribe("data", function(data) {
    const mid = data.MID || "";

    // Send value to iframe for display
    const msg = JSON.stringify({ MID: mid });
    window.parent.postMessage(msg, "*");
  });

  // Save logic (optional if widget returns data to JotForm field)
  JFCustomWidget.subscribe("submit", function() {
    // Widget doesn't return data; just notify form it's OK to continue
    JFCustomWidget.sendSubmit({});
  });
})();
