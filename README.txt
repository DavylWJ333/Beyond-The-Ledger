Retirement & Legacy Planner: the iPad app (build 1793172231-1a30)

What this is
  The published planner, set up to run from an iPad's Home Screen without internet. It is the same planner page, with
  window.RLP_PWA set so that it loads its two PDF libraries from this folder (html-to-image 1.11.13 and pdf-lib 1.17.1, the
  files whose checksums the planner pins) and keeps everything on the device with a small service worker (sw.js).

Putting it on the iPad (once, with internet)
  1. Put the files of this folder on any HTTPS web address you control (for example a private GitHub Pages site). The
     service worker needs HTTPS; it does not work from the Files app.
  2. Open that address in Safari on the iPad, then Share > Add to Home Screen.
  3. Open the planner from its new icon once while online. It says "Saved to this device: the planner now works without
     internet." From then on it opens and makes PDFs offline.

Updating
  Replace the files at the same address with a newer zip's. The next time the app opens with internet it downloads the new
  version and offers "Update now" (your details on screen are kept).

Client details
  Drafts stay in the app's own storage on that iPad (separate from Safari's) and are cleared with More > Delete the draft on
  this device. No client details are in these files.
