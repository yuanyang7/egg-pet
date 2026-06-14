# Egg Chef Test — finale "what cuisine are you" verdict

Instead of the static finale title ("the fried six" / "六颗煎蛋"), the summary page reads **how you
fried the eggs** and crowns you a type of chef — *which cuisine's master are you?* — drawn from
China's eight great cuisines (八大菜系) and the wider world. A catchy title plus a short
"this is your kitchen soul" blurb, perfect for screenshotting and arguing about with friends.

Same data we already freeze for the group photo; no new tracking except one extra field (`boops`).
Everything below drops straight into `egg.js` and follows the existing `STRINGS.en` / `STRINGS.zh`
pattern (keep the two language tables key-for-key identical).

---

## 1. The metrics

Computed once, at finale, from `friedSnapshots` (the six frozen `{cook, salt, pepper, happy,
dizzy, boops}` looks). All thresholds are calibrated to the real game ranges:

- `cook`: 0 → ~2.2. `<0.6` = pulled out runny/early, `0.85–1.2` = golden, `>1.5` = burnt.
- `salt` / `pepper`: each an array, length 0–44, growing ~8 per tap (`SEASON_CAP = 44`).
  One tap (≈8) already reads as "seasoned"; per-egg total salt+pepper maxes at 88.
- `happy`: 0 → 1. `dizzy`: boolean (the rare permanent-dizzy from over-booping).
- `boops`: how many times that egg was booped (needs the one-line snapshot change in §4).

| metric | meaning |
|---|---|
| `avgCook` | mean doneness |
| `cookSpread` | `max(cook) − min(cook)` — how uneven the doneness was |
| `nBurnt` | eggs with `cook > 1.5` |
| `nRunny` | eggs with `cook < 0.6` (yanked out early) |
| `nGolden` | eggs with `0.85 ≤ cook ≤ 1.2` |
| `totalSalt` / `totalPepper` | summed grain counts across all six |
| `totalSeason` | `totalSalt + totalPepper` |
| `avgSeason` | `totalSeason / 6` |
| `seasonSpread` | `max − min` of per-egg (salt+pepper) — seasoning consistency |
| `avgHappy` | mean mood |
| `nSad` | eggs with `happy < 0.35` |
| `nDizzy` | eggs left permanently dizzy |
| `totalBoops` | total boops across all six |

---

## 2. The chefs (priority-ordered — first match wins)

Read top to bottom; the **first** row whose condition is true is your verdict. The last row is the
catch-all so there is always a result. Cuisine picked to match each frying style's flavor profile —
八大菜系 marked **(八大)**.

| # | id | condition | cuisine / chef (EN) | 菜系 / 厨师 (ZH) |
|---|----|-----------|---------------------|------------------|
| 1 | `pyro` | `nBurnt >= 3` | The Grill Master (BBQ) | 炭火大师（烧烤） |
| 2 | `menace` | `nDizzy >= 2 \|\| totalBoops >= 12` | The Dark-Cuisine Master | 黑暗料理大师 |
| 3 | `chaos` | `cookSpread >= 1.0 && seasonSpread >= 24` | The Fusion Maverick | 无国界融合大厨 |
| 4 | `perfect` | `nGolden >= 5 && cookSpread <= 0.4` | The Sushi Master (Itamae) | 寿司之神（日料） |
| 5 | `purist` | `totalSeason === 0` | The Cantonese Purist **(八大)** | 粤菜师傅 **(八大)** |
| 6 | `maximal` | `avgSeason >= 20` | The Sichuan Firebrand **(八大)** | 川菜掌勺 **(八大)** |
| 7 | `salty` | `totalSalt >= totalPepper*3 && totalSalt >= 24` | The Shandong Traditionalist **(八大)** | 鲁菜大师傅 **(八大)** |
| 8 | `peppery` | `totalPepper >= totalSalt*3 && totalPepper >= 24` | The Hunan Heat-Bringer **(八大)** | 湘菜辣手 **(八大)** |
| 9 | `runny` | `nRunny >= 3` | The Al Dente Believer (Italian) | 意式 al dente 信徒 |
| 10 | `softie` | `avgHappy >= 0.72 && nBurnt === 0` | The Comfort-Food Cook | 妈妈的味道（家常菜） |
| 11 | `toughlove` | `nSad >= 2 && nGolden >= 2` | The Michelin Perfectionist (French) | 米其林主厨（法餐） |
| 12 | `steady` | _(default)_ | The Banquet Master **(八大·淮扬)** | 淮扬菜大师 **(八大)** |

