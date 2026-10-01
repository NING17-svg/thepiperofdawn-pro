# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | The Piper of Dawn on Steam | Confirm identity, price, and where to read next | Open Wiki / Release Status / Gameplay Loop | Hub | Fold carries a positioning line, a direct answer, and four article sections; the priority entry points are the hero CTAs and the "Where to read next" module. |
| `/wiki` | `src/data/pages/fixed-pages.ts` (`fixed-wiki-hub-en-US`) | Guide | The Piper of Dawn wiki | Understand confirmed facts | Status pages / Mechanics guides | Hub | Launch-day reference hub; groups the status, mechanics, and cast pages and states that no third-party wiki exists as of 2026-09-25. |

| `/release` | `src/data/pages/fixed-pages.ts` (`fixed-release-status-en-US`) | Guide | The Piper of Dawn release date | Check launch date and discount window | Price / Steam | Status hub | September 22, 2026 launch; 10% introductory discount ends October 6, 2026. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Template Game FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/fixed-pages.ts` (`fixed-overview-en-US`) | Guide | The Piper of Dawn game | Confirm identity and avoid the Pink Floyd album mix-up | Release / Steam / Gameplay | Identity hub | Identity, AppID 3804370, tags, and album disambiguation. The `/about` route in `site-pages.ts` is the editorial-policy page. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Template Game Guide | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |
| `/steam` | `src/data/pages/fixed-pages.ts` (`fixed-steam-availability-en-US`) | Guide | The Piper of Dawn Steam | Find the AppID and store listing | Gameplay / Achievements | Status hub | AppID 3804370, single-player only, 91 Achievements, February 2026 demo entry. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` (`fixed-system-requirements-en-US`) | Guide | The Piper of Dawn system requirements | Check whether a PC can run it | Platforms / Steam | Status hub | Windows 10, i5 quad-core, GTX 750 Ti, 4 GB storage. Steam Deck verification not announced. |
| `/platforms` | `src/data/pages/fixed-pages.ts` (`fixed-platforms-en-US`) | Guide | The Piper of Dawn platforms | Check which platforms are confirmed | System requirements | Status hub | Windows PC only at launch; Mac, Linux, Steam Deck, and console not announced as of 2026-09-25. |
| `/languages` | `src/data/pages/fixed-pages.ts` (`fixed-languages-en-US`) | Guide | The Piper of Dawn supported languages | Check language and audio coverage | Steam | Status hub | English, Simplified Chinese, Japanese, Traditional Chinese, all with full audio and subtitles. |
| `/price` | `src/data/pages/fixed-pages.ts` (`fixed-price-and-editions-en-US`) | Guide | The Piper of Dawn price | Check the Steam price and bundles | Release / Steam | Status hub | USD 12.99 base, USD 11.69 with the introductory discount; three bundles include the game. |
| `/reviews` | `src/data/pages/fixed-pages.ts` (`fixed-reviews-and-reception-en-US`) | Guide | The Piper of Dawn reviews | Check the Steam aggregate | Wiki / Demo | Status hub | Very Positive, 88% of 97 reviews as of 2026-09-25; PlayPile 9.0/10. |
| `/demo` | `src/data/pages/fixed-pages.ts` (`fixed-demo-en-US`) | Guide | The Piper of Dawn demo | Check the demo and its post-launch status | Release / Steam | Status hub | Steam Next Fest February 2026; post-launch availability not announced. |
| `/gameplay` | `src/data/pages/fixed-pages.ts` (`fixed-gameplay-loop-en-US`) | Guide | The Piper of Dawn gameplay | Understand the four-system loop | Alchemy / Farming / Time loop | Mechanics hub | Overview of the four pillars; each has its own page. |
| `/alchemy` | `src/data/pages/fixed-pages.ts` (`fixed-alchemy-system-en-US`) | Guide | The Piper of Dawn alchemy | Understand brewing and Equivalent Exchange | Farming / Gameplay | Mechanics guide | Tree of Life, Equivalent Exchange, alchemical circles. Recipe list not published. |
| `/farming` | `src/data/pages/fixed-pages.ts` (`fixed-farming-and-crops-en-US`) | Guide | The Piper of Dawn farming | Understand crops and biomes | Alchemy / Peoplesprouts | Mechanics guide | 100+ magical crops with trait modifiers; underground biomes expand the plot. |
| `/peoplesprouts` | `src/data/pages/fixed-pages.ts` (`fixed-peoplesprouts-en-US`) | Guide | The Piper of Dawn Peoplesprouts | Understand the growable workforce | Gameplay / Farming | Mechanics guide | Built from fingers, eyeballs, and brains; assigned as Farmer, Retailer, or Manufacturer. |
| `/companions` | `src/data/pages/fixed-pages.ts` (`fixed-companions-heroines-en-US`) | Guide | The Piper of Dawn companions | Find the named cast | Factions / Endings | Story guide | Six central heroines named by the developer; 40+ named NPCs. Roles not published. |
| `/achievements` | `src/data/pages/fixed-pages.ts` (`fixed-achievements-en-US`) | Guide | The Piper of Dawn achievements | Check the achievement count | Steam / Wiki | Records hub | 91 Steam Achievements confirmed; individual entries not published as of 2026-09-25. |
| `/time-loop` | `src/data/pages/fixed-pages.ts` (`fixed-time-loop-mechanics-en-US`) | Guide | The Piper of Dawn time loop | How the Save/Load loop and Oracle stacking work | Factions / Endings | Mechanics guide | Save and Load as two favourite gods; Oracle blessings stack across loops. |
| `/factions` | `src/data/pages/fixed-pages.ts` (`fixed-factions-en-US`) | Guide | The Piper of Dawn factions | Six-faction reputation framing | Endings / Time loop | Story guide | Four factions named by the developer (Commercial Street merchants, Silver Key Fae syndicate, Goddess worshipers, the Witch's devotees) plus two implied; the unnamed two are recorded as a gap. |
| `/endings` | `src/data/pages/fixed-pages.ts` (`fixed-endings-en-US`) | Guide | The Piper of Dawn endings | Understand what decides an ending | Factions / Time loop | Story guide | Multiple Endings and Choices Matter confirmed by tags; count and triggers not published. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: generated from `src/data/entities.ts` and the generic renderer in `src/lib/entities.ts`.
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release`, `/steam`, `/price`, `/platforms`, `/languages`, `/system-requirements`, `/reviews`, `/demo`, `/achievements`, `/faq`
- Official facts and safe guide structure: `/wiki`, `/gameplay`, `/alchemy`, `/farming`, `/peoplesprouts`, `/time-loop`
- Story and cast: `/companions`, `/factions`, `/endings`
- Evergreen hub and trust: `/`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

Related links are carried by each page's `relatedPageIds`, and cross-references
inside a page body are ordinary Markdown links rendered as anchors. The
authoring-only "Internal link requirements" module is no longer rendered on any
page; those links live in the section text where a reader can follow them.

- Homepage links the highest-demand status and mechanics pages, and the Wiki hub.
- Wiki links every status, mechanics, and cast page.
- Gameplay links the four pillar pages plus Endings; each pillar page links back to Gameplay and sideways to the other pillars.
- Time loop links Factions, Endings, and Gameplay; Factions and Endings link each other and Time loop.
- Companions links Factions and Endings.
- Release, Steam, Price, and Demo link each other where a reader would want the next fact.

## Open Questions

- Replace this section with game-specific unknowns during content configuration.
