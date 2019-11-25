---
path: "/blogs/11-25-2019-contributing-new-job"
draft: false 
title: "Life At A New Job: Contributing"
date: "2019-11-25"
---

One of the most important things about starting a new job is being aware of the expectations of your early days in the job. During my first week at work, I had a 1:1 meeting with my manager, and we discussed the expectations and goals for my first 30, 60, and 90 days. One of the goals of my first 30 days was to have my first PR merged by the end of my second week. At our next sprint planning, I was assigned two tickets, and by the end of my second week, I had completed one of the tickets and had my PR merged into our repository.

As exciting as it was to have my first PR merged (and it was very exciting), I'm actually a little bit more excited about my second PR. My second PR, which was completed and merged in my third week, started off as something that I thought would involve deleting a few lines of code, but turned into an opportunity to change how we approached a particular component in our code in a way that I feel is more maintainable for the future.

Here is that story:

At my new company (as at many other companies, I'm sure), when we introduce new features, we don't immediately remove old functionality from the app - we add the new functionality, and use a feature flag in the code to indicate that it was turned on. As part of the feature development lifecycle, we eventually deprecate the old code and remove it and the feature flag from the codebase (which we call "sunsetting"). My second ticket involved sunsetting two feature flags, both of which had been used to change the functionality of buttons on a particular page of the app.

At first, it seemed like a pretty easy task. I was able to easily remove most of the references to the feature flag and the old code, but there was one area where the code got a little bit complicated. I was able to remove what I thought were all of the references to old code, but I was left with one piece of code that seemed like it did nothing. I checked with one of the more senior engineers, and he agreed that the code seemed unnecessary and could be deleted.

And so, with all the references to the old code gone and the new functionality working, I committed my code, put in a PR, and ask one of my teammates (the senior engineer who I had asked about deleting the unnecessary code) to review it. My teammate reviewed the PR and mentioned that the functionality of a certain component on the page was not working as expected, but offered to pair with me to figure out exactly what was going wrong.

My teammate suggested a method to fix the functionality that had broken with my PR, and while it fixed the broken functionality, it also broke the functionality that had been introduced with the feature flags I was sunsetting. After a little further exploration, we realized that the "unnecessary" code that I had deleted had actually been part of what made these buttons function properly. It turns out, the code that generated these buttons with the new functionality could generate any one of four buttons. Only two of the buttons had the new functionality, and the code that I had thought was not necessary differentiated between the two buttons that had the new functionality and the two that did not. In deleting that code, I had deleted that separation and was trying to generate the same functionality for all four buttons, which did not work with how the rest of the app was set up.

Looking at the original code, I didn't understand what was going on, which is why I deleted code that was actually necessary. To me, this was a sign that the original code was just not well written. Working with my teammate, we realized that this was an opportunity to make the code more understandable, and I tried to figure out the best way to re-enable the functionality I had unknowingly disabled in a way that future readers of the code would know exactly what my code was doing.

After trying a few things, I ultimately decided to write four separate blocks of code to generate the four separate buttons. It wasn't exactly DRY, but this way each button was handled independently and we could make changes to one button's code or functionality without affecting the other three buttons. I felt that the extra code was a fair exchange for the ability to easily see how each button is generated, and that while it added lines of code, it also added understandability and maintainability, and that was a fair trade-off.

Once I had added in this new code, I resubmitted my pull request, and (after one additional small change) it was approved and merged into the codebase. And so I had added my first lines of code to our codebase (my previous work had just been deleting). 

As exciting as my first contribution was, it was my second contribution that I felt really improved me as a developer. We write code in a way that makes sense to us - and we don't always think about how another person may read that code in the future. With this work, I was reminded to always make sure your code makes sense, and that sometimes it's work a little extra work (or extra code) to ensure that things are sustainable for the future.