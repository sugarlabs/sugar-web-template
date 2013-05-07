define(function (require) {

    var activity = require("sugar-html-core/activity");
    var icons = require("sugar-html-graphics/icons");

    // Colorize the activity icon.

    var activityIcon = document.getElementById("activity-button")
        .getElementsByTagName("img")[0];

    var iconInfo = {
        "uri": activityIcon.src
    };

    function colorizeActivityIcon(iconInfo) {
        icons.load(iconInfo, function (data) {
            activityIcon.src = data;
        });
    }

    activity.getXOColor(function (data) {
        iconInfo.strokeColor = data[0];
        iconInfo.fillColor = data[1];
        colorizeActivityIcon(iconInfo);
    });

    // Make the activity stop with the stop button.

    var stopButton = document.getElementById("stop-button");
    stopButton.onclick = function () {
        activity.close();
    };

});
