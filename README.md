# Activity 13 — Data Cards

> **🛠️ Stack for this lesson** — Expo SDK 58 / React Native 0.88 · runs in Expo Go on a real phone.
> 📥 Template: [/learn/m1/template/activity-12-data-cards](/learn/m1/template/activity-12-data-cards)

A two-column product grid with live search and pull-to-refresh. The screen currently renders 24 mock products with `ScrollView.map()` — fine for 24 items, terrible for 2,400. You'll swap that for `FlatList`, wire the search bar to the existing `filterByQuery` helper, and add a `RefreshControl` so the user can pull down to reload.

**Time:** ~40 minutes for the core path (TODOs 1 and 2), plus about 15 for the pull-to-refresh (TODO 3) · **Concept:** Concept 13 — User Interfaces and Data Display

---

## What You'll Build

| # | Outcome | File |
|---|---------|------|
| 1 | The `ScrollView` and `.map()` become a two-column `FlatList` with a stable key per card and the starter's `DataCard` as the row | `screens/BrowseScreen.js` |
| 2 | Typing in the search bar filters the cards as you type, using the provided helper, and an empty query shows everything | `screens/BrowseScreen.js` |
| 3 | Pulling down shows a spinner for about 1.5 seconds, then reloads the data and still honours any search text | `screens/BrowseScreen.js` |

`DataCard`, `SearchBar`, `EmptyState`, the 24-item dataset, and the `filterByQuery` helper are all in place. Read what's there before you write each TODO.

## Run It

```bash
npm install --legacy-peer-deps
npx expo start
```

Scan the QR code with **Expo Go** on a phone that's on the same Wi-Fi as your computer, or press `w` to preview in a browser. On an iPhone, run `npx expo login` first and sign in to the same Expo account in Expo Go (a parent or tutor creates the account). If the QR code will not load, try `npx expo start --tunnel`; see `TROUBLESHOOTING.md`.

## Verify

Your activity is done when, on a real device:

- [ ] all 24 cards show in two columns and scroll to the bottom smoothly
- [ ] an empty search bar shows every card
- [ ] a search with no matches shows the empty message
- [ ] pulling down shows a spinner for roughly 1.5 seconds, and a search typed before refreshing still applies afterwards

The lesson page adds a few write-up checks for your Notes Doc: your predictions and what you found.

## Stretch

Pick one and write what you tried in your Notes Doc:

- **Your theme.** Replace the 24 items with your own dataset (games, plants, recipes) of at least 12 entries, keeping the same three behaviours.
- Add a sort button for A to Z or by date.
- Wrap `DataCard` in `React.memo` and see whether scrolling feels different.
- Debounce the search by 200 ms and compare how typing feels.

## Show It

In a Notes Doc named `Activity 13 write-up`, answer three prompts: **what I built**, **how I know it works** (name your phone and OS), and **one thing I would change**. Add one AI-use line: "I asked the tutor ___. I decided ___ myself." The lesson page has the full prompts and your Explore question.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in your Notes doc. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a way the simulator and real device differ.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a test you ran, a screenshot you took, a behavior you watched on the device.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, submit the link to your Notes doc, then Mark as Complete.

<!-- claude-template-fix: readme-v3 -->