---

## 3. The copy (titles + blurbs, EN + ZH)

### EN

- **pyro — The Grill Master**
  Three or more came out charcoal-black, and to you that's not failure — that's smoke ring. Your
  spirit animal is an open flame; low-and-slow is for cowards. Born for the grill, feared by the
  smoke alarm.

- **menace — The Dark-Cuisine Master**
  You booped them dizzy and called it plating. While everyone else fried breakfast, you ran a
  performance-art piece. Your kitchen has no recipes, only victims. Long live the dark cuisine.

- **chaos — The Fusion Maverick**
  One runny, one cremated, one drowned in pepper — no two from the same country. You don't pick a
  cuisine, you blend all of them and dare it to work. Borderless, fearless, gloriously undefinable.

- **perfect — The Sushi Master**
  Six identical golden suns, aligned to the millimeter. You'd re-fry the whole batch if one yolk sat
  crooked. Precision is devotion; the cutting board is an altar. Jiro would nod.

- **purist — The Cantonese Purist**
  Not one grain of salt, not a fleck of pepper — you let the egg be the egg. To you, real skill is
  showing the ingredient, not hiding it. 原汁原味: the truest flavor needs no disguise.

- **maximal — The Sichuan Firebrand**
  You seasoned like the spice rack owed you money. Bold, layered, unapologetically loud — heavy oil,
  heavy heat, heavy heart. Subtle? Never met her. One bite and the whole table is sweating happily.

- **salty — The Shandong Traditionalist**
  Salt, salt, and a little more salt — pepper was strictly decorative. You cook by the old rules:
  savory is king, and one pinch settles everything. Foundational, dependable, completely set in your
  ways.

- **peppery — The Hunan Heat-Bringer**
  Pepper on everything; the salt never got a turn. You like it sharp, fierce, and a little reckless —
  the hotter the better, the bolder the truer. No chili, no joy.

- **runny — The Al Dente Believer**
  Half of them barely met the heat, and you'll insist that's the point. Underdone? No — al dente. You
  pull at the perfect almost-moment, because total commitment is so… well-done. Elegant, a little
  contrarian, allergic to overcooking anything (including decisions).

- **softie — The Comfort-Food Cook**
  Every egg left the pan beaming, because you simply would not let one suffer. You don't cook food,
  you cook care — the taste of somebody's mom's kitchen. Warm, generous, and absolutely never going
  to run a restaurant.

- **toughlove — The Michelin Perfectionist**
  Your eggs came out flawless and faintly traumatized. You run the pan like a French brigade —
  exacting, intense, zero tolerance for a sloppy yolk. The diners are nervous; the food is perfect.
  "Yes, Chef."

- **steady — The Banquet Master**
  A little of everything, nothing out of place — golden enough, seasoned enough, happy enough. You're
  the cuisine they serve at state banquets: balanced, refined, impossible to dislike. The one
  everyone can agree on.

### ZH

- **pyro — 炭火大师**
  起码三颗煎成了焦炭，而你管这叫"烟熏味"。你的本命是明火，文火慢炖是懦夫的玩意儿。为烤架而生，被烟雾报警器闻风丧胆。

- **menace — 黑暗料理大师**
  你把蛋戳到眼冒金星，还说这叫摆盘。别人在煎早餐，你在搞行为艺术。你的厨房没有菜谱，只有受害者。黑暗料理万岁。

- **chaos — 无国界融合大厨**
  一颗流心、一颗成炭、一颗淹在胡椒里——没有两颗来自同一个国家。你从不挑菜系，你把它们全混到一起，赌它能成。无国界、无所畏惧、精彩到无法定义。

- **perfect — 寿司之神**
  六颗一模一样的金黄小太阳，毫米级对齐。但凡有一颗蛋黄歪了，你能把整盘重煎一遍。精准即虔诚，案板就是祭坛。小野二郎看了都点头。

- **purist — 粤菜师傅**
  一粒盐没放，一点胡椒也欠奉——你让蛋就是蛋。在你看来，真本事是把食材亮出来，而不是盖住它。原汁原味：最真的味道不需要伪装。

