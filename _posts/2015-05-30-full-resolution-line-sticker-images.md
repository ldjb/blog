---
layout: post
title: Full resolution LINE sticker images
tags: [technology]
imported: true
excerpt_separator: <!-- more -->
redirect_from:
  - /post/120266420762/full-resolution-line-sticker-images
  - /post/120266420762/full-resolution-line-sticker-images/embed
---

![Screenshot showing a folder containing a number of Doctor Who LINE stickers](/images/line-stickers.png)

Ever wanted to get hold of high resolution image files of your favourite LINE stickers? It’s easy!

<!-- more -->

Firstly, find the sticker set you want to download in the [Sticker Shop](https://store.line.me/stickershop/) and click into its product page.

You should see a web address like the following in the address bar:

<https://store.line.me/stickershop/product/3333/en>

Make a note of the number towards the end, in this case 3333.

Now you can enter the following into the address bar, replacing 3333 with the number obtained just now:

<http://dl.stickershop.line.naver.jp/products/0/0/1/3333/iphone/stickers@2x.zip>

A zipped folder should now start downloading. Extract it to find the image files inside!

Some stickers are animated, and it is not possible to download animated stickers using the above method (the zipped folder will still download, but the images will be static). Instead, use the following web address:

<http://dl.stickershop.line.naver.jp/products/0/0/1/4324/iphone/stickerpack@2x.zip>

You’ll notice that the only difference in the web address is that `stickers` has been substituted with `stickerpack`. Also note that this web address will only work for sticker sets with animated stickers.

The `stickerpack` folder will still contain static versions of the stickers, but there is also a subfolder called `animation` which contains the animated versions. These files use the APNG format which isn’t widely supported. You can use tools such as [Animizer] to convert these into an animated GIF.

That’s all you need to know, but just for the sake of completeness, I’m including the original draft for this post which details an alternative (worse) method of accessing sticker limited files, albeit lower resolution images and only on OS X. It probably won’t be helpful to anyone, but who knows…

---

If you have downloaded LINE from the Mac App Store, it’s easy to get access to full resolution (complete with alpha channel) versions of stickers. They’re all stored in the following location:

`~/Library/Containers/jp.naver.line.mac/Data/Library/Containers/jp.naver.line/Data/Sticker/`

To get there, simply open up Finder and select `Go > Go to Folder…` from the menu at the top of the screen, then paste the above location into the box that appears.

The stickers are grouped into separate folders for each sticker set.

If you find that some stickers are missing, they may not have been downloaded. To fix this, just open up a new chat message and click on the sticker icon. There should be a button that lets you download all the stickers you own. Click this and you should now find all the stickers in the folder.

This is probably the easiest way to get access to the sticker image files if you have a Mac.

Note that animated stickers are stored in a subfolder called `animation` and use the APNG format which isn’t widely supported. You can use tools such as [Animizer] to convert these into an animated GIF.

[Animizer]: https://icons8.com/animizer
