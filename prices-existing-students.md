---
layout: default
cover-image: prices
title: Prices for continuing students
permalink: /pricing/
site-nav: pricing
h1: Prices for continuing students
subtitle: >-
  Private and small group classes for all ages and all skill levels.
  Personalised attention to prevent and recover from injuries.
published: true
---

<section class="container">
  <label>I want access to classes:</label>
  <div class="tabs">
    <a class="tabs-button is-active" href="#in-person">In-person and online</a>
    <a class="tabs-button" href="#online">Online only</a>
  </div>

  <div class="tabs-content is-active" id="in-person">
    <div class="Prices">
      {% include price.html title="Drop in" subtitle="Book a one-off class at either of our studios or online." amount=site.pricing.dropIn amountSuffix=site.pricing.dropInSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/4801" %}

      {% include price.html title="Membership" subtitle="Unlimited classes at either of our studios or online. No contract, billed monthly." amount=site.pricing.membership amountSuffix=site.pricing.membershipSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/86079" %}

      {% include price.html title="Ten class pass" subtitle="10 classes spread out over 26 weeks however you please, in studio and online." amount=site.pricing.tenClassPass amountSuffix=site.pricing.tenClassPassSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/47434" %}
    </div>
  </div>
  <div class="tabs-content" id="online">
    <div class="Prices">
      {% include price.html title="Online drop in" subtitle="Book a one-off class online." amount=site.pricing.dropInOnline amountSuffix=site.pricing.dropInSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/47432" %}

      {% include price.html title="Online membership" subtitle="Unlimited classes online. No contract, billed monthly." amount=site.pricing.membershipOnline amountSuffix=site.pricing.membershipSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/52834" %}

      {% include price.html title="Online ten class pass" subtitle="10 classes spread out over 26 weeks however you please, online only." amount=site.pricing.tenClassPassOnline amountSuffix=site.pricing.tenClassPassSuffix url="https://www.momoyoga.com/yogaruka/member/orderstartdate/7469" %}
    </div>
  </div>

  <p>
    If you’d like to purchase a package as a gift for a friend or family member, please <a class="link" href="/contact/">contact us</a> and we can organise that. Information on pricing for private classes can be found <a class="link" href="/private-classes/">here</a>, and for corporate classes can be found <a class="link" href="/corporate-classes/">here</a>.
  </p>
  <p>
    Concession passes are available for those in need of them, at the discretion of the studio. If this applies to you, please <a class="link" href="/contact/">contact us</a> to learn more.
  </p>
<section>