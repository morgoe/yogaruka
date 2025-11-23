---
layout: default
site-nav: timetable
cover-image: timetable
permalink: /timetable/
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
    <!--<label>Filter classes:</label>
    <div class="tabs">
      <a class="tabs-button js-timetableFilter is-active" target="all">
        <div>All <span class="hidden--xs"> classes</span></div>
      </a>
      <a class="tabs-button js-timetableFilter" target="russell-lea">In-person</a>
      <a class="tabs-button js-timetableFilter" target="online">Online</a>
    </div>-->
    
    <div class="m-top--md" style="margin-left: -15px; margin-right: -15px;">
      <iframe 
      id="sutraWidgetIframe" 
      src="https://app.arketa.co/iframe/yogaruka/schedule" 
      width="100%" 
      frameBorder="0" 
      allow="payment" 
      allowfullscreen></iframe> 
      <script src="https://app.arketa.co/scripts/embed.js"> </script>
    </div>
  </div>
</section>

{% include content/videos.html %}
