---
path: "/blogs/07-29-2019-first-conf-recap"
draft: false 
title: "My First Tech Conference: Key Takeaways"
date: "2019-07-29"
---

Last Monday, July 22nd, was a milestone day in my career as a developer. I experienced a dev rite of passage - my first conference. After a lot of delay and deliberation, I decided to attend the Codeland conference, a 1-day conference here in NYC sponsored by CodeNewbie. Last week I wrote about [my decision to register and my preparations for the event](07-22-2019-first-conf-prep), and now that the event is over, I wanted to take some to reflect on my experience.

My original plan was to write a detailed recap of everything I saw, did, and heard at Codeland, but that would have been a long read with not much interesting substance, so instead I'm sharing some of my favorite things and key takeaways. I'm hoping that some of the things I heard and learned over the course of the day will influence and inspire some of the things I do over the coming months and years, and as I do those things, I may come back and share more details about the conference.

#### OPENING SESSION
After registration and breakfast, the day started with some Bollywood dancing (which my friend told me was a very famous song/dance), followed by welcoming remarks from Saron Yitbarek, the founder of CodeNewbie. Then the talks began.  
The first talk, "Laughter Is the Most Serious Weapon" by Luna Malbroux, had the whole theater cracking up, which was not surprising at all - Luna is a comedian, who shared a demo of an app she was involved in creating, EquiTable, which highlights pay inequalities by helping diverse friend groups split dining bills according to expected income. The second talk was much more serious, but no less of a reminder of how code can bring change - Pedro Cruz shared his experience living through Hurricane Maria in Puerto Rico and how he developed an app at a hackathon a year later which uses drones to help first responders find areas of need and know what resources are needed in which areas.

One of the big takeaways I got from the opening session is that code can be used to bring attention important areas of need in our society - whether that need is equal pay for equal work, a way to know which disaster-ravaged areas have what needs, or anything in between.

#### WORKSHOP - Developing with Accessibility in Mind
This workshop was led by Luisa Morales. We started off by going around the room sharing a bit about ourselves and why we're interested in accessibility. In my case, it was because I always want to learn new things, and this is something very important to know.

The workshop was set up in a way where we started off by learning some concepts, then went through a sample site that Luisa had set up for us and applied the accessibility principles we had just learned. The first place where I struggled was testing the site using a screen reader - I had VoiceOver set up on my computer but had never practiced with it, so I didn't know if I was using it right and couldn't get it to read anything on the screen. If there was one thing I could go back in time and change, it would be that I would practice with VoiceOver before the event so that I know I was using it right.

The actual content of the workshop was fantastic. There was a lot of emphasis on writing HTML in a way that screen readers can easily parse - including using semantic HTML properly (not everything should be an `h1` tag), adding `alt` attributes to your image tags, and properly labeling forms. I also learned that links should be underlined (something I plan to do on my blog soon) and nothing else should be. We also discussed color contrast and other design patterns for people with visual impairments.

My #1 takeaway from this workshop is that it's easier to start by designing accessibly than to add accessibility later. The principles involved in designing for accessibility are not that difficult, but finding every inaccessible part of a website and changing it can be very difficult and time-consuming, so it pays to do it right from the start. I know I still have a lot to learn about a11y, but I also know that the more I take it into account when creating the project, the less I will have to think about it later.

#### LUNCH
Lunch break was an hour. Special diet lunches were in a separate room, which I wasn't thrilled with - I think that if I had been sitting in the main lunch room, even with the awkwardness of having to answer questions about my special meal, I might have spoken to people and maybe made some new friends. The special diets room was fairly empty, so I sat at a table mostly by myself and didn't talk to anyone.

I also didn't love my food options, but that was not the conference's fault, that was just me being picky about what I eat for lunch and not liking the food that the vendor sent. 

#### AFTERNOON TALKS
I had the opportunity to hear five talks as part of the afternoon session - "Yes, You Should Write that Blog Post" (Ali Spittel), "Building a Gendered Dictionary" (Omayeli Arenyeka), "Coding the Crossfade" (Michael Winslow), "Art Meets Algorithms" (Kristen Weber), and "An Immigrant's Journey into Tech" (Jo-Wayne Josephs).

Of the five talks, my favorites were Yeli Arenyeka's "Building a Gendered Dictionary" and Michael Winslow's "Coding the Crossfade." 

Going into the event, I was interested in the idea behind Building a Gendered Dictionary - using data to prove that language is sexist - but I was concerned that the talk would be too much about the nitty gritty details of working with data. While the bulk of the talk was about sorting through the data, I found it very understandable, and I really appreciated seeing all of the challenges and how Yeli went about solving them. I learned quite a bit about working with data and how to match the data you have to the data you need, and I really enjoyed this talk.   

Coding the Crossfade was a talk that I didn't really plan to care about. I know what crossfade means, but I'm not a DJ or a party person (and tend to listen to my songs without them mixing at all), so I didn't care at all about the material. But the mark of a good speaker is someone who can make the audience care about their topic whether they wanted to or not, and seeing Michael's enthusiasm and how this topic connected to his life made me want to care more. Once he broke down the problem and what was needed to solve it, I found myself very interested and I really appreciated seeing how we as engineers can use code to solve the problems of our everyday lives (exactly the point Michael (sorry ... DJ Boo Boo) was trying to make).

