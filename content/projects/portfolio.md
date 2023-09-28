---
title: 'Portfolio'
coverImage: '/projects/photo-1545665277-5937489579f2.avif'
date: '2022-10-16T05:35:07.322Z'
tags: [ [ 'Next.js',"gray" ],[ 'styled-components',"pink" ],[ 'TypeScript',"cyan" ] ]
---

# Hello World

I made my portfolio with Next.js and MDX. I used Next.js because I wanted to learn it along with MDX and
styled-components.
<!--more-->
I also wanted to learn how to deploy a Next.js app to Vercel.
These are technologies that I learnt during my apprenticeship and I wanted to use them in a project to make my knowledge
**rock solid**.

# The project

I started by creating a Next.js website without a detailed conception. I know I wanted to have page that listed my
projects,
but I hadn't thought that I would have to copy-paste the same code for each project. Meanwhile, I was starting to write
my internship report and was told it could be a could idea to write it in Markdown. That's when I started digging for a
way to
populate my website with Markdown files. During my research I found MDX, which is a way to write JSX in Markdown. I was
sold.

# The result

When I create a file in the `_projects` folder with the `.mdx` extension, it is automatically added to the `/projects`
page.
I am able to add some JSX to style.
I can also add a cover image to the project by adding an image in the `public/images` folder and referencing it in the
front matter of the project.