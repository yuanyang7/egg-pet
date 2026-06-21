// ---- language / strings ----
const LANG = (document.documentElement.lang||'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
const STRINGS = {
  en:{
    docTitle:'Fry Six Eggs',
    title:'fry six eggs',
    imgAlt:'Six fried eggs scattered on a plate',
    tool:{pet:'pet', fry:'heat', salt:'salt', pepper:'pepper', poke:'boop'},
    toolHint:{
      pet:'drag across an egg to pet it',
      fry:'drag an egg into the pan, then tap the pan to heat it',
      salt:'tap the frying egg to add salt',
      pepper:'tap the frying egg to add pepper',
      poke:'tap an egg to poke it'
    },
    carryToPan:'drop it in the pan',
    inPan:(n,t)=>`egg ${n} of ${t} is in the pan`,
    squatterFirst:'an egg is in the pan — poke it out first',
    panBusy:'the pan already has an egg',
    dragFirst:'drag an egg into the pan first',
    sizzling:'sizzling hot!',
    heatingUp:'heating up…',
    alreadyEscaped:'this one already escaped the pan',
    tapToHeat:'tap the pan to heat it',
    plentySalty:'that one has enough salt',
    enoughPepper:'that one has enough pepper',
    sprinkleOnFrying:'tap the frying egg to season it',
    gettingJumpy:'it\'s getting jumpy…',
    boopWobble:'boop! it wobbles in the pan',
    boopedOut:'booped them right out of the pan!',
    ready:'this one\'s ready — climbing out…',
    escapeHappy:'too happy to sit still — it hopped out!',
    escapeBoop:'booped one too many times — it bailed!',
    boopDizzy:'whoa — now it\'s seeing stars!',
    dizzyForever:'oh no… that one\'s dizzy forever now!',
    reheating:'back on the heat…',
    overcooking:'careful — it\'s starting to burn!',
    dragNext:'drag the next egg into the pan',
    photoReady:'here\'s your fried six!',
    freshCarton:'new carton of six — drag one into the pan',
    bootHint:'drag an egg from the carton into the pan to fry it',
    progress:(n,t)=>`fried ${n} / ${t}`,
    moodAllFried:'all six fried — what a batch!',
    moodHogging:'hey, someone\'s hogging the pan…',
    moodEmpty:'pan\'s empty — drag an egg in from the carton',
    moodRaw:'raw & chilly… heat the pan?',
    moodToasty:'getting toasty…',
    moodAlmost:'almost done!',
    moodReturning:'heading home to the pan…',
    moodDizzy:'dizzy… seeing little stars',
    moodLonely:'feeling neglected… give it a pet?',
    moodOvercooking:'that squatter is overcooking…',
    moodBurnt:'burnt to a crisp! maybe boop it out',
    moodResting:(s)=>`cozy in the pan (${s})`,
    moodBliss:(s)=>`pure bliss (${s})`,
    moodHappy:(s)=>`happy little egg (${s})`,
    moodContent:'content',
    moodAttention:'wants a little attention…',
    seasonPerfect:'perfectly seasoned',
    seasonPeppery:'a touch peppery?',
    seasonNeedSalt:'needs a pinch of salt',
    seasonUnseasoned:'unseasoned',
    photoTitle:'the fried six',
    photoSub:'six eggs, six little personalities — exactly how you made them',
    photoBtn:'fry another batch',
    shareHint:'📸 Screenshot it and get your friends frying eggs!',
    credit:'MCTYuan',
    composeTitle:'the fried six',
    composeSub:'one batch, six little personalities',
    verdicts:{
      pyro:      {t:'The Grill Master',           d:"A couple went full charcoal and you barely blinked. Hand you a task and you charge straight in at full throttle — no warm-up, no babysitting, no patience for the fiddly bits. You'd rather finish fast and singe a few edges than tiptoe around. The big stuff gets done; the delicate stuff goes to someone calmer. Born for the flame, feared by the smoke alarm."},
      menace:    {t:'The Dark-Cuisine Master',    d:"You poked them dizzy and called it plating. You solve problems by poking at them the way you're not supposed to — ignore the manual, press the button marked don't, try the thing everyone warned against. Half the time it breaks; the other half you find a door nobody knew was there. Long live the dark cuisine."},
      chaos:     {t:'The Fusion Maverick',        d:"One runny, one cremated, one buried in pepper — no two alike. You never tackle a job the documented way; you improvise, mix three approaches at once, and find out as you go. Sometimes it's brilliant, sometimes it's a pile-up, but the path is always yours. Predictable was never on the menu."},
      perfect:   {t:'The Sushi Master',           d:"Six identical golden suns, aligned to the millimeter. You finish a task the same way every time — methodically, exactingly, refusing to call it done while one detail sits crooked. Slow to ship, impossible to fault. Nobody who inherits your work has ever had to redo it. Jiro would nod."},
      purist:    {t:'The Cantonese Purist',       d:"Not one grain of salt. Faced with a problem you strip it to the core and solve exactly that — no extra layers, no gold-plating, nothing added just to look busy. Where others over-engineer, you trust the simplest thing that works. Quietly certain the essentials are enough."},
      maximal:   {t:'The Sichuan Firebrand',      d:"You seasoned like the spice rack owed you money. When a task lands you throw everything at it — every resource, every angle, volume at eleven. Under-doing it never crosses your mind; you'd rather overshoot and dazzle than play it small. One bite and the whole table is sweating happily."},
      salty:     {t:'The Shandong Traditionalist',d:"Salt, salt, and a little more salt. You finish jobs the proven way — reach for the method that worked last time and trust it again. Why reinvent what already holds up? Dependable, unhurried, completely immovable once you've picked your approach. The one who keeps the line steady."},
      peppery:   {t:'The Pepper-Sneeze Chef',     d:"Pepper on everything; the salt never got a turn. You go at problems sharp and head-on — pick the bold, risky route and commit all the way, no hedging. Too cautious is worse to you than too much. Rather overshoot loud than play it quiet. No bite, no joy."},
      runny:     {t:'The Al Dente Believer',      d:"Half barely met the heat, and you'll insist that's the point. You call a task done at the perfect almost-moment — eighty percent and out, before polish curdles into fussing. Over-finishing feels like a trap, so you leave things (and decisions) elegantly open. Allergic to the last twenty percent."},
      softie:    {t:'The Comfort-Food Cook',      d:"Every egg left the pan beaming. You solve problems through people first — keep everyone comfortable, smooth the friction, make sure no one gets bruised on the way to done. The mood matters to you as much as the result, sometimes more. Warm, generous, a little too willing to absorb the hard parts yourself."},
      toughlove: {t:'The Michelin Perfectionist', d:"Every egg salted, peppered, and cooked to the exact same gold — nothing left to chance. You don't call a task done until every box is ticked twice and every detail is to spec. The bar is merciless, but you clear it yourself first, and the results speak: flawless, complete, and somehow still smiling. \"Yes, Chef.\""},
      gloomy:    {t:'The Cafeteria Lifer',        d:"Most of them came out glum, and you were here to finish, not to cheer anyone up. You get the task done — efficiently, on time, no fuss — and the feelings around it simply aren't your department. Cold, maybe; reliable, definitely. The deliverable lands; the warmth was never the assignment."},
      scorch:    {t:'The Socarrat Specialist',    d:"Five came out fine and one went to charcoal — and you're weirdly at peace with it. You nail almost everything with one stubborn blind spot: the same corner cut, the same box left unchecked, every single time. Ninety percent airtight, ten percent gloriously charred — and honestly, that burnt one is your secret favorite. Every pan needs its socarrat."},
      safe:      {t:'The Plain-Rice Loyalist',    d:"Every egg the same, gently done, nothing risked. You finish tasks by taking the safe road — the low-risk option, the path that won't blow up, the choice you can defend later. Rarely spectacular, never a disaster. People underrate you right up until they need someone who simply won't drop the ball. The dependable default."},
      steady:    {t:'The Banquet Master',         d:"A little of everything, nothing out of place. You finish a task by reading exactly what it needs and meeting it there — weighing the trade-offs, landing in the sensible middle, no drama, no extremes. Not the flashiest solution, but the one everyone can live with. Balanced, level-headed, impossible to dislike."},
    },
  },
  zh:{
    docTitle:'煎六颗蛋',
    title:'煎六颗蛋',
    imgAlt:'盘子里随意摆着的六颗煎蛋',
    tool:{pet:'抚摸', fry:'加热', salt:'撒盐', pepper:'胡椒', poke:'戳一戳'},
    toolHint:{
      pet:'在蛋身上滑动来抚摸它',
      fry:'把蛋拖进锅里，再点锅加热',
      salt:'点正在煎的蛋撒盐',
      pepper:'点正在煎的蛋撒胡椒',
      poke:'点一颗蛋戳它'
    },
    carryToPan:'把它拖进锅里',
    inPan:(n,t)=>`第 ${n} / ${t} 颗蛋下锅`,
    squatterFirst:'锅里有蛋，先把它戳出去',
    panBusy:'锅里已经有一颗蛋',
    dragFirst:'先把一颗蛋拖进锅里',
    sizzling:'滋滋作响，好烫！',
    heatingUp:'正在加热…',
    alreadyEscaped:'这颗已经逃出锅啦',
    tapToHeat:'点锅加热',
    plentySalty:'这颗盐已经够了',
    enoughPepper:'这颗胡椒已经够了',
    sprinkleOnFrying:'点正在煎的蛋来调味',
    gettingJumpy:'它开始坐不住了…',
    boopWobble:'戳！它在锅里抖了抖',
    boopedOut:'把它从锅里戳出去啦！',
    ready:'这颗煎好啦，正在爬出来…',
    escapeHappy:'太开心坐不住，蹦出来啦！',
    escapeBoop:'被戳太多次，它溜走啦！',
    boopDizzy:'哎呀，它被戳得头晕眼花啦！',
    dizzyForever:'糟糕…这颗永远晕头转向了！',
    reheating:'重新加热…',
    overcooking:'小心，要煎糊啦！',
    dragNext:'把下一颗蛋拖进锅里',
    photoReady:'你的六颗煎蛋出炉啦！',
    freshCarton:'新的一盘六颗，拖一颗进锅',
    bootHint:'从蛋托拖一颗蛋进锅来煎',
    progress:(n,t)=>`已煎 ${n} / ${t}`,
    moodAllFried:'六颗全煎好啦，真棒的一盘！',
    moodHogging:'喂，有蛋赖在锅里…',
    moodEmpty:'锅空着，从蛋托拖一颗进来吧',
    moodRaw:'生生凉凉的…要加热锅吗？',
    moodToasty:'渐渐变香…',
    moodAlmost:'马上就好！',
    moodReturning:'正往锅里溜回去…',
    moodDizzy:'头晕晕的…冒小星星了',
    moodLonely:'有点被冷落了…摸摸它吧？',
    moodOvercooking:'赖在锅里的那颗煎过头啦…',
    moodBurnt:'煎糊啦！把它戳出去吧',
    moodResting:(s)=>`窝在锅里（${s}）`,
    moodBliss:(s)=>`幸福满满（${s}）`,
    moodHappy:(s)=>`开心的小蛋（${s}）`,
    moodContent:'心满意足',
    moodAttention:'想要一点关注…',
    seasonPerfect:'调味刚刚好',
    seasonPeppery:'有点偏胡椒？',
    seasonNeedSalt:'还差一撮盐',
    seasonUnseasoned:'还没调味',
    photoTitle:'六颗煎蛋',
    photoSub:'六颗蛋，六种小性格，完全照你煎的样子',
    photoBtn:'再煎一盘',
    shareHint:'📸 截图分享，叫朋友们来煎蛋！',
    credit:'米臭汤圆',
    composeTitle:'六颗煎蛋',
    composeSub:'一盘出炉，六种小性格',
    verdicts:{
      pyro:      {t:'炭火大师',           d:'好几颗烧成了焦炭，你却连眼都没眨一下。任务一到手，你就全速冲上去——不预热、不伺候、没耐心理会那些琐碎细节。宁可快点收工、烤焦几处边角，也不愿小心翼翼地磨蹭。大事你能搞定，精细活儿就交给更沉得住气的人。为明火而生，被烟雾报警器闻风丧胆。'},
      menace:    {t:'黑暗料理大师',       d:'你把蛋戳到眼冒金星，还管这叫摆盘。你解决问题的方式，就是专挑不该碰的地方下手——不看说明书，专按那个写着"别"的按钮，试所有人都劝你别试的招。一半时候搞砸，另一半却撞开了别人没发现的门。黑暗料理万岁。'},
      chaos:     {t:'无国界融合大厨',     d:'一颗流心、一颗成炭、一颗淹在胡椒里——没有两颗一样。你从不照着既定流程做事，而是即兴发挥、把三种思路混到一起、边走边试。有时是神来之笔，有时是连环车祸，但路子永远是你自己的。"按部就班"从来不在你的菜单上。'},
      perfect:   {t:'寿司之神',           d:'六颗一模一样的金黄小太阳，毫米级对齐。你每次收尾都是同一套——有条不紊、一丝不苟，只要还有一处歪着，就绝不松手说"完成"。出活儿慢，却挑不出毛病。接手过你成果的人，从没返工过一次。小野二郎看了都点头。'},
      purist:    {t:'粤菜师傅',           d:'一粒盐都没放。面对问题，你只把它剥到核心、只解决那一点——不加多余的层、不镀金、不为显得忙而添东西。别人过度设计的时候，你信得过"能用的最简方案"。安安静静地笃定：抓住本质就够了。'},
      maximal:   {t:'川菜掌勺',           d:'你撒调料的架势，像调料架欠了你钱。任务一来，你就把所有家当都砸上去——所有资源、所有角度、音量拉满。"少做一点"从没在你脑子里出现过；宁可用力过猛地惊艳，也不肯小打小闹。一口下去整桌人开开心心地冒汗。'},
      salty:     {t:'鲁菜大师傅',         d:'盐、盐、再来一点盐。你收尾靠的是验证过的老办法——伸手就拿上次管用的那一套，再信它一回。已经立得住的东西，何必重造？靠谱、不慌不忙，一旦定了路子就九头牛都拉不回。守得住阵脚的那一个。'},
      peppery:   {t:'胡椒喷嚏大厨',       d:'什么都要来点胡椒，盐压根没轮上。你处理问题又冲又直——挑那条大胆、有风险的路，一头扎到底，绝不留后手。在你看来，太谨慎比太过火更糟。宁可大声地用力过头，也不肯闷声小做。无椒，不欢。'},
      runny:     {t:'意式 al dente 信徒', d:'一半还没怎么沾热气就出锅了，你还坚持这才是精髓。你总在"差一点点全熟"的完美瞬间宣布完工——八成就够，免得打磨变成纠结。把事情做到头反而让你警觉，于是你把事情（和决定）都优雅地留着口子。对最后那两成过敏。'},
      softie:    {t:'妈妈的味道',         d:'每颗蛋出锅时都笑眯眯的。你解决问题，永远先顾人——让大家都舒服、把摩擦抹平、确保没人在通往完成的路上被磕到。气氛对你和结果一样重要，有时甚至更重要。温暖、大方，又有点太爱把难处自己扛下来。'},
      toughlove: {t:'米其林主厨',         d:'每颗蛋都加了盐、撒了胡椒，火候煎成一模一样的金黄——没有一处碰运气。任务不到每个细节都对上规格、每个勾都打两遍，你绝不说"完成"。标准狠到不留情面，但你先狠的是自己；结果会说话：无可挑剔、面面俱到，居然还都笑着。"是，主厨。"'},
      gloomy:    {t:'食堂大锅饭',         d:'大多数蛋出锅时都闷闷不乐——你是来把活儿干完的，不是来哄谁开心的。任务你照样利落、准时、不啰嗦地交付，至于周围的情绪，根本不归你管。说冷漠也行，说靠谱更准。东西按时落地，温度从来不在任务书里。'},
      scorch:    {t:'锅巴爱好者',         d:'五颗好好的，一颗烧成了炭——而你居然挺淡定。你几乎什么都能做对，只剩一个顽固的盲区：每次都漏掉同一个角、同一个没打的勾。九成滴水不漏，一成焦香四溢——说实话，那块焦的才是你偷偷的心头好。每一锅，都得留一块锅巴。'},
      safe:      {t:'白米饭忠实派',       d:'每颗都一个样，火候温吞，一点风险都没冒。你收尾的方式就是走稳路——挑风险最低、最不会出事、事后最好交代的那个选项。难得惊艳，却也从不翻车。大家一直低估你，直到需要一个绝不掉链子的人。最让人放心的默认项。'},
      steady:    {t:'淮扬菜大师',         d:'什么都来一点，没有一处出格。你收尾的方式，是先把任务真正需要什么读懂，再稳稳地落在那儿——权衡利弊、落在合理的中间，不闹脾气、不走极端。也许不是最亮眼的方案，却是所有人都能接受的那个。平衡、稳重、让人挑不出毛病。'},
    },
  }
};
const S = STRINGS[LANG];

// one-line versions of each verdict, shown on phones so the result card stays short
const VERDICT_SHORT = {
  en:{
    pyro:      'A couple went full charcoal and you barely blinked.',
    menace:    'You poked them dizzy and called it plating.',
    chaos:     'One runny, one cremated, one buried in pepper — no two alike.',
    perfect:   'Six identical golden suns, aligned to the millimeter.',
    purist:    'Not one grain of salt — just the essentials.',
    maximal:   'You seasoned like the spice rack owed you money.',
    salty:     'Salt, salt, and a little more salt.',
    peppery:   'Pepper on everything; the salt never got a turn.',
    runny:     "Half barely met the heat — and you'll insist that's the point.",
    softie:    'Every egg left the pan beaming.',
    toughlove: 'Every egg salted, peppered, and the exact same gold.',
    gloomy:    'Most came out glum — you were here to finish, not to cheer.',
    scorch:    "Five came out fine, one went to charcoal — and you're at peace with it.",
    safe:      'Every egg the same, gently done, nothing risked.',
    steady:    'A little of everything, nothing out of place.',
  },
  zh:{
    pyro:      '好几颗烧成了焦炭，你却连眼都没眨一下。',
    menace:    '你把蛋戳到眼冒金星，还管这叫摆盘。',
    chaos:     '一颗流心、一颗成炭、一颗淹在胡椒里，没有两颗一样。',
    perfect:   '六颗一模一样的金黄小太阳，毫米级对齐。',
    purist:    '一粒盐都没放，只留最本真的味道。',
    maximal:   '你撒调料的架势，像调料架欠了你钱。',
    salty:     '盐、盐、再来一点盐。',
    peppery:   '什么都要来点胡椒，盐压根没轮上。',
    runny:     '一半还没怎么沾热气就出锅，你还坚持这才是精髓。',
    softie:    '每颗蛋出锅时都笑眯眯的。',
    toughlove: '每颗都加了盐、撒了胡椒，火候煎成同样的金黄。',
    gloomy:    '大多数蛋都闷闷不乐，你是来干完活的，不是来哄人的。',
    scorch:    '五颗好好的，一颗烧成了炭，而你居然挺淡定。',
    safe:      '每颗都一个样，火候温吞，一点风险都没冒。',
    steady:    '什么都来一点，没有一处出格。',
  }
};

const cv = document.getElementById('stage');
const ctx = cv.getContext('2d');
let W=0,H=0,DPR=1;
function resize(){
  // render at the screen's native density (up to 3x) so phones stay crisp, not upscaled
  DPR = Math.min(3, window.devicePixelRatio||1);
  W = window.innerWidth; H = window.innerHeight;
  cv.width = Math.round(W*DPR); cv.height = Math.round(H*DPR);
  cv.style.width = W+'px'; cv.style.height = H+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);
  layoutHolder();
  layoutPan();
  refreshRoamBox();
}
window.addEventListener('resize', resize);

