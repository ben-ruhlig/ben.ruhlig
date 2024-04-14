# Ben Ruhlig's Personal Webpage

I'm a new developer primarily, with a background in finance, focused on building products and enhancing my capabilities around data analysis. I'm taking a do first approach to learning and facilitating that with a part-time [Master's in Computer & Information Technology at UPenn](https://online.seas.upenn.edu/degrees/mcit-online/).

I forked Matt Fantinel's [sveltekit-static-blog-template](https://github.com/matfantinel/sveltekit-static-blog-template) as a starting point for this website. My goal is not to become a front-end engineer, but know enough to be speak the language and build minimum viable products. I plan to showcase my projects from this website and add reactivity to components as necessary to do that.

<p align="center">
    <img src="static/images/site-screenshot.png" alt="Screenshot" />
</p>

---

# Demo site

You can see the template live [on the demo site](https://sveltekit-static-blog-template.vercel.app/). Additionally, you can check all components in isolation [on Histoire](https://histoire-sveltekit-static-blog-template.vercel.app/).

# Building & Running Locally

To run it locally, you simply have to run:

```shell
# First, install dependencies
npm install
# Then, run it on dev mode
npm run dev
```

The site should now be available at http://localhost:5173/ on your local machine, and your local machine's IP address on your network—great for testing on mobile OSes.

# Histoire / Storybook

I've used [Histoire](https://histoire.dev), a Vite-based Storybook alternative to be able to see and develop components in isolation. To open it, run `npm run story:dev`.

# Image Optimization

This website uses [image-transmutation](https://github.com/matfantinel/image-transmutation) to automatically optimize images used in the site. This means that even if you use non-optimal image formats (like lossless PNGs), it will go over the images and convert images to WebP and AVIF for you, as long as you use the `<Image />` component instead of `<img />`. This is done on build, so it doesn't change anything when running the website locally.

# Managing Posts

All posts are Markdown files that are processed with [MDsveX](https://mdsvex.pngwn.io/) to allow using Svelte components inside them. In order to make it easier to manage posts, I highly recommend the [Front Matter VS Code extension](https://frontmatter.codes/), which gives you a nice CMS-like UI.

# Hosting

When you run `npm run build`, the website will be compiled into a static site, which means you can host it pretty much anywhere. Some free alternatives I recommend are GitHub Pages, Vercel and Netlify.
