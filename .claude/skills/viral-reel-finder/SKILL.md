---
name: viral-reel-finder
description: "Find reels that already went viral (400K+ views) in your niche on Instagram, show why they worked, and write two hooks in your language for each so you can record one today. Uses Claude in Chrome on your own logged-in Instagram."
---

# Viral Reel Finder

Find reels that already worked, so you copy a proven idea instead of guessing. You get a ranked table with real view counts, why each one worked, and two hooks in the user's language for the best ones, with one pick to record today.

## 0. Ask once, then go
One short message, only for what's missing:
- **Niche** (e.g. "AI tools for normal people", "Claude", "personal finance").
- **Language** to write hooks in (e.g. Malayalam, Hindi, English) and the **audience** (mass / normal people, or business owners).
- **Bar:** minimum views (default 400K).
- **Seeds** (optional): reel links or creator handles they like.

## 1. Browser
This skill needs Claude in Chrome (paid Claude plans). Load the browser tools in one go, read the tab list, open a NEW tab, go to instagram.com. If Instagram isn't logged in, ask the user to log in themselves. Never type their password.
No Chrome? Ask for screenshots of creators' reels grids (the view counts show on the thumbnails) and of the reels they like, and do steps 3–5 from those.

## 2. Collect
Work at a normal browsing pace. **Never call Instagram's internal API with fetch** (`/api/v1/...`): it rate-limits (HTTP 429) and can put the user's account at risk. Read the pages the way a person would.

1. **Seeds first.** For each reel link: open it and read the creator, caption, likes, comments and date (`find` or `get_page_text`). For each creator: open `instagram.com/<handle>/reels/`, wait 3 s, run `snippets/grid_views.js` with the javascript tool. It returns every reel code with its view count, highest first. Run it again if it returns 0.
2. **Expand.** Search phrases that fit the niche and the formats that win (see the table below), e.g. `claude just killed`, `chatgpt can now`, `secret codes chatgpt`. Open `instagram.com/explore/search/keyword/?q=<phrase>`, wait 4 s, run `snippets/search_codes.js`. Some phrases return "No results"; move on.
3. **Look at the cover.** Open `instagram.com/p/<code>/`, wait 2 s, then `zoom` the region with the cover and caption at scale 0.35–0.45. The cover text is usually the hook. The post page shows likes, comments and the date, but not views.
4. **Views.** Take views from the creator's grid (step 1). If the reel is too old to load in the grid, estimate from likes using that creator's own likes-to-views ratio from their recent reels, and mark it **est.**. Never present an estimate as a real number.
5. Budget: about 40 post pages per session. Close the tabs you opened when you're done.

## 3. Why it worked
For each reel above the bar, tag the hook pattern:

| Pattern | Example | Works for |
|---|---|---|
| X just killed Y | "Claude just killed Duolingo" | Everyone, when Y is something normal people pay for or use |
| Secret / feels illegal | "Secret codes for ChatGPT" | Mass audiences |
| It can now… | "ChatGPT can now rate your face" | Mass, especially brainrot or fun |
| Exposé | "ChatGPT agrees with you even when you're wrong" | Mass |
| Proof number | "3 reels, 600K views" | Creators |
| Life moment | weddings, selfies, exams, jobs abroad | Very mass in regional markets |

Then score it for this user's audience: **Mass** (would a normal person care?), **Feels illegal** (insider, secret, "they don't want you to know"), **Proof** (views, comments-to-likes ratio), **Easy today** (talking head + screen recording, no special setup).
Comments far above likes usually means a "comment KEYWORD" funnel, which proves demand for the free resource.

## 4. Localize
For the top 5, write **two hooks in the user's language**. Each under 3 seconds spoken:
- Keep English tech words in English inside the other language.
- Use local situations where they fit, e.g. OLX instead of eBay, spoken English or German classes instead of Duolingo, Gulf jobs, weddings.
- No numbers or claims the user can't back up. Mark anything they must verify ("say your real view count").
- Don't copy the creator's script. Keep the idea and the pattern, write new words.

## 5. Output
1. One line: the pick for today and why.
2. Table: # · reel (link) · creator · cover hook · views (real or est.) · likes / comments · date · pattern · fit.
3. For each of the top 5: Hook A, Hook B, and a one-line fit test.
4. "Also seen": what didn't fit and why (e.g. too B2B for a mass audience).
5. Save the table as a Markdown file and offer it. If a Claude Project is in use, save it there so next week's run can skip what's already done.

## Guardrails
- Real numbers only. Label estimates **est.**.
- Credit creators by handle. You're studying their idea, not reposting their content.
- Skip harmful trends (gambling, scams, hacking real accounts, anything that hurts people), even when they are viral.
