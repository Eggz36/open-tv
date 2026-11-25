# Open TV for iPhone

Open TV is a live TV app that runs from your iPhone's Home Screen. It uses the free iptv-org channel database. You can put it online for free with GitHub Pages in about 5 minutes, and you don't need a Mac.

## 1. Put it online (on any computer)

1. Sign in at https://github.com (or create a free account).
2. Click **+** (top right) → **New repository**. Name it `open-tv`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Unzip `open-tv-ios.zip`. Drag **everything inside the folder** into the upload box: `index.html`, `sw.js`, `manifest.webmanifest`, `README.md` and the `icons` folder. Click **Commit changes**.
5. Go to **Settings** → **Pages**. Under "Branch", choose **main** and **/ (root)**, then click **Save**.
6. Wait about a minute. Your app will be at
   `https://YOUR-USERNAME.github.io/open-tv/`

## 2. Install it on your iPhone

1. Open that link in **Safari**. It has to be Safari for this step.
2. Tap the **Share** button (the square with an arrow).
3. Tap **Add to Home Screen** → **Add**.
4. Open **Open TV** from your Home Screen. It runs full-screen, with no Safari bars.

## Using it

- **Swipe up / down on the video:** next / previous channel
- **Swipe sideways:** jump back to the last channel
- **Tap the video:** show the channel banner
- **☰ Guide / ▤ Details:** hide the channel list or the info panel. With the guide hidden, the video fills the screen.
- **⛶:** iPhone's own full-screen player. Rotate the phone for landscape.
- **⧉:** picture-in-picture, so you can keep watching while using other apps
- **⚙ (in the guide):** settings. This is where you hide geo-blocked or non-24/7 channels, or show plain-http streams.

## Good to know

- The first launch downloads the channel database, which takes a few seconds. After that, it opens instantly.
- Not every channel works. Some are blocked outside their own country, and some streams go offline. When one fails, the app tries the channel's other streams automatically.
- Streams that start with plain `http://` can't play from a secure `https://` site, so they're hidden by default. You can turn them back on in settings, but most won't play.
- To update the app later, upload the new `index.html` to the same repo. The app picks up the change the next time it's opened with internet.