const hudEl = document.querySelector('.hud');
const toolbarEl = document.querySelector('.toolbar');

// ---- egg carton (holder) — centered just below the HUD so it never overlaps the text ----
const holder = {x:0,y:0,w:0,h:0};
function layoutHolder(){
  const hudBottom = hudEl.getBoundingClientRect().bottom;
  holder.w = Math.min(W*0.62, 300);
  holder.h = holder.w*0.6;                 // classic half-dozen tray (3 cols x 2 rows)
  holder.x = (W - holder.w)/2;
  holder.y = Math.max(hudBottom + 16, H*0.125);
}

// ---- pan geometry — fitted into the space between the carton and the toolbar ----
const pan = {x:0,y:0,r:0};
function layoutPan(){
  const tbTop = toolbarEl.getBoundingClientRect().top;
  const top = holder.y + holder.h;
  const avail = Math.max(120, tbTop - top);
  pan.r = Math.min(W*0.30, avail*0.42, Math.min(W,H)*0.21);
  pan.x = W*0.5;
  pan.y = top + avail*0.43;   // sit a little above the midpoint between carton and toolbar
}

// ---- roam box: the rectangle free eggs are allowed to drift around in ----
const roamBox = {top:0,bottom:0,left:0,right:0};
function refreshRoamBox(){
  const hd = hudEl.getBoundingClientRect();
  const tb = toolbarEl.getBoundingClientRect();
  roamBox.top = hd.bottom + 4;
  roamBox.bottom = tb.top - 6;
  roamBox.left = 6;
  roamBox.right = W - 6;
}
function slotPos(i){
  const cols=3, rows=2;
  const pad=holder.w*0.1;
  const cellW=(holder.w-pad*2)/cols, cellH=(holder.h-pad*2)/rows;
  const col=i%cols, row=Math.floor(i/cols);
  return {
    x: holder.x+pad+cellW*col+cellW/2,
    y: holder.y+pad+cellH*row+cellH/2,
    r: Math.min(cellW,cellH)*0.46
  };
}
function queueCount(){ return Math.max(0, EGG_TOTAL - friedSnapshots.length - (egg?1:0)); }
function queueIndexAt(x,y){
  const n=queueCount();
  for(let i=0;i<n;i++){
    const s=slotPos(i);
    if(dist(x,y,s.x,s.y)<s.r*1.8) return i;
  }
  return -1;
}

