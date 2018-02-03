---
layout: default-post
title: "Blender / Cinema 4D"
date:  2014-03-27
category: jekyll post graphic
category-type: graphics
img: 20140327-blender-cinema4d-thumb.jpg
author: matthew_lean
description: Blender and Cinema4D, learning new rendering engines.
# Extras.
color-1: ff8fb066
color-2: ff590000
comments: true
published: true
permalink: /blender-cinema4d/
---

## Cinema 4D

When looking at Blender I realised that it was very similar to Cinema 4D which is a 3D rendering program that I used before. Many of the techniques of lighting and texturing were similar so this meant I only had to learn my way around the user interface to understand what I was doing.
Below are some of the work I did previously with Cinema 4D.

<div href="#" data-featherlight="{{ site.url }}/assets/site-post/blender-green-1.jpg" class="img" alt="blender render green low poly shape 1"><img src="{{ site.url }}/assets/site-post/blender-green-1.jpg"></div>

<div href="#" data-featherlight="{{ site.url }}/assets/site-post/blender-pink-2.jpg" class="img" alt="blender render pink low poly shape 2"><img src="{{ site.url }}/assets/site-post/blender-pink-2.jpg"></div>

## Shape Series

<div href="#" data-featherlight="{{ site.url }}/assets/site-post/shape-series-c4d.jpg" class="img" alt="c4d cinema4d render shape low poly"><img src="{{ site.url }}/assets/site-post/shape-series-c4d.jpg"></div>

## Depth of Field

For my first test piece inside blender I wanted to learn how to create Depth of Field using the camera. I wanted to do this as It was a technique I learned in C4D when I first started learning it and it made my work look more like photographed objects. I first used two plane lights with different colours to give a gradient like lighting on the shapes. I then found a way of adding a strong blur relating to the position of the squares. This gave an effect similar to shallow depth of field however It was far too strong to be even close to seeming realistic.

<div href="#" data-featherlight="{{ site.url }}/assets/site-post/blender-render-1.jpg" class="img" alt="blender render 1 depth of field"><img src="{{ site.url }}/assets/site-post/blender-render-1.jpg"></div>

After making my first depth of field and not being pleased with the unrealistic look of the outcome I decided to look into using the camera tool in a more advanced and precise way. For this I looked online and fount that I had using the node editor was a way of giving more control over the camera. I saw that I could change the aperture which allowed me to give a shallow depth of field. I used an aperture of 4.5 which I knew would work as on my Cannon this gives a soft focus on background elements.
I also looked into the difference between the rendering quality and how the amount cycles gives a more cleaner render.
This render didn’t use alot of cycles for the render, this gives the image a pixel look and almost makes it look like a noise texture.This is the final render for the Depth of Field test, I liked the simplicity of the grid layout of the squares and how the colour change really emphasizes the focus on the square at the front.

<div href="#" data-featherlight="{{ site.url }}/assets/site-post/blender-render-2.jpg" class="img" alt="blender render 2 depth of field"><img src="{{ site.url }}/assets/site-post/blender-render-2.jpg"></div>

Well when I say water the final outcome looks more like smoke than anything, The render was made in the blender render which is a lower quality render than the cycles render. This is not preferred as the texturing and lighting is not as realistic and the texturing is primitive. For the render I made a self containing square with another square inside. This allowed me to make a container with the larger square and making the inner square a fluid. I didn’t change the texturing of the fluid object as I knew the render wouldn’t look like water. The outcome instead looked more like steam, which actually was more impressive than my original idea. I will later look into making water with the cycles render however this will take some time especially if I render it in a decent quality.

<iframe src="https://player.vimeo.com/video/90186392" width="100%" height="auto" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
