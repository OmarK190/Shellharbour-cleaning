# Service Area & Suburb Plan — Shellharbour Cleaning

Date: 2026-11-19. Method: `local-suburb-seo` skill (OpenStreetMap cues with element IDs, postcode from Nominatim, no recalled geography).

**Status:** the postcodes below are planning values from general knowledge. Before any page is published, `fetch_cues.py` (Nominatim) must confirm the postcode and LGA, and the build fails if a suburb record has no `postcodeSource`. Several localities straddle LGA lines (Calderwood, Haywards Bay, Yallah); the confirmed LGA decides which hub links to them.

## 1. Hub model and URL ownership

Four city-level hubs at `/locations/{hub}/`. Each Google Business Profile links to exactly one hub, with UTM tags.

| Hub | URL | Coverage rule | Owns keywords |
|---|---|---|---|
| Shellharbour | `/locations/shellharbour/` | Shellharbour City LGA | cleaners shellharbour, cleaning shellharbour, house cleaners shellharbour |
| Kiama | `/locations/kiama/` | Kiama Municipality | cleaners kiama, cleaning kiama, house cleaning kiama |
| Dapto | `/locations/dapto/` | Wollongong LGA localities with postcode 2530 (Dapto district) | cleaners dapto, cleaning dapto, house cleaning dapto |
| Wollongong | `/locations/wollongong/` | Rest of Wollongong LGA (not 2530) | house cleaning wollongong, cleaners wollongong, domestic cleaning wollongong |

**Dapto vs Wollongong:** Dapto is part of Wollongong LGA but has its own search demand ("cleaners dapto", "house cleaning dapto" in autocomplete). Making Dapto its own hub and keeping 2530 suburbs off the Wollongong hub stops the two pages competing. The Wollongong hub links to Dapto as a "nearby area", not as a sub-suburb.

**Name collisions:** the hub `/locations/shellharbour/` is the city (LGA). The locality Shellharbour 2529 (the village) gets `/locations/shellharbour-village/`. The Kiama hub covers both the municipality and the town of Kiama 2533; no separate Kiama suburb page.

## 2. Suburb list by hub (planning values — verify)

### Shellharbour City LGA
| Suburb | Postcode | Notes for unique facts |
|---|---|---|
| Shell Cove | 2529 | Marina and new-estate housing, high rental turnover |
| Shellharbour Village | 2529 | Holiday rentals; Airbnb demand |
| Shellharbour City Centre | 2529 | Units near Stockland Shellharbour |
| Flinders | 2529 | |
| Oak Flats | 2529 | |
| Blackbutt | 2529 | |
| Dunmore | 2529 | |
| Albion Park | 2527 | Older homes plus Tullimbar/Calderwood growth |
| Albion Park Rail | 2527 | |
| Calderwood | 2527 | New estate — likely thin OSM cues; LGA straddle |
| Tullimbar | 2527 | New estate — likely thin cues |
| Croom | 2527 | |
| Warilla | 2528 | |
| Barrack Heights | 2528 | |
| Barrack Point | 2528 | |
| Lake Illawarra | 2528 | |
| Mount Warrigal | 2528 | |
| Windang | 2528 | |

### Kiama Municipality
| Suburb | Postcode |
|---|---|
| Kiama (town, on hub page) | 2533 |
| Kiama Downs | 2533 |
| Kiama Heights | 2533 |
| Bombo | 2533 |
| Minnamurra | 2533 |
| Jamberoo | 2533 |
| Gerringong | 2534 |
| Gerroa | 2534 |

Kiama note: high holiday-rental share, so Airbnb and holiday-let turnover cleans are the local service angle.

### Dapto district (Wollongong LGA, 2530)
| Suburb | Postcode |
|---|---|
| Dapto | 2530 |
| Horsley | 2530 |
| Kanahooka | 2530 |
| Koonawarra | 2530 |
| Brownsville | 2530 |
| Penrose | 2530 |
| Avondale | 2530 |
| Huntley | 2530 |
| Haywards Bay | 2530 |
| Yallah | 2530 |
| Wongawilli | 2530 |
| Marshall Mount | 2530 |

Dapto note: West Dapto release area, so new-build and move-in cleans are the local angle.

### Wollongong (rest of LGA)
| Area | Suburbs (postcode) |
|---|---|
| CBD & inner | Wollongong 2500, North Wollongong 2500, West Wollongong 2500, Gwynneville 2500, Keiraville 2500, Mount Keira 2500, Mount Saint Thomas 2500, Coniston 2500, Mangerton 2500 |
| Northern suburbs | Fairy Meadow 2519, Balgownie 2519, Mount Ousley 2519, Towradgi 2518, Corrimal 2518, East Corrimal 2518, Bellambi 2518, Russell Vale 2517, Woonona 2517, Bulli 2516, Thirroul 2515, Austinmer 2515, Coledale 2515 |
| Western | Figtree 2525, Unanderra 2526, Farmborough Heights 2526, Cordeaux Heights 2526, Mount Kembla 2526, Kembla Grange 2526 |
| Southern | Port Kembla 2505, Warrawong 2502, Cringila 2502, Lake Heights 2502, Primbee 2502, Berkeley 2506 |

Wollongong note: University of Wollongong (Gwynneville, Keiraville, North Wollongong) gives strong end-of-semester end-of-lease demand.

## 3. Suburb page publish gate

A suburb gets its own `/locations/{suburb}/` page only when it has **3 or more unique facts** from this list:

1. ≥2 real reviews naming the suburb (from the reviews store, with source)
2. ≥3 completed jobs in the suburb (from bookings data)
3. A named cleaner who covers it (team profile)
4. OSM local cues (≥2 named features with element IDs)
5. Local housing/rental data with a cited source (e.g. ABS Census QuickStats)

Every other suburb is listed (as plain text with a link to the hub's quote tool prefilled with the suburb) on its hub page. The gate is enforced in code: `isPublishable(suburb)` returns false → no route generated, no sitemap entry.

At launch, real jobs and reviews in the Illawarra are zero, so the expected first wave is **no suburb pages, or only those that pass on cues + ABS data + a named cleaner**. That is the honest result. Suburb pages grow as jobs and reviews come in (launch order step 6).

## 4. Generation pipeline (implementation story)

1. Build `data/suburbs.illawarra.ts` from this list.
2. `fetch_cues.py --from-file suburbs.txt --state NSW --out data/illawarra-cues.json` (Nominatim 1 req/s, project User-Agent, cache on).
3. Human spot-check 10% of cues.
4. `generate_paragraphs.py --dry-run`, then apply; protected list starts empty.
5. `verify_report.py` plus the project build; fail if more than a third fall back (do not publish that run).
6. Nearby suburbs with distances computed from Nominatim centroids (haversine), 6–12 per page.
