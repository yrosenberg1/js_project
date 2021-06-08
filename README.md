#  ![Favicon](https://github.com/yrosenberg1/js_project/blob/main/src/assets/mlbstatsfavicon/favicon-32x32.png) [MLB Stats](https://yrosenberg1.github.io/js_project/)
# Overview

MLB Stats is a data visualization project that shows MLB players' statistics. 

![Gif](https://github.com/yrosenberg1/js_project/blob/main/src/assets/js.gif)

 MLB Stats allows users to compare different MLB Players stats.
* It allows viewers to select by year.
* It allows viewers to select a specific player.
* It allows you to see a players stats by splits, such as home and away, or against pitching hand.
* It allows users to also select the specific stats to view. 




<!-- ![wireframe](https://github.com/yrosenberg1/js_project/blob/main/src/images/Capture.PNG) -->

# Technologies

* The data I used in my project comes from [Baseball Reference](https://www.baseball-reference.com/), converted into CSV's.
* MLB Stats uses vanilla JS, to select the data and to search by criteria.
* D3 is used to render the data into a visual chart that can be toggled by either by percentage or by ranking.

# Implementation

* Created a bar graph to allow users to visualize and better analyze players’ statistics using D3 to bind data to the DOM for efficient manipulation of the user interface (UI).
* Implemented multiple ways to look for a player, including a search bar with a dropdown allowing users to search for a specific player, players matching keywords, and by team.
* Tracked user selection of ranking vs. percentile in a top-level state variable, which can be toggled via an event handler resulting in alternate format of data presented, aided by animation styling to ensure smooth transitions.


# [Live Link](https://yrosenberg1.github.io/js_project/)