// ---- tool selection ----
let tool='pet';
document.querySelectorAll('.tool[data-tool]').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('.tool[data-tool]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    tool=b.dataset.tool;
    hint(S.toolHint[tool]);
  });
});
// a single status line: shows a transient hint for a moment, then falls back to the live mood
let hintText='', hintUntil=0;
function hint(t){ hintText=t; hintUntil=performance.now()+2800; }

// ---- game constants & state ----
const EGG_TOTAL = 6;
let friedSnapshots = [];   // frozen looks {cook, salt, pepper, happy} for the finale photo
let flock = [];            // previously-fried eggs, now roaming free (and a bit naughty)
let gameOver = false;

// ---- egg factory ----
function makeEgg(){
  return {
    // state machine: 'raw' -> 'cooking' -> 'cooked' -> 'free' (-> 'returning' -> 'resting' -> 'free'...)
    state:'raw',
    x:pan.x, y:pan.y,
    vx:0, vy:0,
    tvx:0, tvy:0,       // target drift velocity (eased toward) for lazy 2D roaming
    bobPhase:Math.random()*Math.PI*2,
    cook:0,            // 0..1 doneness
    heat:0,            // pan heat 0..1
    happy:0.5,         // 0..1
    salt:[], pepper:[],
    jiggle:0, jvx:0,
    blink:0, blinkT:2+Math.random()*3,
    faceDir:0,
    squish:0,
    hopT:0,
    scale:1,
    cookedT:0,
    goal:'wander', goalT:500+Math.random()*700,  // ambient desire when free: 'wander' | 'toPan'
    retT:0, restT:0,
    boops:0,           // how many times it's been booped while in the pan
    dizzy:0,           // frames left of a dizzy/seeing-stars expression (from a boop)
    dizzyForever:false,// rare unlucky boop: permanently dizzy
    petClock:0,        // time since last petted — too long and it gets lonely
    lonely:false,
    snapshot:null,     // link to its frozen finale look, so re-cooking can update it
  };
}

let egg = null;   // the egg currently being fried — null until the player drags one into the pan
function placeInPan(){ if(egg){ egg.x=pan.x; egg.y=pan.y; } }

// ---- pointer / interaction ----
let pointer={x:-999,y:-999,down:false,px:0,py:0};
let petTrail=[];
let dragEgg=null;     // a raw egg currently being dragged from the carton toward the pan
let dragFromIdx=-1;   // which carton slot it came from (so we can skip drawing it there)

cv.addEventListener('pointerdown',e=>{
  pointer.down=true; pointer.px=pointer.x=e.clientX; pointer.py=pointer.y=e.clientY;
  if(!egg && !gameOver){
    const idx=queueIndexAt(e.clientX,e.clientY);
    if(idx>=0){
      dragFromIdx=idx;
      dragEgg=makeEgg();
      dragEgg.x=e.clientX; dragEgg.y=e.clientY;
      hint(S.carryToPan);
      return;
    }
  }
  handleClick(e.clientX,e.clientY);
});
cv.addEventListener('pointermove',e=>{
  pointer.px=pointer.x; pointer.py=pointer.y;
  pointer.x=e.clientX; pointer.y=e.clientY;
  if(dragEgg){ dragEgg.x=e.clientX; dragEgg.y=e.clientY; return; }
  if(pointer.down && tool==='pet') tryPet();
});
window.addEventListener('pointerup',()=>{
  pointer.down=false;
  if(dragEgg){
    if(panOccupiedByFlock()){
      hint(S.squatterFirst);
    } else if(egg){
      hint(S.panBusy);
    } else {
      // pan is free — a tap or any drop near it slips the egg straight in
      egg=dragEgg; placeInPan();
      hint(S.inPan(friedSnapshots.length+1, EGG_TOTAL));
    }
    dragEgg=null; dragFromIdx=-1;
  }
});

function dist(ax,ay,bx,by){return Math.hypot(ax-bx,ay-by);}
function eggRadius(e){ return (e.state==='free'? eggFreeR() : pan.r*0.8)*e.scale; }
function onEgg(e,x,y){ return !!e && dist(x,y,e.x,e.y) < eggRadius(e)*1.1; }
function eggAt(x,y){
  if(onEgg(egg,x,y)) return egg;
  for(const f of flock){ if(onEgg(f,x,y)) return f; }
  return null;
}
function panOccupiedByFlock(exclude){ return flock.some(f=>f!==exclude && (f.state==='returning'||f.state==='resting')); }
function panSquatter(){ return flock.find(f=>f.state==='resting') || null; }   // a fried egg sitting in the pan
function seasonTargetAt(x,y){
  if(egg && onEgg(egg,x,y)) return egg;
  const s=panSquatter();
  return (s && onEgg(s,x,y)) ? s : null;
}
// keep a re-cooked / re-seasoned egg's finale snapshot in sync with its live look
function syncSnapshot(e){
  if(!e.snapshot) return;
  e.snapshot.cook=e.cook; e.snapshot.happy=e.happy; e.snapshot.dizzy=e.dizzyForever;
  e.snapshot.salt=e.salt.slice(); e.snapshot.pepper=e.pepper.slice();
  e.snapshot.boops=e.boops;
}

function handleClick(x,y){
  if(tool==='fry'){
    if(gameOver) return;
    const t = egg || panSquatter();           // heat the frying egg, or a squatter that snuck back in
    if(!t){ hint(S.dragFirst); return; }
    if(dist(x,y,pan.x,pan.y)<pan.r*1.2 && (t!==egg || egg.state!=='free')){
      t.heat=Math.min(1, t.heat+0.4);
      if(t.state==='raw') t.state='cooking';
      sizzlePuffs(8);
      if(t===egg){
        hint(t.heat>0.9?S.sizzling:S.heatingUp);
      } else {
        syncSnapshot(t);                       // re-cooking a squatter affects the finale too
        hint(t.cook>1.05 ? S.overcooking : S.reheating);
      }
    } else if(egg && egg.state==='free'){ hint(S.alreadyEscaped); }
    else hint(S.tapToHeat);
  }
  else if(tool==='salt'){
    const t=seasonTargetAt(x,y);
    if(t){
      if(sprinkle(t,'salt')){ t.happy=Math.min(1,t.happy+0.12); pop(t,'+'); syncSnapshot(t); }
      else hint(S.plentySalty);
    }
    else hint(S.sprinkleOnFrying);
  }
  else if(tool==='pepper'){
    const t=seasonTargetAt(x,y);
    if(t){
      if(sprinkle(t,'pepper')){ t.happy=Math.min(1,t.happy+0.12); pop(t,'+'); syncSnapshot(t); }
      else hint(S.enoughPepper);
    }
    else hint(S.sprinkleOnFrying);
  }
  else if(tool==='poke'){
    const target=eggAt(x,y);
    if(target){
      target.jvx += (Math.random()<.5?-1:1)*6; target.squish=0.5;
      // a boop is dizzying, not delightful — it sees stars and gets a touch grumpier
      const wasForever = target.dizzyForever;
      target.dizzy=Math.min(150, target.dizzy+90);
      target.happy=Math.max(0, target.happy-0.04);
      // rare unlucky boop: the dizziness sticks for good
      if(!wasForever && Math.random()<0.08) target.dizzyForever=true;
      const justPerm = !wasForever && target.dizzyForever;
      if(target===egg && (target.state==='raw'||target.state==='cooking')){
        // booping the egg in the pan rattles it loose — rising chance to bail early
        target.boops++;
        pop(target,'@');
        if(target.boops>=3 && Math.random() < 0.22*(target.boops-2)){
          escapeFromPan(target,'boop');
          return;
        }
        hint(justPerm ? S.dizzyForever : (target.boops>=3 ? S.gettingJumpy : S.boopWobble));
        return;
      }
      if(target.state==='free'){
        const a=Math.atan2(target.y-y, target.x-x);
        target.tvx=Math.cos(a)*2.4; target.tvy=Math.sin(a)*2.4;
        target.vx=target.tvx*2; target.vy=target.tvy*2;
        target.goal='wander'; target.goalT=120+Math.random()*160;
        hint(justPerm ? S.dizzyForever : S.boopDizzy);
      }
      else if(target.state==='returning'||target.state==='resting'){
        // shoo a squatter right out of the pan
        target.state='free'; target.scale=1;
        target.goal='wander'; target.goalT=300+Math.random()*300;
        let a=Math.atan2(target.y-pan.y, target.x-pan.x);
        if(!isFinite(a) || (target.x===pan.x && target.y===pan.y)) a=-Math.PI/2;
        target.tvx=Math.cos(a)*1.6; target.tvy=Math.sin(a)*1.6;
        target.vx=target.tvx*2.2; target.vy=target.tvy*2.2;
        hint(S.boopedOut);
      }
      pop(target,'@');
    }
  }
  else if(tool==='pet'){ tryPet(); }
}

