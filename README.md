## App
![schedule_app_larissa](https://user-images.githubusercontent.com/45489420/81277234-6981fa80-9054-11ea-9358-ac00a12533b2.png)

## Description
I made an app <i>for</i> and <i>with</i> Larissa, she is blind and para cycles at a high level. In this app she can check her sport schedule with her screenreader and her keyboard. 

## Who is Larissa?
Larissa is a 26-year-old cyclist and lives in Texel (a Dutch island). She trains 6 times a week and wants to use her sport schedule to check her training. Larissa is blind, so she uses her screenreader and a keyboard when she visits a webpage. 
Larissa has also a dog who guides her, but she prefers to go with someone she knows. At the exclusive design principle 'study situation' I've written more about Larrisa.

## Larissa's schedule (the problem)
It's not really a problem that Larissa can't see everything: it's a problem that the schedule isn't made to navigate through. This schedule is made in Excell. This makes it very hard to navigate through the content. Most the time, Larissa's sport "mate" reads the schedule for Larrisa. But actually she wants to do it herself. So it's my goal to make a web application for her schedule. 

## The solution
I made an app in which her schedule is processed. Larissa can navigate through this app, by using her keyboard. She can tab through the content. Besides, I made the app in two colors: black and white. In this way, there's a big contrast. If she want to, she can read the content. 

The app is desgined to show Larissa's schedule on micro- and marco niveau. This means that she can check the schedule of today, of another day or the whole year (based on month, location and stage). The home page greets Larissa and tells which day it is today. From that moment, you start on the micro niveau (check the planning of today!) and ends with the macro niveau (check the planning of the year!).

I also changed the style of the scrollbar on the home page. I added a bicycle which "cycles" over the edge of your screen when Larissa navigates through the content. It isn't only fun to see this, but I think it also motivates Larissa because I added a "START" at the top side and a medaille on the bottom side. Besides, it's very functional: in this way she has a better understanding of the size of the page!

But I let Larissa search in her schedule by adding a search bar. During the first test, she said to another student: "If I can't find it, I can also use command + F! I know this is cheating but it always works." This inspired me to add the same way of searching through content. I think this will be the fastest way for Larissa to accomplish her goal. The search bar can search based on the content of the heading level. 


## Exclusive Design principles
We actually design websites for people who use their computers in a similar way as we do. But this isn't enough if we want to design interfaces for people who are excluded. Creating inclusive websites enables people with disabilities to lead a more independent life. What if we design websites for real people with real disabilities? This is where the exclusive design principles are getting important. I wrote something in my [wiki](https://github.com/jenniferslagt/web-design-1920/wiki/Exclusive-Design-Principles) about this. This is how I added the design principles:

<details>
  <summary><b> 1. Study situation </b></summary>
<br>
I have to understand the context of Larissa's situation. Larissa is blind, so it's important for me to understand which devices she uses to visit a website. Most of the time, she uses a screenreader, a keyboard (or a  braille to read something). If Larissa is chatting with her friends, she can type something. Before she sends this, the screenreader reads the message so Larissa can check her message. Sometimes she uses emoji's which are very funny to hear. She can also read some big letters if there is a good contrast, but she prefers to use the screenreader or keyboard.

So it's important for me to understand how a screenreader works! A screenreader reads something that is "focused". Larissa can navigate by using her keyboard (usually the tab). She uses a screenreader called JAWS. There is a lot of information on the internet about this.

Larissa uses her phone or her computer to check her sport schedule. But how did I add this principe: 
* Larissa can navigate through the whole app by using her keyboard. 
* I added a `TABINDEX` on the HTML elements to make it possible to navigate through the content.
* I made the page responsive, so it works on her phone and on the computer.
* I used two color with the biggest contrast: black and white.
* I made the letters big and bold, so it's easier to read it (if she wants to).

</details>

<details>
  <summary><b> 2. Ignore conventions </b></summary>
<br>
We should actually use conventions that people know, but this doesn't work for Larissa. I should design from a different point of view. If you use a screenreader, you actually don't want to much content on the page. The screenreader will make too much noise and it will take too much time. So I have to make the page as minimalistic as possible. The screenreader should only read what's the important. But what is important? 
  
I added this principe in this way:
* I made the content of home page small and powerful. It greets Larissa and gives her three options. That's all!
* If she wants to search through her sport schedule, she literally search by typing the day, stage, location or month (like command + F). This takes less time.
* I didn't add "empty / free" days. 
* The defaults can suck! So I changed the style of the scroll bar (on the home page), so she can "see" the scrollbar and understands the length of the page.

</details>

<details>
  <summary><b> 3. Prioritise identity </b></summary>
<br>
What If we let people with disbalities play an active role in the design process? It's important to design <b>with</b> people! So Larissa is actually not only my "target audience", but also my co-designer! 
In this way, it's important to think about what content must be on the page. What does Larissa want to <i>hear</i>?

You can also use someone's personality to enhace the user experience. Larissa is very sportive! She does cycling and horse riding at a very high level. She represented the Netherlands at the 2016 Summer Paralympics and became with her sighted pilot world champion! But Larissa actually likes the game more than the cycling part. But she does like horse riding.

She also studies at the University of Applied Science. At this moment, she studies Informatica, but she wants to study Communication and Multimedia Design. 

I added this principe in this way:
* In the beginning, I wanted to do something with audio. I thought: "What if Larissa could do a request by asking something to my app?". But I didn't think about how awkward this could be when she's sitting in a train or something else. Larissa prefers to use her keyboard. So I decided to use this as an input.
* Larissa is has "the drive" to win the competition. I wanted to do something with that drive. So I added a "START" and a "medaille" to encourage that motivation. It's about cycling, so the scrollbar is the bicycle.

</details>

<details>
  <summary><b> 4. Add nonsense </b></summary>
<br>
You can add nonsense to make something more interesting and more fun. Think about the monotone voice of a screenreader. It's actually very silly, isn't it? I added some things that can make it more fun: <br>
* On the home page there's big smiley waving at Larissa to greet her. <br>
* If Larissa "tabs" through the smiley, it saids: "Happy smiley which is greeting you with a wave." (Gelukkige smiley die je zwaaiend begroet). <br>
* I changed the style of the scrollbar and added a bicycle, which cycles over the edge of the screen! 
  
</details>

## User scenario


## The process

### User test 1 

So today we tested our applications with Larissa. When tested my app, she could find her way easily through the content. I just needed to add some more content. Unfortunately, the mp3 player and the emoji's didn't work.

I also made some notes which can be very useful: 
* You can transfer information by using colors, texts and audio. 
* There must be a big contrast in colors. Think about black and white.
* The size of the text must be very big, otherwise it's not readable at all.
* Larissa is listening with her screenreader, so think about adding alt text to images.
* Larissa can navigate through the head levels of `<h1>` ! 
* Don't use `display:none`: screenreader don't read this at all.
* Larissa likes to navigate by using the arrows on the keyboard. She can also use her tab. Think about where you want to start and to stop navigating. She want to navigate within the space of the page.
* Emoji's didn't work with her screenreader. Use a image instead.
* Don't use too much white lines: a screenreader reads this.
* My mp3 player didn't work.
* You can test your app with a open source screenreader called NVDA.
* She likes a black background.
* Think about the start point: where do you want your first focus?
* Her trainer talks with week numbers, she doesn't likes it, but it can be useful.


### User test 2
This is the second (and unfortunately the last) user test. I added an animation to the home page (a waving emoji), because I was curious if Larissa could spot the moving hand. And she did!:) 

