# How Dotnet Changed Me

I was blind but now I see.  
I was building castles with sand, but now I'm building castles above castles.  
As a programmer, [Dotnet][0] did that.  

Before knowing about [Dotnet][0], my software looked like a bunch of files that did a few things.
It was a monolith, everything existed in a single file. I thought this was convenient.  
My UI code was directly connected to the Logic behind and that was directly connected to the DB / File system.  
If I had to change anything anywhere, this meant I editted all my stuff to match that change.  
I didn't realize the difference a proper system made until I tried it out myself.  

I used to spend hours editing and fixing my code to add a new feature or make a small difference in my software.
Now I'm handling it like a pro by fixing just one thing that needs to change and the rest just takes care of itself.  
Building software is one thing, building software that is easy to build is what matters.

## How our Perception of Tools make a difference

The reason I was oblivious to the existence and popularity of [Dotnet][0] was because of my perception.  
Everytime I was introduced to something revolutionary, I tend to have a level of skepticism towards it.  
"I've been fine without it so far, Do I really need that?"  
Chances are that I don't.  

But the change that we all need is a shift in perspective.  
"I may not need that, but can it benefit me?"  
"It might be a challenge to understand it, but Can it Help me on the long run?"  

These questions point us towards a better direction.  
Instead of asking if I like it, I'm asking if I am improving with it.  
Perceiving new tools in the light of the advantage they give and consequences it might have will help guide our decisions in a better direction. This change in perspective helped me not just with programming but in my own life.  
And when I took that decision to understand [Dotnet][0] for the long term benefits, Things started to change.

## When it really falls into place

[Dotnet][0] already has a lot of things taken care of.  
This is probably the greatest advantage when it comes to building applications.  
Web apps, API endpoints, Core programs; [Dotnet][0] already has a template for it.  
You just have to configure a few classes here and there to meet your requirements.  

All computer applications require a few things:

* Data Storage  
  Be it in the files or within databases, managing data is something every application deals with at some point.  
  Databases already handle away a lot of this trouble, but applications still might have the need to move away from one database to another database.  
  Handling these repetitive database migrations, upgrades, downgrades and other operations are something that will take a lot of effort, testing and your time.  
* Configuration  
  The app might need to behave in a certain way while it's being developped than when it's deployed.  
  The app might need to shift databases or use different secret keys. These information cannot exist inside code.  
  Information like these are usually saved in .config files.  
  This way, developers could easily change app behaviour by changing config files instead of modifying the app each time.  
  Handling these config file reads and writes and parsing them efficiently is something that every app needs to do.  
* Communication  
  The app might need to fetch data or send data to different sorts of providers. These operations require configuring handlers that usually operate on the same interfaces. Setting up these configurations should be simple each time.

If you are spending more time setting up your app on any of these areas rather than building functionality of your app, you can confirm that you are spending time on a problem that has already been solved.  
It might take a bit of time to get used to the conventions used in and around any framework, but once that's done, you will be spending more time building your skills.

## Other thoughts

While it is fair to say that [Dotnet][0] and other such frameworks or tools already have solutions to what we're looking for, I would still not consider it to be the final stop for all solutions.  
The tools you use may have been built and shaped into its current form through a long and intense process of perfection by plenty trials and errors. This is a fair reason to assume that it is in it's prime condition and might be the best solution to use. But there will always be room for improvement.  

Understanding how the various systems within any framework operate and trying to design something that will perform better than the existing standard will help not only you to push your knowledge and experience further but also the community using that framework.

_madhaven_
_20250427_

[0]: https://dotnet.microsoft.com/