let petTarget=null;
function tryPet(){
  const target=eggAt(pointer.x,pointer.y);
  if(target){
    petTarget=target;
    const moved = dist(pointer.x,pointer.y,pointer.px,pointer.py);
    if(moved>1.5){
      target.happy=Math.min(1, target.happy + moved*0.004);
      target.petClock=0; target.lonely=false;      // affection resets the loneliness clock
      target.dizzy=Math.max(0, target.dizzy-moved*0.05);  // a soothing stroke clears the dizziness
      target.faceDir = (pointer.x-target.x)*0.02;
      target.squish=Math.min(0.4,target.squish+0.05);
      if(Math.random()<0.15) hearts(pointer.x,pointer.y);
      petTrail.push({x:pointer.x,y:pointer.y,life:1});
    }
  }
}

// ---- particles ----
let parts=[];
const SEASON_CAP = 44;
function sprinkle(e,kind){
  if(e[kind].length>=SEASON_CAP) return false;       // already plenty — leave existing dots alone
  const denom = (e.state==='free'?eggRadius(e):pan.r);
  const add = Math.min(8, SEASON_CAP - e[kind].length);
  for(let i=0;i<add;i++){
    const a=Math.random()*Math.PI*2, r=Math.random()*eggRadius(e)*0.7;
    e[kind].push({ox:Math.cos(a)*r/denom, oy:Math.sin(a)*r/denom});
  }
  return true;
}
function sizzlePuffs(n){
  for(let i=0;i<n;i++){
    parts.push({x:pan.x+(Math.random()-.5)*pan.r, y:pan.y-pan.r*0.5, vx:(Math.random()-.5)*0.6,
      vy:-1.6-Math.random()*1.2, life:1, type:'steam', r:5+Math.random()*6});
  }
}
function hearts(x,y){ parts.push({x,y,vx:(Math.random()-.5)*0.6,vy:-1.2,life:1,type:'heart'}); }
function pop(e,txt){ parts.push({x:e.x,y:e.y-eggRadius(e),vx:0,vy:-1,life:1,type:'txt',txt}); }

// ---- status & progress text ----
const statusEl=document.getElementById('status');
const progressEl=document.getElementById('progress');
function moodText(){
  if(gameOver) return S.moodAllFried;
  if(!egg){
    const sq=panSquatter();
    if(sq){
      if(sq.cook>1.5) return S.moodBurnt;
      if(sq.cook>1.05) return S.moodOvercooking;
      return S.moodHogging;
    }
    return panOccupiedByFlock() ? S.moodHogging : S.moodEmpty;
  }
  if(egg.dizzy>0) return S.moodDizzy;
  // a petted egg shows its joy even while still in the pan
  if((egg.state==='raw'||egg.state==='cooking') && egg.happy>0.85) return S.moodBliss(seasonNote(egg));
  if((egg.state==='raw'||egg.state==='cooking') && egg.happy>0.6) return S.moodHappy(seasonNote(egg));
  if(egg.state==='raw') return S.moodRaw;
  if(egg.state==='cooking') return egg.cook<0.5?S.moodToasty:S.moodAlmost;
  if(egg.state==='returning') return S.moodReturning;
  if(egg.state==='resting') return S.moodResting(seasonNote(egg));
  if(egg.lonely && egg.happy<0.5) return S.moodLonely;
  if(egg.happy>0.85) return S.moodBliss(seasonNote(egg));
  if(egg.happy>0.6) return S.moodHappy(seasonNote(egg));
  if(egg.happy>0.35) return S.moodContent;
  return S.moodAttention;
}
function seasonNote(e){
  const s=e.salt.length>4, p=e.pepper.length>4;
  if(s&&p) return S.seasonPerfect;
  if(s) return S.seasonPeppery;
  if(p) return S.seasonNeedSalt;
  return S.seasonUnseasoned;
}

// ---- main loop ----
let last=performance.now();
function loop(t){
  const dt=Math.min(33,t-last)/16.67; last=t;
  update(dt); draw();
  requestAnimationFrame(loop);
}
function now(){return performance.now();}

function ambientUpdate(e, dt){
  // loneliness: the longer it goes un-petted, the faster its mood sinks
  e.petClock += dt;
  e.lonely = e.petClock > 540;                       // ~9s with no affection
  const decay = e.lonely ? 0.00075 : 0.00018;        // neglected eggs get glum quicker
  e.happy=Math.max(0, e.happy-decay*dt);

  if(e.dizzyForever) e.dizzy=120;                    // permanently dizzy — never wears off
  else if(e.dizzy>0) e.dizzy=Math.max(0, e.dizzy-dt);// otherwise shake off the stars over time

  e.jvx += -e.jiggle*0.2; e.jvx*=0.88; e.jiggle+=e.jvx*dt;
  e.squish*=Math.pow(0.86,dt);
  e.blinkT-=dt/60;
  if(e.blinkT<=0){ e.blink=1; if(e.blinkT<-0.12){ e.blink=0; e.blinkT=2+Math.random()*3; } }
  e.faceDir*=Math.pow(0.9,dt);
}

function update(dt){
  refreshRoamBox();
  if(egg) updateActiveEgg(dt);
  for(const f of flock) updateRoamingEgg(f, dt);
  separateFlock();

  // particles
  for(const p of parts){
    p.x+=p.vx*dt; p.y+=p.vy*dt; p.life-=0.02*dt;
    if(p.type==='steam'){ p.vy-=0.01*dt; p.r+=0.15*dt; }
    if(p.type==='heart'||p.type==='txt'){ p.vy-=0.02*dt; }
  }
  parts=parts.filter(p=>p.life>0);
  for(const tr of petTrail){ tr.life-=0.05*dt; }
  petTrail=petTrail.filter(tr=>tr.life>0);

  statusEl.textContent = performance.now()<hintUntil ? hintText : moodText();
  progressEl.textContent=S.progress(friedSnapshots.length, EGG_TOTAL);
}

function updateActiveEgg(dt){
  const e=egg;
  if(e.state==='cooking'){
    e.cook=Math.min(1, e.cook + e.heat*0.0055*dt);   // a brisker fry
    if(e.heat>0.05 && Math.random()<e.heat*0.12) sizzlePuffs(1);
    e.heat=Math.max(0, e.heat-0.0009*dt);
    if(e.cook>=1){ e.state='cooked'; e.cookedT=0; hint(S.ready); }
    // too blissful to sit still — sometimes a happy egg just hops out early
    else if(e.cook>0.25 && e.happy>0.9 && Math.random()<0.006*dt){
      escapeFromPan(e,'happy'); return;
    }
  }
  if(e.state==='cooked'){
    e.cookedT+=dt;
    e.squish=0.2+Math.sin(now()/120)*0.15;
    if(e.cookedT>40){
      e.state='free'; e.scale=1;
      e.goal='wander'; e.goalT=120+Math.random()*160;
      const a=-Math.PI/2 + (Math.random()-0.5)*1.2;   // drift up & out of the pan
      e.tvx=Math.cos(a)*0.8; e.tvy=Math.sin(a)*0.8;
      e.vx=e.tvx*2.2; e.vy=e.tvy*2.2;
      finishFrying(e);
      return;
    }
  }
  else if(e.state==='free'){
    updateFree(e, dt);
  }
  else { // raw / cooking — settle into the pan center
    e.x += (pan.x-e.x)*0.1; e.y += (pan.y-e.y)*0.1;
  }
  ambientUpdate(e, dt);
}

// an egg bails out of the pan early (booped too much, or too happy) — even if undercooked
function escapeFromPan(e, reason){
  if(e!==egg || (e.state!=='raw' && e.state!=='cooking')) return;
  e.state='cooked'; e.cookedT=28;   // shortcut straight into the climb-out
  e.squish=0.5;
  hint(reason==='happy' ? S.escapeHappy : S.escapeBoop);
}

function finishFrying(e){
  const snap = { cook:e.cook, salt:e.salt.slice(), pepper:e.pepper.slice(), happy:e.happy, dizzy:e.dizzyForever, boops:e.boops };
  e.snapshot = snap;            // keep the link so re-cooking/seasoning updates the finale
  friedSnapshots.push(snap);
  flock.push(e);
  egg=null;
  if(friedSnapshots.length>=EGG_TOTAL){
    gameOver=true;
    setTimeout(showPhotoOverlay, 1300);
  } else {
    hint(S.dragNext);
  }
}

function updateRoamingEgg(e, dt){
  if(e.state==='returning'){
    e.retT+=dt;
    e.scale += (1-e.scale)*0.06*dt;
    e.x += (pan.x-e.x)*0.08*dt;
    e.y += (pan.y-e.y)*0.08*dt;
    e.squish=0.12*Math.sin(now()/110);
    if(e.retT>20 && dist(e.x,e.y,pan.x,pan.y)<5){
      e.state='resting'; e.restT=0; e.scale=1;
    }
  }
  else if(e.state==='resting'){
    // a naughty squatter — they will NOT leave on their own; the player must boop them out
    e.restT+=dt;
    e.x += (pan.x-e.x)*0.1; e.y += (pan.y-e.y)*0.1;
    if(e.heat>0.02){
      // keep the heat on a squatter and it overcooks, going darker and darker
      e.cook=Math.min(2.2, e.cook + e.heat*0.0055*dt);
      if(Math.random()<e.heat*0.12) sizzlePuffs(1);
      e.heat=Math.max(0, e.heat-0.0009*dt);
      syncSnapshot(e);
    }
    // toasty is cozy, but burnt is miserable
    if(e.cook>1.15) e.happy=Math.max(0, e.happy-0.0012*dt);
    else e.happy=Math.min(1, e.happy+0.0004*dt);
  }
  else {
    updateFree(e, dt);
  }
  ambientUpdate(e, dt);
}

