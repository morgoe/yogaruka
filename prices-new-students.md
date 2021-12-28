---
layout: default
cover-image: prices
title: Pricing for new students
permalink: /new-students/
site-nav: new-students
h1: Pricing for new students
subtitle: >-
  We have two options for newcomers to Yogaruka. Both are great ways to get started and learn what the studio is all about.
published: true
---

<section class="container container--md">
  <label>I want access to classes:</label>
  <div class="tabs">
    <a class="tabs-button js-tabButton is-active" href="#in-person">In-person and online</a>
    <a class="tabs-button js-tabButton" href="#online">Online only</a>
  </div>

  <div class="tabs-content is-active" id="in-person">
    <div class="Prices">
      {% include price.html title="Drop in" subtitle="Book a one-off class at either of our studios or online." amount=site.pricing.dropIn amountSuffix=site.pricing.dropInSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/4801" %}

      {% include price.html title="New student intro offer" subtitle="Unlimited classes for 14 days at either of our studios or online. Only available to new students." amount=site.pricing.intro amountSuffix=site.pricing.introSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/51942" %}
    </div>
  </div>
  <div class="tabs-content" id="online">
    <div class="Prices">
      {% include price.html title="Online drop in" subtitle="Book a one-off class online." amount=site.pricing.dropInOnline amountSuffix=site.pricing.dropInSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/47432" %}

      {% include price.html title="Online intro offer" subtitle="Unlimited classes for 14 days online. Only available to new students." amount=site.pricing.introOnline amountSuffix=site.pricing.introSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/47433" %}
    </div>
  </div>

  <p>
    If you’d like to purchase a package as a gift for a friend or family member, please <a class="link" href="/contact/">contact us</a> and we can organise that. Information on pricing for private classes can be found <a class="link" href="/private-classes/">here</a>, and for corporate classes can be found <a class="link" href="/corporate-classes/">here</a>.
  </p>
  <p>
    Concession passes are available for those in need of them, at the discretion of the studio. If this applies to you, please <a class="link" href="/contact/">contact us</a> to learn more.
  </p>
<section>