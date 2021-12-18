---
layout: default
cover-image: prices
title: Pricing for existing students
permalink: /pricing/
site-nav: pricing
h1: Pricing for existing students
subtitle: >-
  Private and small group classes for all ages and all skill levels.
  Personalised attention to prevent and recover from injuries.
published: true
---

<section class="container container--sm m-top--md">
  <h2>Popular Packages</h2>

  {% include price.html title="Intro Offer" subtitle="2 weeks unlimited, in-studio and online" amount=site.pricing.intro url="https://www.momoyoga.com/yogaruka/" %}

  {% include price.html title="Unlimited Membership" subtitle="Access both in-studio and online" amount=site.pricing.membership url="https://www.momoyoga.com/yogaruka/" %}
  
  {% include price.html title="Unlimited Membership ONLINE ONLY" amount=site.pricing.membershipOnline url="https://www.momoyoga.com/yogaruka/" %}

  {% include price.html title="Private Class" subtitle="45-90min in studio or online" amount="from $108" url="/contact" %}
</section>

<div class="Longform Longform--blogpost" markdown="1">
{% include content/prices.md %}
</div>