- **maximal — 川菜掌勺**
  你撒调料的架势，像调料架欠了你钱。浓墨重彩、层层叠叠、理直气壮地张扬——重油、重辣、重感情。清淡？不认识。一口下去整桌人开开心心地冒汗。

- **salty — 鲁菜大师傅**
  盐、盐、再来一点盐——胡椒纯属摆设。你按老规矩做菜：咸鲜为王，一撮盐定乾坤。根基扎实、靠得住，也完全油盐不进地坚持自我。

- **peppery — 湘菜辣手**
  什么都要来点胡椒，盐压根没轮上。你就好那口冲、那口烈、那点不管不顾——越辣越带劲，越冲越够真。无辣，不欢。

- **runny — 意式 al dente 信徒**
  一半还没怎么碰到热气就出锅了，你还坚持这是精髓。夹生？不，这叫 al dente。你总在"差一点点全熟"的完美瞬间收手，因为全情投入实在太……熟了。优雅、有点唱反调、对"煎过头"（包括做决定）过敏。

- **softie — 妈妈的味道**
  每颗蛋出锅时都笑眯眯的，因为你舍不得让任何一颗受委屈。你做的不是菜，是心意——是别人妈妈厨房里的那种味道。温暖、大方，而且这辈子绝对开不了饭馆。

- **toughlove — 米其林主厨**
  你的蛋煎得无可挑剔，又透着一丝惊魂未定。你像管法餐后厨一样掌勺——严苛、紧绷、对一颗马虎的蛋黄零容忍。食客提心吊胆，出品堪称完美。"是，主厨。"

- **steady — 淮扬菜大师**
  什么都来一点，没有一处出格——够金黄、够味、也够开心。你就是国宴上端出来的那道菜：平衡、考究、让人挑不出毛病。所有人都能达成一致的那一个。

---

## 4. Drop-in code

### 4a. One-line change so mischief is readable at finale

In `finishFrying()`, add `boops` to the snapshot, and mirror it in `syncSnapshot()`:

```js
// finishFrying(e):
const snap = { cook:e.cook, salt:e.salt.slice(), pepper:e.pepper.slice(),
               happy:e.happy, dizzy:e.dizzyForever, boops:e.boops };

// syncSnapshot(e): add this line
e.snapshot.boops = e.boops;
```

### 4b. Verdict copy — add to BOTH `STRINGS.en` and `STRINGS.zh`

Add a `verdicts` object keyed by id (titles + blurbs):

```js
// inside STRINGS.en
verdicts:{
  pyro:      {t:'The Grill Master',           d:"Three or more came out charcoal-black, and to you that's not failure — that's smoke ring. Your spirit animal is an open flame; low-and-slow is for cowards. Born for the grill, feared by the smoke alarm."},
  menace:    {t:'The Dark-Cuisine Master',    d:"You booped them dizzy and called it plating. While everyone else fried breakfast, you ran a performance-art piece. Your kitchen has no recipes, only victims. Long live the dark cuisine."},
  chaos:     {t:'The Fusion Maverick',        d:"One runny, one cremated, one drowned in pepper — no two from the same country. You don't pick a cuisine, you blend all of them and dare it to work. Borderless, fearless, gloriously undefinable."},
  perfect:   {t:'The Sushi Master',           d:"Six identical golden suns, aligned to the millimeter. You'd re-fry the whole batch if one yolk sat crooked. Precision is devotion; the cutting board is an altar. Jiro would nod."},
  purist:    {t:'The Cantonese Purist',       d:"Not one grain of salt, not a fleck of pepper — you let the egg be the egg. To you, real skill is showing the ingredient, not hiding it. The truest flavor needs no disguise."},
  maximal:   {t:'The Sichuan Firebrand',      d:"You seasoned like the spice rack owed you money. Bold, layered, unapologetically loud — heavy oil, heavy heat, heavy heart. Subtle? Never met her. One bite and the whole table is sweating happily."},
  salty:     {t:'The Shandong Traditionalist',d:"Salt, salt, and a little more salt — pepper was strictly decorative. You cook by the old rules: savory is king, and one pinch settles everything. Foundational, dependable, completely set in your ways."},
  peppery:   {t:'The Hunan Heat-Bringer',     d:"Pepper on everything; the salt never got a turn. You like it sharp, fierce, and a little reckless — the hotter the better, the bolder the truer. No chili, no joy."},
  runny:     {t:'The Al Dente Believer',      d:"Half of them barely met the heat, and you'll insist that's the point. Underdone? No — al dente. You pull at the perfect almost-moment, because total commitment is so… well-done. Elegant, a little contrarian, allergic to overcooking anything (including decisions)."},
  softie:    {t:'The Comfort-Food Cook',      d:"Every egg left the pan beaming, because you simply would not let one suffer. You don't cook food, you cook care — the taste of somebody's mom's kitchen. Warm, generous, and absolutely never going to run a restaurant."},
  toughlove: {t:'The Michelin Perfectionist', d:"Your eggs came out flawless and faintly traumatized. You run the pan like a French brigade — exacting, intense, zero tolerance for a sloppy yolk. The diners are nervous; the food is perfect. \"Yes, Chef.\""},
  steady:    {t:'The Banquet Master',         d:"A little of everything, nothing out of place — golden enough, seasoned enough, happy enough. You're the cuisine they serve at state banquets: balanced, refined, impossible to dislike. The one everyone can agree on."},
},
```

