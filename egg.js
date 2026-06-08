// ---- language / strings ----
const LANG = (document.documentElement.lang||'en').toLowerCase().startsWith('zh') ? 'zh' : 'en';
const STRINGS = {
  en:{
    docTitle:'Fry Six Eggs',
    title:'fry six eggs',
    tagline:'fry them one by one — they get a little naughty',
    imgAlt:'Six fried eggs scattered on a plate',
    tool:{pet:'pet', fry:'heat', salt:'salt', pepper:'pepper', poke:'boop'},
    toolHint:{
      pet:'drag across an egg to pet it — they like it',
      fry:'drag an egg from the carton into the pan, then tap the pan to heat it',
      salt:'tap the egg you\'re frying to sprinkle salt',
      pepper:'tap the egg you\'re frying to add pepper',
      poke:'boop any egg and watch it jiggle'
    },
    carryToPan:'carry it over to the pan',
    inPan:(n,t)=>`egg ${n} of ${t} is in the pan`,
    squatterFirst:'someone\'s squatting in the pan… boop them out first',
    panBusy:'the pan\'s already busy with another egg',
    dropMiddle:'drop it right in the middle of the pan',
    panOccupiedBoop:'the pan is occupied… boop them out first',
    dragFirst:'drag an egg from the carton into the pan first',
    sizzling:'sizzling hot!',
    heatingUp:'heating up…',
    alreadyEscaped:'this one already escaped the pan',
    tapToHeat:'tap on the pan to heat it',
    plentySalty:'that one\'s plenty salty already',
    enoughPepper:'that\'s enough pepper for this one',
    sprinkleOnFrying:'sprinkle it on the egg you\'re frying',
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
    dragNext:'drag the next egg from the carton into the pan',
    photoReady:'here\'s your fried six!',
    freshCarton:'fresh carton of six! drag one into the pan to start frying',
    bootHint:'six raw eggs are waiting in the carton — drag one into the pan to fry it',
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
    composeTitle:'the fried six',
    composeSub:'one batch, six little personalities'
  },
  zh:{
    docTitle:'煎六颗蛋',
    title:'煎六颗蛋',
    tagline:'一颗一颗煎，它们有点调皮',
    imgAlt:'盘子里随意摆着的六颗煎蛋',
    tool:{pet:'抚摸', fry:'加热', salt:'撒盐', pepper:'胡椒', poke:'戳一戳'},
    toolHint:{
      pet:'在蛋身上滑动来抚摸它，它们很喜欢',
      fry:'把鸡蛋从蛋托拖进锅里，再点一下锅来加热',
      salt:'点正在煎的蛋来撒盐',
      pepper:'点正在煎的蛋来撒胡椒',
      poke:'戳戳任何一颗蛋，看它抖一抖'
    },
    carryToPan:'把它端到锅里吧',
    inPan:(n,t)=>`第 ${n} / ${t} 颗蛋下锅啦`,
    squatterFirst:'有蛋赖在锅里…先把它戳出去',
    panBusy:'锅里已经有另一颗蛋在煎啦',
    dropMiddle:'把它放到锅的正中间',
    panOccupiedBoop:'锅被占住了…先把它戳出去',
    dragFirst:'先把一颗蛋从蛋托拖进锅里',
    sizzling:'滋滋作响，好烫！',
    heatingUp:'正在加热…',
    alreadyEscaped:'这颗已经逃出锅啦',
    tapToHeat:'点一下锅来加热',
    plentySalty:'这颗已经够咸啦',
    enoughPepper:'这颗胡椒够多啦',
    sprinkleOnFrying:'撒在正在煎的蛋上',
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
    dragNext:'把下一颗蛋从蛋托拖进锅里',
    photoReady:'你的六颗煎蛋出炉啦！',
    freshCarton:'新的一打六颗！拖一颗进锅开始煎吧',
    bootHint:'蛋托里有六颗生蛋，拖一颗进锅煎了它',
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
    composeTitle:'六颗煎蛋',
    composeSub:'一盘出炉，六种小性格'
  }
};
const S = STRINGS[LANG];

const cv = document.getElementById('stage');
const ctx = cv.getContext('2d');
let W=0,H=0,DPR=1;
function resize(){
  DPR = Math.min(2, window.devicePixelRatio||1);
  W = window.innerWidth; H = window.innerHeight;
  cv.width = W*DPR; cv.height = H*DPR;
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
  holder.y = Math.max(hudBottom + 10, H*0.11);
}

