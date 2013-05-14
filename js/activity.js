define(function (require) {
    var activity = require("sugar-html-core/activity");
    var icons = require("sugar-html-graphics/icons");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();

        // Colorize the activity icon.
        var activityButton = document.getElementById("activity-button");
        activity.getXOColor(function (colors) {
            icons.colorize(activityButton, colors);
        });

        // Make the activity stop with the stop button.
        var stopButton = document.getElementById("stop-button");
        stopButton.onclick = function () {
            activity.close();
        };

    });

});
