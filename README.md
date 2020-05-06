## App

## Description
I made a app <i>for</i> and <i>with</i> Larissa, she is blind and para cycles at a high level. In this app she can check her sport schedule with her screenreader and her keyboard. 

## Who is Larissa?
Larissa is a 26-year-old cyclist and lives in Texel (a Dutch island). She trains 6 times a week and wants to use her sport schedule to check her training. Larissa is blind, so she uses her screenreader and a keyboard when she visits a webpage. 
Larissa has also a dog who guides her, but she prefers to go with someone she knows. At the exclusive design principle 'study situation' I've written more about Larrisa.

## Larissa's schedule (the problem)
It's not really a problem that Larissa can't see everything: it's a problem that the schedule isn't made to navigate through. This schedule is made in Excell, which is exported as a . This makes it very hard to navigate through the content. Most the time, Larissa's sport "mate" reads the schedule for Larrisa. But actually she wants to do it herself. So it's my goal to make a web application for her schedule. 

## The solution


## Exclusive Design principles
We actually design websites for people who use their computers in a similar way as we do. But this isn't enough if we want to design interfaces for people who are excluded. Creating inclusive websites enables people with disabilities to lead a more independent life. What if we design websites for real people with real disabilities? This is where the exclusive design principles are getting important. I wrote something in my [wiki](https://github.com/jenniferslagt/web-design-1920/wiki/Exclusive-Design-Principles) about this. This is how I added the design principles:

<details>
  <summary><b> 1. Study situation </b></summary>
<br>
I have to understand the context of Larissa's situation. Larissa is blind, so it's important for me to understand which devices she uses to visit a website. Most of the time, she uses a screenreader, a keyboard (or a  braille to read something). If Larissa is chatting with her friends, she can type something. Before she sends this, the screenreader reads the message so Larissa can check her message. Sometimes she uses emoji's which are very funny to hear. She can also read some big letters if there is a good contrast, but she prefers to use the screenreader or keyboard.

So it's important for me to understand how a screenreader works! A screenreader reads something that is "focused". Larissa can navigate by using her keyboard (usually the tab). She uses a screenreader called JAWS. There is a lot of information on the internet about this.

Larissa uses her phone or her computer to check her sport schedule.
</details>

<details>
  <summary><b> 2. Ignore conventions </b></summary>
<br>
We should actually use conventions that people know, but this doesn't work for Larissa. I should design from a different point of view. If you use a screenreader, you actually don't want to much content on the page. The screenreader will make too much noise and it will take too much time. So I have to make the page as minimalistic as possible. The screenreader should only read what's the important. But what is important? 
</details>

<details>
  <summary><b> 3. Prioritise identity </b></summary>
<br>
What If we let people with disbalities play an active role in the design process? It's important to design <b>with</b> people! So Larissa is actually not only my "target audience", but also my co-designer! 
In this way, it's important to think about what content must be on the page. What does Larissa want to <i>hear</i>?

You can also use someone's personality to enhace the user experience. Larissa is very sportive! She does cycling and horse riding at a very high level. She represented the Netherlands at the 2016 Summer Paralympics and became with her sighted pilot world champion! But Larissa actually likes the game more than the cycling part. But she does like horse riding.

She also studies at the University of Applied Science. At this moment, she studies Informatica, but she wants to study Communication and Multimedia Design. 
</details>

<details>
  <summary><b> 4. Add nonsense </b></summary>
<br>
You can add nonsense to make something more interesting and more fun. Think about the monotone voice of a screenreader. It's actually very silly, isn't it? I thought about some things that can make it more fun: <br>
- Maybe I can apply a foreign accent the screenreader. For example, she likes the english accent if she reads a Harry Potter book.
- I can make it more personal by making a screenreader more "human". Think about saying: "Goodmorning".
- I can add some emotions to make it more fun? How does the sceenreader read this out loud?
- Maybe I can add something else than audio. Think about your phone that vibrates when you get a message. 
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
2. What is the plan for the month May? 
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
[Emojipedia](https://emojipedia.org/)

## Credits


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