// ---- pan geometry — fitted into the space between the carton and the toolbar ----
const pan = {x:0,y:0,r:0};
function layoutPan(){
  const tbTop = toolbarEl.getBoundingClientRect().top;
  const top = holder.y + holder.h;
  const avail = Math.max(120, tbTop - top);
  pan.r = Math.min(W*0.30, avail*0.42, Math.min(W,H)*0.21);
  pan.x = W*0.5;
  pan.y = top + avail*0.5;
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
    if(dist(x,y,s.x,s.y)<s.r*1.3) return i;
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
    if(!egg && !panOccupiedByFlock() && dist(dragEgg.x,dragEgg.y,pan.x,pan.y)<pan.r*1.25){
      egg=dragEgg; placeInPan();
      hint(S.inPan(friedSnapshots.length+1, EGG_TOTAL));
    } else if(panOccupiedByFlock()){
      hint(S.squatterFirst);
    } else if(egg){
      hint(S.panBusy);
    } else {
      hint(S.dropMiddle);
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
}

function handleClick(x,y){
  if(tool==='fry'){
    if(gameOver) return;
    const t = egg || panSquatter();           // heat the frying egg, or a squatter that snuck back in
    if(!t){ hint(S.dragFirst); return; }
    if(dist(x,y,pan.x,pan.y)<pan.r*1.2 && (t!==egg || egg.state!=='free')){
      t.heat=Math.min(1, t.heat+0.3);
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
      target.happy=Math.min(1, target.happy + moved*0.0016);
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
    parts.push({x:pan.x+(Math.random()-.5)*pan.r, y:pan.y, vx:(Math.random()-.5)*0.6,
      vy:-1-Math.random()*1.2, life:1, type:'steam', r:6+Math.random()*8});
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
    e.cook=Math.min(1, e.cook + e.heat*0.0034*dt);   // a brisker fry
    if(e.heat>0.05 && Math.random()<e.heat*0.25) sizzlePuffs(1);
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
  const snap = { cook:e.cook, salt:e.salt.slice(), pepper:e.pepper.slice(), happy:e.happy, dizzy:e.dizzyForever };
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
      e.cook=Math.min(2.2, e.cook + e.heat*0.0034*dt);
      if(Math.random()<e.heat*0.25) sizzlePuffs(1);
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
    e.goal = Math.random()<0.30 ? 'toPan' : 'wander';
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
      if(dist(e.x,e.y,pan.x,pan.y) < pan.r*0.55){
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

function eggFreeR(){ return Math.min(W,H)*0.072; }

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

  // crispy edge dots when browned
  if(browning>0.5){
    ctx.fillStyle = browning>1 ? `rgba(60,40,25,0.8)` : `rgba(190,140,80,${(browning-0.5)*1.2})`;
    const dots = browning>1 ? 14 : 8;
    for(let i=0;i<dots;i++){
      const a=i/dots*Math.PI*2+0.3;
      ctx.beginPath(); ctx.arc(Math.cos(a)*baseR*0.98,Math.sin(a)*baseR*0.88,R*0.03,0,Math.PI*2); ctx.fill();
    }
  }

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
  } else if(e.state==='raw'){
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
      ctx.fillStyle='#fff'; ctx.strokeStyle='#d8d0c4'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); ctx.stroke();
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

  if(browning>0.5){
    c.fillStyle = browning>1 ? 'rgba(60,40,25,0.8)' : `rgba(190,140,80,${(browning-0.5)*1.2})`;
    const dots = browning>1 ? 14 : 8;
    for(let i=0;i<dots;i++){
      const a=i/dots*Math.PI*2+0.3;
      c.beginPath(); c.arc(Math.cos(a)*R*0.9,Math.sin(a)*R*0.81,R*0.03,0,Math.PI*2); c.fill();
    }
  }

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

function composePhoto(){
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
  // draw back-to-front so lower eggs overlap on top
  friedSnapshots
    .map((look,i)=>({look,i,sp:spots[i%spots.length]}))
    .sort((a,b)=>a.sp.y-b.sp.y)
    .forEach(({look,i,sp})=>{
      const cx=plateX + sp.x*R*0.95;
      const cy=plateY + sp.y*R*0.95;
      drawEggPortrait(pc, cx, cy, R*sp.s, look, i, sp.rot);
    });

  pc.textAlign='left';
  return oc.toDataURL('image/png');
}

function showPhotoOverlay(){
  photoImg.src=composePhoto();
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
  set('tagline', S.tagline);
  set('photoTitle', S.photoTitle);
  set('photoSub', S.photoSub);
  document.querySelectorAll('.tool[data-tool]').forEach(b=>{
    const lbl=b.querySelector('.lbl'); if(lbl) lbl.textContent=S.tool[b.dataset.tool];
  });
  const rb=document.querySelector('#restartBtn .lbl'); if(rb) rb.textContent=S.photoBtn;
  const img=document.getElementById('photoImg'); if(img) img.alt=S.imgAlt;
}
applyStrings();

// ---- boot ----
resize();
hint(S.bootHint);
// re-measure once fonts have loaded so the carton/pan sit correctly
window.addEventListener('load', resize);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(resize);
requestAnimationFrame(loop);
