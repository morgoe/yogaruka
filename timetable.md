---
layout: default
site-nav: timetable
cover-image: timetable
permalink: /timetable/
published: true
title: Timetable
h1: Timetable
subtitle: >-
  A wide variety of movement disciplines integrated under one roof—everything
  your body needs to feel good.
---

<section id="featured">
  {% include carousel.html carousel_mobile=true tile1_image="/assets/images/classes/yin-st.jpg" tile1_title="Stretch Therapy" tile1_video="370278281" tile2_image="/assets/images/classes/mobility.jpg" tile2_title="Dynamic Strength" tile2_video="377763862" tile3_image="/assets/images/classes/slow-flow.JPG" tile3_video="370262120" tile3_title="Slow Fusion Flow" %}
</section>

<section id="timetable">
  <div class="container container--sm">
    <p>
      If you're a regular, you can download the <a class="link" href="https://itunes.apple.com/au/app/momoyoga/id1233882505?mt=8">iPhone</a> or <a class="link" href="https://play.google.com/store/apps/details?id=com.momostudio.momoyoga">Android</a> app.
    </p>
    
    <p></p>
    <label>Filter classes:</label>
    <div class="tabs">
      <a class="tabs-button js-timetableFilter is-active" target="all">
        <div>All <span class="hidden--xs"> classes</span></div>
      </a>
      <a class="tabs-button js-timetableFilter" target="russell-lea">In-person</a>
      <!-- <a class="tabs-button js-timetableFilter" target="alexandria">Alexandria</a> -->
      <a class="tabs-button js-timetableFilter" target="online">Online</a>
    </div>

    <div class="momoyoga-schedule m-top--md" data-momo-schedule="https://www.momoyoga.com/yogaruka"></div>
    <script src="https://www.momoyoga.com/schedule-plugin/v2/js/schedule.js" crossorigin="anonymous"></script>
  </div>
</section>

{% include content/videos.html %}