Ali Spittel's talk on blogging was something I wanted to hear because I do enjoy blogging. Ali talked about writing your blogs for three people - past you (things that would have helped you in the past), present you (to help you learn new things), and future you (to establish yourself as an expert in the subject). At first this didn't sit well with me - the idea that to be successful in the tech world you need to be an expert has never sat well with me - but I understood the idea behind this statement, and I agree that if it is important to your career goals to be seen as an expert, writing a blog post about something you've learned can be an important step in that direction. As someone who already blogs and understands why I blog, I didn't feel like there was a huge amount of value for me in Ali's talk, but I still enjoyed it and felt that it could be valuable as an introduction to blogging and why blogging is important, and I'm sure there were people in the audience who used this talk as motivation to write their first blog post - which is truly amazing.

Kristen's talk on art and algorithms and Jo's talk on her immigration journey and journey into tech were both interesting, but didn't have any key relevance for me.

Each individual talk had its own takeaways, but my key takeaway from the talks in general is that everyone has a different story and a different journey, but when we combine our passions and our technical knowledge, we can accomplish great things.

#### CLOSING KEYNOTE
The closing keynote featured Scott Hanselman speaking about "Solving Diabetes with an Open Source Artificial Pancreas." Scott, who has lived with Type 1 diabetes for over 25 years, took us through the challenges of gaining access to data from medical devices (in Scott's case, it's his blood glucose monitor and insulin pump, both of which have proprietary data that their users can only access through the devices) and how developers have "hacked" these systems and used the data to create an open source pancreas. Using some easily available equipment and a lot of ingenuity, type 1 diabetics are able to build a system that balances blood glucose and insulin in the way that the pancreas would in someone without type 1 diabetes.

I truly enjoyed this talk because it was yet another example of someone using their tech skills to solve a real-world problem. As someone with a background in biology and healthcare, I know how difficult daily life can be when living with a potentially life-threatening disease, and I was amazed and encouraged to see technology being used to significantly improve quality of life and decrease the burden of care on people living with this disease. My key takeaway from this talk was that there is always a solution out there - you just have to keep trying until you find what works.

After the closing keynote, there were some final remarks from Saron, and the event ended with a fun raffle (I didn't win anything, but someone was very excited to win an Oculus Go).

#### AFTERPARTY
The afterparty took place in what I believe was the lunch room, which was set up with some food, drinks, and tables. It was announced that the afterparty was alcohol-free because there's too much alcohol in tech. While I'm not sure I agree with that sentiment (I enjoy having the option to have a drink at events), I certainly respect it, and I had no problem enjoying a nice Sangria Berry mocktail.

There wasn't much that I really appreciated about the afterparty. As far as I could tell, there was no food for me. I was with a friend who did have some food, but all of the tables were full, so he had to stand/walk and eat. It didn't really seem like there was much to do other than chat, and when the dance party started, we both felt ready to leave.

If I had made new friends at the conference, I could see the afterparty being an opportunity to spend a few last minutes with them. But for me, I didn't really gain anything from the afterparty and I could have skipped it. In the future, I think I'd only go to a similar afterparty if I was talking to people who really wanted to go.

#### PERSONAL REFLECTIONS
I wanted to end this post with some personal reflections on my experience. Everyone experiences an event like this differently, and these comments are about my experience, and not necessarily the conference itself.
* _Meeting New People_ - I went into this conference hoping to meet some new people, whether that was real-life interactions with some of my twitter friends, or getting a chance to have a conversation with some random strangers. I missed a few early opportunities to say hi to some twitter people, and once I got to the theater for the opening talks, I ran into a fellow alum from my coding bootcamp and ended up sitting with him and talking to him, which I think changed the game for me, because it eliminated my need to find other people for social interaction. Even when I saw people I thought I knew, I didn't go over to them or say anything. In fact, I'm pretty sure I was sitting next to someone I follow on twitter during the workshop I attended, but I just couldn't work up the courage to say anything to her. I feel pretty terrible about that. As much as I enjoyed having a friend there (and seeing him there definitely helped me feel more at ease), I wish I had been better at making new friends.
* _Food_ - I very much appreciated Codeland accommodating my needs and providing kosher food, but I really didn't think it was worth it. There was one meal (which did upset me because the website said three meals were included with my ticket), and I really didn't like my options. I think in the future I would forgo asking for kosher food and instead just bring my own food (this would be harder outside of NYC, especially if I'm in an area with limited or no kosher food options, but I could always just do cereal and PB&J).

##### _Is This The End or The Beginning?_
One of the reasons I decided to attend Codeland is because I thought it would be a good "beginners" conference and help me figure out if I'd be interested in attending more conferences. So what did I decide? I honestly don't know.   
I enjoyed the talks and the workshop (although if I had to pick one of the two, I'd say I enjoyed the talks more). But I don't know that I enjoyed the environment very much, so I'm still undecided.   
I was considering attending this year's Grace Hopper Celebration (it's in Orlando, so I'd do the conference during the day and then likely hop over to assorted theme parks at night ... I can't be in Orlando and not close down Magic Kingdom), but with the fact that I'd have to miss a chunk of it (the first day is Rosh Hashanah (Jewish New Year) so I'd be showing up a day late and I'd have to leave early on Friday) and I didn't really get a "must go to all the conferences" feel from Codeland, I think that may be out. However, I do think that if the opportunity arose to attend another short local conference, I might be interested in attending (so if CodeNewbie is still in NYC next year ... you may see me there).