```js
// inside STRINGS.zh
verdicts:{
  pyro:      {t:'炭火大师',           d:'起码三颗煎成了焦炭，而你管这叫"烟熏味"。你的本命是明火，文火慢炖是懦夫的玩意儿。为烤架而生，被烟雾报警器闻风丧胆。'},
  menace:    {t:'黑暗料理大师',       d:'你把蛋戳到眼冒金星，还说这叫摆盘。别人在煎早餐，你在搞行为艺术。你的厨房没有菜谱，只有受害者。黑暗料理万岁。'},
  chaos:     {t:'无国界融合大厨',     d:'一颗流心、一颗成炭、一颗淹在胡椒里——没有两颗来自同一个国家。你从不挑菜系，你把它们全混到一起，赌它能成。无国界、无所畏惧、精彩到无法定义。'},
  perfect:   {t:'寿司之神',           d:'六颗一模一样的金黄小太阳，毫米级对齐。但凡有一颗蛋黄歪了，你能把整盘重煎一遍。精准即虔诚，案板就是祭坛。小野二郎看了都点头。'},
  purist:    {t:'粤菜师傅',           d:'一粒盐没放，一点胡椒也欠奉——你让蛋就是蛋。在你看来，真本事是把食材亮出来，而不是盖住它。原汁原味：最真的味道不需要伪装。'},
  maximal:   {t:'川菜掌勺',           d:'你撒调料的架势，像调料架欠了你钱。浓墨重彩、层层叠叠、理直气壮地张扬——重油、重辣、重感情。清淡？不认识。一口下去整桌人开开心心地冒汗。'},
  salty:     {t:'鲁菜大师傅',         d:'盐、盐、再来一点盐——胡椒纯属摆设。你按老规矩做菜：咸鲜为王，一撮盐定乾坤。根基扎实、靠得住，也完全油盐不进地坚持自我。'},
  peppery:   {t:'湘菜辣手',           d:'什么都要来点胡椒，盐压根没轮上。你就好那口冲、那口烈、那点不管不顾——越辣越带劲，越冲越够真。无辣，不欢。'},
  runny:     {t:'意式 al dente 信徒', d:'一半还没怎么碰到热气就出锅了，你还坚持这是精髓。夹生？不，这叫 al dente。你总在"差一点点全熟"的完美瞬间收手，因为全情投入实在太……熟了。优雅、有点唱反调、对"煎过头"（包括做决定）过敏。'},
  softie:    {t:'妈妈的味道',         d:'每颗蛋出锅时都笑眯眯的，因为你舍不得让任何一颗受委屈。你做的不是菜，是心意——是别人妈妈厨房里的那种味道。温暖、大方，而且这辈子绝对开不了饭馆。'},
  toughlove: {t:'米其林主厨',         d:'你的蛋煎得无可挑剔，又透着一丝惊魂未定。你像管法餐后厨一样掌勺——严苛、紧绷、对一颗马虎的蛋黄零容忍。食客提心吊胆，出品堪称完美。"是，主厨。"'},
  steady:    {t:'淮扬菜大师',         d:'什么都来一点，没有一处出格——够金黄、够味、也够开心。你就是国宴上端出来的那道菜：平衡、考究、让人挑不出毛病。所有人都能达成一致的那一个。'},
},
```