function updateFree(e, dt){
  const R=eggRadius(e);

  // every so often, pick a new lazy intention
  e.goalT-=dt;
  if(e.goalT<=0){
    e.goalT=130+Math.random()*180;
    e.goal = Math.random()<0.55 ? 'toPan' : 'wander';
    if(e.goal==='wander'){
      if(Math.random()<0.4){ e.tvx=0; e.tvy=0; }            // sometimes just chill
      else {
        const a=Math.random()*Math.PI*2, sp=0.35+Math.random()*0.6;
        e.tvx=Math.cos(a)*sp; e.tvy=Math.sin(a)*sp;
      }
    }
  }

  // the naughty urge to reclaim the pan
  if(e.goal==='toPan'){
    const panFree = !egg && !panOccupiedByFlock(e);
    if(panFree){
      const a=Math.atan2(pan.y-e.y, pan.x-e.x);
      e.tvx=Math.cos(a)*0.85; e.tvy=Math.sin(a)*0.85;
      if(dist(e.x,e.y,pan.x,pan.y) < pan.r*0.8){
        e.state='returning'; e.retT=0;
        e.scale=eggFreeR()/(pan.r*0.8);   // start small, grow as they climb in
        return;
      }
    } else {
      e.goal='wander'; e.goalT=200+Math.random()*300; e.tvx*=0.5; e.tvy*=0.5;
    }
  }

  // pointer interactions while roaming
  if(tool==='poke' && pointer.down && dist(pointer.x,pointer.y,e.x,e.y)<150){
    const a=Math.atan2(e.y-pointer.y, e.x-pointer.x);   // scoot away from a boop
    e.tvx=Math.cos(a)*2.2; e.tvy=Math.sin(a)*2.2;
  } else if(e===petTarget && pointer.down && tool==='pet'){
    e.tvx*=0.4; e.tvy*=0.4;                              // hold still to be petted
  }

  // ease velocity toward target, with gentle damping
  e.vx += (e.tvx - e.vx)*0.05*dt;
  e.vy += (e.tvy - e.vy)*0.05*dt;
  e.vx*=Math.pow(0.99,dt); e.vy*=Math.pow(0.99,dt);

  e.x += e.vx*dt; e.y += e.vy*dt;

  resolveCollisions(e, R);

  e.bobPhase += 0.03*dt;
  e.faceDir = Math.max(-0.4, Math.min(0.4, e.faceDir + e.vx*0.012));
}

function eggFreeR(){ return Math.min(W,H)*0.108; }

// keep a roaming egg inside the play box and out of solid obstacles (pan, carton)
function resolveCollisions(e, R){
  const rr=R*0.85, b=roamBox;
  if(e.x<b.left+rr){ e.x=b.left+rr; e.vx=Math.abs(e.vx)*0.5; e.tvx=Math.abs(e.tvx); }
  if(e.x>b.right-rr){ e.x=b.right-rr; e.vx=-Math.abs(e.vx)*0.5; e.tvx=-Math.abs(e.tvx); }
  if(e.y<b.top+rr){ e.y=b.top+rr; e.vy=Math.abs(e.vy)*0.5; e.tvy=Math.abs(e.tvy); }
  if(e.y>b.bottom-rr){ e.y=b.bottom-rr; e.vy=-Math.abs(e.vy)*0.5; e.tvy=-Math.abs(e.tvy); }
  // the pan is an obstacle — except for an egg deliberately climbing back in
  if(e.goal!=='toPan') pushOutCircle(e, rr, pan.x, pan.y, pan.r*0.85);
  pushOutRect(e, rr, holder.x, holder.y, holder.w, holder.h);
}
// keep roaming eggs from overlapping each other — they may touch, but not stack
function separateFlock(){
  const free=flock.filter(f=>f.state==='free');
  for(let i=0;i<free.length;i++){
    for(let j=i+1;j<free.length;j++){
      const a=free[i], b=free[j];
      const min=eggRadius(a)*0.9 + eggRadius(b)*0.9;
      let dx=b.x-a.x, dy=b.y-a.y, d=Math.hypot(dx,dy);
      if(d>=min) continue;
      if(d<0.001){ dx=Math.random()-0.5; dy=Math.random()-0.5; d=Math.hypot(dx,dy)||1; }
      const nx=dx/d, ny=dy/d, push=(min-d)/2;
      a.x-=nx*push; a.y-=ny*push;
      b.x+=nx*push; b.y+=ny*push;
      // trade the approaching part of their velocity, so it reads as a soft bump
      const van=(b.vx-a.vx)*nx + (b.vy-a.vy)*ny;
      if(van<0){
        a.vx+=van*nx*0.5; a.vy+=van*ny*0.5;
        b.vx-=van*nx*0.5; b.vy-=van*ny*0.5;
      }
    }
  }
  // a shove may nudge one into a wall/pan — re-resolve those
  for(const f of free) resolveCollisions(f, eggRadius(f));
}
function pushOutCircle(e, rr, cx, cy, rad){
  const dx=e.x-cx, dy=e.y-cy, d=Math.hypot(dx,dy), min=rad+rr;
  if(d<min){
    const nx = d>0.001? dx/d : 1, ny = d>0.001? dy/d : 0;
    e.x=cx+nx*min; e.y=cy+ny*min;
    const vn=e.vx*nx+e.vy*ny; if(vn<0){ e.vx-=1.6*vn*nx; e.vy-=1.6*vn*ny; }
    const sp=Math.max(0.5, Math.hypot(e.tvx,e.tvy));
    e.tvx=nx*sp; e.tvy=ny*sp;
  }
}
function pushOutRect(e, rr, rx, ry, rw, rh){
  const cx=Math.max(rx,Math.min(e.x,rx+rw));
  const cy=Math.max(ry,Math.min(e.y,ry+rh));
  const dx=e.x-cx, dy=e.y-cy, d=Math.hypot(dx,dy);
  if(d>=rr) return;
  if(d<0.001){ // center is inside the rect — eject along the nearest edge
    const left=e.x-rx, right=rx+rw-e.x, top=e.y-ry, bottom=ry+rh-e.y;
    const m=Math.min(left,right,top,bottom);
    if(m===left){ e.x=rx-rr; e.tvx=-Math.abs(e.tvx)||-0.5; }
    else if(m===right){ e.x=rx+rw+rr; e.tvx=Math.abs(e.tvx)||0.5; }
    else if(m===top){ e.y=ry-rr; e.tvy=-Math.abs(e.tvy)||-0.5; }
    else { e.y=ry+rh+rr; e.tvy=Math.abs(e.tvy)||0.5; }
  } else {
    const nx=dx/d, ny=dy/d;
    e.x=cx+nx*rr; e.y=cy+ny*rr;
    const sp=Math.max(0.5, Math.hypot(e.tvx,e.tvy));
    e.tvx=nx*sp; e.tvy=ny*sp;
  }
}

// ---- drawing ----
function draw(){
  ctx.clearRect(0,0,W,H);
  drawKitchen();
  drawHolder();
  drawPan();
  const all = egg ? [...flock, egg] : flock.slice();
  all.sort((a,b)=>a.y-b.y);
  for(const e of all) drawEgg(e);
  drawParticles();
  if(dragEgg) drawShellEgg(ctx, dragEgg.x, dragEgg.y, eggFreeR()*0.95);
}

