# Development

## Development prereqs

* `mdbook`

On mac, `brew install mdbook`

* `mdbook-linkcheck`

Ref https://github.com/Michael-F-Bryan/mdbook-linkcheck#getting-started

Get the binary release from https://github.com/Michael-F-Bryan/mdbook-linkcheck/releases, and add it to a

RELEASE=https://github.com/Michael-F-Bryan/mdbook-linkcheck/releases/download/v0.7.7/mdbook-linkcheck.x86_64-apple-darwin.zip
mkdir -p mdbook-linkcheck && cd "$_" && \
  curl -L $RELEASE -o mdbook-linkcheck.zip && \
  unzip "$_" && \
  chmod +x mdbook-linkcheck && \
  export PATH=$PWD:$PATH && \
  cd ..

## Run locally

Start it: `mdbook serve --open`

## Checking links

Unfortunately, I couldn't get the linkcheck to run in GitHub CI, it would generate an empty site!  No idea why.

To manually check broken links, run this from root directory:

```
mdbook-linkcheck/mdbook-linkcheck -s
```

## Deployment

Done with github actions.

### Deployment config

Ref https://github.com/peaceiris/actions-mdbook

`GITHUB_TOKEN` configured in the repo Settings > Actions > General.

## Creating gifs for docs

Summary: record with Quicktime, import into Shotcut and edit, export a .mov, and generate a .gif.

From https://superuser.com/questions/556029/how-do-i-convert-a-video-to-gif-using-ffmpeg-with-reasonable-quality

This worked best:

ffmpeg -i in.mov \
    -vf "fps=10,scale=1000:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" \
    -loop 0 out.gif

ffmpeg -i in.mov -vf "fps=10,scale=1000:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse=diffusion=none" -loop 0 out_2.gif


Tweaking a bit:

ffmpeg -i in.mov -vf "fps=10,scale=1000:-1:flags=lanczos,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse" -loop 0 out_2.gif

Generates a 3MB file.


Tip 3 on this post -- https://www.seancdavis.com/posts/three-ways-to-add-image-to-github-readme/ -- says use github.  Create an issue in a repo and drag the gif, and copy the link that GitHub generates, e.g.

```
![small_lute](https://user-images.githubusercontent.com/1637133/209414488-1d2d63db-6790-452c-bfae-837afed822b2.gif)
```

### Failed things

I tried putting a gif in my Dropbox/Public folder, but GitHub wouldn't serve unless the gif was quite small.  When the gif was large, or even about ~5mb, the image wouldn't show up.  Per https://stackoverflow.com/questions/37750270/unable-to-embed-a-gif-on-imgur-to-a-readme-md-on-github:

> GitHub routes all content through https://camo.githubusercontent.com/ even for external source now. Sharing a file that is bigger than the size limit (10MB) will get you a "Content length exceeded" error.

I first recorded a gif using Quicktime, edited it with Shotcut, exported a .mov.

There are several links about converting movs to gifs:

* https://gist.github.com/dergachev/4627207
* https://superuser.com/questions/436056/how-can-i-get-ffmpeg-to-convert-a-mov-to-a-gif

Sample commands tried:

```
ffmpeg -i in.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=1 > out.gif

ffmpeg -i in.mov -s 800x600 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=1 > out.gif

# chatgpt suggested:

ffmpeg -i in.mov -vf "fps=15,scale=800:-1:flags=lanczos" -c:v gif -pix_fmt rgb24 -r 15 -f gif - | gifsicle --optimize=3 --delay=1 > out.gif
```

Anything using imagemagick or convert hangs on my mac: 

```
# hanging on convert
ffmpeg -y -i in.mov -f image2pipe -vcodec ppm - | convert -delay 2 -loop 0 -layers Optimize - gif:- | gifsicle -d 3 -O3 -o piped.gif
```