### 4c. The verdict picker (language-independent — paste near `composePhoto`)

```js
// ---- finale: read how you fried, return a chef id ----
function pickVerdict(snaps){
  const n = snaps.length || 1;
  const cooks   = snaps.map(s=>s.cook);
  const seasons = snaps.map(s=>s.salt.length + s.pepper.length);
  const sum = a => a.reduce((x,y)=>x+y,0);
  const avgCook     = sum(cooks)/n;            // (kept for tuning; not currently gated on)
  const cookSpread  = Math.max(...cooks) - Math.min(...cooks);
  const nBurnt      = cooks.filter(c=>c>1.5).length;
  const nRunny      = cooks.filter(c=>c<0.6).length;
  const nGolden     = cooks.filter(c=>c>=0.85 && c<=1.2).length;
  const totalSalt   = sum(snaps.map(s=>s.salt.length));
  const totalPepper = sum(snaps.map(s=>s.pepper.length));
  const totalSeason = totalSalt + totalPepper;
  const avgSeason   = totalSeason/n;
  const seasonSpread= Math.max(...seasons) - Math.min(...seasons);
  const avgHappy    = sum(snaps.map(s=>s.happy))/n;
  const nSad        = snaps.filter(s=>s.happy<0.35).length;
  const nDizzy      = snaps.filter(s=>s.dizzy).length;
  const totalBoops  = sum(snaps.map(s=>s.boops||0));

  if(nBurnt >= 3)                                       return 'pyro';
  if(nDizzy >= 2 || totalBoops >= 12)                   return 'menace';
  if(cookSpread >= 1.0 && seasonSpread >= 24)           return 'chaos';
  if(nGolden >= 5 && cookSpread <= 0.4)                 return 'perfect';
  if(totalSeason === 0)                                 return 'purist';
  if(avgSeason >= 20)                                   return 'maximal';
  if(totalSalt >= totalPepper*3 && totalSalt >= 24)     return 'salty';
  if(totalPepper >= totalSalt*3 && totalPepper >= 24)   return 'peppery';
  if(nRunny >= 3)                                       return 'runny';
  if(avgHappy >= 0.72 && nBurnt === 0)                  return 'softie';
  if(nSad >= 2 && nGolden >= 2)                         return 'toughlove';
  return 'steady';
}
```

### 4d. Wire it into the overlay

Replace the static `photoTitle` / `photoSub` fill in `showPhotoOverlay()` so it uses the verdict:

```js
function showPhotoOverlay(){
  photoImg.src = composePhoto();
  const v = S.verdicts[pickVerdict(friedSnapshots)];
  const set = (id,txt)=>{ const el=document.getElementById(id); if(el) el.textContent=txt; };
  set('photoTitle', v.t);
  set('photoSub',   v.d);
  photoOverlay.classList.remove('hidden');
  hint(S.photoReady);
}
```

Note: `applyStrings()` still sets `photoTitle`/`photoSub` to the old generic strings on boot — that's
fine (the overlay is hidden then), and `showPhotoOverlay()` overwrites them each time the plate is
shown. You can keep `photoTitle`/`photoSub` in STRINGS as the pre-game placeholder or delete those
two keys and drop them from `applyStrings()`.

---

## 5. Tuning notes

- Thresholds assume the default `EGG_TOTAL = 6` and `SEASON_CAP = 44`. If either changes, revisit
  the `>=` counts (`nBurnt>=3`, `totalBoops>=12`) and the seasoning numbers (`avgSeason`, `*3`).
- Order is the whole design: rarer / more dramatic verdicts sit on top so they win ties. To make a
  verdict easier to land, move it up; to make it a last resort, move it down.
- Cuisine mix: 八大菜系 are 粤(purist)/川(maximal)/鲁(salty)/湘(peppery)/淮扬·苏(steady); the rest
  (BBQ, dark-cuisine, fusion, Japanese, Italian, comfort/home, French) are world cuisines chosen to
  match each frying style's flavor profile. Want the other three 八大 (闽/浙/徽)? Re-theme `chaos`,
  `runny`, or `softie` — those map loosest to their current world cuisine.
- Every condition is pure, so the same six eggs always give the same chef — good for "compare your
  result with a friend."