// ---- the carton of waiting raw eggs ----
function drawHolder(){
  const lw=2.5;
  ctx.save();
  ctx.fillStyle='#e9d3ad'; ctx.strokeStyle='#c8a882'; ctx.lineWidth=lw;
  roundRect(ctx, holder.x, holder.y, holder.w, holder.h, holder.h*0.16);
  ctx.fill(); ctx.stroke();

  const n=queueCount();
  for(let i=0;i<6;i++){
    const s=slotPos(i);
    // empty well
    ctx.fillStyle='#d8bd92'; ctx.strokeStyle='#c8a882'; ctx.lineWidth=lw*0.8;
    ctx.beginPath(); ctx.ellipse(s.x, s.y+s.r*0.3, s.r*1.15, s.r*0.62, 0, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
    if(i<n && i!==dragFromIdx){
      drawShellEgg(ctx, s.x, s.y-s.r*0.12, s.r*1.05, (i*0.7%2-0.5)*0.1);
    }
  }
  ctx.restore();
}

// a real (whole, in-shell) egg — sleepy, waiting its turn in the carton
function drawShellEgg(c, cx, cy, R, tilt){
  const lw=2.2;
  c.save();
  c.translate(cx,cy);
  if(tilt) c.rotate(tilt);
  const w=R*0.86, h=R*1.0;            // rounder ovoid: smooth rounded top, full round bottom
  c.beginPath();
  c.moveTo(0,-h);
  c.bezierCurveTo(w*0.86,-h, w, -h*0.18, w, h*0.06);
  c.bezierCurveTo(w, h*0.72, w*0.58, h, 0, h);
  c.bezierCurveTo(-w*0.58, h, -w, h*0.72, -w, h*0.06);
  c.bezierCurveTo(-w, -h*0.18, -w*0.86,-h, 0, -h);
  c.closePath();
  c.fillStyle='#fdf3e3'; c.strokeStyle='#dcc09a'; c.lineWidth=lw;
  c.fill(); c.stroke();

  // a couple of soft speckles for charm
  c.fillStyle='rgba(190,160,120,0.35)';
  c.beginPath(); c.ellipse(-w*0.32,-h*0.08, R*0.06, R*0.045, 0.5, 0, Math.PI*2); c.fill();
  c.beginPath(); c.ellipse(w*0.24, h*0.2, R*0.05, R*0.04, -0.4, 0, Math.PI*2); c.fill();

  // sleepy closed-eye face
  c.strokeStyle='#7a5a3a'; c.lineWidth=lw; c.lineCap='round';
  const ey=h*0.06, edx=w*0.36, ew=R*0.16;
  for(const s of [-1,1]){
    c.beginPath(); c.arc(s*edx, ey, ew, 0.15*Math.PI, 0.85*Math.PI); c.stroke();
  }
  c.fillStyle='rgba(247,160,160,0.5)';
  for(const s of [-1,1]){ c.beginPath(); c.ellipse(s*w*0.5, ey+R*0.1, R*0.1, R*0.06, 0, 0, Math.PI*2); c.fill(); }
  c.restore();
}

function drawKitchen(){
  // soft warm vignette behind the play area — flat, no hard floor line
  ctx.fillStyle='#f7ead2';
  ctx.beginPath();
  ctx.ellipse(W*0.5, pan.y, Math.min(W,H)*0.62, Math.min(W,H)*0.5, 0, 0, Math.PI*2);
  ctx.fill();
}

function drawPan(){
  const px=pan.x, py=pan.y, lw=2.5;
  ctx.save();
  // handle
  ctx.strokeStyle='#4a4a4a'; ctx.lineCap='round'; ctx.lineWidth=pan.r*0.14;
  ctx.beginPath(); ctx.moveTo(px+pan.r*0.95,py); ctx.lineTo(px+pan.r*2.1,py-pan.r*0.12); ctx.stroke();
  // outer rim
  ctx.fillStyle='#3d3d3d'; ctx.strokeStyle='#2a2a2a'; ctx.lineWidth=lw;
  ctx.beginPath(); ctx.ellipse(px,py,pan.r*1.08,pan.r*0.92,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  // inner surface
  ctx.fillStyle='#4e4e4e'; ctx.strokeStyle='#3a3a3a'; ctx.lineWidth=lw;
  ctx.beginPath(); ctx.ellipse(px,py,pan.r*0.92,pan.r*0.76,0,0,Math.PI*2); ctx.fill(); ctx.stroke();
  // heat glow — flat tinted overlay
  if(egg && egg.heat>0.02 && egg.state!=='free'){
    ctx.globalAlpha=egg.heat*0.35;
    ctx.fillStyle='#ff6630';
    ctx.beginPath(); ctx.ellipse(px,py,pan.r*0.92,pan.r*0.76,0,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=1;
  }
  ctx.restore();
}

// build a wobbly organic blob outline (closed path) of N points around radius baseR, with a phase `seed`
function blobPoints(baseR, seed){
  const N=64, pts=[];
  for(let i=0;i<N;i++){
    const a=(i/N)*Math.PI*2;
    const wobble = 0.12*Math.sin(a*3 + seed) + 0.07*Math.sin(a*5 - seed*0.6) + 0.05*Math.sin(a*7 + seed*0.4);
    const rr=baseR*(1+wobble);
    pts.push({x:Math.cos(a)*rr, y:Math.sin(a)*rr*0.9});
  }
  return pts;
}
function tracePoints(c, pts){
  const N=pts.length;
  c.moveTo(pts[0].x, pts[0].y);
  for(let i=0;i<N;i++){
    const p0=pts[(i-1+N)%N], p1=pts[i], p2=pts[(i+1)%N], p3=pts[(i+2)%N];
    const cp1x=p1.x+(p2.x-p0.x)/6, cp1y=p1.y+(p2.y-p0.y)/6;
    const cp2x=p2.x-(p3.x-p1.x)/6, cp2y=p2.y-(p3.y-p1.y)/6;
    c.bezierCurveTo(cp1x,cp1y, cp2x,cp2y, p2.x,p2.y);
  }
  c.closePath();
}

// egg-white / yolk / outline colours for a given doneness.
// cook 0..1 = normal browning; 1..2.2 = overcooked, heading to burnt-dark.
function browningColors(cook){
  let wr,wg,wb, yolk, wStroke, yStroke;
  if(cook<=1){
    wr=255-cook*20; wg=250-cook*30; wb=238-cook*45;
    yolk = cook<0.3 ? '#ffd23f' : (cook<0.7 ? '#ffb830' : '#ffa020');
    wStroke='#c8a882'; yStroke='#e0960a';
  } else {
    const t=Math.min(1,(cook-1)/1.1);                 // 0 at cook=1, 1 near cook=2.1
    wr=235-t*168; wg=220-t*172; wb=193-t*160;         // -> ~ (67,48,33) deep burnt brown
    const yr=Math.round(255-t*200), yg=Math.round(168-t*128), yb=Math.round(48-t*20);
    yolk=`rgb(${Math.max(40,yr)},${Math.max(34,yg)},${Math.max(28,yb)})`;
    wStroke=`rgb(${Math.round(150-t*100)},${Math.round(120-t*80)},${Math.round(90-t*60)})`;
    yStroke='#5a3a1a';
  }
  return {
    white:`rgb(${Math.round(wr)},${Math.round(wg)},${Math.round(wb)})`,
    yolk, wStroke, yStroke
  };
}

function drawEgg(e){
  const R=eggRadius(e);
  const sq=e.squish;
  const sx=1+sq*0.5, sy=1-sq*0.5;
  const lw=2.5;
  // gentle idle bob while roaming (visual only)
  const bob = e.state==='free' ? Math.sin(now()/450 + e.bobPhase)*R*0.05 : 0;
  ctx.save();
  ctx.translate(e.x, e.y+bob);

  // shadow — simple flat ellipse just below the egg
  ctx.save();
  ctx.globalAlpha=0.1; ctx.fillStyle='#5b4636';
  ctx.beginPath(); ctx.ellipse(0, R*0.78 - bob, R*0.78, R*0.16, 0, 0, Math.PI*2); ctx.fill();
  ctx.restore();

  ctx.scale(sx,sy);

  // ---- egg white — blobby outline, flat fill ----
  const browning=e.cook;
  const col=browningColors(browning);
  ctx.fillStyle = col.white;
  ctx.strokeStyle=col.wStroke; ctx.lineWidth=lw;
  const baseR=R*0.92, t=now()/800;
  ctx.beginPath();
  tracePoints(ctx, blobPoints(baseR, t));
  ctx.fill(); ctx.stroke();

  // ---- yolk — flat circle with outline ----
  const yolkR=R*0.48;
  ctx.save();
  ctx.translate(e.jiggle*4,0);
  ctx.fillStyle=col.yolk; ctx.strokeStyle=col.yStroke; ctx.lineWidth=lw;
  ctx.beginPath();
  ctx.arc(0,0,yolkR,0,Math.PI*2);
  ctx.fill(); ctx.stroke();

  // ---- face (on yolk) ----
  const happy=e.happy;
  const ed=e.faceDir*yolkR;
  const eyeY=-yolkR*0.14, eyeDX=yolkR*0.32, eyeR=yolkR*0.11;
  const blink = e.blink>0.5;
  const dizzy = e.dizzy>0;
  const burnt = e.cook>1.5;
  const lonely = e.lonely && e.happy<0.5 && e.state!=='raw';
  // burnt eggs get a pale face so it reads on the near-black yolk
  const inkFace = burnt ? '#f3e3c0' : '#3a2a1a';

  ctx.fillStyle=inkFace; ctx.strokeStyle=inkFace; ctx.lineWidth=lw; ctx.lineCap='round';

  if(dizzy){
    // "seeing stars" — little spiral eyes
    for(const s of [-1,1]){
      const cx=s*eyeDX+ed*0.4, cy=eyeY, rr=eyeR*1.7, steps=22;
      ctx.beginPath();
      for(let i=0;i<=steps;i++){
        const t=i/steps, ang=t*2.2*Math.PI*2 + s*0.6, rad=rr*t;
        const px=cx+Math.cos(ang)*rad, py=cy+Math.sin(ang)*rad;
        i?ctx.lineTo(px,py):ctx.moveTo(px,py);
      }
      ctx.stroke();
    }
  } else if(burnt){
    // knocked-out "X" eyes for a burnt egg
    for(const s of [-1,1]){
      const cx=s*eyeDX+ed*0.4, cy=eyeY, r=eyeR*1.1;
      ctx.beginPath();
      ctx.moveTo(cx-r,cy-r); ctx.lineTo(cx+r,cy+r);
      ctx.moveTo(cx+r,cy-r); ctx.lineTo(cx-r,cy+r);
      ctx.stroke();
    }
  } else {
    for(const s of [-1,1]){
      ctx.save();
      ctx.translate(s*eyeDX+ed*0.4, eyeY);
      if(blink){
        ctx.beginPath(); ctx.moveTo(-eyeR*0.8,0); ctx.lineTo(eyeR*0.8,0); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.arc(0,0,eyeR,0,Math.PI*2); ctx.fill();
      }
      ctx.restore();
    }
    // a single blue tear when it's been neglected too long
    if(lonely){
      const tx=-eyeDX+ed*0.4, ty=eyeY+eyeR*1.5;
      ctx.fillStyle='#9fd0ff'; ctx.strokeStyle='#6fb0e6'; ctx.lineWidth=1.2;
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.quadraticCurveTo(tx+eyeR*0.7, ty+eyeR*1.3, tx, ty+eyeR*2.1);
      ctx.quadraticCurveTo(tx-eyeR*0.7, ty+eyeR*1.3, tx, ty);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle=inkFace; ctx.strokeStyle=inkFace; ctx.lineWidth=lw;
    }
  }

  // blush only when genuinely happy (never while dizzy, lonely or burnt)
  if(happy>0.55 && !dizzy && !lonely && !burnt){
    ctx.globalAlpha=Math.min(1,(happy-0.55)*2);
    ctx.fillStyle='#f7a0a0';
    for(const s of [-1,1]){
      ctx.beginPath(); ctx.ellipse(s*yolkR*0.48,yolkR*0.14,yolkR*0.14,yolkR*0.08,0,0,Math.PI*2); ctx.fill();
    }
    ctx.globalAlpha=1;
  }

  ctx.strokeStyle=inkFace; ctx.lineWidth=lw; ctx.lineCap='round';
  ctx.fillStyle = burnt ? inkFace : '#e06050';
  const my=yolkR*0.34;
  ctx.beginPath();
  if(burnt){
    // flat, dazed little mouth
    const mw=yolkR*0.34, x0=ed*0.3-mw/2;
    ctx.moveTo(x0,my); ctx.quadraticCurveTo(x0+mw*0.5, my+yolkR*0.06, x0+mw, my); ctx.stroke();
  } else if(dizzy){
    // small woozy wavy mouth
    const mw=yolkR*0.3, x0=ed*0.3-mw/2;
    ctx.moveTo(x0,my);
    ctx.quadraticCurveTo(x0+mw*0.25, my-yolkR*0.09, x0+mw*0.5, my);
    ctx.quadraticCurveTo(x0+mw*0.75, my+yolkR*0.09, x0+mw, my);
    ctx.stroke();
  } else if(e.state==='raw' && happy<=0.6){
    ctx.moveTo(ed*0.3-yolkR*0.12,my); ctx.lineTo(ed*0.3+yolkR*0.12,my); ctx.stroke();
  } else if(lonely || happy<0.35){
    ctx.arc(ed*0.3,my+yolkR*0.18,yolkR*0.16,1.2*Math.PI,1.8*Math.PI); ctx.stroke();
  } else if(happy>0.6){
    ctx.arc(ed*0.3,my-yolkR*0.04,yolkR*0.22,0.15*Math.PI,0.85*Math.PI);
    ctx.fill(); ctx.stroke();
  } else {
    ctx.arc(ed*0.3,my,yolkR*0.18,0.1*Math.PI,0.9*Math.PI); ctx.stroke();
  }
  ctx.restore(); // yolk translate
  ctx.restore(); // egg translate/scale

  // ---- seasoning ----
  ctx.save();
  ctx.translate(e.x,e.y);
  ctx.scale(sx,sy);
  for(const s of e.salt){
    ctx.fillStyle='#fff'; ctx.strokeStyle='#ddd'; ctx.lineWidth=0.5;
    ctx.fillRect(s.ox*R-1.5, s.oy*R-1.5, 3,3);
  }
  for(const p of e.pepper){
    ctx.fillStyle='#3a2a1a';
    ctx.beginPath(); ctx.arc(p.ox*R, p.oy*R, 1.8,0,Math.PI*2); ctx.fill();
  }
  ctx.restore();
}

function drawParticles(){
  for(const p of parts){
    ctx.globalAlpha=Math.max(0,p.life);
    if(p.type==='steam'){
      // faint soft wisp — no hard outline, so it reads as steam, not a blotch
      ctx.globalAlpha=Math.max(0,p.life)*0.3;
      ctx.fillStyle='#fff';
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
    } else if(p.type==='heart'){
      ctx.fillStyle='#e06050'; ctx.strokeStyle='#3a2a1a'; ctx.lineWidth=1.5;
      const hx=p.x, hy=p.y, hs=6;
      ctx.beginPath();
      ctx.moveTo(hx,hy+hs*0.4);
      ctx.bezierCurveTo(hx-hs,hy-hs*0.4, hx-hs*0.5,hy-hs, hx,hy-hs*0.4);
      ctx.bezierCurveTo(hx+hs*0.5,hy-hs, hx+hs,hy-hs*0.4, hx,hy+hs*0.4);
      ctx.fill(); ctx.stroke();
    } else if(p.type==='txt'){
      ctx.font='bold 18px "Comic Sans MS",system-ui,sans-serif'; ctx.fillStyle='#5b4636';
      ctx.fillText(p.txt,p.x-6,p.y);
    }
  }
  ctx.globalAlpha=1;
  for(const tr of petTrail){
    ctx.globalAlpha=tr.life*0.6;
    ctx.fillStyle='#ffd23f'; ctx.strokeStyle='#e0960a'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.arc(tr.x,tr.y,4,0,Math.PI*2); ctx.fill(); ctx.stroke();
  }
  ctx.globalAlpha=1;
}

// ---- finale: compose & show the group photo ----
const photoOverlay=document.getElementById('photoOverlay');
const photoImg=document.getElementById('photoImg');
const restartBtn=document.getElementById('restartBtn');

function roundRect(c,x,y,w,h,r){
  c.beginPath();
  c.moveTo(x+r,y);
  c.arcTo(x+w,y,x+w,y+h,r);
  c.arcTo(x+w,y+h,x,y+h,r);
  c.arcTo(x,y+h,x,y,r);
  c.arcTo(x,y,x+w,y,r);
  c.closePath();
}

function drawEggPortrait(c, cx, cy, R, look, seedIndex, rot){
  const lw=2.8;
  // soft drop shadow on the plate (unrotated, so it always sits beneath)
  c.save();
  c.globalAlpha=0.12; c.fillStyle='#5b4636';
  c.beginPath(); c.ellipse(cx+R*0.12, cy+R*0.7, R*0.92, R*0.22, 0, 0, Math.PI*2); c.fill();
  c.restore();

  c.save();
  c.translate(cx,cy);
  if(rot) c.rotate(rot);

  const browning=look.cook;
  const col=browningColors(browning);
  c.fillStyle=col.white;
  c.strokeStyle=col.wStroke; c.lineWidth=lw;
  c.beginPath();
  tracePoints(c, blobPoints(R*0.92, seedIndex*1.7+0.6));
  c.fill(); c.stroke();

  const yolkR=R*0.48;
  c.fillStyle=col.yolk; c.strokeStyle=col.yStroke; c.lineWidth=lw;
  c.beginPath(); c.arc(0,0,yolkR,0,Math.PI*2); c.fill(); c.stroke();

  // face — reflects how happy this one was, plus dizzy / burnt quirks
  const happy=look.happy==null?0.7:look.happy;
  const dizzy=!!look.dizzy;
  const burnt=browning>1.5;
  const ink = burnt ? '#f3e3c0' : '#3a2a1a';
  const eyeY=-yolkR*0.14, eyeDX=yolkR*0.32, eyeR=yolkR*0.11;
  c.fillStyle=ink; c.strokeStyle=ink; c.lineWidth=lw; c.lineCap='round';

  if(dizzy){
    for(const s of [-1,1]){
      const ex=s*eyeDX, ey=eyeY, rr=eyeR*1.7, steps=22;
      c.beginPath();
      for(let i=0;i<=steps;i++){
        const t=i/steps, ang=t*2.2*Math.PI*2 + s*0.6, rad=rr*t;
        const px=ex+Math.cos(ang)*rad, py=ey+Math.sin(ang)*rad;
        i?c.lineTo(px,py):c.moveTo(px,py);
      }
      c.stroke();
    }
  } else if(burnt){
    for(const s of [-1,1]){
      const ex=s*eyeDX, ey=eyeY, r=eyeR*1.1;
      c.beginPath();
      c.moveTo(ex-r,ey-r); c.lineTo(ex+r,ey+r);
      c.moveTo(ex+r,ey-r); c.lineTo(ex-r,ey+r);
      c.stroke();
    }
  } else {
    for(const s of [-1,1]){ c.beginPath(); c.arc(s*eyeDX, eyeY, eyeR, 0, Math.PI*2); c.fill(); }
    if(happy>0.55){
      c.globalAlpha=Math.min(1,(happy-0.55)*2); c.fillStyle='#f7a0a0';
      for(const s of [-1,1]){ c.beginPath(); c.ellipse(s*yolkR*0.48, yolkR*0.14, yolkR*0.14, yolkR*0.08,0,0,Math.PI*2); c.fill(); }
      c.globalAlpha=1; c.fillStyle=ink;
    }
  }

  c.strokeStyle=ink; c.lineWidth=lw; c.lineCap='round'; c.fillStyle = burnt ? ink : '#e06050';
  const my=yolkR*0.30;
  c.beginPath();
  if(dizzy || burnt){
    const mw=yolkR*0.32, x0=-mw/2;
    c.moveTo(x0,my+yolkR*0.06);
    c.quadraticCurveTo(x0+mw*0.25, my-yolkR*0.04, x0+mw*0.5, my+yolkR*0.04);
    c.quadraticCurveTo(x0+mw*0.75, my+yolkR*0.12, x0+mw, my+yolkR*0.04);
    c.stroke();
  } else if(happy>0.6){
    c.arc(0, my-yolkR*0.04, yolkR*0.22, 0.15*Math.PI, 0.85*Math.PI); c.fill(); c.stroke();
  } else if(happy<0.35){
    c.arc(0, my+yolkR*0.18, yolkR*0.16, 1.2*Math.PI, 1.8*Math.PI); c.stroke();
  } else {
    c.arc(0, my, yolkR*0.18, 0.1*Math.PI, 0.9*Math.PI); c.stroke();
  }

  for(const s of look.salt){ c.fillStyle = burnt?'#e8dcc0':'#fff'; c.fillRect(s.ox*R-1.5, s.oy*R-1.5, 3,3); }
  for(const p of look.pepper){ c.fillStyle = burnt?'#000':'#3a2a1a'; c.beginPath(); c.arc(p.ox*R, p.oy*R, 1.8,0,Math.PI*2); c.fill(); }

  c.restore();
}

// ---- finale: read how you fried, return a chef id ----
function pickVerdict(snaps){
  const n = snaps.length || 1;
  const cooks   = snaps.map(s=>s.cook);
  const seasons = snaps.map(s=>s.salt.length + s.pepper.length);
  const sum = a => a.reduce((x,y)=>x+y,0);
  const cookSpread  = Math.max(...cooks) - Math.min(...cooks);
  const nCharred    = cooks.filter(c=>c>1.5).length;    // properly black
  const nOvercooked = cooks.filter(c=>c>1.05).length;   // pushed past done at all
  const nRunny      = cooks.filter(c=>c<0.6).length;
  const nGolden     = cooks.filter(c=>c>=0.85 && c<=1.2).length;
  const totalSalt   = sum(snaps.map(s=>s.salt.length));
  const totalPepper = sum(snaps.map(s=>s.pepper.length));
  const totalSeason = totalSalt + totalPepper;
  const avgSeason   = totalSeason/n;
  const seasonSpread= Math.max(...seasons) - Math.min(...seasons);
  const avgHappy    = sum(snaps.map(s=>s.happy))/n;
  const nSad        = snaps.filter(s=>s.happy<0.35).length;
  const nHappy      = snaps.filter(s=>s.happy>0.6).length;
  const allSeasoned = snaps.every(s=>s.salt.length>0 && s.pepper.length>0);
  const allGolden   = nGolden===n;
  const nDizzy      = snaps.filter(s=>s.dizzy).length;   // only eggs that ended up dizzy (spiral-eyed in the photo)

  // each candidate: does it match its condition, and by how much (ratio over threshold —
  // higher means the result overshoots its bar by more). When several match, the one
  // exceeded by the largest ratio wins; ties fall back to this priority order. Scores
  // are clamped so no single uncapped metric (e.g. avgSeason) can dominate.
  const cap = x => Math.min(3.0, x);
  const candidates = [
    {id:'pyro',      match: nCharred>=2,                                  score: cap(nCharred/2)},
    {id:'menace',    match: nDizzy>=2,                                    score: cap(nDizzy/2)},
    {id:'chaos',     match: cookSpread>=1.4 && seasonSpread>=44,          score: cap(Math.min(cookSpread/1.4, seasonSpread/44))},
    {id:'perfect',   match: nGolden>=4 && cookSpread<=0.5,                score: cap(Math.min(nGolden/4, cookSpread>0 ? 0.5/cookSpread : 2))},
    {id:'purist',    match: totalSeason<=4,                               score: 1.5},
    {id:'maximal',   match: avgSeason>=44,                                score: cap(avgSeason/44)},
    {id:'salty',     match: totalSalt>=totalPepper*3 && totalSalt>=24,    score: cap(Math.min(totalSalt/Math.max(totalPepper*3,1), totalSalt/24))},
    {id:'peppery',   match: totalPepper>=totalSalt*3 && totalPepper>=24,  score: cap(Math.min(totalPepper/Math.max(totalSalt*3,1), totalPepper/24))},
    {id:'runny',     match: nRunny>=3,                                    score: cap(nRunny/3)},
    {id:'softie',    match: avgHappy>=0.65 && nCharred===0,               score: cap(avgHappy/0.65)},
    {id:'toughlove', match: allSeasoned && allGolden && nHappy>=2,        score: 2.6},
    // emotion- & accident-driven types
    {id:'gloomy',    match: nSad>=3 || avgHappy<=0.32,                    score: cap(Math.max(nSad/3, avgHappy<=0.32?1.6:0))},
    {id:'scorch',    match: nOvercooked>=1 && nCharred<2,                 score: 1.5},
    {id:'safe',      match: cookSpread<=0.5 && nRunny===0 && nCharred===0 && nDizzy===0 && totalSeason>4 && totalSeason<=14 && avgHappy<0.65, score: 1.4},
  ];

  let best = null;
  for(const c of candidates){
    if(!c.match) continue;
    if(!best || c.score > best.score) best = c;
  }
  return best ? best.id : 'steady';
}

// pick a layout that matches the screen: a portrait, big-egg card on phones,
// the wide tumbled-plate card on roomier landscape screens
function composePhoto(){
  return window.innerHeight > window.innerWidth * 1.05
    ? composePhotoPortrait()
    : composePhotoLandscape();
}

// portrait card: six big eggs huddled close and a little irregular — cosy, not a tidy grid
function composePhotoPortrait(){
  const pw=680, ph=880;
  const oc=document.createElement('canvas');
  oc.width=pw; oc.height=ph;
  const pc=oc.getContext('2d');

  // warm board + hand-drawn cream card
  pc.fillStyle='#f1e2c8'; pc.fillRect(0,0,pw,ph);
  pc.fillStyle='#fffaf0'; pc.strokeStyle='#c8a882'; pc.lineWidth=5;
  roundRect(pc,28,28,pw-56,ph-56,30); pc.fill(); pc.stroke();

  // a soft tall tray the eggs rest on (not a round plate)
  pc.fillStyle='#f6ecda'; pc.strokeStyle='#dcc6a2'; pc.lineWidth=5;
  roundRect(pc,62,66,pw-124,ph-132,46); pc.fill(); pc.stroke();
  pc.strokeStyle='#e7d4b4'; pc.lineWidth=3;
  roundRect(pc,84,88,pw-168,ph-176,36); pc.stroke();

  // big eggs huddled close (slightly overlapping) and tossed off-grid for a cute, casual pile
  const R=Math.round(pw*0.172);
  const cols=[pw*0.37, pw*0.63];          // columns pulled in so eggs nearly touch
  const rows=[ph*0.30, ph*0.5, ph*0.70];  // rows pulled in for a gentle overlap
  const jitter=[
    {dx:-0.10,dy:-0.06,rot:-0.16,s:1.05},
    {dx: 0.12,dy: 0.05,rot: 0.12,s:0.96},
    {dx: 0.08,dy:-0.10,rot: 0.07,s:1.02},
    {dx:-0.13,dy: 0.09,rot:-0.10,s:1.04},
    {dx: 0.06,dy:-0.05,rot:-0.14,s:0.98},
    {dx:-0.07,dy: 0.11,rot: 0.15,s:1.00},
  ];
  const rnd=(a)=>(Math.random()-0.5)*2*a;   // a touch of randomness so each batch's pile differs
  friedSnapshots
    .map((look,i)=>{
      const j=jitter[i%jitter.length];
      return { look, i,
        cx: cols[i%2] + (j.dx + rnd(0.08))*R,
        cy: rows[Math.floor(i/2)] + (j.dy + rnd(0.08))*R,
        rot:j.rot + rnd(0.06), s:j.s + rnd(0.03) };
    })
    .sort((a,b)=>a.cy-b.cy)   // draw top-to-bottom so lower eggs overlap on top
    .forEach(s=> drawEggPortrait(pc, s.cx, s.cy, R*s.s, s.look, s.i, s.rot));

  // signature, baked in so it travels with screenshots
  const fontFam = LANG==='zh'
    ? '"Hannotate SC","Hanzipen SC","Yuanti SC","Kaiti SC","KaiTi","PingFang SC","Microsoft YaHei",sans-serif'
    : '"Chalkboard SE","Comic Sans MS",system-ui,sans-serif';
  pc.textAlign='center'; pc.textBaseline='alphabetic';
  pc.fillStyle='#b89a76'; pc.font=`bold 22px ${fontFam}`;
  pc.fillText('by '+S.credit, pw/2, ph-42);

  pc.textAlign='left';
  return oc.toDataURL('image/png');
}

function composePhotoLandscape(){
  const pw=860, ph=660;
  const fontFam = LANG==='zh'
    ? '"Hannotate SC","Hanzipen SC","Yuanti SC","Kaiti SC","KaiTi","PingFang SC","Microsoft YaHei",sans-serif'
    : '"Chalkboard SE","Comic Sans MS",system-ui,sans-serif';
  const oc=document.createElement('canvas');
  oc.width=pw; oc.height=ph;
  const pc=oc.getContext('2d');

  // warm board background + hand-drawn cream card (no text inside — the card around it carries the title)
  pc.fillStyle='#f1e2c8'; pc.fillRect(0,0,pw,ph);
  pc.fillStyle='#fffaf0'; pc.strokeStyle='#c8a882'; pc.lineWidth=5;
  roundRect(pc,30,30,pw-60,ph-60,26); pc.fill(); pc.stroke();

  // a big round plate the eggs are tumbled onto, centred in the card
  const plateX=pw/2, plateY=ph*0.5, plateR=Math.min(pw,ph)*0.43;
  pc.fillStyle='#f6ecda'; pc.strokeStyle='#dcc6a2'; pc.lineWidth=5;
  pc.beginPath(); pc.ellipse(plateX, plateY, plateR*1.05, plateR*0.92, 0, 0, Math.PI*2); pc.fill(); pc.stroke();
  pc.strokeStyle='#e7d4b4'; pc.lineWidth=3;
  pc.beginPath(); pc.ellipse(plateX, plateY, plateR*0.82, plateR*0.7, 0, 0, Math.PI*2); pc.stroke();

  // scattered, overlapping placements (relative to the plate centre) — casual, not a tidy grid
  const R=Math.min(pw,ph)*0.135;
  const spots=[
    {x:-1.55, y:-0.62, rot:-0.16, s:1.04},
    {x:-0.18, y:-0.92, rot: 0.12, s:0.98},
    {x: 1.42, y:-0.66, rot:-0.09, s:1.06},
    {x:-1.18, y: 0.70, rot: 0.15, s:1.02},
    {x: 0.30, y: 0.58, rot:-0.13, s:1.12},
    {x: 1.62, y: 0.78, rot: 0.08, s:0.96},
  ];
  // draw back-to-front so lower eggs overlap on top, with a touch of per-batch randomness
  const rnd=(a)=>(Math.random()-0.5)*2*a;
  friedSnapshots
    .map((look,i)=>({look,i,sp:spots[i%spots.length], jx:rnd(0.12), jy:rnd(0.12), jr:rnd(0.06), js:rnd(0.04)}))
    .sort((a,b)=>(a.sp.y+a.jy)-(b.sp.y+b.jy))
    .forEach(({look,i,sp,jx,jy,jr,js})=>{
      const cx=plateX + (sp.x+jx)*R*0.95;
      const cy=plateY + (sp.y+jy)*R*0.95;
      drawEggPortrait(pc, cx, cy, R*(sp.s+js), look, i, sp.rot+jr);
    });

  // signature, baked in so it travels with screenshots
  pc.textAlign='center'; pc.textBaseline='alphabetic';
  pc.fillStyle='#b89a76'; pc.font=`bold 20px ${fontFam}`;
  pc.fillText('by '+S.credit, pw/2, ph-26);

  pc.textAlign='left';
  return oc.toDataURL('image/png');
}

function showPhotoOverlay(){
  // freshen every fried egg's finale look to its real current mood, so the
  // photo (and verdict) match the faces on screen instead of a stale fry-time smile
  for(const f of flock) syncSnapshot(f);
  photoImg.src=composePhoto();
  const id = pickVerdict(friedSnapshots);
  const v = S.verdicts[id];
  const set=(elid,txt)=>{ const el=document.getElementById(elid); if(el) el.textContent=txt; };
  // on phones, show the one-line verdict so the card stays short; full read on bigger screens
  const small = window.matchMedia('(max-width:560px)').matches;
  set('photoTitle', v.t);
  set('photoSub', small ? (VERDICT_SHORT[LANG][id] || v.d) : v.d);
  photoOverlay.classList.remove('hidden');
  hint(S.photoReady);
}

restartBtn.addEventListener('click', ()=>{
  photoOverlay.classList.add('hidden');
  friedSnapshots=[]; flock=[]; gameOver=false; egg=null; dragEgg=null; dragFromIdx=-1;
  hint(S.freshCarton);
});

// ---- apply translated labels to the static DOM ----
function applyStrings(){
  document.title = S.docTitle;
  const set=(id,txt)=>{ const el=document.getElementById(id); if(el) el.textContent=txt; };
  set('titleText', S.title);
  set('byline', 'by '+S.credit);
  set('photoTitle', S.photoTitle);
  set('photoSub', S.photoSub);
  document.querySelectorAll('.tool[data-tool]').forEach(b=>{
    const lbl=b.querySelector('.lbl'); if(lbl) lbl.textContent=S.tool[b.dataset.tool];
  });
  const rb=document.querySelector('#restartBtn .lbl'); if(rb) rb.textContent=S.photoBtn;
  set('shareHint', S.shareHint);
  const img=document.getElementById('photoImg'); if(img) img.alt=S.imgAlt;
}
applyStrings();

// ---- boot ----
resize();
hint(S.bootHint);
// re-measure once fonts have loaded so the carton/pan sit correctly.
// `document.fonts` throws under a sandboxed (no allow-same-origin) iframe — e.g. the
// Vibe app-store preview — so guard it, and start the render loop no matter what.
window.addEventListener('load', resize);
try{ if(document.fonts && document.fonts.ready) document.fonts.ready.then(resize); }catch(e){}
requestAnimationFrame(loop);