When the test started, I gave Larissa three exercises: 
1. Can you check the planning of today?
2. What is the plan for the month April? 
3. When are you going to travel to Tokyo?

The first two exercises went very well. The last one was more difficult. Larissa couldn't find the right content, because she didn't know that she could search on any word in the search bar (based on the heading level). But it's a good thing that this went wrong. I am going to add another heading level before she can use the search bar. This is the point where I explain how the search bar works. When I told her that my search bar actually works likes command + F, it all made sense! She likes this way of searching, because it doesn't take a lot of time. I asked here if I needed to seperate the search balk in different topics (months, locations and stages?), but she said it will be fine if I kept it this way. I only needed to add the types of training during a year.

During the tests, I made some notes about the feedback of my fellow students:
- She navigates mainly by using the tab key.
- You can navigate back by using the ALT + backspace.
- "STO" stand for "Sprint training olympisch".
- Color can bring the app more alive (but contrast is very important).
- It's nice to use colors to show which part of the page is selected. For example, give the border of an element a color.
- Larissa wants gold, you can encourage her with this!
- It's nice when there is a planning of the week, based on the numbers of the week.
- She likes it when webdevelopers make the app independent of technologies.

## Sources
* [Exclusive Design](https://exclusive-design.vasilis.nl/)
* [Design for Both Needs and Wants: Applying Anderson’s User Experience Hierarchy of Needs](https://thevisualcommunicationguy.com/2018/11/08/design-for-both-needs-and-wants-applying-andersons-user-experience-hierarchy-of-needs/)
* [Simon Dogger ](http://www.simondogger.nl/ )
* [Controlling focus with tabindex -- A11ycasts #04](https://www.youtube.com/watch?v=Pe0Ce1WtnUM)

## Credits
In the past weeks we all worked from home, because of the virus. This makes it harder to communicate and to concentrate on your work. That's why I would like to thank my fellow students, the help students and the teachers for helping me during this time.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
