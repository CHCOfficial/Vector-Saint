var Lh=Object.defineProperty;var Dh=(n,e,t)=>e in n?Lh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var v=(n,e,t)=>Dh(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Ih{constructor(){v(this,"context");v(this,"master")}resume(){if(!this.context){const e=window.AudioContext||window.webkitAudioContext;this.context=new e,this.master=this.context.createGain(),this.master.gain.value=.18,this.master.connect(this.context.destination)}this.context.state==="suspended"&&this.context.resume()}shoot(){this.blip(360,.035,"square",.22)}enemyKilled(){this.blip(180,.08,"sawtooth",.32,760)}bomb(){this.blip(90,.3,"triangle",.7,38)}dash(){this.blip(520,.055,"sawtooth",.28,240)}playerHit(){this.blip(120,.18,"sawtooth",.56,55)}achievement(){this.blip(640,.12,"triangle",.38,920)}pickup(){this.blip(820,.06,"sine",.22,1140)}menuMove(){this.blip(420,.025,"triangle",.12,520)}menuSelect(){this.blip(540,.045,"sine",.16,820)}blip(e,t,i,s,r=e){if(!this.context||!this.master)return;const a=this.context.currentTime,o=this.context.createOscillator(),l=this.context.createGain();o.type=i,o.frequency.setValueAtTime(e,a),o.frequency.exponentialRampToValueAtTime(Math.max(20,r),a+t),l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(s,a+.008),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(l),l.connect(this.master),o.start(a),o.stop(a+t+.02)}}const Gi=[{id:"vectorSaint",signatureAbilityId:"vectorBaseline",displayName:"Vector Saint",description:"White and cyan hard-light glyph with balanced sacred geometry bloom.",primaryColor:16251903,secondaryColor:3798527,accentColor:10484991,emissiveIntensity:1.05,trailStyle:"sacred-ribbon",projectileStyle:"hardlight",engineGlowStyle:"balanced halo",shootPulseStyle:"thin cyan mandala",idleAnimationStyle:"calm breathing hover",specialEffectStyle:"clean radial consecration",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.25,facetStrength:.34,chromaShift:.02,voidDistortion:0,afterimageStrength:.12}},{id:"solarWarden",signatureAbilityId:"solarPiercer",displayName:"Solar Warden",description:"Molten gold hard-light shell with ember shots and a solar firing corona.",primaryColor:16773283,secondaryColor:16748335,accentColor:16765786,emissiveIntensity:1.18,trailStyle:"ember",projectileStyle:"ember-core",engineGlowStyle:"solar corona",shootPulseStyle:"gold flare",idleAnimationStyle:"slow heat shimmer",specialEffectStyle:"ember sanctum burst",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.65,facetStrength:.22,chromaShift:.01,voidDistortion:0,afterimageStrength:.08}},{id:"voidChoir",signatureAbilityId:"voidSlowField",displayName:"Void Choir",description:"Deep violet and magenta silhouette with subtle distortion and purple shot rings.",primaryColor:1445926,secondaryColor:10309119,accentColor:16727538,emissiveIntensity:1.28,trailStyle:"void-rings",projectileStyle:"void-ring",engineGlowStyle:"negative halo",shootPulseStyle:"violet pressure ring",idleAnimationStyle:"low void thrum",specialEffectStyle:"soft gravity bruise",unlockState:"unlocked",shaderSettings:{pulseSpeed:.9,facetStrength:.48,chromaShift:.06,voidDistortion:.22,afterimageStrength:.18}},{id:"glassSeraph",signatureAbilityId:"glassShield",displayName:"Glass Seraph",description:"Translucent pale blue crystal facets with elegant threadlike trails.",primaryColor:15269375,secondaryColor:9166079,accentColor:16777215,emissiveIntensity:.92,trailStyle:"crystal-thread",projectileStyle:"glass-lance",engineGlowStyle:"prismatic refraction",shootPulseStyle:"thin glass ripple",idleAnimationStyle:"faceted shimmer",specialEffectStyle:"crystal hymn ring",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.05,facetStrength:.66,chromaShift:.035,voidDistortion:0,afterimageStrength:.14}},{id:"redlineMartyr",signatureAbilityId:"redlineSurge",displayName:"Redline Martyr",description:"Red, white, and black racing-stripe energy with sharp angular shot pulses.",primaryColor:16777215,secondaryColor:16721999,accentColor:1118487,emissiveIntensity:1.12,trailStyle:"redline",projectileStyle:"redline-shard",engineGlowStyle:"overdriven stripe",shootPulseStyle:"angular red snap",idleAnimationStyle:"tense engine tremor",specialEffectStyle:"martyr line fracture",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.9,facetStrength:.28,chromaShift:.015,voidDistortion:0,afterimageStrength:.1}},{id:"prismGhost",signatureAbilityId:"prismGhostBurst",displayName:"Prism Ghost",description:"Translucent afterimages with shifting rainbow accents and chromatic edges.",primaryColor:13630719,secondaryColor:16743671,accentColor:8912762,emissiveIntensity:1.08,trailStyle:"prism-afterimage",projectileStyle:"prism-split",engineGlowStyle:"rainbow ghosting",shootPulseStyle:"split-spectrum wink",idleAnimationStyle:"chromatic phase drift",specialEffectStyle:"triadic prism bloom",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.35,facetStrength:.5,chromaShift:.11,voidDistortion:.03,afterimageStrength:.26}},{id:"ionChapel",signatureAbilityId:"ionChain",displayName:"Ion Chapel",description:"Electric blue, silver, and cold teal with firing arcs and stronger grid response.",primaryColor:14219007,secondaryColor:3898879,accentColor:6094813,emissiveIntensity:1.22,trailStyle:"ion-arcs",projectileStyle:"ion-bolt",engineGlowStyle:"micro lightning",shootPulseStyle:"ion chapel arc",idleAnimationStyle:"electric breathing",specialEffectStyle:"chapel grid resonance",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.75,facetStrength:.42,chromaShift:.035,voidDistortion:0,afterimageStrength:.16}},{id:"neonRevenant",signatureAbilityId:"revenantSpark",displayName:"Neon Revenant",description:"Acid green and ghostly cyan with glitch-flame trail and spectral kill sparks.",primaryColor:12255063,secondaryColor:720797,accentColor:8190719,emissiveIntensity:1.24,trailStyle:"spectral-flame",projectileStyle:"revenant-spark",engineGlowStyle:"glitch flame",shootPulseStyle:"spectral snap",idleAnimationStyle:"restless ghost flicker",specialEffectStyle:"revenant spark inversion",unlockState:"unlocked",shaderSettings:{pulseSpeed:1.55,facetStrength:.32,chromaShift:.055,voidDistortion:.07,afterimageStrength:.2}}],Nh="vectorSaint";function Wi(n){return Gi.find(e=>e.id===n)??Gi[0]}function Uh(n){return typeof n=="string"&&Gi.some(e=>e.id===n)}function si(n){return`#${n.toString(16).padStart(6,"0")}`}function ls(n){return Oh(n.accentColor)<.28?n.secondaryColor:n.accentColor}function Ua(n){return si(ls(n))}function Oh(n){const e=(n>>16&255)/255,t=(n>>8&255)/255,i=(n&255)/255;return .2126*e+.7152*t+.0722*i}const Ac="neonCathedralGrid",Er=[{id:"neonCathedralGrid",displayName:"Neon Cathedral Grid",tagline:"sacred lattice",description:"Cyan vaulted lines and calm circular glyphs that brighten on precision play.",pattern:"cathedral",mode:0,palette:{base:198675,grid:3929599,primary:6813951,secondary:16731636,accent:16777215,star:11464703},preview:{cssClass:"cathedral",primaryCss:"#67f8ff",secondaryCss:"#ff4df4",accentCss:"#ffffff"},opacityScale:1,gridOpacityScale:1,motionGridScale:.96,starOpacityScale:.94,symbolOpacityScale:1,parallax:.072,reactivity:{movement:.62,shooting:.72,kills:.88,bombs:1,dash:.8,multiplier:.7},unlockState:"unlocked"},{id:"deepOceanSignal",displayName:"Deep Ocean Signal",tagline:"sonar abyss",description:"Dark teal sonar rings with soft bioluminescent pulses under the arena floor.",pattern:"sonar",mode:1,palette:{base:133392,grid:3069894,primary:2486482,secondary:2652159,accent:11206640,star:6478079},preview:{cssClass:"ocean",primaryCss:"#25f0d2",secondaryCss:"#2877ff",accentCss:"#aafff0"},opacityScale:.98,gridOpacityScale:.88,motionGridScale:.82,starOpacityScale:.82,symbolOpacityScale:.78,parallax:.052,reactivity:{movement:.5,shooting:.55,kills:.82,bombs:1,dash:.7,multiplier:.58},unlockState:"unlocked"},{id:"solarFurnace",displayName:"Solar Furnace",tagline:"thermal bloom",description:"Amber heat seams, restrained furnace flares, and kill-driven solar pressure waves.",pattern:"furnace",mode:2,palette:{base:1049605,grid:16753723,primary:16765786,secondary:16727419,accent:16773283,star:16762967},preview:{cssClass:"furnace",primaryCss:"#ffd35a",secondaryCss:"#ff3d7b",accentCss:"#fff0a3"},opacityScale:1.04,gridOpacityScale:.94,motionGridScale:.76,starOpacityScale:.74,symbolOpacityScale:.66,parallax:.065,reactivity:{movement:.56,shooting:.92,kills:.98,bombs:1.08,dash:.68,multiplier:.72},unlockState:"unlocked"},{id:"voidCircuit",displayName:"Void Circuit",tagline:"negative circuitry",description:"Violet black circuit traces and glitchy pressure nodes that stay low behind combat.",pattern:"circuit",mode:3,palette:{base:328461,grid:10309119,primary:11034111,secondary:16727538,accent:2883532,star:12225791},preview:{cssClass:"circuit",primaryCss:"#a85dff",secondaryCss:"#ff3df2",accentCss:"#2bffcc"},opacityScale:.95,gridOpacityScale:.82,motionGridScale:.68,starOpacityScale:.68,symbolOpacityScale:.62,parallax:.038,reactivity:{movement:.42,shooting:.58,kills:.76,bombs:1,dash:1,multiplier:.54},unlockState:"unlocked"},{id:"auroraGraveyard",displayName:"Aurora Graveyard",tagline:"spectral curtains",description:"Green-magenta aurora sheets drifting over faint broken-vector memorial lines.",pattern:"aurora",mode:4,palette:{base:199180,grid:5308336,primary:8257379,secondary:16743671,accent:12582901,star:9568209},preview:{cssClass:"aurora",primaryCss:"#7dff63",secondaryCss:"#ff7cf7",accentCss:"#bffff5"},opacityScale:.98,gridOpacityScale:.86,motionGridScale:.72,starOpacityScale:.84,symbolOpacityScale:.7,parallax:.046,reactivity:{movement:.48,shooting:.62,kills:.9,bombs:.9,dash:.72,multiplier:.82},unlockState:"unlocked"},{id:"monolithBloom",displayName:"Monolith Bloom",tagline:"black glass pillars",description:"Clean vertical monolith shadows with white-cyan bloom gates and restrained pulses.",pattern:"monolith",mode:5,palette:{base:263691,grid:14219007,primary:16777215,secondary:7322111,accent:10484991,star:16120831},preview:{cssClass:"monolith",primaryCss:"#ffffff",secondaryCss:"#6fb9ff",accentCss:"#9ffcff"},opacityScale:.9,gridOpacityScale:.76,motionGridScale:.58,starOpacityScale:.72,symbolOpacityScale:.56,parallax:.026,reactivity:{movement:.34,shooting:.52,kills:.7,bombs:.84,dash:.56,multiplier:.6},unlockState:"unlocked"},{id:"synthwaveHorizon",displayName:"Synthwave Horizon",tagline:"endless vanishing lines",description:"Low magenta horizon bands and cyan vectors that imply speed without arena walls.",pattern:"horizon",mode:6,palette:{base:459539,grid:16731636,primary:16731636,secondary:3798527,accent:16765786,star:12881151},preview:{cssClass:"horizon",primaryCss:"#ff4df4",secondaryCss:"#39f5ff",accentCss:"#ffd35a"},opacityScale:1.02,gridOpacityScale:.92,motionGridScale:.98,starOpacityScale:.76,symbolOpacityScale:.58,parallax:.082,reactivity:{movement:.74,shooting:.7,kills:.82,bombs:.94,dash:.96,multiplier:.76},unlockState:"unlocked"},{id:"livingArenaCore",displayName:"Living Arena Core",tagline:"reactive organism",description:"Organic rings and cellular vector veins that breathe with multiplier and danger.",pattern:"livingCore",mode:7,palette:{base:198410,grid:6094813,primary:6094813,secondary:12255063,accent:16731261,star:10484991},preview:{cssClass:"living",primaryCss:"#5cffdd",secondaryCss:"#baff57",accentCss:"#ff4c7d"},opacityScale:1,gridOpacityScale:.88,motionGridScale:.78,starOpacityScale:.78,symbolOpacityScale:.82,parallax:.058,reactivity:{movement:.54,shooting:.68,kills:.94,bombs:1,dash:.8,multiplier:.92},unlockState:"unlocked"}],Oa=new Map(Er.map(n=>[n.id,n]));function Qn(n){return Oa.get(n)??Oa.get(Ac)}function Fh(n){return typeof n=="string"&&Oa.has(n)}function jn(n){return`#${n.toString(16).padStart(6,"0")}`}const Fa=[{id:"moveUp",label:"Move Up",gamepadLabel:"Left Stick Up"},{id:"moveDown",label:"Move Down",gamepadLabel:"Left Stick Down"},{id:"moveLeft",label:"Move Left",gamepadLabel:"Left Stick Left"},{id:"moveRight",label:"Move Right",gamepadLabel:"Left Stick Right"},{id:"shoot",label:"Shoot",gamepadLabel:"RT"},{id:"previousWeapon",label:"Previous Weapon",gamepadLabel:"LB"},{id:"nextWeapon",label:"Next Weapon",gamepadLabel:"RB"},{id:"dash",label:"Dash",gamepadLabel:"A"},{id:"bomb",label:"Bomb",gamepadLabel:"B"},{id:"pause",label:"Pause",gamepadLabel:"Menu"}],$a={moveUp:{kind:"key",code:"KeyW"},moveDown:{kind:"key",code:"KeyS"},moveLeft:{kind:"key",code:"KeyA"},moveRight:{kind:"key",code:"KeyD"},shoot:{kind:"mouse",button:0},previousWeapon:{kind:"key",code:"KeyK"},nextWeapon:{kind:"key",code:"KeyL"},dash:{kind:"key",code:"Space"},bomb:{kind:"key",code:"KeyE"},pause:{kind:"key",code:"Escape"}},Bh=new Set(["F5","F11","F12","PrintScreen","MetaLeft","MetaRight"]),bo={Space:"Space",Escape:"Esc",Enter:"Enter",Tab:"Tab",Backspace:"Backspace",Delete:"Delete",ShiftLeft:"Shift",ShiftRight:"Shift",ControlLeft:"Ctrl",ControlRight:"Ctrl",AltLeft:"Alt",AltRight:"Alt",ArrowUp:"Up Arrow",ArrowDown:"Down Arrow",ArrowLeft:"Left Arrow",ArrowRight:"Right Arrow",Minus:"-",Equal:"=",BracketLeft:"[",BracketRight:"]",Backslash:"\\",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backquote:"`"},kh={0:"Left Mouse",1:"Middle Mouse",2:"Right Mouse"};function eo(n){return{moveUp:ii(n.moveUp),moveDown:ii(n.moveDown),moveLeft:ii(n.moveLeft),moveRight:ii(n.moveRight),shoot:ii(n.shoot),previousWeapon:ii(n.previousWeapon),nextWeapon:ii(n.nextWeapon),dash:ii(n.dash),bomb:ii(n.bomb),pause:ii(n.pause)}}function ii(n){return n.kind==="key"?{kind:"key",code:n.code}:{kind:"mouse",button:n.button}}function qr(n){const e=eo($a);if(!n||typeof n!="object")return e;const t=n;for(const i of Fa){const s=t[i.id];zh(s)&&(e[i.id]=s)}return e}function zh(n){if(!n||typeof n!="object")return!1;const e=n;return e.kind==="key"?typeof e.code=="string"&&Tc(e.code):e.kind==="mouse"?typeof e.button=="number"&&Cc(e.button):!1}function Tc(n){return n.length>0&&!Bh.has(n)}function Cc(n){return Number.isInteger(n)&&n>=0&&n<=4}function Hh(n){return n.kind==="mouse"?kh[n.button]??`Mouse ${n.button+1}`:n.code in bo?bo[n.code]:n.code.startsWith("Key")?n.code.slice(3).toUpperCase():n.code.startsWith("Digit")?n.code.slice(5):n.code.startsWith("Numpad")?Vh(n.code.slice(6)):n.code.replace(/([a-z])([A-Z])/g,"$1 $2")}function Gh(n,e){return n.kind!==e.kind?!1:n.kind==="key"&&e.kind==="key"?n.code===e.code:n.kind==="mouse"&&e.kind==="mouse"?n.button===e.button:!1}function Vh(n){return`Numpad ${{Add:"+",Subtract:"-",Multiply:"*",Divide:"/",Decimal:".",Enter:"Enter"}[n]??n}`}const Rc={martyrCircuit:{id:"martyrCircuit",category:"risky",name:"Martyr Circuit",effect:"+20% weapon damage.",downside:"Dash recharge takes longer.",color:16731261,maxStacks:1},glassHeart:{id:"glassHeart",category:"safe",name:"Glass Heart",effect:"Gain one temporary shield hit.",downside:"Multiplier decay is faster.",color:15269375,maxStacks:1},redlineEngine:{id:"redlineEngine",category:"risky",name:"Redline Engine",effect:"Move faster.",downside:"Acceleration and braking are looser.",color:16721999,maxStacks:1},solarCore:{id:"solarCore",category:"score",name:"Solar Core",effect:"Bombs leave scoring zones. Zone kills grant bonus score and Overdrive charge.",color:16765786,maxStacks:3},prismEcho:{id:"prismEcho",category:"safe",name:"Prism Echo",effect:"Dash releases low-damage afterimage shots.",downside:"Afterimage volley has its own cooldown.",color:16743671,maxStacks:1}},Wh=["martyrCircuit","glassHeart","redlineEngine","solarCore","prismEcho"],Qe={draftIntervalWaves:3,safePauseInvulnerability:1.25,martyrCircuit:{damageMultiplier:1.2,dashCooldownMultiplier:1.28},glassHeart:{shieldHits:1,multiplierDecayMultiplier:1.32},redlineEngine:{speedMultiplier:1.12,accelerationMultiplier:.86,frictionMultiplier:.78},solarCore:{zoneRadius:11.5,zoneLife:6.5,scoreMultiplier:1.45,radiusPerExtraStack:.08,scorePerExtraStack:.15,overdrivePerKill:.075,color:16765786},prismEcho:{cooldown:.92,shotCount:5,spreadRadians:.72,damage:1,speed:31,life:.62,radius:.36,magnetRadius:4.8,magnetStrength:1.7,color:16752123}};function wo(n){return Rc[n]}const dn=["vectorBolt","scatterCrown","lanceBeam"],Pc={vectorBolt:{id:"vectorBolt",label:"Vector Bolt",shortLabel:"BOLT",kind:"projectile",fireInterval:.075,color:3798527,projectile:{pelletCount:1,spreadRadians:0,speed:38,life:1.62,damage:1,radius:.5,magnetRadius:8.8,magnetStrength:3.6}},scatterCrown:{id:"scatterCrown",label:"Scatter Crown",shortLabel:"SHOTGUN",kind:"projectile",fireInterval:.34,color:16762967,projectile:{pelletCount:7,spreadRadians:.58,speed:32,life:.72,damage:1,radius:.46,magnetRadius:5.8,magnetStrength:2.2}},lanceBeam:{id:"lanceBeam",label:"Lance Beam",shortLabel:"BEAM",kind:"beam",fireInterval:.16,color:8257379,beam:{range:42,width:.9,damage:1,visualLife:.28}}};function Xh(n,e){const t=Math.max(0,dn.indexOf(n));return dn[(t+e+dn.length)%dn.length]}function Eo(n,e){const t=ls(e);switch(n){case"scatterCrown":return Ao(e.secondaryColor,t,.36);case"lanceBeam":return Yh(e.primaryColor)<.24?Ao(t,e.secondaryColor,.28):e.primaryColor;case"vectorBolt":default:return t}}function Ao(n,e,t){const i=Math.max(0,Math.min(1,t)),s=n>>16&255,r=n>>8&255,a=n&255,o=e>>16&255,l=e>>8&255,c=e&255,h=Math.round(s+(o-s)*i),u=Math.round(r+(l-r)*i),d=Math.round(a+(c-a)*i);return h<<16|u<<8|d}function Yh(n){const e=(n>>16&255)/255,t=(n>>8&255)/255,i=(n&255)/255;return .2126*e+.7152*t+.0722*i}const ft={bloom:"high",bloomStrength:"balanced",bloomRadius:"medium",antiAliasing:"msaa-4x-smaa",shake:"medium",flashReduction:!1,chromaticAberration:"low",backgroundIntensity:"medium",particleDensity:"high",invertedControls:!0,palette:"default",uiScale:"small",difficultyAssist:"normal",selectedSkin:Nh,selectedBackground:Ac},Ct={width:76,height:46,spawnMargin:4.5},$i={fixedDelta:1/60,maxFrameDelta:.1,maxFixedSteps:5},ke={radius:1.05,maxHealth:4,forgivingMaxHealth:6,speed:25,acceleration:130,friction:14,bulletSpeed:48,bulletLife:1.25,bulletRadius:.36,bulletDamage:1,dashSpeed:52,dashDuration:.13,dashCharges:3,dashCooldown:.8,dashInvulnerable:.26,bombCooldown:4.6,bombRadius:15,forgivingBombRadius:19,hitInvulnerable:1.15,forgivingHitInvulnerable:1.55},ks={magnetMinForwardDot:-.08,magnetScoreForwardBias:.45,magnetTargetSmoothing:7.5,magnetTurnScale:.62},Ht={multiplierMin:1,multiplierMax:25,multiplierPerKill:.16,multiplierDecayDelay:2,multiplierDecayRate:.52,forgivingDecayRate:.34,bombMultiplierPenalty:.85,pickupScore:125},Ai={waveDuration:32,baseSpawnInterval:2.15,minSpawnInterval:.42,difficultyRamp:.072,maxEnemies:140,forgivingSpawnScale:1.18,despawnDistance:130},Ti={bullets:360,enemies:180,pickups:64},Dt={camera:{height:51,depth:48,fov:48,followSpeed:13,lookAhead:.025,snapDistance:42},shake:{off:0,low:.24,medium:.48,high:.86},particles:{maxParticles:3600,bombBurst:82},grid:{spacing:2,rippleLife:1.25,bombRippleLife:1.9,maxRipples:10}},ws={stickDeadzone:.18,mouseAimMinimumDistance:8},Ze={dangerRadius:14,emergencyRadius:6.8,preferredRange:17,fleeWeight:1.9,strafeWeight:.78,chaseWeight:.18,pickupWeight:.28,idleDriftWeight:.18,shotgunRange:9.8,beamRange:40,beamClusterHits:3,bombEnemyThreshold:7,bombRadiusScale:.9,orbitBeamAvoidance:3.8,spareChargeDashRadius:10.5,weaponCycleDelay:.2,retryDelay:1.1},Lc=1e-5;function Rt(n=0,e=0){return{x:n,y:e}}function Pe(n,e,t){return n.x=e,n.y=t,n}function Br(n,e,t){return n.x+=e.x*t,n.y+=e.y*t,n}function Ci(n){return n.x*n.x+n.y*n.y}function to(n){return Math.sqrt(Ci(n))}function ui(n){const e=to(n);return e<=Lc?(n.x=0,n.y=0,n):(n.x/=e,n.y/=e,n)}function qt(n,e,t){return Math.max(e,Math.min(t,n))}function Vi(n,e){const t=n.x-e.x,i=n.y-e.y;return t*t+i*i}function br(n){return Math.atan2(n.y,n.x)}function fn(n,e,t=1){return n.x=Math.cos(e)*t,n.y=Math.sin(e)*t,n}function qh(n){for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return n}function To(n,e,t){const i=qh(e-n);return n+qt(i,-t,t)}function Ar(n,e,t){const i=t.x-e.x,s=t.y-e.y,r=n.x-e.x,a=n.y-e.y,o=i*i+s*s;if(o<=Lc)return Vi(n,e);const l=qt((r*i+a*s)/o,0,1),c=e.x+i*l,h=e.y+s*l,u=n.x-c,d=n.y-h;return u*u+d*d}class jh{constructor(){v(this,"frame",{connected:!1,move:Rt(),aim:Rt(),shoot:!1,dash:!1,bomb:!1,pause:!1,previousWeapon:!1,nextWeapon:!1,confirm:!1,back:!1,up:!1,down:!1,left:!1,right:!1})}update(){var s,r,a,o,l,c,h,u,d,f;const e=this.getPrimaryGamepad();if(this.frame.connected=!!e,Pe(this.frame.move,0,0),Pe(this.frame.aim,0,0),this.frame.shoot=!1,this.frame.dash=!1,this.frame.bomb=!1,this.frame.pause=!1,this.frame.previousWeapon=!1,this.frame.nextWeapon=!1,this.frame.confirm=!1,this.frame.back=!1,this.frame.up=!1,this.frame.down=!1,this.frame.left=!1,this.frame.right=!1,!e)return this.frame;this.applyStick(this.frame.move,e.axes[0]??0,-(e.axes[1]??0)),this.applyStick(this.frame.aim,e.axes[2]??0,-(e.axes[3]??0)),this.frame.shoot=(((s=e.buttons[7])==null?void 0:s.value)??0)>.35,this.frame.dash=!!((r=e.buttons[0])!=null&&r.pressed),this.frame.bomb=!!((a=e.buttons[1])!=null&&a.pressed),this.frame.previousWeapon=!!((o=e.buttons[4])!=null&&o.pressed),this.frame.nextWeapon=!!((l=e.buttons[5])!=null&&l.pressed),this.frame.pause=!!((c=e.buttons[9])!=null&&c.pressed),this.frame.confirm=this.frame.dash,this.frame.back=this.frame.bomb||this.frame.pause;const t=this.frame.move.x,i=this.frame.move.y;return this.frame.up=!!((h=e.buttons[12])!=null&&h.pressed)||i>.62,this.frame.down=!!((u=e.buttons[13])!=null&&u.pressed)||i<-.62,this.frame.left=!!((d=e.buttons[14])!=null&&d.pressed)||t<-.62,this.frame.right=!!((f=e.buttons[15])!=null&&f.pressed)||t>.62,this.frame}getPrimaryGamepad(){if(typeof navigator>"u"||!navigator.getGamepads)return;const e=navigator.getGamepads();for(const t of e)if(t!=null&&t.connected)return t}applyStick(e,t,i){const s=qt(t,-1,1),r=qt(i,-1,1);Pe(e,s,r);const a=to(e);if(a<ws.stickDeadzone){Pe(e,0,0);return}ui(e);const o=(a-ws.stickDeadzone)/(1-ws.stickDeadzone);e.x*=qt(o,0,1),e.y*=qt(o,0,1)}}const Kh=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyE","KeyK","KeyL","Slash","Escape","Enter"]);class Zh{constructor(e,t=window){v(this,"frame",{move:Rt(),mouseX:0,mouseY:0,mouseActive:!1,shoot:!1,dash:!1,bomb:!1,pause:!1,previousWeapon:!1,nextWeapon:!1,secretPilot:!1,confirm:!1,back:!1,up:!1,down:!1,left:!1,right:!1});v(this,"keys",new Set);v(this,"pressedKeys",new Set);v(this,"mouseButtons",new Set);v(this,"pressedMouseButtons",new Set);v(this,"onKeyDown",e=>{e.repeat||this.pressedKeys.add(e.code),this.keys.add(e.code),this.shouldPreventDefault(e.code)&&e.preventDefault()});v(this,"onKeyUp",e=>{this.keys.delete(e.code),this.shouldPreventDefault(e.code)&&e.preventDefault()});v(this,"onBlur",()=>{this.keys.clear(),this.pressedKeys.clear(),this.mouseButtons.clear(),this.pressedMouseButtons.clear()});v(this,"onMouseMove",e=>{this.frame.mouseX=e.clientX,this.frame.mouseY=e.clientY,this.frame.mouseActive=!0});v(this,"onMouseDown",e=>{this.mouseButtons.add(e.button),this.pressedMouseButtons.add(e.button),this.frame.mouseActive=!0});v(this,"onMouseUp",e=>{this.mouseButtons.delete(e.button)});v(this,"onContextMenu",e=>{this.target&&e.preventDefault()});this.bindings=e,this.target=t,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("contextmenu",this.onContextMenu)}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("contextmenu",this.onContextMenu)}setBindings(e){this.bindings=e}update(){const e=(this.isBindingDown(this.bindings.moveRight)?1:0)-(this.isBindingDown(this.bindings.moveLeft)?1:0),t=(this.isBindingDown(this.bindings.moveUp)?1:0)-(this.isBindingDown(this.bindings.moveDown)?1:0);Pe(this.frame.move,e,t);const i=Math.hypot(this.frame.move.x,this.frame.move.y);i>1&&(this.frame.move.x/=i,this.frame.move.y/=i),this.frame.shoot=this.isBindingDown(this.bindings.shoot);const s=this.wasPressed("Space"),r=this.wasPressed("KeyE"),a=this.wasPressed("Escape"),o=this.wasPressed("Enter"),l=this.wasPressed("ArrowUp")||this.wasPressed("KeyW"),c=this.wasPressed("ArrowDown")||this.wasPressed("KeyS"),h=this.wasPressed("ArrowLeft")||this.wasPressed("KeyA"),u=this.wasPressed("ArrowRight")||this.wasPressed("KeyD");return this.frame.dash=this.isBindingDown(this.bindings.dash)||this.wasBindingPressed(this.bindings.dash),this.frame.bomb=this.isBindingDown(this.bindings.bomb)||this.wasBindingPressed(this.bindings.bomb),this.frame.pause=this.isBindingDown(this.bindings.pause)||this.wasBindingPressed(this.bindings.pause),this.frame.previousWeapon=this.isBindingDown(this.bindings.previousWeapon)||this.wasBindingPressed(this.bindings.previousWeapon),this.frame.nextWeapon=this.isBindingDown(this.bindings.nextWeapon)||this.wasBindingPressed(this.bindings.nextWeapon),this.frame.secretPilot=this.wasPressed("Slash"),this.frame.confirm=this.isDown("Enter")||this.isDown("Space")||o||s,this.frame.back=this.isDown("Escape")||this.isDown("KeyE")||a||r,this.frame.up=this.isDown("ArrowUp")||this.isDown("KeyW")||l,this.frame.down=this.isDown("ArrowDown")||this.isDown("KeyS")||c,this.frame.left=this.isDown("ArrowLeft")||this.isDown("KeyA")||h,this.frame.right=this.isDown("ArrowRight")||this.isDown("KeyD")||u,this.pressedKeys.clear(),this.pressedMouseButtons.clear(),this.frame}isDown(e){return this.keys.has(e)}wasPressed(e){return this.pressedKeys.has(e)}isBindingDown(e){return e.kind==="key"?this.isDown(e.code):this.mouseButtons.has(e.button)}wasBindingPressed(e){return e.kind==="key"?this.wasPressed(e.code):this.pressedMouseButtons.has(e.button)}shouldPreventDefault(e){return Kh.has(e)?!0:Object.values(this.bindings).some(t=>t.kind==="key"&&t.code===e)}}class Jh{constructor(e,t=window){v(this,"frame",{move:Rt(),aim:Rt(1,0),shoot:!1,shootPressed:!1,dashPressed:!1,bombPressed:!1,previousWeaponPressed:!1,nextWeaponPressed:!1,secretPilotPressed:!1,pausePressed:!1,confirmPressed:!1,backPressed:!1,menuUpPressed:!1,menuDownPressed:!1,menuLeftPressed:!1,menuRightPressed:!1,lastDevice:"keyboard-mouse"});v(this,"gamepad",new jh);v(this,"keyboardMouse");v(this,"aimOriginX",0);v(this,"aimOriginY",0);v(this,"previous",{shoot:!1,dash:!1,bomb:!1,previousWeapon:!1,nextWeapon:!1,secretPilot:!1,pause:!1,confirm:!1,back:!1,up:!1,down:!1,left:!1,right:!1});this.keyboardMouse=new Zh(e,t)}dispose(){this.keyboardMouse.dispose()}setAimOrigin(e,t){this.aimOriginX=e,this.aimOriginY=t}setControlBindings(e){this.keyboardMouse.setBindings(e)}update(){const e=this.keyboardMouse.update(),t=this.gamepad.update(),i=Ci(t.move)>.001,s=Ci(t.aim)>.001;if(t.connected&&(i||s||t.shoot||t.dash||t.bomb||t.previousWeapon||t.nextWeapon)?this.frame.lastDevice="gamepad":(Ci(e.move)>.001||e.shoot||e.dash||e.bomb||e.previousWeapon||e.nextWeapon||e.secretPilot||e.mouseActive)&&(this.frame.lastDevice="keyboard-mouse"),i?Pe(this.frame.move,t.move.x,t.move.y):Pe(this.frame.move,e.move.x,e.move.y),s)Pe(this.frame.aim,t.aim.x,t.aim.y);else{const a=e.mouseX-this.aimOriginX,o=this.aimOriginY-e.mouseY;a*a+o*o>ws.mouseAimMinimumDistance*ws.mouseAimMinimumDistance&&(Pe(this.frame.aim,a,o),ui(this.frame.aim))}const r={shoot:t.shoot||e.shoot,dash:t.dash||e.dash,bomb:t.bomb||e.bomb,previousWeapon:t.previousWeapon||e.previousWeapon,nextWeapon:t.nextWeapon||e.nextWeapon,secretPilot:e.secretPilot,pause:t.pause||e.pause,confirm:t.confirm||e.confirm,back:t.back||e.back,up:t.up||e.up,down:t.down||e.down,left:t.left||e.left,right:t.right||e.right};return this.frame.shoot=r.shoot,this.frame.shootPressed=r.shoot&&!this.previous.shoot,this.frame.dashPressed=r.dash&&!this.previous.dash,this.frame.bombPressed=r.bomb&&!this.previous.bomb,this.frame.previousWeaponPressed=r.previousWeapon&&!this.previous.previousWeapon,this.frame.nextWeaponPressed=r.nextWeapon&&!this.previous.nextWeapon,this.frame.secretPilotPressed=r.secretPilot&&!this.previous.secretPilot,this.frame.pausePressed=r.pause&&!this.previous.pause,this.frame.confirmPressed=r.confirm&&!this.previous.confirm,this.frame.backPressed=r.back&&!this.previous.back,this.frame.menuUpPressed=r.up&&!this.previous.up,this.frame.menuDownPressed=r.down&&!this.previous.down,this.frame.menuLeftPressed=r.left&&!this.previous.left,this.frame.menuRightPressed=r.right&&!this.previous.right,Object.assign(this.previous,r),this.frame}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="165",Qh=0,Co=1,$h=2,Dc=1,eu=2,Ei=3,qi=0,Gt=1,gt=2,Di=0,Kn=1,yt=2,Ro=3,Po=4,tu=5,cn=100,iu=101,nu=102,su=103,ru=104,au=200,ou=201,lu=202,cu=203,Ba=204,ka=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,vu=213,xu=214,yu=0,Su=1,Mu=2,Tr=3,_u=4,bu=5,wu=6,Eu=7,Ic=0,Au=1,Tu=2,Xi=0,Cu=1,Ru=2,Pu=3,Nc=4,Lu=5,Du=6,Iu=7,Uc=300,$n=301,es=302,za=303,Ha=304,kr=306,Ga=1e3,pn=1001,Va=1002,Ft=1003,Nu=1004,zs=1005,Qt=1006,jr=1007,mn=1008,ji=1009,Uu=1010,Ou=1011,Cr=1012,Oc=1013,ts=1014,Ri=1015,ri=1016,Fc=1017,Bc=1018,is=1020,Fu=35902,Bu=1021,ku=1022,di=1023,zu=1024,Hu=1025,Zn=1026,ns=1027,kc=1028,zc=1029,Gu=1030,Hc=1031,Gc=1033,Kr=33776,Zr=33777,Jr=33778,Qr=33779,Lo=35840,Do=35841,Io=35842,No=35843,Uo=36196,Oo=37492,Fo=37496,Bo=37808,ko=37809,zo=37810,Ho=37811,Go=37812,Vo=37813,Wo=37814,Xo=37815,Yo=37816,qo=37817,jo=37818,Ko=37819,Zo=37820,Jo=37821,$r=36492,Qo=36494,$o=36495,Vu=36283,el=36284,tl=36285,il=36286,Wu=3200,Xu=3201,Yu=0,qu=1,Hi="",ni="srgb",Zi="srgb-linear",no="display-p3",zr="display-p3-linear",Rr="linear",ot="srgb",Pr="rec709",Lr="p3",wn=7680,nl=519,ju=512,Ku=513,Zu=514,Vc=515,Ju=516,Qu=517,$u=518,ed=519,sl=35044,En=35048,rl="300 es",Pi=2e3,Dr=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const Es=Math.PI/180,Ps=180/Math.PI;function yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function It(n,e,t){return Math.max(e,Math.min(t,n))}function so(n,e){return(n%e+e)%e}function td(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function id(n,e,t){return n!==e?(t-n)/(e-n):0}function As(n,e,t){return(1-t)*n+t*e}function nd(n,e,t,i){return As(n,e,1-Math.exp(-t*i))}function sd(n,e=1){return e-Math.abs(so(n,e*2)-e)}function rd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ad(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function od(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ld(n,e){return n+Math.random()*(e-n)}function cd(n){return n*(.5-Math.random())}function hd(n){n!==void 0&&(al=n);let e=al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ud(n){return n*Es}function dd(n){return n*Ps}function fd(n){return(n&n-1)===0&&n!==0}function pd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function md(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gd(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ki={DEG2RAD:Es,RAD2DEG:Ps,generateUUID:yn,clamp:It,euclideanModulo:so,mapLinear:td,inverseLerp:id,lerp:As,damp:nd,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:dd,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:kt,denormalize:Wn};class ee{constructor(e=0,t=0){ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,i,s,r,a,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],y=s[4],w=s[7],U=s[2],A=s[5],C=s[8];return r[0]=a*x+o*M+l*U,r[3]=a*m+o*y+l*A,r[6]=a*p+o*w+l*C,r[1]=c*x+h*M+u*U,r[4]=c*m+h*y+u*A,r[7]=c*p+h*w+u*C,r[2]=d*x+f*M+g*U,r[5]=d*m+f*y+g*A,r[8]=d*p+f*w+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Ie;function Wc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ir(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vd(){const n=Ir("canvas");return n.style.display="block",n}const ol={};function Xc(n){n in ol||(ol[n]=!0,console.warn(n))}function xd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const ll=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cl=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[Zi]:{transfer:Rr,primaries:Pr,toReference:n=>n,fromReference:n=>n},[ni]:{transfer:ot,primaries:Pr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zr]:{transfer:Rr,primaries:Lr,toReference:n=>n.applyMatrix3(cl),fromReference:n=>n.applyMatrix3(ll)},[no]:{transfer:ot,primaries:Lr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(cl),fromReference:n=>n.applyMatrix3(ll).convertLinearToSRGB()}},yd=new Set([Zi,zr]),$e={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!yd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hs[e].toReference,s=Hs[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hs[n].primaries},getTransfer:function(n){return n===Hi?Rr:Hs[n].transfer}};function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let An;class Sd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{An===void 0&&(An=Ir("canvas")),An.width=e.width,An.height=e.height;const i=An.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=An}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Md=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ia(s[a].image)):r.push(ia(s[a]))}else r=ia(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;class Nt extends cs{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=pn,s=pn,r=Qt,a=mn,o=di,l=ji,c=Nt.DEFAULT_ANISOTROPY,h=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=yn(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Uc;Nt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,w=(f+1)/2,U=(p+1)/2,A=(h+d)/4,C=(u+x)/4,I=(g+m)/4;return y>w&&y>U?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=C/i):w>U?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=I/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=C/r,s=I/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends cs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Nt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vt extends bd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qc extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Nt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),A=Math.atan2(U,p*M);m=Math.sin(m*A)/U,o=Math.sin(o*A)/U}const w=o*M;if(l=l*m+d*w,c=c*m+f*w,h=h*m+g*w,u=u*m+x*w,m===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=U,c*=U,h*=U,u*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,i=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new R,hl=new Sn;class Mn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Gs.copy(i.boundingBox)),Gs.applyMatrix4(e.matrixWorld),this.union(Gs)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Vs.subVectors(this.max,fs),Tn.subVectors(e.a,fs),Cn.subVectors(e.b,fs),Rn.subVectors(e.c,fs),Ui.subVectors(Cn,Tn),Oi.subVectors(Rn,Cn),en.subVectors(Tn,Rn);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-en.z,en.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,en.z,0,-en.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-en.y,en.x,0];return!sa(t,Tn,Cn,Rn,Vs)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Tn,Cn,Rn,Vs))?!1:(Ws.crossVectors(Ui,Oi),t=[Ws.x,Ws.y,Ws.z],sa(t,Tn,Cn,Rn,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new R,new R,new R,new R,new R,new R,new R,new R],$t=new R,Gs=new Mn,Tn=new R,Cn=new R,Rn=new R,Ui=new R,Oi=new R,en=new R,fs=new R,Vs=new R,Ws=new R,tn=new R;function sa(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){tn.fromArray(n,r);const o=s.x*Math.abs(tn.x)+s.y*Math.abs(tn.y)+s.z*Math.abs(tn.z),l=e.dot(tn),c=t.dot(tn),h=i.dot(tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ed=new Mn,ps=new R,ra=new R;class _n{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ed.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ra.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ra)),this.expandByPoint(ps.copy(e.center).sub(ra))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new R,aa=new R,Xs=new R,Fi=new R,oa=new R,Ys=new R,la=new R;class ro{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){aa.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(aa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Xs),o=Fi.dot(this.direction),l=-Fi.dot(Xs),c=Fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(aa).addScaledVector(Xs,d),f}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),s=Mi.dot(Mi)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,s,r){oa.subVectors(t,e),Ys.subVectors(i,e),la.crossVectors(oa,Ys);let a=this.direction.dot(la),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fi.subVectors(this.origin,e);const l=o*this.direction.dot(Ys.crossVectors(Fi,Ys));if(l<0)return null;const c=o*this.direction.dot(oa.cross(Fi));if(c<0||l+c>a)return null;const h=-o*Fi.dot(la);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,x,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Pn.setFromMatrixColumn(e,0).length(),r=1/Pn.setFromMatrixColumn(e,1).length(),a=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Td)}lookAt(e,t,i){const s=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Bi.crossVectors(i,Xt),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Bi.crossVectors(i,Xt)),Bi.normalize(),qs.crossVectors(Xt,Bi),s[0]=Bi.x,s[4]=qs.x,s[8]=Xt.x,s[1]=Bi.y,s[5]=qs.y,s[9]=Xt.y,s[2]=Bi.z,s[6]=qs.z,s[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],y=i[7],w=i[11],U=i[15],A=s[0],C=s[4],I=s[8],E=s[12],_=s[1],P=s[5],H=s[9],k=s[13],q=s[2],j=s[6],W=s[10],Z=s[14],G=s[3],de=s[7],ge=s[11],ye=s[15];return r[0]=a*A+o*_+l*q+c*G,r[4]=a*C+o*P+l*j+c*de,r[8]=a*I+o*H+l*W+c*ge,r[12]=a*E+o*k+l*Z+c*ye,r[1]=h*A+u*_+d*q+f*G,r[5]=h*C+u*P+d*j+f*de,r[9]=h*I+u*H+d*W+f*ge,r[13]=h*E+u*k+d*Z+f*ye,r[2]=g*A+x*_+m*q+p*G,r[6]=g*C+x*P+m*j+p*de,r[10]=g*I+x*H+m*W+p*ge,r[14]=g*E+x*k+m*Z+p*ye,r[3]=M*A+y*_+w*q+U*G,r[7]=M*C+y*P+w*j+U*de,r[11]=M*I+y*H+w*W+U*ge,r[15]=M*E+y*k+w*Z+U*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,w=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,U=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,A=t*M+i*y+s*w+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*C,e[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*p+i*l*p)*C,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*C,e[4]=y*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*C,e[8]=w*C,e[9]=(g*u*r-h*x*r-g*i*f+t*x*f+h*i*p-t*u*p)*C,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*C,e[12]=U*C,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,M=l*c,y=l*h,w=l*u,U=i.x,A=i.y,C=i.z;return s[0]=(1-(x+p))*U,s[1]=(f+w)*U,s[2]=(g-y)*U,s[3]=0,s[4]=(f-w)*A,s[5]=(1-(d+p))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+y)*C,s[9]=(m-M)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Pn.set(s[0],s[1],s[2]).length();const a=Pn.set(s[4],s[5],s[6]).length(),o=Pn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ei.copy(this);const c=1/r,h=1/a,u=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,t.setFromRotationMatrix(ei),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Pi){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let f,g;if(o===Pi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Dr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Pi){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,f=(i+s)*h;let g,x;if(o===Pi)g=(a+r)*u,x=-2*u;else if(o===Dr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pn=new R,ei=new nt,Ad=new R(0,0,0),Td=new R(1,1,1),Bi=new R,qs=new R,Xt=new R,ul=new nt,dl=new Sn;class fi{constructor(e=0,t=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cd=0;const fl=new R,Ln=new Sn,_i=new nt,js=new R,ms=new R,Rd=new R,Pd=new Sn,pl=new R(1,0,0),ml=new R(0,1,0),gl=new R(0,0,1),vl={type:"added"},Ld={type:"removed"},Dn={type:"childadded",child:null},ca={type:"childremoved",child:null};class Lt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new R,t=new fi,i=new Sn,s=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ie}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?js.copy(e):js.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(ms,js,this.up):_i.lookAt(js,ms,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ln.setFromRotationMatrix(_i),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vl),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vl),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Rd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new R(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new R,bi=new R,ha=new R,wi=new R,In=new R,Nn=new R,xl=new R,ua=new R,da=new R,fa=new R;class hi{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ti.subVectors(e,t),s.cross(ti);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ti.subVectors(s,t),bi.subVectors(i,t),ha.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(bi),l=ti.dot(ha),c=bi.dot(bi),h=bi.dot(ha),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static isFrontFacing(e,t,i,s){return ti.subVectors(i,t),bi.subVectors(e,t),ti.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ti.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hi.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;In.subVectors(s,i),Nn.subVectors(r,i),ua.subVectors(e,i);const l=In.dot(ua),c=Nn.dot(ua);if(l<=0&&c<=0)return t.copy(i);da.subVectors(e,s);const h=In.dot(da),u=Nn.dot(da);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(In,a);fa.subVectors(e,r);const f=In.dot(fa),g=Nn.dot(fa);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Nn,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return xl.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(xl,o);const p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(In,a).addScaledVector(Nn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function pa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=so(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=pa(a,r,e+1/3),this.g=pa(a,r,e),this.b=pa(a,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=ni){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const i=Kc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return $e.fromWorkingColorSpace(Ot.copy(this),e),Math.round(It(Ot.r*255,0,255))*65536+Math.round(It(Ot.g*255,0,255))*256+Math.round(It(Ot.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=ni){$e.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Ks);const i=As(ki.h,Ks.h,t),s=As(ki.s,Ks.s,t),r=As(ki.l,Ks.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new xe;xe.NAMES=Kc;let Dd=0;class hs extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Kn,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ba,this.blendDst=ka,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kn&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ba&&(i.blendSrc=this.blendSrc),this.blendDst!==ka&&(i.blendDst=this.blendDst),this.blendEquation!==cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ai extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new R,Zs=new ee;class St{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Xc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zs.fromBufferAttribute(this,t),Zs.applyMatrix3(e),this.setXY(t,Zs.x,Zs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),s=kt(s,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Zc extends St{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jc extends St{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends St{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Id=0;const Zt=new nt,ma=new Lt,Un=new R,Yt=new Mn,gs=new Mn,Tt=new R;class rt extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wc(e)?Jc:Zc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Yt.min,gs.min),Yt.expandByPoint(Tt),Tt.addVectors(Yt.max,gs.max),Yt.expandByPoint(Tt)):(Yt.expandByPoint(gs.min),Yt.expandByPoint(gs.max))}Yt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Un.fromBufferAttribute(e,c),Tt.add(Un)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new R,l[I]=new R;const c=new R,h=new R,u=new R,d=new ee,f=new ee,g=new ee,x=new R,m=new R;function p(I,E,_){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,_),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,_),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(x),o[E].add(x),o[_].add(x),l[I].add(m),l[E].add(m),l[_].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,E=M.length;I<E;++I){const _=M[I],P=_.start,H=_.count;for(let k=P,q=P+H;k<q;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new R,w=new R,U=new R,A=new R;function C(I){U.fromBufferAttribute(s,I),A.copy(U);const E=o[I];y.copy(E),y.sub(U.multiplyScalar(U.dot(E))).normalize(),w.crossVectors(A,E);const P=w.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,E=M.length;I<E;++I){const _=M[I],P=_.start,H=_.count;for(let k=P,q=P+H;k<q;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new St(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new nt,nn=new ro,Js=new _n,Sl=new R,On=new R,Fn=new R,Bn=new R,ga=new R,Qs=new R,$s=new ee,er=new ee,tr=new ee,Ml=new R,_l=new R,bl=new R,ir=new R,nr=new R;class qe extends Lt{constructor(e=new rt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ga.fromBufferAttribute(u,e),a?Qs.addScaledVector(ga,h):Qs.addScaledVector(ga.sub(t),h))}t.add(Qs)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Js.copy(i.boundingSphere),Js.applyMatrix4(r),nn.copy(e.ray).recast(e.near),!(Js.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Js,Sl)===null||nn.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(yl.copy(r).invert(),nn.copy(e.ray).applyMatrix4(yl),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,nn)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=M,U=y;w<U;w+=3){const A=o.getX(w),C=o.getX(w+1),I=o.getX(w+2);s=sr(this,p,e,i,c,h,u,A,C,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);s=sr(this,a,e,i,c,h,u,M,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=M,U=y;w<U;w+=3){const A=w,C=w+1,I=w+2;s=sr(this,p,e,i,c,h,u,A,C,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const M=m,y=m+1,w=m+2;s=sr(this,a,e,i,c,h,u,M,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Nd(n,e,t,i,s,r,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===qi,o),l===null)return null;nr.copy(o),nr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:n}}function sr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,On),n.getVertexPosition(l,Fn),n.getVertexPosition(c,Bn);const h=Nd(n,e,t,i,On,Fn,Bn,ir);if(h){s&&($s.fromBufferAttribute(s,o),er.fromBufferAttribute(s,l),tr.fromBufferAttribute(s,c),h.uv=hi.getInterpolation(ir,On,Fn,Bn,$s,er,tr,new ee)),r&&($s.fromBufferAttribute(r,o),er.fromBufferAttribute(r,l),tr.fromBufferAttribute(r,c),h.uv1=hi.getInterpolation(ir,On,Fn,Bn,$s,er,tr,new ee)),a&&(Ml.fromBufferAttribute(a,o),_l.fromBufferAttribute(a,l),bl.fromBufferAttribute(a,c),h.normal=hi.getInterpolation(ir,On,Fn,Bn,Ml,_l,bl,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};hi.getNormal(On,Fn,Bn,u.normal),h.face=u}return h}class Us extends rt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(x,m,p,M,y,w,U,A,C,I,E){const _=w/C,P=U/I,H=w/2,k=U/2,q=A/2,j=C+1,W=I+1;let Z=0,G=0;const de=new R;for(let ge=0;ge<W;ge++){const ye=ge*P-k;for(let Ve=0;Ve<j;Ve++){const et=Ve*_-H;de[x]=et*M,de[m]=ye*y,de[p]=q,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=A>0?1:-1,h.push(de.x,de.y,de.z),u.push(Ve/C),u.push(1-ge/I),Z+=1}}for(let ge=0;ge<I;ge++)for(let ye=0;ye<C;ye++){const Ve=d+ye+j*ge,et=d+ye+j*(ge+1),X=d+(ye+1)+j*(ge+1),te=d+(ye+1)+j*ge;l.push(Ve,et,te),l.push(et,X,te),G+=6}o.addGroup(f,G,E),f+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=ss(n[t]);for(const s in i)e[s]=i[s]}return e}function Ud(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Yi={clone:ss,merge:zt};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ht extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class $c extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new R,wl=new ee,El=new ee;class Jt extends $c{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,wl,El),t.subVectors(El,wl)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const kn=-90,zn=1;class Bd extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Jt(kn,zn,e,t);s.layers=this.layers,this.add(s);const r=new Jt(kn,zn,e,t);r.layers=this.layers,this.add(r);const a=new Jt(kn,zn,e,t);a.layers=this.layers,this.add(a);const o=new Jt(kn,zn,e,t);o.layers=this.layers,this.add(o);const l=new Jt(kn,zn,e,t);l.layers=this.layers,this.add(l);const c=new Jt(kn,zn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eh extends Nt{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$n,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends Vt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new eh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Us(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Di});r.uniforms.tEquirect.value=t;const a=new qe(s,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=Qt),new Bd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}const va=new R,zd=new R,Hd=new Ie;class on{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=va.subVectors(i,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(va),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hd.getNormalMatrix(e),s=this.coplanarPoint(va).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sn=new _n,rr=new R;class ao{constructor(e=new on,t=new on,i=new on,s=new on,r=new on,a=new on){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],y=s[14],w=s[15];if(i[0].setComponents(l-r,d-c,m-f,w-p).normalize(),i[1].setComponents(l+r,d+c,m+f,w+p).normalize(),i[2].setComponents(l+a,d+h,m+g,w+M).normalize(),i[3].setComponents(l-a,d-h,m-g,w-M).normalize(),i[4].setComponents(l-o,d-u,m-x,w-y).normalize(),t===Pi)i[5].setComponents(l+o,d+u,m+x,w+y).normalize();else if(t===Dr)i[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sn)}intersectsSprite(e){return sn.center.set(0,0,0),sn.radius=.7071067811865476,sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(rr.x=s.normal.x>0?e.max.x:e.min.x,rr.y=s.normal.y>0?e.max.y:e.min.y,rr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function th(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Gd(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),u.count===-1&&d.length===0&&n.bufferSubData(c,0,h),d.length!==0){for(let f=0,g=d.length;f<g;f++){const x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(n.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class bn extends rt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let y=0;y<c;y++){const w=y*u-r;g.push(w,-M,0),x.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const y=M+c*p,w=M+c*(p+1),U=M+1+c*(p+1),A=M+1+c*p;f.push(y,w,A),f.push(w,U,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Uf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Of=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$f=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,np=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ap=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,um=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Vd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:Yd,alphatest_fragment:qd,alphatest_pars_fragment:jd,aomap_fragment:Kd,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:Qd,begin_vertex:$d,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:sf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:hf,color_pars_vertex:uf,color_vertex:df,common:ff,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:vf,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:Sf,colorspace_pars_fragment:Mf,envmap_fragment:_f,envmap_common_pars_fragment:bf,envmap_pars_fragment:wf,envmap_pars_vertex:Ef,envmap_physical_pars_fragment:Of,envmap_vertex:Af,fog_vertex:Tf,fog_pars_vertex:Cf,fog_fragment:Rf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:If,lights_lambert_pars_fragment:Nf,lights_pars_begin:Uf,lights_toon_fragment:Ff,lights_toon_pars_fragment:Bf,lights_phong_fragment:kf,lights_phong_pars_fragment:zf,lights_physical_fragment:Hf,lights_physical_pars_fragment:Gf,lights_fragment_begin:Vf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Kf,map_fragment:Zf,map_pars_fragment:Jf,map_particle_fragment:Qf,map_particle_pars_fragment:$f,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphinstance_vertex:ip,morphcolor_vertex:np,morphnormal_vertex:sp,morphtarget_pars_vertex:rp,morphtarget_vertex:ap,normal_fragment_begin:op,normal_fragment_maps:lp,normal_pars_fragment:cp,normal_pars_vertex:hp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:fp,clearcoat_normal_fragment_maps:pp,clearcoat_pars_fragment:mp,iridescence_pars_fragment:gp,opaque_fragment:vp,packing:xp,premultiplied_alpha_fragment:yp,project_vertex:Sp,dithering_fragment:Mp,dithering_pars_fragment:_p,roughnessmap_fragment:bp,roughnessmap_pars_fragment:wp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Ap,shadowmap_vertex:Tp,shadowmask_pars_fragment:Cp,skinbase_vertex:Rp,skinning_pars_vertex:Pp,skinning_vertex:Lp,skinnormal_vertex:Dp,specularmap_fragment:Ip,specularmap_pars_fragment:Np,tonemapping_fragment:Up,tonemapping_pars_fragment:Op,transmission_fragment:Fp,transmission_pars_fragment:Bp,uv_pars_fragment:kp,uv_pars_vertex:zp,uv_vertex:Hp,worldpos_vertex:Gp,background_vert:Vp,background_frag:Wp,backgroundCube_vert:Xp,backgroundCube_frag:Yp,cube_vert:qp,cube_frag:jp,depth_vert:Kp,depth_frag:Zp,distanceRGBA_vert:Jp,distanceRGBA_frag:Qp,equirect_vert:$p,equirect_frag:em,linedashed_vert:tm,linedashed_frag:im,meshbasic_vert:nm,meshbasic_frag:sm,meshlambert_vert:rm,meshlambert_frag:am,meshmatcap_vert:om,meshmatcap_frag:lm,meshnormal_vert:cm,meshnormal_frag:hm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:fm,meshphysical_frag:pm,meshtoon_vert:mm,meshtoon_frag:gm,points_vert:vm,points_frag:xm,shadow_vert:ym,shadow_frag:Sm,sprite_vert:Mm,sprite_frag:_m},re={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ci={basic:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new xe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:zt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:zt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new xe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:zt([re.points,re.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:zt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:zt([re.common,re.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:zt([re.sprite,re.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:zt([re.common,re.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:zt([re.lights,re.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ci.physical={uniforms:zt([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ar={r:0,b:0,g:0},rn=new fi,bm=new nt;function wm(n,e,t,i,s,r,a){const o=new xe(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function x(M){let y=!1;const w=g(M);w===null?p(o,l):w&&w.isColor&&(p(w,1),y=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===kr)?(h===void 0&&(h=new qe(new Us(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:ss(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rn.copy(y.backgroundRotation),rn.x*=-1,rn.y*=-1,rn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(rn.y*=-1,rn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bm.makeRotationFromEuler(rn)),h.material.toneMapped=$e.getTransfer(w.colorSpace)!==ot,(u!==w||d!==w.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new qe(new bn(2,2),new ht({name:"BackgroundMaterial",uniforms:ss(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(w.colorSpace)!==ot,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||d!==w.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=w,d=w.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(ar,Qc(n)),i.buffers.color.setClear(ar.r,ar.g,ar.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:x,addToRenderList:m}}function Em(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(_,P,H,k,q){let j=!1;const W=u(k,H,P);r!==W&&(r=W,c(r.object)),j=f(_,k,H,q),j&&g(_,k,H,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,w(_,P,H,k),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function u(_,P,H){const k=H.wireframe===!0;let q=i[_.id];q===void 0&&(q={},i[_.id]=q);let j=q[P.id];j===void 0&&(j={},q[P.id]=j);let W=j[k];return W===void 0&&(W=d(l()),j[k]=W),W}function d(_){const P=[],H=[],k=[];for(let q=0;q<t;q++)P[q]=0,H[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:k,object:_,attributes:{},index:null}}function f(_,P,H,k){const q=r.attributes,j=P.attributes;let W=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){const ge=q[G];let ye=j[G];if(ye===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ye=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ye=_.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(_,P,H,k){const q={},j=P.attributes;let W=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){let ge=j[G];ge===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(ge=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(ge=_.instanceColor));const ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),q[G]=ye,W++}r.attributes=q,r.attributesNum=W,r.index=k}function x(){const _=r.newAttributes;for(let P=0,H=_.length;P<H;P++)_[P]=0}function m(_){p(_,0)}function p(_,P){const H=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;H[_]=1,k[_]===0&&(n.enableVertexAttribArray(_),k[_]=1),q[_]!==P&&(n.vertexAttribDivisor(_,P),q[_]=P)}function M(){const _=r.newAttributes,P=r.enabledAttributes;for(let H=0,k=P.length;H<k;H++)P[H]!==_[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function y(_,P,H,k,q,j,W){W===!0?n.vertexAttribIPointer(_,P,H,q,j):n.vertexAttribPointer(_,P,H,k,q,j)}function w(_,P,H,k){x();const q=k.attributes,j=H.getAttributes(),W=P.defaultAttributeValues;for(const Z in j){const G=j[Z];if(G.location>=0){let de=q[Z];if(de===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(de=_.instanceColor)),de!==void 0){const ge=de.normalized,ye=de.itemSize,Ve=e.get(de);if(Ve===void 0)continue;const et=Ve.buffer,X=Ve.type,te=Ve.bytesPerElement,pe=X===n.INT||X===n.UNSIGNED_INT||de.gpuType===Oc;if(de.isInterleavedBufferAttribute){const le=de.data,Fe=le.stride,Ne=de.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<G.locationSize;Xe++)p(G.location+Xe,le.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<G.locationSize;Xe++)m(G.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Xe=0;Xe<G.locationSize;Xe++)y(G.location+Xe,ye/G.locationSize,X,ge,Fe*te,(Ne+ye/G.locationSize*Xe)*te,pe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)p(G.location+le,de.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,et);for(let le=0;le<G.locationSize;le++)y(G.location+le,ye/G.locationSize,X,ge,ye*te,ye/G.locationSize*le*te,pe)}}else if(W!==void 0){const ge=W[Z];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(G.location,ge);break;case 3:n.vertexAttrib3fv(G.location,ge);break;case 4:n.vertexAttrib4fv(G.location,ge);break;default:n.vertexAttrib1fv(G.location,ge)}}}}M()}function U(){I();for(const _ in i){const P=i[_];for(const H in P){const k=P[H];for(const q in k)h(k[q].object),delete k[q];delete P[H]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const H in P){const k=P[H];for(const q in k)h(k[q].object),delete k[q];delete P[H]}delete i[_.id]}function C(_){for(const P in i){const H=i[P];if(H[_.id]===void 0)continue;const k=H[_.id];for(const q in k)h(k[q].object),delete k[q];delete H[_.id]}}function I(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Am(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,i,d[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Tm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==di&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ji&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ri&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,U=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:w,maxSamples:U}}function Cm(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new on,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:i,y=M*4;let w=p.clippingState||null;l.value=w,w=h(g,d,y,f);for(let U=0;U!==y;++U)w[U]=t[U];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==x;++y,w+=4)a.copy(u[y]).applyMatrix4(M,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Rm(n){let e=new WeakMap;function t(a,o){return o===za?a.mapping=$n:o===Ha&&(a.mapping=es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===za||o===Ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class oo extends $c{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xn=4,Al=[.125,.215,.35,.446,.526,.582],hn=20,xa=new oo,Tl=new xe;let ya=null,Sa=0,Ma=0,_a=!1;const ln=(1+Math.sqrt(5))/2,Hn=1/ln,Cl=[new R(-ln,Hn,0),new R(ln,Hn,0),new R(-Hn,0,ln),new R(Hn,0,ln),new R(0,ln,-Hn),new R(0,ln,Hn),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ya=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,Sa,Ma),this._renderer.xr.enabled=_a,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$n||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ri,format:di,colorSpace:Zi,depthBuffer:!1},s=Pl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(r)),this._blurMaterial=Lm(r,e,t)}return s}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,s){const o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tl),h.toneMapping=Xi,h.autoClear=!1;const f=new ai({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new qe(new Us,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Tl),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;or(s,M*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===$n||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,xa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Cl[(s-r-1)%Cl.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qe(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):hn;m>hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hn}`);const p=[];let M=0;for(let C=0;C<hn;++C){const I=C/x,E=Math.exp(-I*I/2);p.push(E),C===0?M+=E:C<m&&(M+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const w=this._sizeLods[s],U=3*w*(s>y-Xn?s-y+Xn:0),A=4*(this._cubeSize-w);or(t,U,A,3*w,2*w),l.setRenderTarget(t),l.render(u,xa)}}function Pm(n){const e=[],t=[],i=[];let s=n;const r=n-Xn+1+Al.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Xn?l=Al[a-n+Xn-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*f),y=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,I=A>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(E,x*g*A),y.set(d,m*g*A);const _=[A,A,A,A,A,A];w.set(_,p*g*A)}const U=new rt;U.setAttribute("position",new St(M,x)),U.setAttribute("uv",new St(y,m)),U.setAttribute("faceIndex",new St(w,p)),e.push(U),s>Xn&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Pl(n,e,t){const i=new Vt(n,e,t);return i.texture.mapping=kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Lm(n,e,t){const i=new Float32Array(hn),s=new R(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ll(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Dl(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dm(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===za||l===Ha,h=l===$n||l===es;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Rl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Rl(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Im(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Xc("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Nm(n,e,t,i){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const M=f.array;x=f.version;for(let y=0,w=M.length;y<w;y+=3){const U=M[y+0],A=M[y+1],C=M[y+2];d.push(U,A,A,C,C,U)}}else if(g!==void 0){const M=g.array;x=g.version;for(let y=0,w=M.length/3-1;y<w;y+=3){const U=y+0,A=y+1,C=y+2;d.push(U,A,A,C,C,U)}}else return;const m=new(Wc(d)?Jc:Zc)(d,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Um(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<g;m++)this.render(d[m]/a,f[m]);else{x.multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<x.length;M++)t.update(p,i,x[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Om(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,e,t){const i=new WeakMap,s=new Pt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let _=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),x===!0&&(w=2),m===!0&&(w=3);let U=o.attributes.position.count*w,A=1;U>e.maxTextureSize&&(A=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*A*4*u),I=new qc(C,U,A,u);I.type=Ri,I.needsUpdate=!0;const E=w*4;for(let P=0;P<u;P++){const H=p[P],k=M[P],q=y[P],j=U*A*4*P;for(let W=0;W<H.count;W++){const Z=W*E;g===!0&&(s.fromBufferAttribute(H,W),C[j+Z+0]=s.x,C[j+Z+1]=s.y,C[j+Z+2]=s.z,C[j+Z+3]=0),x===!0&&(s.fromBufferAttribute(k,W),C[j+Z+4]=s.x,C[j+Z+5]=s.y,C[j+Z+6]=s.z,C[j+Z+7]=0),m===!0&&(s.fromBufferAttribute(q,W),C[j+Z+8]=s.x,C[j+Z+9]=s.y,C[j+Z+10]=s.z,C[j+Z+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new ee(U,A)},i.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Bm(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class ih extends Nt{constructor(e,t,i,s,r,a,o,l,c,h=Zn){if(h!==Zn&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zn&&(i=ts),i===void 0&&h===ns&&(i=is),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nh=new Nt,sh=new ih(1,1);sh.compareFunction=Vc;const rh=new qc,ah=new wd,oh=new eh,Il=[],Nl=[],Ul=new Float32Array(16),Ol=new Float32Array(9),Fl=new Float32Array(4);function us(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Il[s];if(r===void 0&&(r=new Float32Array(s),Il[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hr(n,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function km(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function zm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function Hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Vm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Fl.set(i),n.uniformMatrix2fv(this.addr,!1,Fl),wt(t,i)}}function Wm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Ol.set(i),n.uniformMatrix3fv(this.addr,!1,Ol),wt(t,i)}}function Xm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,i))return;Ul.set(i),n.uniformMatrix4fv(this.addr,!1,Ul),wt(t,i)}}function Ym(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function Km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Zm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function $m(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function eg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?sh:nh;t.setTexture2D(e||r,s)}function tg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ah,s)}function ig(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||oh,s)}function ng(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||rh,s)}function sg(n){switch(n){case 5126:return km;case 35664:return zm;case 35665:return Hm;case 35666:return Gm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return qm;case 35668:case 35672:return jm;case 35669:case 35673:return Km;case 5125:return Zm;case 36294:return Jm;case 36295:return Qm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return ng}}function rg(n,e){n.uniform1fv(this.addr,e)}function ag(n,e){const t=us(e,this.size,2);n.uniform2fv(this.addr,t)}function og(n,e){const t=us(e,this.size,3);n.uniform3fv(this.addr,t)}function lg(n,e){const t=us(e,this.size,4);n.uniform4fv(this.addr,t)}function cg(n,e){const t=us(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function hg(n,e){const t=us(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ug(n,e){const t=us(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dg(n,e){n.uniform1iv(this.addr,e)}function fg(n,e){n.uniform2iv(this.addr,e)}function pg(n,e){n.uniform3iv(this.addr,e)}function mg(n,e){n.uniform4iv(this.addr,e)}function gg(n,e){n.uniform1uiv(this.addr,e)}function vg(n,e){n.uniform2uiv(this.addr,e)}function xg(n,e){n.uniform3uiv(this.addr,e)}function yg(n,e){n.uniform4uiv(this.addr,e)}function Sg(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||nh,r[a])}function Mg(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ah,r[a])}function _g(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||oh,r[a])}function bg(n,e,t){const i=this.cache,s=e.length,r=Hr(t,s);bt(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||rh,r[a])}function wg(n){switch(n){case 5126:return rg;case 35664:return ag;case 35665:return og;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return vg;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return bg}}class Eg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sg(t.type)}}class Ag{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wg(t.type)}}class Tg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const ba=/(\w+)(\])?(\[|\.)?/g;function Bl(n,e){n.seq.push(e),n.map[e.id]=e}function Cg(n,e,t){const i=n.name,s=i.length;for(ba.lastIndex=0;;){const r=ba.exec(i),a=ba.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bl(t,c===void 0?new Eg(o,n,e):new Ag(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Tg(o),Bl(t,u)),t=u}}}class wr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cg(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function kl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Rg=37297;let Pg=0;function Lg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Dg(n){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(n);let i;switch(e===t?i="":e===Lr&&t===Pr?i="LinearDisplayP3ToLinearSRGB":e===Pr&&t===Lr&&(i="LinearSRGBToLinearDisplayP3"),n){case Zi:case zr:return[i,"LinearTransferOETF"];case ni:case no:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function zl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Lg(n.getShaderSource(e),a)}else return s}function Ig(n,e){const t=Dg(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ng(n,e){let t;switch(e){case Cu:t="Linear";break;case Ru:t="Reinhard";break;case Pu:t="OptimizedCineon";break;case Nc:t="ACESFilmic";break;case Du:t="AgX";break;case Iu:t="Neutral";break;case Lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ug(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Og(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Fg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _s(n){return n!==""}function Hl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(Bg,zg)}const kg=new Map;function zg(n,e){let t=De[e];if(t===void 0){const i=kg.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(n){return n.replace(Hg,Gg)}function Gg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function Wg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $n:case es:e="ENVMAP_TYPE_CUBE";break;case kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function Yg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ic:e="ENVMAP_BLENDING_MULTIPLY";break;case Au:e="ENVMAP_BLENDING_MIX";break;case Tu:e="ENVMAP_BLENDING_ADD";break}return e}function qg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jg(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vg(t),c=Wg(t),h=Xg(t),u=Yg(t),d=qg(t),f=Ug(t),g=Og(r),x=s.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[Wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?De.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Ig("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),a=Wa(a),a=Hl(a,t),a=Gl(a,t),o=Wa(o),o=Hl(o,t),o=Gl(o,t),a=Vl(a),o=Vl(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+a,w=M+p+o,U=kl(s,s.VERTEX_SHADER,y),A=kl(s,s.FRAGMENT_SHADER,w);s.attachShader(x,U),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(U).trim(),q=s.getShaderInfoLog(A).trim();let j=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,U,A);else{const Z=zl(s,U,"vertex"),G=zl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Z+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||q==="")&&(W=!1);W&&(P.diagnostics={runnable:j,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(U),s.deleteShader(A),I=new wr(s,x),E=Fg(s,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Rg)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=A,this}let Kg=0;class Zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Jg(e),t.set(e,i)),i}}class Jg{constructor(e){this.id=Kg++,this.code=e,this.usedTimes=0}}function Qg(n,e,t,i,s,r,a){const o=new jc,l=new Zg,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,_,P,H,k){const q=H.fog,j=k.geometry,W=E.isMeshStandardMaterial?H.environment:null,Z=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),G=Z&&Z.mapping===kr?Z.image.height:null,de=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=ge!==void 0?ge.length:0;let Ve=0;j.morphAttributes.position!==void 0&&(Ve=1),j.morphAttributes.normal!==void 0&&(Ve=2),j.morphAttributes.color!==void 0&&(Ve=3);let et,X,te,pe;if(de){const tt=ci[de];et=tt.vertexShader,X=tt.fragmentShader}else et=E.vertexShader,X=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const le=n.getRenderTarget(),Fe=k.isInstancedMesh===!0,Ne=k.isBatchedMesh===!0,Xe=!!E.map,D=!!E.matcap,We=!!Z,He=!!E.aoMap,lt=!!E.lightMap,Ee=!!E.bumpMap,Ye=!!E.normalMap,Be=!!E.displacementMap,Le=!!E.emissiveMap,vt=!!E.metalnessMap,T=!!E.roughnessMap,S=E.anisotropy>0,z=E.clearcoat>0,J=E.dispersion>0,Q=E.iridescence>0,$=E.sheen>0,be=E.transmission>0,ae=S&&!!E.anisotropyMap,oe=z&&!!E.clearcoatMap,Ue=z&&!!E.clearcoatNormalMap,ie=z&&!!E.clearcoatRoughnessMap,Se=Q&&!!E.iridescenceMap,ze=Q&&!!E.iridescenceThicknessMap,Ce=$&&!!E.sheenColorMap,ce=$&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ge=!!E.specularColorMap,pt=!!E.specularIntensityMap,L=be&&!!E.transmissionMap,he=be&&!!E.thicknessMap,V=!!E.gradientMap,K=!!E.alphaMap,se=E.alphaTest>0,Re=!!E.alphaHash,je=!!E.extensions;let mt=Xi;E.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(mt=n.toneMapping);const Et={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:X,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&k._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&k.instanceColor!==null,instancingMorph:Fe&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Zi,alphaToCoverage:!!E.alphaToCoverage,map:Xe,matcap:D,envMap:We,envMapMode:We&&Z.mapping,envMapCubeUVHeight:G,aoMap:He,lightMap:lt,bumpMap:Ee,normalMap:Ye,displacementMap:d&&Be,emissiveMap:Le,normalMapObjectSpace:Ye&&E.normalMapType===qu,normalMapTangentSpace:Ye&&E.normalMapType===Yu,metalnessMap:vt,roughnessMap:T,anisotropy:S,anisotropyMap:ae,clearcoat:z,clearcoatMap:oe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ie,dispersion:J,iridescence:Q,iridescenceMap:Se,iridescenceThicknessMap:ze,sheen:$,sheenColorMap:Ce,sheenRoughnessMap:ce,specularMap:Oe,specularColorMap:Ge,specularIntensityMap:pt,transmission:be,transmissionMap:L,thicknessMap:he,gradientMap:V,opaque:E.transparent===!1&&E.blending===Kn&&E.alphaToCoverage===!1,alphaMap:K,alphaTest:se,alphaHash:Re,combine:E.combine,mapUv:Xe&&x(E.map.channel),aoMapUv:He&&x(E.aoMap.channel),lightMapUv:lt&&x(E.lightMap.channel),bumpMapUv:Ee&&x(E.bumpMap.channel),normalMapUv:Ye&&x(E.normalMap.channel),displacementMapUv:Be&&x(E.displacementMap.channel),emissiveMapUv:Le&&x(E.emissiveMap.channel),metalnessMapUv:vt&&x(E.metalnessMap.channel),roughnessMapUv:T&&x(E.roughnessMap.channel),anisotropyMapUv:ae&&x(E.anisotropyMap.channel),clearcoatMapUv:oe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ce&&x(E.sheenRoughnessMap.channel),specularMapUv:Oe&&x(E.specularMap.channel),specularColorMapUv:Ge&&x(E.specularColorMap.channel),specularIntensityMapUv:pt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:he&&x(E.thicknessMap.channel),alphaMapUv:K&&x(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ye||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Xe||K),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ve,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:mt,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&$e.getTransfer(E.map.colorSpace)===ot,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gt,flipSided:E.side===Gt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:je&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)_.push(P),_.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(M(_,E),y(_,E),_.push(n.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function M(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function y(E,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.skinning&&o.enable(4),_.morphTargets&&o.enable(5),_.morphNormals&&o.enable(6),_.morphColors&&o.enable(7),_.premultipliedAlpha&&o.enable(8),_.shadowMapEnabled&&o.enable(9),_.doubleSided&&o.enable(10),_.flipSided&&o.enable(11),_.useDepthPacking&&o.enable(12),_.dithering&&o.enable(13),_.transmission&&o.enable(14),_.sheen&&o.enable(15),_.opaque&&o.enable(16),_.pointsUvs&&o.enable(17),_.decodeVideoTexture&&o.enable(18),_.alphaToCoverage&&o.enable(19),E.push(o.mask)}function w(E){const _=g[E.type];let P;if(_){const H=ci[_];P=Yi.clone(H.uniforms)}else P=E.uniforms;return P}function U(E,_){let P;for(let H=0,k=h.length;H<k;H++){const q=h[H];if(q.cacheKey===_){P=q,++P.usedTimes;break}}return P===void 0&&(P=new jg(n,_,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){const _=h.indexOf(E);h[_]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function $g(){let n=new WeakMap;function e(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function t(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function e0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yl(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||e0),i.length>1&&i.sort(d||Xl),s.length>1&&s.sort(d||Xl)}function h(){for(let u=e,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function t0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Yl,n.set(i,[a])):s>=r.length?(a=new Yl,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function i0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new xe};break;case"SpotLight":t={position:new R,direction:new R,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new R,halfWidth:new R,halfHeight:new R};break}return n[e.id]=t,t}}}function n0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let s0=0;function r0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function a0(n){const e=new i0,t=n0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);const s=new R,r=new nt,a=new nt;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,y=0,w=0,U=0,A=0,C=0;c.sort(r0);for(let E=0,_=c.length;E<_;E++){const P=c[E],H=P.color,k=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*k,u+=H.g*k,d+=H.b*k;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],k);C++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=P.shadow.matrix,M++}i.directional[f]=W,f++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(k),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const Z=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,Z.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=Z.matrix,P.castShadow){const G=t.get(P);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=j,w++}x++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(H).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,G=t.get(P);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,y++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(k),W.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==w||I.numSpotMaps!==U||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=w,I.numSpotMaps=U,I.numLightProbes=C,i.version=s0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){const w=i.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const w=i.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const w=i.hemi[x];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function ql(n){const e=new a0(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function o0(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ql(n),e.set(s,[o])):r>=a.length?(o=new ql(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class l0 extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c0 extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function d0(n,e,t){let i=new ao;const s=new ee,r=new ee,a=new Pt,o=new l0({depthPacking:Xu}),l=new c0,c={},h=t.maxTextureSize,u={[qi]:Gt,[Gt]:qi,[gt]:gt},d=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:h0,fragmentShader:u0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new rt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),_=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=p!==Ei&&this.type===Ei,q=p===Ei&&this.type!==Ei;for(let j=0,W=A.length;j<W;j++){const Z=A[j],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const de=G.getFrameExtents();if(s.multiply(de),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,G.mapSize.y=r.y)),G.map===null||k===!0||q===!0){const ye=this.type!==Ei?{minFilter:Ft,magFilter:Ft}:{};G.map!==null&&G.map.dispose(),G.map=new Vt(s.x,s.y,ye),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ge=G.getViewportCount();for(let ye=0;ye<ge;ye++){const Ve=G.getViewport(ye);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),H.viewport(a),G.updateMatrices(Z,ye),i=G.getFrustum(),w(C,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===Ei&&M(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,_,P)};function M(A,C){const I=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vt(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,I,f,x,null)}function y(A,C,I,E){let _=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)_=P;else if(_=I.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=_.uuid,k=C.uuid;let q=c[H];q===void 0&&(q={},c[H]=q);let j=q[k];j===void 0&&(j=_.clone(),q[k]=j,C.addEventListener("dispose",U)),_=j}if(_.visible=C.visible,_.wireframe=C.wireframe,E===Ei?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:u[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=n.properties.get(_);H.light=I}return _}function w(A,C,I,E,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Ei)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const k=e.update(A),q=A.material;if(Array.isArray(q)){const j=k.groups;for(let W=0,Z=j.length;W<Z;W++){const G=j[W],de=q[G.materialIndex];if(de&&de.visible){const ge=y(A,de,E,_);A.onBeforeShadow(n,A,C,I,k,ge,G),n.renderBufferDirect(I,null,k,ge,A,G),A.onAfterShadow(n,A,C,I,k,ge,G)}}}else if(q.visible){const j=y(A,q,E,_);A.onBeforeShadow(n,A,C,I,k,j,null),n.renderBufferDirect(I,null,k,j,A,null),A.onAfterShadow(n,A,C,I,k,j,null)}}const H=A.children;for(let k=0,q=H.length;k<q;k++)w(H[k],C,I,E,_)}function U(A){A.target.removeEventListener("dispose",U);for(const I in c){const E=c[I],_=A.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function f0(n){function e(){let L=!1;const he=new Pt;let V=null;const K=new Pt(0,0,0,0);return{setMask:function(se){V!==se&&!L&&(n.colorMask(se,se,se,se),V=se)},setLocked:function(se){L=se},setClear:function(se,Re,je,mt,Et){Et===!0&&(se*=mt,Re*=mt,je*=mt),he.set(se,Re,je,mt),K.equals(he)===!1&&(n.clearColor(se,Re,je,mt),K.copy(he))},reset:function(){L=!1,V=null,K.set(-1,0,0,0)}}}function t(){let L=!1,he=null,V=null,K=null;return{setTest:function(se){se?pe(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(se){he!==se&&!L&&(n.depthMask(se),he=se)},setFunc:function(se){if(V!==se){switch(se){case yu:n.depthFunc(n.NEVER);break;case Su:n.depthFunc(n.ALWAYS);break;case Mu:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case _u:n.depthFunc(n.EQUAL);break;case bu:n.depthFunc(n.GEQUAL);break;case wu:n.depthFunc(n.GREATER);break;case Eu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}V=se}},setLocked:function(se){L=se},setClear:function(se){K!==se&&(n.clearDepth(se),K=se)},reset:function(){L=!1,he=null,V=null,K=null}}}function i(){let L=!1,he=null,V=null,K=null,se=null,Re=null,je=null,mt=null,Et=null;return{setTest:function(tt){L||(tt?pe(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(tt){he!==tt&&!L&&(n.stencilMask(tt),he=tt)},setFunc:function(tt,oi,li){(V!==tt||K!==oi||se!==li)&&(n.stencilFunc(tt,oi,li),V=tt,K=oi,se=li)},setOp:function(tt,oi,li){(Re!==tt||je!==oi||mt!==li)&&(n.stencilOp(tt,oi,li),Re=tt,je=oi,mt=li)},setLocked:function(tt){L=tt},setClear:function(tt){Et!==tt&&(n.clearStencil(tt),Et=tt)},reset:function(){L=!1,he=null,V=null,K=null,se=null,Re=null,je=null,mt=null,Et=null}}}const s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,M=null,y=null,w=null,U=null,A=new xe(0,0,0),C=0,I=!1,E=null,_=null,P=null,H=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=W>=2);let G=null,de={};const ge=n.getParameter(n.SCISSOR_BOX),ye=n.getParameter(n.VIEWPORT),Ve=new Pt().fromArray(ge),et=new Pt().fromArray(ye);function X(L,he,V,K){const se=new Uint8Array(4),Re=n.createTexture();n.bindTexture(L,Re),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<V;je++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(he+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return Re}const te={};te[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),r.setFunc(Tr),Ee(!1),Ye(Co),pe(n.CULL_FACE),He(Di);function pe(L){c[L]!==!0&&(n.enable(L),c[L]=!0)}function le(L){c[L]!==!1&&(n.disable(L),c[L]=!1)}function Fe(L,he){return h[L]!==he?(n.bindFramebuffer(L,he),h[L]=he,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function Ne(L,he){let V=d,K=!1;if(L){V=u.get(he),V===void 0&&(V=[],u.set(he,V));const se=L.textures;if(V.length!==se.length||V[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,je=se.length;Re<je;Re++)V[Re]=n.COLOR_ATTACHMENT0+Re;V.length=se.length,K=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,K=!0);K&&n.drawBuffers(V)}function Xe(L){return f!==L?(n.useProgram(L),f=L,!0):!1}const D={[cn]:n.FUNC_ADD,[iu]:n.FUNC_SUBTRACT,[nu]:n.FUNC_REVERSE_SUBTRACT};D[su]=n.MIN,D[ru]=n.MAX;const We={[au]:n.ZERO,[ou]:n.ONE,[lu]:n.SRC_COLOR,[Ba]:n.SRC_ALPHA,[pu]:n.SRC_ALPHA_SATURATE,[du]:n.DST_COLOR,[hu]:n.DST_ALPHA,[cu]:n.ONE_MINUS_SRC_COLOR,[ka]:n.ONE_MINUS_SRC_ALPHA,[fu]:n.ONE_MINUS_DST_COLOR,[uu]:n.ONE_MINUS_DST_ALPHA,[mu]:n.CONSTANT_COLOR,[gu]:n.ONE_MINUS_CONSTANT_COLOR,[vu]:n.CONSTANT_ALPHA,[xu]:n.ONE_MINUS_CONSTANT_ALPHA};function He(L,he,V,K,se,Re,je,mt,Et,tt){if(L===Di){g===!0&&(le(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),L!==tu){if(L!==x||tt!==I){if((m!==cn||y!==cn)&&(n.blendEquation(n.FUNC_ADD),m=cn,y=cn),tt)switch(L){case Kn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yt:n.blendFunc(n.ONE,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Po:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ro:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Po:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}p=null,M=null,w=null,U=null,A.set(0,0,0),C=0,x=L,I=tt}return}se=se||he,Re=Re||V,je=je||K,(he!==m||se!==y)&&(n.blendEquationSeparate(D[he],D[se]),m=he,y=se),(V!==p||K!==M||Re!==w||je!==U)&&(n.blendFuncSeparate(We[V],We[K],We[Re],We[je]),p=V,M=K,w=Re,U=je),(mt.equals(A)===!1||Et!==C)&&(n.blendColor(mt.r,mt.g,mt.b,Et),A.copy(mt),C=Et),x=L,I=!1}function lt(L,he){L.side===gt?le(n.CULL_FACE):pe(n.CULL_FACE);let V=L.side===Gt;he&&(V=!V),Ee(V),L.blending===Kn&&L.transparent===!1?He(Di):He(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Le(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(L){E!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),E=L)}function Ye(L){L!==Qh?(pe(n.CULL_FACE),L!==_&&(L===Co?n.cullFace(n.BACK):L===$h?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),_=L}function Be(L){L!==P&&(j&&n.lineWidth(L),P=L)}function Le(L,he,V){L?(pe(n.POLYGON_OFFSET_FILL),(H!==he||k!==V)&&(n.polygonOffset(he,V),H=he,k=V)):le(n.POLYGON_OFFSET_FILL)}function vt(L){L?pe(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function T(L){L===void 0&&(L=n.TEXTURE0+q-1),G!==L&&(n.activeTexture(L),G=L)}function S(L,he,V){V===void 0&&(G===null?V=n.TEXTURE0+q-1:V=G);let K=de[V];K===void 0&&(K={type:void 0,texture:void 0},de[V]=K),(K.type!==L||K.texture!==he)&&(G!==V&&(n.activeTexture(V),G=V),n.bindTexture(L,he||te[L]),K.type=L,K.texture=he)}function z(){const L=de[G];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(L){Ve.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ve.copy(L))}function ce(L){et.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),et.copy(L))}function Oe(L,he){let V=l.get(he);V===void 0&&(V=new WeakMap,l.set(he,V));let K=V.get(L);K===void 0&&(K=n.getUniformBlockIndex(he,L.name),V.set(L,K))}function Ge(L,he){const K=l.get(he).get(L);o.get(he)!==K&&(n.uniformBlockBinding(he,K,L.__bindingPointIndex),o.set(he,K))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},G=null,de={},h={},u=new WeakMap,d=[],f=null,g=!1,x=null,m=null,p=null,M=null,y=null,w=null,U=null,A=new xe(0,0,0),C=0,I=!1,E=null,_=null,P=null,H=null,k=null,Ve.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pe,disable:le,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:Xe,setBlending:He,setMaterial:lt,setFlipSided:Ee,setCullFace:Ye,setLineWidth:Be,setPolygonOffset:Le,setScissorTest:vt,activeTexture:T,bindTexture:S,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:Se,texImage3D:ze,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:Ue,texStorage3D:ie,texSubImage2D:$,texSubImage3D:be,compressedTexSubImage2D:ae,compressedTexSubImage3D:oe,scissor:Ce,viewport:ce,reset:pt}}function p0(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return f?new OffscreenCanvas(T,S):Ir("canvas")}function x(T,S,z){let J=1;const Q=vt(T);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const $=Math.floor(J*Q.width),be=Math.floor(J*Q.height);u===void 0&&(u=g($,be));const ae=S?g($,be):u;return ae.width=$,ae.height=be,ae.getContext("2d").drawImage(T,0,0,$,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+be+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Ft&&T.minFilter!==Qt}function p(T){n.generateMipmap(T)}function M(T,S,z,J,Q=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=S;if(S===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),S===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),S===n.RGBA){const be=Q?Rr:$e.getTransfer(J);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=be===ot?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(T,S){let z;return T?S===null||S===ts||S===is?z=n.DEPTH24_STENCIL8:S===Ri?z=n.DEPTH32F_STENCIL8:S===Cr&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===is?z=n.DEPTH_COMPONENT24:S===Ri?z=n.DEPTH_COMPONENT32F:S===Cr&&(z=n.DEPTH_COMPONENT16),z}function w(T,S){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ft&&T.minFilter!==Qt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function U(T){const S=T.target;S.removeEventListener("dispose",U),C(S),S.isVideoTexture&&h.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),E(S)}function C(T){const S=i.get(T);if(S.__webglInit===void 0)return;const z=T.source,J=d.get(z);if(J){const Q=J[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(T),Object.keys(J).length===0&&d.delete(z)}i.remove(T)}function I(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const z=T.source,J=d.get(z);delete J[S.__cacheKey],a.memory.textures--}function E(T){const S=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let Q=0;Q<S.__webglFramebuffer[J].length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[J][Q]);else n.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)n.deleteFramebuffer(S.__webglFramebuffer[J]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=T.textures;for(let J=0,Q=z.length;J<Q;J++){const $=i.get(z[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(z[J])}i.remove(T)}let _=0;function P(){_=0}function H(){const T=_;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),_+=1,T}function k(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function q(T,S){const z=i.get(T);if(T.isVideoTexture&&Be(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(z,T,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function j(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){et(z,T,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function W(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){et(z,T,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function Z(T,S){const z=i.get(T);if(T.version>0&&z.__version!==T.version){X(z,T,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const G={[Ga]:n.REPEAT,[pn]:n.CLAMP_TO_EDGE,[Va]:n.MIRRORED_REPEAT},de={[Ft]:n.NEAREST,[Nu]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[jr]:n.LINEAR_MIPMAP_NEAREST,[mn]:n.LINEAR_MIPMAP_LINEAR},ge={[ju]:n.NEVER,[ed]:n.ALWAYS,[Ku]:n.LESS,[Vc]:n.LEQUAL,[Zu]:n.EQUAL,[$u]:n.GEQUAL,[Ju]:n.GREATER,[Qu]:n.NOTEQUAL};function ye(T,S){if(S.type===Ri&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Qt||S.magFilter===jr||S.magFilter===zs||S.magFilter===mn||S.minFilter===Qt||S.minFilter===jr||S.minFilter===zs||S.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,G[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,G[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,G[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ge[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ft||S.minFilter!==zs&&S.minFilter!==mn||S.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(T,S){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",U));const J=S.source;let Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));const $=k(S);if($!==T.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Q[$].usedTimes++;const be=Q[T.__cacheKey];be!==void 0&&(Q[T.__cacheKey].usedTimes--,be.usedTimes===0&&I(S)),T.__cacheKey=$,T.__webglTexture=Q[$].texture}return z}function et(T,S,z){let J=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=n.TEXTURE_3D);const Q=Ve(T,S),$=S.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+z);const be=i.get($);if($.version!==be.__version||Q===!0){t.activeTexture(n.TEXTURE0+z);const ae=$e.getPrimaries($e.workingColorSpace),oe=S.colorSpace===Hi?null:$e.getPrimaries(S.colorSpace),Ue=S.colorSpace===Hi||ae===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ie=x(S.image,!1,s.maxTextureSize);ie=Le(S,ie);const Se=r.convert(S.format,S.colorSpace),ze=r.convert(S.type);let Ce=M(S.internalFormat,Se,ze,S.colorSpace,S.isVideoTexture);ye(J,S);let ce;const Oe=S.mipmaps,Ge=S.isVideoTexture!==!0,pt=be.__version===void 0||Q===!0,L=$.dataReady,he=w(S,ie);if(S.isDepthTexture)Ce=y(S.format===ns,S.type),pt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,Se,ze,null));else if(S.isDataTexture)if(Oe.length>0){Ge&&pt&&t.texStorage2D(n.TEXTURE_2D,he,Ce,Oe[0].width,Oe[0].height);for(let V=0,K=Oe.length;V<K;V++)ce=Oe[V],Ge?L&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ce.width,ce.height,Se,ze,ce.data):t.texImage2D(n.TEXTURE_2D,V,Ce,ce.width,ce.height,0,Se,ze,ce.data);S.generateMipmaps=!1}else Ge?(pt&&t.texStorage2D(n.TEXTURE_2D,he,Ce,ie.width,ie.height),L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Se,ze,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,Se,ze,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ce,Oe[0].width,Oe[0].height,ie.depth);for(let V=0,K=Oe.length;V<K;V++)if(ce=Oe[V],S.format!==di)if(Se!==null)if(Ge){if(L)if(S.layerUpdates.size>0){for(const se of S.layerUpdates){const Re=ce.width*ce.height;t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,se,ce.width,ce.height,1,Se,ce.data.slice(Re*se,Re*(se+1)),0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ce.width,ce.height,ie.depth,Se,ce.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,Ce,ce.width,ce.height,ie.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,ce.width,ce.height,ie.depth,Se,ze,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,Ce,ce.width,ce.height,ie.depth,0,Se,ze,ce.data)}else{Ge&&pt&&t.texStorage2D(n.TEXTURE_2D,he,Ce,Oe[0].width,Oe[0].height);for(let V=0,K=Oe.length;V<K;V++)ce=Oe[V],S.format!==di?Se!==null?Ge?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,ce.width,ce.height,Se,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,V,Ce,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ce.width,ce.height,Se,ze,ce.data):t.texImage2D(n.TEXTURE_2D,V,Ce,ce.width,ce.height,0,Se,ze,ce.data)}else if(S.isDataArrayTexture)if(Ge){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Ce,ie.width,ie.height,ie.depth),L)if(S.layerUpdates.size>0){let V;switch(ze){case n.UNSIGNED_BYTE:switch(Se){case n.ALPHA:V=1;break;case n.LUMINANCE:V=1;break;case n.LUMINANCE_ALPHA:V=2;break;case n.RGB:V=3;break;case n.RGBA:V=4;break;default:throw new Error(`Unknown texel size for format ${Se}.`)}break;case n.UNSIGNED_SHORT_4_4_4_4:case n.UNSIGNED_SHORT_5_5_5_1:case n.UNSIGNED_SHORT_5_6_5:V=1;break;default:throw new Error(`Unknown texel size for type ${ze}.`)}const K=ie.width*ie.height*V;for(const se of S.layerUpdates)t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,ie.width,ie.height,1,Se,ze,ie.data.slice(K*se,K*(se+1)));S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Se,ze,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,Se,ze,ie.data);else if(S.isData3DTexture)Ge?(pt&&t.texStorage3D(n.TEXTURE_3D,he,Ce,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Se,ze,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,Se,ze,ie.data);else if(S.isFramebufferTexture){if(pt)if(Ge)t.texStorage2D(n.TEXTURE_2D,he,Ce,ie.width,ie.height);else{let V=ie.width,K=ie.height;for(let se=0;se<he;se++)t.texImage2D(n.TEXTURE_2D,se,Ce,V,K,0,Se,ze,null),V>>=1,K>>=1}}else if(Oe.length>0){if(Ge&&pt){const V=vt(Oe[0]);t.texStorage2D(n.TEXTURE_2D,he,Ce,V.width,V.height)}for(let V=0,K=Oe.length;V<K;V++)ce=Oe[V],Ge?L&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,Se,ze,ce):t.texImage2D(n.TEXTURE_2D,V,Ce,Se,ze,ce);S.generateMipmaps=!1}else if(Ge){if(pt){const V=vt(ie);t.texStorage2D(n.TEXTURE_2D,he,Ce,V.width,V.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,ze,ie)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Se,ze,ie);m(S)&&p(J),be.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function X(T,S,z){if(S.image.length!==6)return;const J=Ve(T,S),Q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);const $=i.get(Q);if(Q.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const be=$e.getPrimaries($e.workingColorSpace),ae=S.colorSpace===Hi?null:$e.getPrimaries(S.colorSpace),oe=S.colorSpace===Hi||be===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ue=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let K=0;K<6;K++)!Ue&&!ie?Se[K]=x(S.image[K],!0,s.maxCubemapSize):Se[K]=ie?S.image[K].image:S.image[K],Se[K]=Le(S,Se[K]);const ze=Se[0],Ce=r.convert(S.format,S.colorSpace),ce=r.convert(S.type),Oe=M(S.internalFormat,Ce,ce,S.colorSpace),Ge=S.isVideoTexture!==!0,pt=$.__version===void 0||J===!0,L=Q.dataReady;let he=w(S,ze);ye(n.TEXTURE_CUBE_MAP,S);let V;if(Ue){Ge&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Oe,ze.width,ze.height);for(let K=0;K<6;K++){V=Se[K].mipmaps;for(let se=0;se<V.length;se++){const Re=V[se];S.format!==di?Ce!==null?Ge?L&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Re.width,Re.height,Ce,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Re.width,Re.height,Ce,ce,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Oe,Re.width,Re.height,0,Ce,ce,Re.data)}}}else{if(V=S.mipmaps,Ge&&pt){V.length>0&&he++;const K=vt(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,Oe,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Ge?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se[K].width,Se[K].height,Ce,ce,Se[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Se[K].width,Se[K].height,0,Ce,ce,Se[K].data);for(let se=0;se<V.length;se++){const je=V[se].image[K].image;Ge?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,je.width,je.height,Ce,ce,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Oe,je.width,je.height,0,Ce,ce,je.data)}}else{Ge?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,ce,Se[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Oe,Ce,ce,Se[K]);for(let se=0;se<V.length;se++){const Re=V[se];Ge?L&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Ce,ce,Re.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Oe,Ce,ce,Re.image[K])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),$.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function te(T,S,z,J,Q,$){const be=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),oe=M(z.internalFormat,be,ae,z.colorSpace);if(!i.get(S).__hasExternalTextures){const ie=Math.max(1,S.width>>$),Se=Math.max(1,S.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,oe,ie,Se,S.depth,0,be,ae,null):t.texImage2D(Q,$,oe,ie,Se,0,be,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),Ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,Q,i.get(z).__webglTexture,0,Ee(S)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,Q,i.get(z).__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(T,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const J=S.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=y(S.stencilBuffer,Q),be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ee(S);Ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,$,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,$,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,$,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,T)}else{const J=S.textures;for(let Q=0;Q<J.length;Q++){const $=J[Q],be=r.convert($.format,$.colorSpace),ae=r.convert($.type),oe=M($.internalFormat,be,ae,$.colorSpace),Ue=Ee(S);z&&Ye(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,oe,S.width,S.height):Ye(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,oe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,oe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const J=i.get(S.depthTexture).__webglTexture,Q=Ee(S);if(S.depthTexture.format===Zn)Ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(S.depthTexture.format===ns)Ye(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Fe(T){const S=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");le(S.__webglFramebuffer,T)}else if(z){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]=n.createRenderbuffer(),pe(S.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),pe(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,S,z){const J=i.get(T);S!==void 0&&te(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Fe(T)}function Xe(T){const S=T.texture,z=i.get(T),J=i.get(S);T.addEventListener("dispose",A);const Q=T.textures,$=T.isWebGLCubeRenderTarget===!0,be=Q.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=S.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let oe=0;oe<S.mipmaps.length;oe++)z.__webglFramebuffer[ae][oe]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(be)for(let ae=0,oe=Q.length;ae<oe;ae++){const Ue=i.get(Q[ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ye(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const oe=Q[ae];z.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Ue=r.convert(oe.format,oe.colorSpace),ie=r.convert(oe.type),Se=M(oe.internalFormat,Ue,ie,oe.colorSpace,T.isXRRenderTarget===!0),ze=Ee(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ye(n.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)te(z.__webglFramebuffer[ae][oe],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,oe);else te(z.__webglFramebuffer[ae],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ae=0,oe=Q.length;ae<oe;ae++){const Ue=Q[ae],ie=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),ye(n.TEXTURE_2D,Ue),te(z.__webglFramebuffer,T,Ue,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),ye(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let oe=0;oe<S.mipmaps.length;oe++)te(z.__webglFramebuffer[oe],T,S,n.COLOR_ATTACHMENT0,ae,oe);else te(z.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}T.depthBuffer&&Fe(T)}function D(T){const S=T.textures;for(let z=0,J=S.length;z<J;z++){const Q=S[z];if(m(Q)){const $=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(Q).__webglTexture;t.bindTexture($,be),p($),t.unbindTexture()}}}const We=[],He=[];function lt(T){if(T.samples>0){if(Ye(T)===!1){const S=T.textures,z=T.width,J=T.height;let Q=n.COLOR_BUFFER_BIT;const $=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(T),ae=S.length>1;if(ae)for(let oe=0;oe<S.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let oe=0;oe<S.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[oe]);const Ue=i.get(S[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,Q,n.NEAREST),l===!0&&(We.length=0,He.length=0,We.push(n.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(We.push($),He.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,He)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let oe=0;oe<S.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,be.__webglColorRenderbuffer[oe]);const Ue=i.get(S[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ee(T){return Math.min(s.maxSamples,T.samples)}function Ye(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Le(T,S){const z=T.colorSpace,J=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Zi&&z!==Hi&&($e.getTransfer(z)===ot?(J!==di||Q!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function vt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=Ne,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ye}function m0(n,e){function t(i,s=Hi){let r;const a=$e.getTransfer(s);if(i===ji)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uu)return n.BYTE;if(i===Ou)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===ts)return n.UNSIGNED_INT;if(i===Ri)return n.FLOAT;if(i===ri)return n.HALF_FLOAT;if(i===Bu)return n.ALPHA;if(i===ku)return n.RGB;if(i===di)return n.RGBA;if(i===zu)return n.LUMINANCE;if(i===Hu)return n.LUMINANCE_ALPHA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===kc)return n.RED;if(i===zc)return n.RED_INTEGER;if(i===Gu)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===Kr||i===Zr||i===Jr||i===Qr)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Lo||i===Do||i===Io||i===No)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uo||i===Oo||i===Fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Uo||i===Oo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bo||i===ko||i===zo||i===Ho||i===Go||i===Vo||i===Wo||i===Xo||i===Yo||i===qo||i===jo||i===Ko||i===Zo||i===Jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ho)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$r||i===Qo||i===$o)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$r)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===el||i===tl||i===il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(i===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class g0 extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _t extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v0={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const x0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ht({vertexShader:x0,fragmentShader:y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new bn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class M0 extends cs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new S0,m=t.getContextAttributes();let p=null,M=null;const y=[],w=[],U=new ee;let A=null;const C=new Jt;C.layers.enable(1),C.viewport=new Pt;const I=new Jt;I.layers.enable(2),I.viewport=new Pt;const E=[C,I],_=new g0;_.layers.enable(1),_.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=y[X];return te===void 0&&(te=new wa,y[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=y[X];return te===void 0&&(te=new wa,y[X]=te),te.getGripSpace()},this.getHand=function(X){let te=y[X];return te===void 0&&(te=new wa,y[X]=te),te.getHandSpace()};function k(X){const te=w.indexOf(X.inputSource);if(te===-1)return;const pe=y[te];pe!==void 0&&(pe.update(X.inputSource,X.frame,c||a),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let X=0;X<y.length;X++){const te=w[X];te!==null&&(w[X]=null,y[X].disconnect(te))}P=null,H=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Vt(f.framebufferWidth,f.framebufferHeight,{format:di,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,pe=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?ns:Zn,pe=m.stencil?is:ts);const Fe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Vt(d.textureWidth,d.textureHeight,{format:di,type:ji,depthTexture:new ih(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(X){for(let te=0;te<X.removed.length;te++){const pe=X.removed[te],le=w.indexOf(pe);le>=0&&(w[le]=null,y[le].disconnect(pe))}for(let te=0;te<X.added.length;te++){const pe=X.added[te];let le=w.indexOf(pe);if(le===-1){for(let Ne=0;Ne<y.length;Ne++)if(Ne>=w.length){w.push(pe),le=Ne;break}else if(w[Ne]===null){w[Ne]=pe,le=Ne;break}if(le===-1)break}const Fe=y[le];Fe&&Fe.connect(pe)}}const W=new R,Z=new R;function G(X,te,pe){W.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(pe.matrixWorld);const le=W.distanceTo(Z),Fe=te.projectionMatrix.elements,Ne=pe.projectionMatrix.elements,Xe=Fe[14]/(Fe[10]-1),D=Fe[14]/(Fe[10]+1),We=(Fe[9]+1)/Fe[5],He=(Fe[9]-1)/Fe[5],lt=(Fe[8]-1)/Fe[0],Ee=(Ne[8]+1)/Ne[0],Ye=Xe*lt,Be=Xe*Ee,Le=le/(-lt+Ee),vt=Le*-lt;te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(Le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Xe+Le,S=D+Le,z=Ye-vt,J=Be+(le-vt),Q=We*D/S*T,$=He*D/S*T;X.projectionMatrix.makePerspective(z,J,Q,$,T,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function de(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;x.texture!==null&&(X.near=x.depthNear,X.far=x.depthFar),_.near=I.near=C.near=X.near,_.far=I.far=C.far=X.far,(P!==_.near||H!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,H=_.far,C.near=P,C.far=H,I.near=P,I.far=H,C.updateProjectionMatrix(),I.updateProjectionMatrix(),X.updateProjectionMatrix());const te=X.parent,pe=_.cameras;de(_,te);for(let le=0;le<pe.length;le++)de(pe[le],te);pe.length===2?G(_,C,I):_.projectionMatrix.copy(C.projectionMatrix),ge(X,_,te)};function ge(X,te,pe){pe===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ps*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let ye=null;function Ve(X,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let le=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,le=!0);for(let Ne=0;Ne<pe.length;Ne++){const Xe=pe[Ne];let D=null;if(f!==null)D=f.getViewport(Xe);else{const He=u.getViewSubImage(d,Xe);D=He.viewport,Ne===0&&(e.setRenderTargetTextures(M,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(M))}let We=E[Ne];We===void 0&&(We=new Jt,We.layers.enable(Ne),We.viewport=new Pt,E[Ne]=We),We.matrix.fromArray(Xe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Xe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(D.x,D.y,D.width,D.height),Ne===0&&(_.matrix.copy(We.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),le===!0&&_.cameras.push(We)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ne=u.getDepthInformation(pe[0]);Ne&&Ne.isValid&&Ne.texture&&x.init(e,Ne,s.renderState)}}for(let pe=0;pe<y.length;pe++){const le=w[pe],Fe=y[pe];le!==null&&Fe!==void 0&&Fe.update(le,te,c||a)}ye&&ye(X,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const et=new th;et.setAnimationLoop(Ve),this.setAnimationLoop=function(X){ye=X},this.dispose=function(){}}}const an=new fi,_0=new nt;function b0(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Gt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Gt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,w=M.envMapRotation;y&&(m.envMap.value=y,an.copy(w),an.x*=-1,an.y*=-1,an.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(an)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function w0(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const w=y.program;i.uniformBlockBinding(M,w)}function c(M,y){let w=s[M.id];w===void 0&&(g(M),w=h(M),s[M.id]=w,M.addEventListener("dispose",m));const U=y.program;i.updateUBOMapping(M,U);const A=e.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const y=u();M.__bindingPointIndex=y;const w=n.createBuffer(),U=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,U,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,w),w}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=s[M.id],w=M.uniforms,U=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,C=w.length;A<C;A++){const I=Array.isArray(w[A])?w[A]:[w[A]];for(let E=0,_=I.length;E<_;E++){const P=I[E];if(f(P,A,E,U)===!0){const H=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let j=0;j<k.length;j++){const W=k[j],Z=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,y,w,U){const A=M.value,C=y+"_"+w;if(U[C]===void 0)return typeof A=="number"||typeof A=="boolean"?U[C]=A:U[C]=A.clone(),!0;{const I=U[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return U[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(M){const y=M.uniforms;let w=0;const U=16;for(let C=0,I=y.length;C<I;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let _=0,P=E.length;_<P;_++){const H=E[_],k=Array.isArray(H.value)?H.value:[H.value];for(let q=0,j=k.length;q<j;q++){const W=k[q],Z=x(W),G=w%U;G!==0&&U-G<Z.boundary&&(w+=U-G),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=Z.storage}}}const A=w%U;return A>0&&(w+=U-A),M.__size=w,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class E0{constructor(e={}){const{canvas:t=vd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Xi,this.toneMappingExposure=1;const y=this;let w=!1,U=0,A=0,C=null,I=-1,E=null;const _=new Pt,P=new Pt;let H=null;const k=new xe(0);let q=0,j=t.width,W=t.height,Z=1,G=null,de=null;const ge=new Pt(0,0,j,W),ye=new Pt(0,0,j,W);let Ve=!1;const et=new ao;let X=!1,te=!1;const pe=new nt,le=new R,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function Xe(){return C===null?Z:1}let D=i;function We(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",K,!1),D===null){const N="webgl2";if(D=We(N,b),D===null)throw We(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let He,lt,Ee,Ye,Be,Le,vt,T,S,z,J,Q,$,be,ae,oe,Ue,ie,Se,ze,Ce,ce,Oe,Ge;function pt(){He=new Im(D),He.init(),ce=new m0(D,He),lt=new Tm(D,He,e,ce),Ee=new f0(D),Ye=new Om(D),Be=new $g,Le=new p0(D,He,Ee,Be,lt,ce,Ye),vt=new Rm(y),T=new Dm(y),S=new Gd(D),Oe=new Em(D,S),z=new Nm(D,S,Ye,Oe),J=new Bm(D,z,S,Ye),Se=new Fm(D,lt,Le),oe=new Cm(Be),Q=new Qg(y,vt,T,He,lt,Oe,oe),$=new b0(y,Be),be=new t0,ae=new o0(He),ie=new wm(y,vt,T,Ee,J,d,l),Ue=new d0(y,J,lt),Ge=new w0(D,Ye,lt,Ee),ze=new Am(D,He,Ye),Ce=new Um(D,He,Ye),Ye.programs=Q.programs,y.capabilities=lt,y.extensions=He,y.properties=Be,y.renderLists=be,y.shadowMap=Ue,y.state=Ee,y.info=Ye}pt();const L=new M0(y,D);this.xr=L,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=He.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=He.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(j,W,!1))},this.getSize=function(b){return b.set(j,W)},this.setSize=function(b,N,F=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,W=N,t.width=Math.floor(b*Z),t.height=Math.floor(N*Z),F===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(j*Z,W*Z).floor()},this.setDrawingBufferSize=function(b,N,F){j=b,W=N,Z=F,t.width=Math.floor(b*F),t.height=Math.floor(N*F),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(ge)},this.setViewport=function(b,N,F,B){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,N,F,B),Ee.viewport(_.copy(ge).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,N,F,B){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,N,F,B),Ee.scissor(P.copy(ye).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){Ee.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(b=!0,N=!0,F=!0){let B=0;if(b){let O=!1;if(C!==null){const ne=C.texture.format;O=ne===Gc||ne===Hc||ne===zc}if(O){const ne=C.texture.type,ue=ne===ji||ne===ts||ne===Cr||ne===is||ne===Fc||ne===Bc,fe=ie.getClearColor(),ve=ie.getClearAlpha(),Ae=fe.r,Te=fe.g,we=fe.b;ue?(f[0]=Ae,f[1]=Te,f[2]=we,f[3]=ve,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ae,g[1]=Te,g[2]=we,g[3]=ve,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT),F&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",K,!1),be.dispose(),ae.dispose(),Be.dispose(),vt.dispose(),T.dispose(),J.dispose(),Oe.dispose(),Ge.dispose(),Q.dispose(),L.dispose(),L.removeEventListener("sessionstart",oi),L.removeEventListener("sessionend",li),Ji.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=Ye.autoReset,N=Ue.enabled,F=Ue.autoUpdate,B=Ue.needsUpdate,O=Ue.type;pt(),Ye.autoReset=b,Ue.enabled=N,Ue.autoUpdate=F,Ue.needsUpdate=B,Ue.type=O}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function se(b){const N=b.target;N.removeEventListener("dispose",se),Re(N)}function Re(b){je(b),Be.remove(b)}function je(b){const N=Be.get(b).programs;N!==void 0&&(N.forEach(function(F){Q.releaseProgram(F)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,F,B,O,ne){N===null&&(N=Fe);const ue=O.isMesh&&O.matrixWorld.determinant()<0,fe=Th(b,N,F,B,O);Ee.setMaterial(B,ue);let ve=F.index,Ae=1;if(B.wireframe===!0){if(ve=z.getWireframeAttribute(F),ve===void 0)return;Ae=2}const Te=F.drawRange,we=F.attributes.position;let Ke=Te.start*Ae,ut=(Te.start+Te.count)*Ae;ne!==null&&(Ke=Math.max(Ke,ne.start*Ae),ut=Math.min(ut,(ne.start+ne.count)*Ae)),ve!==null?(Ke=Math.max(Ke,0),ut=Math.min(ut,ve.count)):we!=null&&(Ke=Math.max(Ke,0),ut=Math.min(ut,we.count));const dt=ut-Ke;if(dt<0||dt===1/0)return;Oe.setup(O,B,fe,F,ve);let Wt,Je=ze;if(ve!==null&&(Wt=S.get(ve),Je=Ce,Je.setIndex(Wt)),O.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Xe()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(O.isLine){let Me=B.linewidth;Me===void 0&&(Me=1),Ee.setLineWidth(Me*Xe()),O.isLineSegments?Je.setMode(D.LINES):O.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else O.isPoints?Je.setMode(D.POINTS):O.isSprite&&Je.setMode(D.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?Je.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)Je.renderInstances(Ke,dt,O.count);else if(F.isInstancedBufferGeometry){const Me=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Bt=Math.min(F.instanceCount,Me);Je.renderInstances(Ke,dt,Bt)}else Je.render(Ke,dt)};function mt(b,N,F){b.transparent===!0&&b.side===gt&&b.forceSinglePass===!1?(b.side=Gt,b.needsUpdate=!0,Fs(b,N,F),b.side=qi,b.needsUpdate=!0,Fs(b,N,F),b.side=gt):Fs(b,N,F)}this.compile=function(b,N,F=null){F===null&&(F=b),m=ae.get(F),m.init(N),M.push(m),F.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),b!==F&&b.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const B=new Set;return b.traverse(function(O){const ne=O.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const fe=ne[ue];mt(fe,F,O),B.add(fe)}else mt(ne,F,O),B.add(ne)}),M.pop(),m=null,B},this.compileAsync=function(b,N,F=null){const B=this.compile(b,N,F);return new Promise(O=>{function ne(){if(B.forEach(function(ue){Be.get(ue).currentProgram.isReady()&&B.delete(ue)}),B.size===0){O(b);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Et=null;function tt(b){Et&&Et(b)}function oi(){Ji.stop()}function li(){Ji.start()}const Ji=new th;Ji.setAnimationLoop(tt),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(b){Et=b,L.setAnimationLoop(b),b===null?Ji.stop():Ji.start()},L.addEventListener("sessionstart",oi),L.addEventListener("sessionend",li),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(N),N=L.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,N,C),m=ae.get(b,M.length),m.init(N),M.push(m),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),et.setFromProjectionMatrix(pe),te=this.localClippingEnabled,X=oe.init(this.clippingPlanes,te),x=be.get(b,p.length),x.init(),p.push(x),L.enabled===!0&&L.isPresenting===!0){const ne=y.xr.getDepthSensingMesh();ne!==null&&Vr(ne,N,-1/0,y.sortObjects)}Vr(b,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(G,de),Ne=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Ne&&ie.addToRenderList(x,b),this.info.render.frame++,X===!0&&oe.beginShadows();const F=m.state.shadowsArray;Ue.render(F,b,N),X===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,O=x.transmissive;if(m.setupLights(),N.isArrayCamera){const ne=N.cameras;if(O.length>0)for(let ue=0,fe=ne.length;ue<fe;ue++){const ve=ne[ue];xo(B,O,b,ve)}Ne&&ie.render(b);for(let ue=0,fe=ne.length;ue<fe;ue++){const ve=ne[ue];vo(x,b,ve,ve.viewport)}}else O.length>0&&xo(B,O,b,N),Ne&&ie.render(b),vo(x,b,N);C!==null&&(Le.updateMultisampleRenderTarget(C),Le.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(y,b,N),Oe.resetDefaultState(),I=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],X===!0&&oe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Vr(b,N,F,B){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)F=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){B&&le.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const ue=J.update(b),fe=b.material;fe.visible&&x.push(b,ue,fe,F,le.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const ue=J.update(b),fe=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),le.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),le.copy(ue.boundingSphere.center)),le.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(fe)){const ve=ue.groups;for(let Ae=0,Te=ve.length;Ae<Te;Ae++){const we=ve[Ae],Ke=fe[we.materialIndex];Ke&&Ke.visible&&x.push(b,ue,Ke,F,le.z,we)}}else fe.visible&&x.push(b,ue,fe,F,le.z,null)}}const ne=b.children;for(let ue=0,fe=ne.length;ue<fe;ue++)Vr(ne[ue],N,F,B)}function vo(b,N,F,B){const O=b.opaque,ne=b.transmissive,ue=b.transparent;m.setupLightsView(F),X===!0&&oe.setGlobalState(y.clippingPlanes,F),B&&Ee.viewport(_.copy(B)),O.length>0&&Os(O,N,F),ne.length>0&&Os(ne,N,F),ue.length>0&&Os(ue,N,F),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function xo(b,N,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new Vt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?ri:ji,minFilter:mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ne=m.state.transmissionRenderTarget[B.id],ue=B.viewport||_;ne.setSize(ue.z,ue.w);const fe=y.getRenderTarget();y.setRenderTarget(ne),y.getClearColor(k),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),Ne?ie.render(F):y.clear();const ve=y.toneMapping;y.toneMapping=Xi;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&oe.setGlobalState(y.clippingPlanes,B),Os(b,F,B),Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let we=0,Ke=N.length;we<Ke;we++){const ut=N[we],dt=ut.object,Wt=ut.geometry,Je=ut.material,Me=ut.group;if(Je.side===gt&&dt.layers.test(B.layers)){const Bt=Je.side;Je.side=Gt,Je.needsUpdate=!0,yo(dt,F,B,Wt,Je,Me),Je.side=Bt,Je.needsUpdate=!0,Te=!0}}Te===!0&&(Le.updateMultisampleRenderTarget(ne),Le.updateRenderTargetMipmap(ne))}y.setRenderTarget(fe),y.setClearColor(k,q),Ae!==void 0&&(B.viewport=Ae),y.toneMapping=ve}function Os(b,N,F){const B=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ne=b.length;O<ne;O++){const ue=b[O],fe=ue.object,ve=ue.geometry,Ae=B===null?ue.material:B,Te=ue.group;fe.layers.test(F.layers)&&yo(fe,N,F,ve,Ae,Te)}}function yo(b,N,F,B,O,ne){b.onBeforeRender(y,N,F,B,O,ne),b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(y,N,F,B,b,ne),O.transparent===!0&&O.side===gt&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,y.renderBufferDirect(F,N,B,O,b,ne),O.side=qi,O.needsUpdate=!0,y.renderBufferDirect(F,N,B,O,b,ne),O.side=gt):y.renderBufferDirect(F,N,B,O,b,ne),b.onAfterRender(y,N,F,B,O,ne)}function Fs(b,N,F){N.isScene!==!0&&(N=Fe);const B=Be.get(b),O=m.state.lights,ne=m.state.shadowsArray,ue=O.state.version,fe=Q.getParameters(b,O.state,ne,N,F),ve=Q.getProgramCacheKey(fe);let Ae=B.programs;B.environment=b.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(b.isMeshStandardMaterial?T:vt).get(b.envMap||B.environment),B.envMapRotation=B.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",se),Ae=new Map,B.programs=Ae);let Te=Ae.get(ve);if(Te!==void 0){if(B.currentProgram===Te&&B.lightsStateVersion===ue)return Mo(b,fe),Te}else fe.uniforms=Q.getUniforms(b),b.onBuild(F,fe,y),b.onBeforeCompile(fe,y),Te=Q.acquireProgram(fe,ve),Ae.set(ve,Te),B.uniforms=fe.uniforms;const we=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=oe.uniform),Mo(b,fe),B.needsLights=Rh(b),B.lightsStateVersion=ue,B.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Te,B.uniformsList=null,Te}function So(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=wr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Mo(b,N){const F=Be.get(b);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function Th(b,N,F,B,O){N.isScene!==!0&&(N=Fe),Le.resetTextureUnits();const ne=N.fog,ue=B.isMeshStandardMaterial?N.environment:null,fe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zi,ve=(B.isMeshStandardMaterial?T:vt).get(B.envMap||ue),Ae=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Te=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!F.morphAttributes.position,Ke=!!F.morphAttributes.normal,ut=!!F.morphAttributes.color;let dt=Xi;B.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=y.toneMapping);const Wt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Je=Wt!==void 0?Wt.length:0,Me=Be.get(B),Bt=m.state.lights;if(X===!0&&(te===!0||b!==E)){const Kt=b===E&&B.id===I;oe.setState(B,b,Kt)}let it=!1;B.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Bt.state.version||Me.outputColorSpace!==fe||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==ve||B.fog===!0&&Me.fog!==ne||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==oe.numPlanes||Me.numIntersection!==oe.numIntersection)||Me.vertexAlphas!==Ae||Me.vertexTangents!==Te||Me.morphTargets!==we||Me.morphNormals!==Ke||Me.morphColors!==ut||Me.toneMapping!==dt||Me.morphTargetsCount!==Je)&&(it=!0):(it=!0,Me.__version=B.version);let yi=Me.currentProgram;it===!0&&(yi=Fs(B,N,O));let Bs=!1,Qi=!1,Wr=!1;const At=yi.getUniforms(),Ni=Me.uniforms;if(Ee.useProgram(yi.program)&&(Bs=!0,Qi=!0,Wr=!0),B.id!==I&&(I=B.id,Qi=!0),Bs||E!==b){At.setValue(D,"projectionMatrix",b.projectionMatrix),At.setValue(D,"viewMatrix",b.matrixWorldInverse);const Kt=At.map.cameraPosition;Kt!==void 0&&Kt.setValue(D,le.setFromMatrixPosition(b.matrixWorld)),lt.logarithmicDepthBuffer&&At.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,Qi=!0,Wr=!0)}if(O.isSkinnedMesh){At.setOptional(D,O,"bindMatrix"),At.setOptional(D,O,"bindMatrixInverse");const Kt=O.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),At.setValue(D,"boneTexture",Kt.boneTexture,Le))}O.isBatchedMesh&&(At.setOptional(D,O,"batchingTexture"),At.setValue(D,"batchingTexture",O._matricesTexture,Le),At.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&At.setValue(D,"batchingColorTexture",O._colorsTexture,Le));const Xr=F.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&Se.update(O,F,yi),(Qi||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,At.setValue(D,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ni.envMap.value=ve,Ni.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Ni.envMapIntensity.value=N.environmentIntensity),Qi&&(At.setValue(D,"toneMappingExposure",y.toneMappingExposure),Me.needsLights&&Ch(Ni,Wr),ne&&B.fog===!0&&$.refreshFogUniforms(Ni,ne),$.refreshMaterialUniforms(Ni,B,Z,W,m.state.transmissionRenderTarget[b.id]),wr.upload(D,So(Me),Ni,Le)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(wr.upload(D,So(Me),Ni,Le),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(D,"center",O.center),At.setValue(D,"modelViewMatrix",O.modelViewMatrix),At.setValue(D,"normalMatrix",O.normalMatrix),At.setValue(D,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Kt=B.uniformsGroups;for(let Yr=0,Ph=Kt.length;Yr<Ph;Yr++){const _o=Kt[Yr];Ge.update(_o,yi),Ge.bind(_o,yi)}}return yi}function Ch(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Rh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,N,F){Be.get(b.texture).__webglTexture=N,Be.get(b.depthTexture).__webglTexture=F;const B=Be.get(b);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const F=Be.get(b);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,F=0){C=b,U=N,A=F;let B=!0,O=null,ne=!1,ue=!1;if(b){const ve=Be.get(b);ve.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):ve.__webglFramebuffer===void 0?Le.setupRenderTarget(b):ve.__hasExternalTextures&&Le.rebindTextures(b,Be.get(b.texture).__webglTexture,Be.get(b.depthTexture).__webglTexture);const Ae=b.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Te=Be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?O=Te[N][F]:O=Te[N],ne=!0):b.samples>0&&Le.useMultisampledRTT(b)===!1?O=Be.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[F]:O=Te,_.copy(b.viewport),P.copy(b.scissor),H=b.scissorTest}else _.copy(ge).multiplyScalar(Z).floor(),P.copy(ye).multiplyScalar(Z).floor(),H=Ve;if(Ee.bindFramebuffer(D.FRAMEBUFFER,O)&&B&&Ee.drawBuffers(b,O),Ee.viewport(_),Ee.scissor(P),Ee.setScissorTest(H),ne){const ve=Be.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,F)}else if(ue){const ve=Be.get(b.texture),Ae=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ve.__webglTexture,F||0,Ae)}I=-1},this.readRenderTargetPixels=function(b,N,F,B,O,ne,ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){Ee.bindFramebuffer(D.FRAMEBUFFER,fe);try{const ve=b.texture,Ae=ve.format,Te=ve.type;if(!lt.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-B&&F>=0&&F<=b.height-O&&D.readPixels(N,F,B,O,ce.convert(Ae),ce.convert(Te),ne)}finally{const ve=C!==null?Be.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(b,N,F,B,O,ne,ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){Ee.bindFramebuffer(D.FRAMEBUFFER,fe);try{const ve=b.texture,Ae=ve.format,Te=ve.type;if(!lt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-B&&F>=0&&F<=b.height-O){const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,ne.byteLength,D.STREAM_READ),D.readPixels(N,F,B,O,ce.convert(Ae),ce.convert(Te),0),D.flush();const Ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await xd(D,Ke,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ne)}finally{D.deleteBuffer(we),D.deleteSync(Ke)}return ne}}finally{const ve=C!==null?Be.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(b,N=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const B=Math.pow(2,-F),O=Math.floor(b.image.width*B),ne=Math.floor(b.image.height*B),ue=N!==null?N.x:0,fe=N!==null?N.y:0;Le.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,ue,fe,O,ne),Ee.unbindTexture()},this.copyTextureToTexture=function(b,N,F=null,B=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1],N=arguments[2],O=arguments[3]||0,F=null);let ne,ue,fe,ve,Ae,Te;F!==null?(ne=F.max.x-F.min.x,ue=F.max.y-F.min.y,fe=F.min.x,ve=F.min.y):(ne=b.image.width,ue=b.image.height,fe=0,ve=0),B!==null?(Ae=B.x,Te=B.y):(Ae=0,Te=0);const we=ce.convert(N.format),Ke=ce.convert(N.type);Le.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const ut=D.getParameter(D.UNPACK_ROW_LENGTH),dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Wt=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Me=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=b.isCompressedTexture?b.mipmaps[O]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,ve),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ae,Te,ne,ue,we,Ke,Bt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ae,Te,Bt.width,Bt.height,we,Bt.data):D.texSubImage2D(D.TEXTURE_2D,O,Ae,Te,we,Ke,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Wt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Me),O===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,N,F=null,B=null,O=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,B=arguments[1]||null,b=arguments[2],N=arguments[3],O=arguments[4]||0);let ne,ue,fe,ve,Ae,Te,we,Ke,ut;const dt=b.isCompressedTexture?b.mipmaps[O]:b.image;F!==null?(ne=F.max.x-F.min.x,ue=F.max.y-F.min.y,fe=F.max.z-F.min.z,ve=F.min.x,Ae=F.min.y,Te=F.min.z):(ne=dt.width,ue=dt.height,fe=dt.depth,ve=0,Ae=0,Te=0),B!==null?(we=B.x,Ke=B.y,ut=B.z):(we=0,Ke=0,ut=0);const Wt=ce.convert(N.format),Je=ce.convert(N.type);let Me;if(N.isData3DTexture)Le.setTexture3D(N,0),Me=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Le.setTexture2DArray(N,0),Me=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Bt=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),Bs=D.getParameter(D.UNPACK_SKIP_ROWS),Qi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Te),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Me,O,we,Ke,ut,ne,ue,fe,Wt,Je,dt.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,O,we,Ke,ut,ne,ue,fe,Wt,dt.data):D.texSubImage3D(Me,O,we,Ke,ut,ne,ue,fe,Wt,Je,dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qi),O===0&&N.generateMipmaps&&D.generateMipmap(Me),Ee.unbindTexture()},this.initRenderTarget=function(b){Be.get(b).__webglFramebuffer===void 0&&Le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Le.setTextureCube(b,0):b.isData3DTexture?Le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Le.setTexture2DArray(b,0):Le.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){U=0,A=0,C=null,Ee.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===no?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===zr?"display-p3":"srgb"}}class A0 extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class T0 extends Nt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ft,h=Ft,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jl extends St{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gn=new nt,Kl=new nt,lr=[],Zl=new Mn,C0=new nt,vs=new qe,xs=new _n;class cr extends qe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gn),Zl.copy(e.boundingBox).applyMatrix4(Gn),this.boundingBox.union(Zl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Gn),xs.copy(e.boundingSphere).applyMatrix4(Gn),this.boundingSphere.union(xs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(i),e.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gn),Kl.multiplyMatrices(i,Gn),vs.matrixWorld=Kl,vs.raycast(e,lr);for(let a=0,o=lr.length;a<o;a++){const l=lr[a];l.instanceId=r,l.object=this,t.push(l)}lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new T0(new Float32Array(s*this.count),s,this.count,kc,Ri));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class co extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nr=new R,Ur=new R,Jl=new nt,ys=new ro,hr=new _n,Ea=new R,Ql=new R;class rs extends Lt{constructor(e=new rt,t=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Nr.fromBufferAttribute(t,s-1),Ur.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Nr.distanceTo(Ur);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,e.ray.intersectsSphere(hr)===!1)return;Jl.copy(s).invert(),ys.copy(e.ray).applyMatrix4(Jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),M=h.getX(x+1),y=ur(this,e,ys,l,p,M);y&&t.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=ur(this,e,ys,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=ur(this,e,ys,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=ur(this,e,ys,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ur(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(Nr.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,r),t.distanceSqToSegment(Nr,Ur,Ea,Ql)>i)return;Ea.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ea);if(!(l<e.near||l>e.far))return{distance:l,point:Ql.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,object:n}}const $l=new R,ec=new R;class as extends rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)$l.fromBufferAttribute(t,s),ec.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$l.distanceTo(ec);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lh extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tc=new nt,Xa=new ro,dr=new _n,fr=new R;class ch extends Lt{constructor(e=new rt,t=new lh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;tc.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,x=f;g<x;g++){const m=c.getX(g);fr.fromBufferAttribute(u,m),ic(fr,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)fr.fromBufferAttribute(u,g),ic(fr,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ic(n,e,t,i,s,r,a){const o=Xa.distanceSqToPoint(n);if(o<t){const l=new R;Xa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ee:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new R,s=[],r=[],a=[],o=new R,l=new nt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(It(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(It(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ho extends pi{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ee){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class R0 extends ho{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uo(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return n+e*r+t*a+i*o}}}const pr=new R,Aa=new uo,Ta=new uo,Ca=new uo;class P0 extends pi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new R){const i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(pr.subVectors(s[0],s[1]).add(s[0]),c=pr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Aa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Ta.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ca.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Aa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ta.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ca.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Aa.calc(l),Ta.calc(l),Ca.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function nc(n,e,t,i,s){const r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function L0(n,e){const t=1-n;return t*t*e}function D0(n,e){return 2*(1-n)*n*e}function I0(n,e){return n*n*e}function Ts(n,e,t,i){return L0(n,e)+D0(n,t)+I0(n,i)}function N0(n,e){const t=1-n;return t*t*t*e}function U0(n,e){const t=1-n;return 3*t*t*n*e}function O0(n,e){return 3*(1-n)*n*n*e}function F0(n,e){return n*n*n*e}function Cs(n,e,t,i,s){return N0(n,e)+U0(n,t)+O0(n,i)+F0(n,s)}class hh extends pi{constructor(e=new ee,t=new ee,i=new ee,s=new ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ee){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cs(e,s.x,r.x,a.x,o.x),Cs(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class B0 extends pi{constructor(e=new R,t=new R,i=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Cs(e,s.x,r.x,a.x,o.x),Cs(e,s.y,r.y,a.y,o.y),Cs(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uh extends pi{constructor(e=new ee,t=new ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends pi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dh extends pi{constructor(e=new ee,t=new ee,i=new ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ts(e,s.x,r.x,a.x),Ts(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z0 extends pi{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){const i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ts(e,s.x,r.x,a.x),Ts(e,s.y,r.y,a.y),Ts(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends pi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(nc(o,l.x,c.x,h.x,u.x),nc(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new ee().fromArray(s))}return this}}var sc=Object.freeze({__proto__:null,ArcCurve:R0,CatmullRomCurve3:P0,CubicBezierCurve:hh,CubicBezierCurve3:B0,EllipseCurve:ho,LineCurve:uh,LineCurve3:k0,QuadraticBezierCurve:dh,QuadraticBezierCurve3:z0,SplineCurve:fh});class H0 extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new sc[s.type]().fromJSON(s))}return this}}class rc extends H0{constructor(e){super(),this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new uh(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new dh(this.currentPoint.clone(),new ee(e,t),new ee(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){const o=new hh(this.currentPoint.clone(),new ee(e,t),new ee(i,s),new ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new fh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){const c=new ho(e,t,i,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fo extends rt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new R,w=new R,U=new R;for(let A=0;A<t.length;A+=3)f(t[A+0],y),f(t[A+1],w),f(t[A+2],U),l(y,w,U,M)}function l(M,y,w,U){const A=U+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const E=M.clone().lerp(w,I/A),_=y.clone().lerp(w,I/A),P=A-I;for(let H=0;H<=P;H++)H===0&&I===A?C[I][H]=E:C[I][H]=E.clone().lerp(_,H/P)}for(let I=0;I<A;I++)for(let E=0;E<2*(A-I)-1;E++){const _=Math.floor(E/2);E%2===0?(d(C[I][_+1]),d(C[I+1][_]),d(C[I][_])):(d(C[I][_+1]),d(C[I+1][_+1]),d(C[I+1][_]))}}function c(M){const y=new R;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(M),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){const M=new R;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const w=m(M)/2/Math.PI+.5,U=p(M)/Math.PI+.5;a.push(w,1-U)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){const y=a[M+0],w=a[M+2],U=a[M+4],A=Math.max(y,w,U),C=Math.min(y,w,U);A>.9&&C<.1&&(y<.2&&(a[M+0]+=1),w<.2&&(a[M+2]+=1),U<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,y){const w=M*3;y.x=e[w+0],y.y=e[w+1],y.z=e[w+2]}function g(){const M=new R,y=new R,w=new R,U=new R,A=new ee,C=new ee,I=new ee;for(let E=0,_=0;E<r.length;E+=9,_+=6){M.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),w.set(r[E+6],r[E+7],r[E+8]),A.set(a[_+0],a[_+1]),C.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),U.copy(M).add(y).add(w).divideScalar(3);const P=m(U);x(A,_+0,M,P),x(C,_+2,y,P),x(I,_+4,w,P)}}function x(M,y,w,U){U<0&&M.x===1&&(a[y]=M.x-1),w.x===0&&w.z===0&&(a[y]=U/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.vertices,e.indices,e.radius,e.details)}}class Or extends rc{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new rc().fromJSON(s))}return this}}const G0={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=ph(n,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(i&&(r=q0(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ls(r,a,t,o,l,f,0),a}};function ph(n,e,t,i,s){let r,a;if(s===sv(n,e,t,i)>0)for(r=e;r<t;r+=i)a=ac(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=ac(r,n[r],n[r+1],a);return a&&Gr(a,a.next)&&(Is(a),a=a.next),a}function xn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Gr(t,t.next)||ct(t.prev,t,t.next)===0)){if(Is(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ls(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Q0(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?W0(n,i,s,r):V0(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Is(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=X0(xn(n),e,t),Ls(n,e,t,i,s,r,2)):a===2&&Y0(n,e,t,i,s,r):Ls(xn(n),e,t,i,s,r,1);break}}}function V0(n){const e=n.prev,t=n,i=n.next;if(ct(e,t,i)>=0)return!1;const s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Yn(s,o,r,l,a,c,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function W0(n,e,t,i){const s=n.prev,r=n,a=n.next;if(ct(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,x=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Ya(f,g,e,t,i),M=Ya(x,m,e,t,i);let y=n.prevZ,w=n.nextZ;for(;y&&y.z>=p&&w&&w.z<=M;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Yn(o,h,l,u,c,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0||(y=y.prevZ,w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Yn(o,h,l,u,c,d,w.x,w.y)&&ct(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Yn(o,h,l,u,c,d,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;w&&w.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Yn(o,h,l,u,c,d,w.x,w.y)&&ct(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function X0(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Gr(s,r)&&mh(s,i,i.next,r)&&Ds(s,r)&&Ds(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Is(i),Is(i.next),i=n=r),i=i.next}while(i!==n);return xn(i)}function Y0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tv(a,o)){let l=gh(a,o);a=xn(a,a.next),l=xn(l,l.next),Ls(a,e,t,i,s,r,0),Ls(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function q0(n,e,t,i){const s=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=ph(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(ev(c));for(s.sort(j0),r=0;r<s.length;r++)t=K0(s[r],t);return t}function j0(n,e){return n.x-e.x}function K0(n,e){const t=Z0(n,e);if(!t)return e;const i=gh(t,n);return xn(i,i.next),xn(t,t.next)}function Z0(n,e){let t=e,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,l=s.x,c=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Yn(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Ds(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&J0(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function J0(n,e){return ct(n.prev,n,e.prev)<0&&ct(e.next,n,n.next)<0}function Q0(n,e,t,i){let s=n;do s.z===0&&(s.z=Ya(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,$0(s)}function $0(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function Ya(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ev(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Yn(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function tv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!iv(n,e)&&(Ds(n,e)&&Ds(e,n)&&nv(n,e)&&(ct(n.prev,n,e.prev)||ct(n,e.prev,e))||Gr(n,e)&&ct(n.prev,n,n.next)>0&&ct(e.prev,e,e.next)>0)}function ct(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Gr(n,e){return n.x===e.x&&n.y===e.y}function mh(n,e,t,i){const s=gr(ct(n,e,t)),r=gr(ct(n,e,i)),a=gr(ct(t,i,n)),o=gr(ct(t,i,e));return!!(s!==r&&a!==o||s===0&&mr(n,t,e)||r===0&&mr(n,i,e)||a===0&&mr(t,n,i)||o===0&&mr(t,e,i))}function mr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function gr(n){return n>0?1:n<0?-1:0}function iv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ds(n,e){return ct(n.prev,n,n.next)<0?ct(n,e,n.next)>=0&&ct(n,n.prev,e)>=0:ct(n,e,n.prev)<0||ct(n,n.next,e)<0}function nv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gh(n,e){const t=new qa(n.i,n.x,n.y),i=new qa(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ac(n,e,t,i){const s=new qa(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Is(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function qa(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sv(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Rs{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Rs.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];oc(e),lc(i,e);let a=e.length;t.forEach(oc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,lc(i,t[l]);const o=G0.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function oc(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function lc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class po extends fo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new po(e.radius,e.detail)}}class jt extends rt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new R,g=new ee;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const M=p+m,y=M,w=M+i+1,U=M+i+2,A=M+1;o.push(y,w,A),o.push(w,U,A)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ns extends rt{constructor(e=new Or([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(a,2));function c(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Rs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Rs.isClockWise(M)===!0&&(g[m]=M.reverse())}const x=Rs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){const M=x[m],y=M[0]+u,w=M[1]+u,U=M[2]+u;i.push(y,w,U),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return rv(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];i.push(a)}return new Ns(i,e.curveSegments)}}function rv(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Fr extends rt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const M=[],y=p/i;let w=0;p===0&&a===0?w=.5/t:p===i&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){const A=U/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+w,1-y),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){const y=h[p][M+1],w=h[p][M],U=h[p+1][M],A=h[p+1][M+1];(p!==0||a>0)&&f.push(y,w,A),(p!==i-1||l<Math.PI)&&f.push(w,U,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class av extends rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new R,r=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,x=d+f;g<x;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),M=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,M),cc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),cc(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new st(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function cc(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}class vh extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ra=new nt,hc=new R,uc=new R;class ov{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(hc),uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uc),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lv extends ov{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cv extends vh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new lv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hv extends vh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class uv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=dc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function dc(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);const Y={bloom:{off:{strength:0,radius:0,threshold:1},low:{strength:.42,radius:.26,threshold:.34},medium:{strength:.78,radius:.36,threshold:.24},high:{strength:1.08,radius:.48,threshold:.18}},bloomStrengthScale:{soft:.78,balanced:1,radiant:1.22},bloomRadiusScale:{tight:.76,medium:1,wide:1.25},chromaticAberration:{off:0,low:.0018},backgroundIntensity:{low:.68,medium:1,high:1.22},particleDensity:{low:.62,medium:1,high:1.32},player:{hoverAmplitude:.12,hoverSpeed:2.2,idlePulse:.1,shootPulseDuration:.18,dashPulseDuration:.36,bombPulseDuration:.72,damagePulseDuration:.48,deathPulseDuration:.9,haloScale:2.75},projectile:{coreRadius:.92,glowRadius:2.25,ringInnerRadius:1.08,ringOuterRadius:1.42,stretchMin:1.35,stretchMax:2.65,weaponProfiles:{vectorBolt:{tracerLength:7.2,tracerWidth:1.72,coreScale:1.18,glowScale:1.48,ringScale:1.12,backOffset:1.55},scatterCrown:{tracerLength:5.6,tracerWidth:1.58,coreScale:1.08,glowScale:1.34,ringScale:.98,backOffset:1.08},lanceBeam:{tracerLength:6.4,tracerWidth:1.5,coreScale:1.1,glowScale:1.38,ringScale:1,backOffset:1.35}}},trail:{length:34,pointSpacing:.32,baseOpacity:.34,dashOpacity:.84,afterimageCount:6},enemies:{glowOpacity:.18,coreOpacity:.32,accentOpacity:.76,spawnScaleDuration:.42,pulseSpeed:5.5},arena:{gridOpacity:.68,symbolOpacity:.125,starCount:180,parallaxSpeed:.045,rippleStrength:.48,dashRippleStrength:.52,bombRippleStrength:1.85,infiniteGridScale:4.9,gridFadeStart:.42,gridFadeEnd:.96,gridFlowSpeed:.58,gridWaveAmplitude:.075,gridWaveFrequency:.105,gridWaveSpeed:.72,gridRgbWaveStrength:.42,gridRgbWaveScale:.073,gridRgbWaveSpeed:.36,gridRgbMotionFadeStart:.75,gridRgbMotionFadeEnd:8,gridRgbMotionSmoothing:9,gridRgbMovingStrength:.12,gridRgbMovingOriginInfluence:0,motionGridOpacity:.34,motionGridLineWidth:.012,motionGridMajorLineWidth:.018,motionGridParallax:.34,motionGridRgbStrength:.24,energyPlaneOpacity:.025,energyPlaneMovingOpacity:.035},explosions:{enemyBurstParticles:42,spectralBurstParticles:56,shootRingRadius:2.7,dashRingRadius:4.1,bombRingScale:1.35},shake:{shootImpulse:.025,dashImpulse:.16,bombImpulse:.62,damageImpulse:.52,killImpulse:.1}};class dv{constructor(){v(this,"object",new _t);v(this,"material");v(this,"mesh");v(this,"current");v(this,"time",0);v(this,"motionAmount",0);v(this,"shotPulse",0);v(this,"killPulse",0);v(this,"bombPulse",0);v(this,"dashPulse",0);v(this,"pickupPulse",0);v(this,"scorePulse",0);v(this,"pulseScale",1);this.current=Qn("neonCathedralGrid"),this.material=this.createMaterial();const e=new bn(Ct.width*Y.arena.infiniteGridScale*1.08,Ct.height*Y.arena.infiniteGridScale*1.12,1,1);this.mesh=new qe(e,this.material),this.mesh.rotation.x=-Math.PI*.5,this.mesh.position.y=-.2,this.mesh.frustumCulled=!1,this.object.add(this.mesh),this.applyBackground(this.current)}applySettings(e){this.setBackground(e.selectedBackground);const t=Y.backgroundIntensity[e.backgroundIntensity];this.material.uniforms.opacity.value=.26*this.current.opacityScale*t,this.pulseScale=e.flashReduction?.42:1}setBackground(e){const t=Qn(e);t.id!==this.current.id&&(this.current=t,this.applyBackground(t))}emit(e){const t=this.current.reactivity;e.type==="shoot"?this.shotPulse=Math.min(1.2,this.shotPulse+.18*t.shooting*this.pulseScale):e.type==="beamFired"?this.shotPulse=Math.min(1.2,this.shotPulse+.26*t.shooting*this.pulseScale):e.type==="enemyKilled"?(this.killPulse=Math.min(1.4,this.killPulse+.28*t.kills*this.pulseScale),this.scorePulse=Math.min(1.3,this.scorePulse+.16*t.multiplier*this.pulseScale)):e.type==="bomb"?this.bombPulse=Math.min(1.65,this.bombPulse+1.05*t.bombs*this.pulseScale):e.type==="dash"?this.dashPulse=Math.min(1.2,this.dashPulse+.58*t.dash*this.pulseScale):e.type==="pickupCollected"||e.type==="relicBonus"?this.pickupPulse=Math.min(1.15,this.pickupPulse+.46*this.pulseScale):e.type==="skinAbility"||e.type==="relicZone"?this.scorePulse=Math.min(1.25,this.scorePulse+.3*this.pulseScale):e.type==="achievementUnlocked"&&(this.scorePulse=Math.min(1.6,this.scorePulse+.72*this.pulseScale))}update(e,t){this.time+=e;const i=Math.hypot(t.velocityX,t.velocityY),s=Ki.smoothstep(i,1.5,34),r=1-Math.exp(-e*5.8);this.motionAmount+=(s-this.motionAmount)*r,this.shotPulse*=Math.exp(-e*5.2),this.killPulse*=Math.exp(-e*3.1),this.bombPulse*=Math.exp(-e*1.85),this.dashPulse*=Math.exp(-e*4.2),this.pickupPulse*=Math.exp(-e*3.8),this.scorePulse*=Math.exp(-e*2.7),this.object.position.x=t.focusX,this.object.position.z=t.focusY,this.material.uniforms.time.value=this.time,this.material.uniforms.origin.value.set(t.focusX,t.focusY),this.material.uniforms.motionAmount.value=this.motionAmount,this.material.uniforms.velocity.value.set(t.velocityX,t.velocityY),this.material.uniforms.multiplier.value=t.multiplier,this.material.uniforms.healthRatio.value=t.healthRatio,this.material.uniforms.wave.value=t.wave,this.material.uniforms.enemyPressure.value=Ki.clamp(t.enemyCount/90,0,1),this.material.uniforms.shotPulse.value=this.shotPulse,this.material.uniforms.killPulse.value=this.killPulse,this.material.uniforms.bombPulse.value=this.bombPulse,this.material.uniforms.dashPulse.value=this.dashPulse,this.material.uniforms.pickupPulse.value=this.pickupPulse,this.material.uniforms.scorePulse.value=this.scorePulse}applyBackground(e){this.material.uniforms.mode.value=e.mode,this.material.uniforms.baseColor.value.setHex(e.palette.base),this.material.uniforms.primaryColor.value.setHex(e.palette.primary),this.material.uniforms.secondaryColor.value.setHex(e.palette.secondary),this.material.uniforms.accentColor.value.setHex(e.palette.accent),this.material.uniforms.parallax.value=e.parallax,this.material.uniforms.movementReactivity.value=e.reactivity.movement,this.material.uniforms.multiplierReactivity.value=e.reactivity.multiplier}createMaterial(){const e=Ct.width*Y.arena.infiniteGridScale*1.08*.5,t=Ct.height*Y.arena.infiniteGridScale*1.12*.5;return new ht({uniforms:{time:{value:0},mode:{value:0},opacity:{value:.26},parallax:{value:.06},movementReactivity:{value:.6},multiplierReactivity:{value:.7},motionAmount:{value:0},multiplier:{value:1},healthRatio:{value:1},wave:{value:1},enemyPressure:{value:0},shotPulse:{value:0},killPulse:{value:0},bombPulse:{value:0},dashPulse:{value:0},pickupPulse:{value:0},scorePulse:{value:0},origin:{value:new ee},velocity:{value:new ee},halfSize:{value:new ee(e,t)},baseColor:{value:new xe(198675)},primaryColor:{value:new xe(6813951)},secondaryColor:{value:new xe(16731636)},accentColor:{value:new xe(16777215)}},vertexShader:`
        varying vec2 vFloor;
        varying vec2 vUv;

        void main() {
          vFloor = position.xy;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float bombPulse;
        uniform float dashPulse;
        uniform float enemyPressure;
        uniform float healthRatio;
        uniform float killPulse;
        uniform float mode;
        uniform float motionAmount;
        uniform float movementReactivity;
        uniform float multiplier;
        uniform float multiplierReactivity;
        uniform float opacity;
        uniform float parallax;
        uniform float pickupPulse;
        uniform float scorePulse;
        uniform float shotPulse;
        uniform float time;
        uniform float wave;
        uniform vec2 halfSize;
        uniform vec2 origin;
        uniform vec2 velocity;
        uniform vec3 accentColor;
        uniform vec3 baseColor;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        varying vec2 vFloor;
        varying vec2 vUv;

        float lineMask(float value, float width) {
          float cell = abs(fract(value - 0.5) - 0.5);
          float aa = max(fwidth(value) * 1.8, 0.001);
          return 1.0 - smoothstep(width, width + aa, cell);
        }

        float gridMask(vec2 coord, float spacing, float width) {
          vec2 scaled = coord / spacing;
          return max(lineMask(scaled.x, width), lineMask(scaled.y, width));
        }

        float ringMask(vec2 coord, float radius, float width) {
          float distanceToCenter = length(coord);
          float aa = max(fwidth(distanceToCenter) * 2.0, 0.002);
          return 1.0 - smoothstep(width, width + aa, abs(distanceToCenter - radius));
        }

        mat2 rotate2d(float angle) {
          float s = sin(angle);
          float c = cos(angle);
          return mat2(c, -s, s, c);
        }

        vec3 paletteMix(float value) {
          float t = clamp(value, 0.0, 1.0);
          vec3 first = mix(primaryColor, secondaryColor, smoothstep(0.08, 0.7, t));
          return mix(first, accentColor, smoothstep(0.68, 1.0, t));
        }

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(0.76, 0.99, edge);
          float radialFade = 1.0 - smoothstep(0.78, 1.09, length(vFloor / halfSize));
          float fade = edgeFade * radialFade;

          vec2 motionDir = normalize(velocity + vec2(0.001, 0.0));
          float motionDrift = motionAmount * movementReactivity;
          vec2 stable = vFloor + origin * parallax;
          vec2 smoothWorld = mix(stable, vFloor + origin * parallax * 0.18, motionAmount * 0.72);
          vec2 flow = smoothWorld + motionDir * time * motionDrift * 3.2;
          float multiplierPulse = clamp((multiplier - 1.0) / 24.0, 0.0, 1.0) * multiplierReactivity;
          float dangerPulse = 1.0 - clamp(healthRatio, 0.0, 1.0);
          float eventPulse =
            shotPulse * 0.12 +
            killPulse * 0.28 +
            bombPulse * 0.48 +
            dashPulse * 0.18 +
            pickupPulse * 0.14 +
            scorePulse * 0.2 +
            multiplierPulse * 0.18 +
            enemyPressure * 0.08 +
            dangerPulse * 0.09;

          float mask = 0.0;
          float glow = 0.0;
          float colorPhase = 0.0;

          if (mode < 0.5) {
            vec2 cathedral = rotate2d(0.785398) * flow;
            float lattice = gridMask(cathedral, 9.0, 0.018) * 0.44;
            float fine = gridMask(flow, 18.0, 0.01) * 0.22;
            float ring = max(ringMask(flow, 30.0 + sin(time * 0.35) * 1.6, 0.18), ringMask(flow, 58.0, 0.14)) * 0.46;
            float spoke = pow(abs(sin(atan(flow.y, flow.x) * 6.0 + time * 0.25)), 24.0) * 0.28;
            mask = lattice + fine + ring + spoke;
            glow = 0.16 + eventPulse * 0.8 + multiplierPulse * 0.24;
            colorPhase = lattice + ring + multiplierPulse;
          } else if (mode < 1.5) {
            float sonar = lineMask(length(flow) * 0.052 - time * 0.16 + bombPulse * 0.12, 0.018) * 0.75;
            float cross = gridMask(rotate2d(0.16) * flow, 28.0, 0.009) * 0.18;
            float drift = pow(0.5 + 0.5 * sin(flow.x * 0.036 + flow.y * 0.052 - time * 0.9), 3.0) * 0.2;
            mask = sonar + cross + drift;
            glow = 0.13 + killPulse * 0.45 + pickupPulse * 0.28 + bombPulse * 0.42;
            colorPhase = sonar + drift;
          } else if (mode < 2.5) {
            vec2 furnace = rotate2d(-0.26) * flow;
            float heat = pow(0.5 + 0.5 * sin(furnace.x * 0.08 + sin(furnace.y * 0.045 + time) * 1.6 + time * 0.8), 3.4);
            float seam = gridMask(furnace, 16.0, 0.01) * 0.28;
            float corona = lineMask(length(furnace) * 0.035 - time * 0.1, 0.012) * 0.34;
            mask = heat * 0.32 + seam + corona;
            glow = 0.12 + shotPulse * 0.36 + killPulse * 0.42 + bombPulse * 0.58;
            colorPhase = heat + shotPulse * 0.35;
          } else if (mode < 3.5) {
            vec2 circuit = floor(flow / 7.5) * 7.5;
            vec2 local = abs(fract(flow / 7.5) - 0.5);
            float traces = ((1.0 - step(0.018, local.x)) + (1.0 - step(0.018, local.y))) * 0.18;
            float node = (1.0 - smoothstep(0.0, 0.055, length(local - 0.5))) * 0.34;
            float glitch = lineMask((circuit.x + circuit.y) * 0.019 + time * 0.22 + dashPulse * 0.2, 0.012) * 0.32;
            mask = traces + node + glitch;
            glow = 0.11 + dashPulse * 0.52 + killPulse * 0.32 + scorePulse * 0.26;
            colorPhase = glitch + node + dashPulse;
          } else if (mode < 4.5) {
            vec2 aurora = rotate2d(0.08) * flow;
            float curtain = pow(0.5 + 0.5 * sin(aurora.x * 0.045 + sin(aurora.y * 0.037 - time * 0.52) * 2.2 + time * 0.42), 4.0);
            float veil = smoothstep(0.44, 0.92, curtain) * (0.52 + 0.28 * sin(aurora.y * 0.026 + time));
            float graveLines = gridMask(rotate2d(-0.52) * aurora, 24.0, 0.007) * 0.18;
            mask = veil + graveLines;
            glow = 0.12 + killPulse * 0.4 + multiplierPulse * 0.34 + pickupPulse * 0.24;
            colorPhase = curtain + multiplierPulse;
          } else if (mode < 5.5) {
            vec2 monolith = rotate2d(0.03) * flow;
            float pillars = pow(lineMask(monolith.x / 18.0 + sin(monolith.y * 0.011) * 0.035, 0.045), 1.6);
            float gates = gridMask(monolith, 30.0, 0.006) * 0.28;
            float halo = ringMask(monolith, 44.0 + sin(time * 0.2) * 2.2, 0.16) * 0.22;
            mask = pillars * 0.28 + gates + halo;
            glow = 0.1 + shotPulse * 0.24 + killPulse * 0.32 + scorePulse * 0.28;
            colorPhase = pillars + halo;
          } else if (mode < 6.5) {
            vec2 horizon = flow;
            float yDepth = clamp((horizon.y / halfSize.y + 1.0) * 0.5, 0.0, 1.0);
            float bands = lineMask(pow(max(0.02, yDepth), 1.8) * 28.0 - time * (0.5 + motionAmount * 0.35), 0.018) * 0.72;
            float vanishing = max(lineMask((horizon.x / max(10.0, abs(horizon.y) + 12.0)) * 14.0, 0.01), 0.0) * 0.2;
            float skyline = smoothstep(0.46, 0.5, yDepth) * (1.0 - smoothstep(0.5, 0.56, yDepth)) * 0.58;
            mask = bands + vanishing + skyline;
            glow = 0.13 + dashPulse * 0.32 + shotPulse * 0.2 + multiplierPulse * 0.32;
            colorPhase = yDepth + motionAmount * 0.35 + dashPulse;
          } else {
            vec2 core = rotate2d(sin(time * 0.09) * 0.16) * flow;
            float veins = gridMask(core + sin(core.yx * 0.04 + time * 0.6) * 2.4, 14.0, 0.012) * 0.22;
            float cells = pow(0.5 + 0.5 * sin(core.x * 0.075 + sin(core.y * 0.09 - time * 0.7) * 2.4 + time * 0.38), 5.0);
            float pulseRing = lineMask(length(core) * 0.045 - time * 0.12 - killPulse * 0.08, 0.016) * 0.45;
            mask = cells * 0.26 + veins + pulseRing;
            glow = 0.12 + killPulse * 0.44 + enemyPressure * 0.22 + dangerPulse * 0.28 + multiplierPulse * 0.28;
            colorPhase = cells + dangerPulse * 0.4 + multiplierPulse;
          }

          float waveTint = 0.5 + 0.5 * sin(time * 0.16 + wave * 0.37 + colorPhase * 2.0);
          vec3 color = mix(baseColor * 0.42, paletteMix(waveTint), clamp(mask * 1.4 + eventPulse, 0.0, 1.0));
          color = mix(color, accentColor, clamp(bombPulse * 0.18 + pickupPulse * 0.08 + scorePulse * 0.08, 0.0, 0.36));
          float alpha = opacity * fade * clamp(mask * (0.34 + glow) + eventPulse * 0.08, 0.0, 0.9);
          if (alpha < 0.002) discard;
          gl_FragColor = vec4(color, alpha);
        }
      `,transparent:!0,blending:yt,depthWrite:!1,depthTest:!1,side:gt})}}class fv{constructor(){v(this,"object");v(this,"positions");v(this,"base");v(this,"material");v(this,"ripples",[]);v(this,"time",0);const e=Ct.width*Y.arena.infiniteGridScale*.5,t=Ct.height*Y.arena.infiniteGridScale*.5,i=Dt.grid.spacing,s=[];for(let a=-e;a<=e+.01;a+=i)for(let o=-t;o<t-.01;o+=i)s.push(a,0,o,a,0,Math.min(o+i,t));for(let a=-t;a<=t+.01;a+=i)for(let o=-e;o<e-.01;o+=i)s.push(o,0,a,Math.min(o+i,e),0,a);this.positions=new Float32Array(s),this.base=new Float32Array(s);const r=new rt;r.setAttribute("position",new St(this.positions,3)),this.material=new ht({uniforms:{color:{value:new xe(3596287)},opacity:{value:.48},time:{value:0},origin:{value:new ee},halfSize:{value:new ee(e,t)},fadeStart:{value:Y.arena.gridFadeStart},fadeEnd:{value:Y.arena.gridFadeEnd},flowSpeed:{value:Y.arena.gridFlowSpeed},rgbWaveStrength:{value:Y.arena.gridRgbWaveStrength},rgbWaveScale:{value:Y.arena.gridRgbWaveScale},rgbWaveSpeed:{value:Y.arena.gridRgbWaveSpeed},motionAmount:{value:0},movingRgbStrength:{value:Y.arena.gridRgbMovingStrength},movingOriginInfluence:{value:Y.arena.gridRgbMovingOriginInfluence}},vertexShader:`
        uniform float fadeStart;
        uniform float fadeEnd;
        uniform float flowSpeed;
        uniform float rgbWaveScale;
        uniform float rgbWaveSpeed;
        uniform float rgbWaveStrength;
        uniform float opacity;
        uniform float time;
        uniform vec2 origin;
        uniform vec2 halfSize;
        varying vec2 vFloor;
        varying vec2 vWorld;

        void main() {
          vFloor = position.xz;
          vWorld = position.xz + origin;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float fadeStart;
        uniform float fadeEnd;
        uniform float flowSpeed;
        uniform float opacity;
        uniform float rgbWaveScale;
        uniform float rgbWaveSpeed;
        uniform float rgbWaveStrength;
        uniform float motionAmount;
        uniform float movingRgbStrength;
        uniform float movingOriginInfluence;
        uniform float time;
        uniform vec2 origin;
        uniform vec2 halfSize;
        uniform vec3 color;
        varying vec2 vFloor;
        varying vec2 vWorld;

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(fadeStart, fadeEnd, edge);
          vec2 stableWorld = vFloor + origin * movingOriginInfluence;
          vec2 waveSpace = mix(vWorld, stableWorld, motionAmount);
          float activeSpeed = rgbWaveSpeed * mix(1.0, 0.55, motionAmount);
          float activeStrength = rgbWaveStrength * mix(1.0, movingRgbStrength, motionAmount);
          float flow = 0.82 + 0.18 * sin(waveSpace.x * 0.11 + waveSpace.y * 0.075 + time * flowSpeed);
          float breath = 0.9 + 0.1 * sin((abs(waveSpace.x) + abs(waveSpace.y)) * 0.045 - time * flowSpeed * 0.7);
          float radialWaveStrength = mix(0.35, 0.11, motionAmount);
          float ribbon =
            sin((waveSpace.x + waveSpace.y * 0.62) * rgbWaveScale + time * activeSpeed * 6.28318) * 0.5 +
            sin(length(waveSpace) * rgbWaveScale * 0.78 - time * activeSpeed * 4.2) * radialWaveStrength +
            sin((waveSpace.x - waveSpace.y) * rgbWaveScale * 1.34 + time * activeSpeed * 2.7) * 0.15;
          float huePhase = ribbon * 2.3 + time * activeSpeed * 5.1;
          vec3 rgbWave = 0.52 + 0.34 * cos(huePhase + vec3(0.0, 2.094, 4.188));
          float waveMask = smoothstep(-0.42, 0.82, ribbon);
          vec3 finalColor = mix(color, rgbWave, activeStrength * waveMask);
          float motionFade = mix(1.0, 0.38, motionAmount);
          float alpha = opacity * edgeFade * flow * breath * motionFade;
          if (alpha < 0.006) discard;
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,transparent:!0,blending:yt,depthWrite:!1}),this.object=new as(r,this.material),this.object.frustumCulled=!1}setWorldOrigin(e,t){this.object.position.x=e,this.object.position.z=t,this.material.uniforms.origin.value.set(e,t)}setMotionAmount(e){this.material.uniforms.motionAmount.value=Ki.clamp(e,0,1)}addRipple(e,t,i=1,s=Dt.grid.rippleLife){this.ripples.length>=Dt.grid.maxRipples&&this.ripples.shift(),this.ripples.push({x:e,y:t,age:0,life:s,strength:i})}setOpacity(e){this.material.uniforms.opacity.value=e}setColor(e){this.material.uniforms.color.value.setHex(e)}update(e){this.time+=e,this.material.uniforms.time.value=this.time;for(const i of this.ripples)i.age+=e;for(let i=this.ripples.length-1;i>=0;i-=1)this.ripples[i].age>=this.ripples[i].life&&this.ripples.splice(i,1);for(let i=0;i<this.positions.length;i+=3){const s=this.base[i],r=this.base[i+2],a=s+this.object.position.x,o=r+this.object.position.z;let l=Math.sin(a*Y.arena.gridWaveFrequency+this.time*Y.arena.gridWaveSpeed)*Math.sin(o*Y.arena.gridWaveFrequency*.74-this.time*Y.arena.gridWaveSpeed*.67)*Y.arena.gridWaveAmplitude;for(const c of this.ripples){const h=a-c.x,u=o-c.y,d=Math.sqrt(h*h+u*u),f=c.age/c.life,g=Math.exp(-d*.06)*Math.pow(1-f,1.7);l+=Math.sin(d*1.35-c.age*18)*g*c.strength}this.positions[i+1]=l}const t=this.object.geometry.getAttribute("position");t.needsUpdate=!0}}const pv={default:{chaser:16727538,dasher:16762967,splitter:8257379,orbitMine:3798527,swarm:16731261},"high-contrast":{chaser:16711935,dasher:16777215,splitter:16776960,orbitMine:65535,swarm:16722474},colourblind:{chaser:15113984,dasher:15787074,splitter:40563,orbitMine:5682409,swarm:13983232}};function mv(n,e){return pv[e.palette][n]}function Ii(n,e=1){return new co({color:n,transparent:e<1,opacity:e,blending:yt,depthWrite:!1})}function Li(n,e=.28){return new ai({color:n,transparent:!0,opacity:e,blending:yt,depthWrite:!1,side:gt})}function gn(n,e=16777215){return xv(n)>=.16?n:vv(n,e,.58)}function gv(n,e){n.traverse(t=>{const i=t.material;if(!i)return;const s=Array.isArray(i)?i:[i];for(const r of s)"color"in r&&r.color instanceof xe&&r.color.setHex(e)})}function vv(n,e,t){const i=Math.max(0,Math.min(1,t)),s=n>>16&255,r=n>>8&255,a=n&255,o=e>>16&255,l=e>>8&255,c=e&255,h=Math.round(s+(o-s)*i),u=Math.round(r+(l-r)*i),d=Math.round(a+(c-a)*i);return h<<16|u<<8|d}function xv(n){const e=(n>>16&255)/255,t=(n>>8&255)/255,i=(n&255)/255;return .2126*e+.7152*t+.0722*i}class yv{constructor(){v(this,"object",new _t);v(this,"grid",new fv);v(this,"background",new dv);v(this,"stars");v(this,"starMaterial");v(this,"symbols",new _t);v(this,"energyPlane");v(this,"energyPlaneMaterial");v(this,"motionGrid");v(this,"motionGridMaterial");v(this,"time",0);v(this,"previousFocusX",0);v(this,"previousFocusY",0);v(this,"motionAmount",0);v(this,"motionInitialized",!1);this.object.add(this.background.object),this.object.add(this.grid.object);const e=new Float32Array(Y.arena.starCount*3),t=Ct.width*Y.arena.infiniteGridScale*.72,i=Ct.height*Y.arena.infiniteGridScale*.72;for(let a=0;a<Y.arena.starCount;a+=1){const o=a*3;e[o]=(Math.random()-.5)*t,e[o+1]=-.35-Math.random()*2.4,e[o+2]=(Math.random()-.5)*i}const s=new rt;s.setAttribute("position",new St(e,3)),this.starMaterial=new lh({color:7322111,size:.085,transparent:!0,opacity:.4,blending:yt,depthWrite:!1}),this.stars=new ch(s,this.starMaterial),this.object.add(this.stars),this.energyPlaneMaterial=this.createEnergyPlaneMaterial();const r=new bn(Ct.width*Y.arena.infiniteGridScale,Ct.height*Y.arena.infiniteGridScale,1,1);this.energyPlane=new qe(r,this.energyPlaneMaterial),this.energyPlane.rotation.x=-Math.PI*.5,this.energyPlane.position.y=-.14,this.energyPlane.frustumCulled=!1,this.object.add(this.energyPlane),this.motionGridMaterial=this.createMotionGridMaterial(),this.motionGrid=new qe(r.clone(),this.motionGridMaterial),this.motionGrid.rotation.x=-Math.PI*.5,this.motionGrid.position.y=-.12,this.motionGrid.frustumCulled=!1,this.object.add(this.motionGrid),this.createFloorSymbols(),this.object.add(this.symbols)}applySettings(e){const t=Qn(e.selectedBackground),i=Y.backgroundIntensity[e.backgroundIntensity];this.background.applySettings(e),this.starMaterial.color.setHex(t.palette.star),this.starMaterial.opacity=.34*i*t.starOpacityScale,this.energyPlaneMaterial.uniforms.opacity.value=Y.arena.energyPlaneOpacity*i*t.opacityScale,this.energyPlaneMaterial.uniforms.baseColor.value.setHex(t.palette.base),this.energyPlaneMaterial.uniforms.primaryColor.value.setHex(t.palette.primary),this.energyPlaneMaterial.uniforms.secondaryColor.value.setHex(t.palette.secondary),this.energyPlaneMaterial.uniforms.accentColor.value.setHex(t.palette.accent),this.motionGridMaterial.uniforms.opacity.value=Y.arena.motionGridOpacity*i*t.motionGridScale,this.motionGridMaterial.uniforms.baseColor.value.setHex(t.palette.grid),this.motionGridMaterial.uniforms.primaryColor.value.setHex(t.palette.primary),this.motionGridMaterial.uniforms.secondaryColor.value.setHex(t.palette.secondary),this.motionGridMaterial.uniforms.accentColor.value.setHex(t.palette.accent),this.grid.setColor(t.palette.grid),this.grid.setOpacity(Y.arena.gridOpacity*i*t.gridOpacityScale),this.setSymbolStyle(t.palette.accent,Y.arena.symbolOpacity*i*t.symbolOpacityScale)}update(e,t){const{focusX:i,focusY:s}=t;this.time+=e,this.updateMotionAmount(e,i,s);const r=Dt.grid.spacing,a=Math.round(i/r)*r,o=Math.round(s/r)*r;this.grid.setWorldOrigin(a,o),this.grid.setMotionAmount(this.motionAmount),this.energyPlane.position.x=i,this.energyPlane.position.z=s,this.motionGrid.position.x=i,this.motionGrid.position.z=s,this.symbols.position.x=i,this.symbols.position.z=s,this.background.update(e,t),this.grid.update(e),this.energyPlaneMaterial.uniforms.time.value=this.time,this.energyPlaneMaterial.uniforms.origin.value.set(i,s),this.energyPlaneMaterial.uniforms.motionAmount.value=this.motionAmount,this.motionGridMaterial.uniforms.time.value=this.time,this.motionGridMaterial.uniforms.origin.value.set(i,s),this.motionGridMaterial.uniforms.motionAmount.value=this.motionAmount,this.stars.rotation.y=Math.sin(this.time*Y.arena.parallaxSpeed)*.04,this.stars.position.x=i+Math.sin(this.time*.032)*.44,this.stars.position.z=s+Math.cos(this.time*.028)*.36,this.symbols.rotation.y=Math.sin(this.time*.03)*.025,this.symbols.position.y=Math.sin(this.time*.7)*.025}addRipple(e,t,i=Y.arena.rippleStrength,s){this.grid.addRipple(e,t,i,s)}emit(e){this.background.emit(e)}updateMotionAmount(e,t,i){if(!this.motionInitialized){this.previousFocusX=t,this.previousFocusY=i,this.motionInitialized=!0;return}const s=t-this.previousFocusX,r=i-this.previousFocusY,a=Math.sqrt(s*s+r*r)/Math.max(.001,e),o=Ki.smoothstep(a,Y.arena.gridRgbMotionFadeStart,Y.arena.gridRgbMotionFadeEnd),l=1-Math.exp(-e*Y.arena.gridRgbMotionSmoothing);this.motionAmount+=(o-this.motionAmount)*l,this.previousFocusX=t,this.previousFocusY=i}createFloorSymbols(){const e=Ii(9366271,Y.arena.symbolOpacity),t=[4.6,7.8,11.2];for(const i of t){const s=new jt(i,i+.035,96),r=new qe(s,new ai({color:9366271,transparent:!0,opacity:Y.arena.symbolOpacity,blending:yt,depthWrite:!1,side:gt}));r.rotation.x=-Math.PI*.5,r.position.y=.03,this.symbols.add(r)}for(let i=0;i<6;i+=1){const s=i/6*Math.PI*2,r=13.6,a=[new R(Math.cos(s)*2.2,.08,Math.sin(s)*2.2),new R(Math.cos(s)*r,.08,Math.sin(s)*r)];this.symbols.add(new rs(new rt().setFromPoints(a),e))}}setSymbolStyle(e,t){this.symbols.traverse(i=>{const s=i.material;if(!s)return;const r=Array.isArray(s)?s:[s];for(const a of r)"color"in a&&a.color instanceof xe&&a.color.setHex(e),"opacity"in a&&typeof a.opacity=="number"&&(a.opacity=t),"transparent"in a&&(a.transparent=!0)})}createEnergyPlaneMaterial(){return new ht({uniforms:{time:{value:0},opacity:{value:Y.arena.energyPlaneOpacity},rgbWaveStrength:{value:Y.arena.gridRgbWaveStrength},rgbWaveScale:{value:Y.arena.gridRgbWaveScale},rgbWaveSpeed:{value:Y.arena.gridRgbWaveSpeed},motionAmount:{value:0},movingRgbStrength:{value:Y.arena.gridRgbMovingStrength},movingOriginInfluence:{value:Y.arena.gridRgbMovingOriginInfluence},movingOpacity:{value:Y.arena.energyPlaneMovingOpacity},origin:{value:new ee},halfSize:{value:new ee(Ct.width*Y.arena.infiniteGridScale*.5,Ct.height*Y.arena.infiniteGridScale*.5)},baseColor:{value:new xe(398626)},primaryColor:{value:new xe(3798527)},secondaryColor:{value:new xe(16727538)},accentColor:{value:new xe(16777215)}},vertexShader:`
        varying vec2 vFloor;
        varying vec2 vWorld;
        uniform vec2 origin;

        void main() {
          vFloor = position.xy;
          vWorld = position.xy + origin;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float opacity;
        uniform float rgbWaveScale;
        uniform float rgbWaveSpeed;
        uniform float rgbWaveStrength;
        uniform float motionAmount;
        uniform float movingRgbStrength;
        uniform float movingOriginInfluence;
        uniform float movingOpacity;
        uniform float time;
        uniform vec2 halfSize;
        uniform vec2 origin;
        uniform vec3 accentColor;
        uniform vec3 baseColor;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        varying vec2 vFloor;
        varying vec2 vWorld;

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(0.52, 0.96, edge);
          float radial = 1.0 - smoothstep(0.76, 1.08, length(vFloor / halfSize));
          vec2 stableWorld = vFloor + origin * movingOriginInfluence;
          vec2 waveSpace = mix(vWorld, stableWorld, motionAmount);
          float activeSpeed = rgbWaveSpeed * mix(1.0, 0.55, motionAmount);
          float activeStrength = rgbWaveStrength * mix(1.0, movingRgbStrength, motionAmount);
          float radialWaveStrength = mix(0.18, 0.025, motionAmount);
          float diagonalFlow =
            sin((waveSpace.x * 0.82 + waveSpace.y * 0.48) * rgbWaveScale + time * activeSpeed * 5.8) * 0.5 +
            sin((waveSpace.x * -0.34 + waveSpace.y * 0.96) * rgbWaveScale * 1.45 - time * activeSpeed * 3.7) * 0.32 +
            sin(length(waveSpace) * rgbWaveScale * 0.86 - time * activeSpeed * 4.6) * radialWaveStrength;
          float ribbon = smoothstep(-0.25, 0.86, diagonalFlow);
          float ribbonWhenMoving = mix(ribbon, ribbon * 0.24, motionAmount);
          float huePhase = diagonalFlow * 2.7 + time * activeSpeed * 4.9;
          float waveT = 0.5 + 0.5 * cos(huePhase);
          vec3 rgbWave = mix(primaryColor, secondaryColor, waveT);
          rgbWave = mix(rgbWave, accentColor, 0.16 + 0.1 * sin(huePhase * 0.5));
          vec3 base = baseColor * 0.38;
          vec3 fieldColor = mix(base, rgbWave, activeStrength * ribbonWhenMoving);
          float veil = mix(0.06 + ribbon * 0.1, 0.018 + ribbonWhenMoving * 0.018, motionAmount);
          float activeOpacity = opacity * mix(1.0, movingOpacity, motionAmount);
          gl_FragColor = vec4(fieldColor, activeOpacity * edgeFade * radial * veil);
        }
      `,transparent:!0,blending:yt,depthWrite:!1,side:gt})}createMotionGridMaterial(){return new ht({uniforms:{time:{value:0},opacity:{value:Y.arena.motionGridOpacity},motionAmount:{value:0},origin:{value:new ee},halfSize:{value:new ee(Ct.width*Y.arena.infiniteGridScale*.5,Ct.height*Y.arena.infiniteGridScale*.5)},spacing:{value:Dt.grid.spacing},lineWidth:{value:Y.arena.motionGridLineWidth},majorLineWidth:{value:Y.arena.motionGridMajorLineWidth},parallax:{value:Y.arena.motionGridParallax},rgbStrength:{value:Y.arena.motionGridRgbStrength},baseColor:{value:new xe(673628)},primaryColor:{value:new xe(3798527)},secondaryColor:{value:new xe(16727538)},accentColor:{value:new xe(16777215)}},vertexShader:`
        varying vec2 vFloor;

        void main() {
          vFloor = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float lineWidth;
        uniform float majorLineWidth;
        uniform float motionAmount;
        uniform float opacity;
        uniform float parallax;
        uniform float rgbStrength;
        uniform float spacing;
        uniform float time;
        uniform vec2 halfSize;
        uniform vec2 origin;
        uniform vec3 accentColor;
        uniform vec3 baseColor;
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        varying vec2 vFloor;

        float gridLine(vec2 coord, float width) {
          vec2 cell = abs(fract(coord - 0.5) - 0.5);
          vec2 aa = max(fwidth(coord), vec2(0.0015));
          float xLine = 1.0 - smoothstep(width, width + aa.x * 1.65, cell.x);
          float yLine = 1.0 - smoothstep(width, width + aa.y * 1.65, cell.y);
          return max(xLine, yLine);
        }

        void main() {
          vec2 normalized = abs(vFloor) / halfSize;
          float edge = max(normalized.x, normalized.y);
          float edgeFade = 1.0 - smoothstep(0.66, 0.98, edge);
          vec2 world = vFloor + origin * parallax;
          vec2 coord = world / spacing;
          float minor = gridLine(coord, lineWidth) * 0.18;
          float major = gridLine(coord / 5.0, majorLineWidth) * 0.62;
          float lineMask = max(minor, major);
          if (lineMask < 0.004) discard;

          float lane =
            0.5 + 0.5 * sin(world.x * 0.047 + world.y * 0.081 + time * 0.92);
          float laneCross =
            0.5 + 0.5 * sin(world.x * -0.072 + world.y * 0.043 - time * 0.63);
          float huePhase = time * 0.5 + world.x * 0.018 - world.y * 0.014 + lane * 1.1;
          float colorT = 0.5 + 0.5 * cos(huePhase);
          vec3 rgbWave = mix(primaryColor, secondaryColor, colorT);
          rgbWave = mix(rgbWave, accentColor, laneCross * 0.22);
          vec3 base = baseColor * 0.52;
          vec3 color = mix(base, rgbWave, rgbStrength * (0.42 + laneCross * 0.45));
          float movingAlpha = mix(0.24, 1.0, smoothstep(0.04, 0.58, motionAmount));
          float pulse = 0.58 + lane * 0.16 + laneCross * 0.1;
          gl_FragColor = vec4(color, opacity * movingAlpha * edgeFade * lineMask * pulse);
        }
      `,transparent:!0,blending:yt,depthWrite:!1,side:gt})}}class Sv{constructor(e){v(this,"camera");v(this,"basePosition",new R(0,Dt.camera.height,Dt.camera.depth));v(this,"trauma",0);v(this,"time",0);v(this,"followX",0);v(this,"followZ",0);v(this,"screenVector",new R);this.camera=new Jt(Dt.camera.fov,e,.1,240),this.camera.position.copy(this.basePosition),this.camera.lookAt(0,0,0)}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}addShake(e){this.trauma=Math.min(1,this.trauma+e)}update(e,t,i){if(this.time+=e,i){const c=i.position.x-this.followX,h=i.position.y-this.followZ;c*c+h*h>Dt.camera.snapDistance*Dt.camera.snapDistance&&(this.followX=i.position.x,this.followZ=i.position.y);const u=1-Math.exp(-e*Dt.camera.followSpeed);this.followX+=(i.position.x-this.followX)*u,this.followZ+=(i.position.y-this.followZ)*u}const s=Dt.shake[t.shake],r=this.trauma*this.trauma*s,a=Math.sin(this.time*77.13)*r,o=Math.cos(this.time*93.41)*r*.45,l=Math.sin(this.time*61.7)*r;this.camera.position.set(this.basePosition.x+this.followX+a,this.basePosition.y+o,this.basePosition.z+this.followZ+l),this.camera.lookAt(this.followX+((i==null?void 0:i.velocity.x)??0)*Dt.camera.lookAhead,0,this.followZ+((i==null?void 0:i.velocity.y)??0)*Dt.camera.lookAhead),this.trauma=Math.max(0,this.trauma-e*1.85)}worldToScreen(e,t,i,s){return this.screenVector.set(e,.8,t),this.screenVector.project(this.camera),{x:(this.screenVector.x*.5+.5)*i,y:(-this.screenVector.y*.5+.5)*s}}}class Mv{constructor(e,t,i,s,r){v(this,"shockwaves",[]);v(this,"beams",[]);v(this,"relicZones",[]);v(this,"beamPosition",new R);v(this,"beamQuaternion",new Sn);v(this,"beamEuler",new fi(-Math.PI*.5,0,0));v(this,"flashOpacity",0);this.scene=e,this.grid=t,this.particles=i,this.camera=s,this.flashLayer=r;for(let a=0;a<56;a+=1){const o=new jt(.92,1,96),l=new ai({color:16777215,transparent:!0,opacity:0,blending:yt,depthWrite:!1,side:gt}),c=new qe(o,l);c.rotation.x=-Math.PI*.5,c.visible=!1,this.scene.add(c),this.shockwaves.push({mesh:c,active:!1,age:0,life:1,maxRadius:1})}for(let a=0;a<12;a+=1){const o=new _t;o.visible=!1;const l=new qe(Pa(),Ss(.34)),c=new qe(Pa(),Ss(.92)),h=new qe(Pa(),Ss(.78)),u=new qe(new jt(.52,.72,56),Ss(.64)),d=new qe(new jt(.44,.64,56),Ss(.72));l.renderOrder=24,c.renderOrder=26,h.renderOrder=27,u.renderOrder=28,d.renderOrder=28,o.add(l,c,h,u,d),this.scene.add(o),this.beams.push({group:o,glow:l,core:c,spine:h,muzzle:u,impact:d,active:!1,age:0,life:.12,width:1})}for(let a=0;a<6;a+=1){const o=new ai({color:16765786,transparent:!0,opacity:0,blending:yt,depthWrite:!1,side:gt}),l=new qe(new jt(.92,1,112),o);l.rotation.x=-Math.PI*.5,l.position.y=.92,l.visible=!1,this.scene.add(l),this.relicZones.push({mesh:l,active:!1,age:0,life:1,radius:1})}}emit(e,t,i){switch(e.type){case"shoot":this.particles.spawnBurst(e.x+e.aimX*1.35,e.y+e.aimY*1.35,e.color,Math.min(18,4+e.pelletCount*2),e.pelletCount>1?.52:.34),this.spawnShockwave(e.x,e.y,e.color,e.weaponId==="scatterCrown"?Y.explosions.shootRingRadius*1.24:Y.explosions.shootRingRadius,.16,e.weaponId==="scatterCrown"?.46:.34),this.camera.addShake(Y.shake.shootImpulse);break;case"beamFired":this.spawnBeam(e),this.particles.spawnBurst(e.x+e.aimX*1.45,e.y+e.aimY*1.45,e.color,10,.34),this.spawnShockwave(e.x,e.y,e.color,2.2,.22,.42),this.camera.addShake(Y.shake.shootImpulse*.9);break;case"enemyKilled":if(e.source==="bomb"){this.particles.spawnBurst(e.x,e.y,i.id==="neonRevenant"?i.secondaryColor:e.color,Math.round(9*Y.particleDensity[t.particleDensity]),.72);break}this.particles.spawnBurst(e.x,e.y,i.id==="neonRevenant"?i.secondaryColor:e.color,Math.round((i.id==="neonRevenant"?Y.explosions.spectralBurstParticles:Y.explosions.enemyBurstParticles)*Y.particleDensity[t.particleDensity]),1),this.spawnShockwave(e.x,e.y,e.color,4.4,.44,.72),this.grid.addRipple(e.x,e.y,.42),this.camera.addShake(Y.shake.killImpulse),this.flash(t,.05);break;case"bomb":this.particles.spawnBurst(e.x,e.y,i.primaryColor,Math.round(Dt.particles.bombBurst*Y.particleDensity[t.particleDensity]),1.18),this.spawnShockwave(e.x,e.y,ls(i),e.radius*Y.explosions.bombRingScale,.82,.86),this.spawnShockwave(e.x,e.y,i.secondaryColor,e.radius*.82,.64,.46),this.grid.addRipple(e.x,e.y,Y.arena.bombRippleStrength,Dt.grid.bombRippleLife),this.camera.addShake(Y.shake.bombImpulse),this.flash(t,.24);break;case"playerHit":this.particles.spawnBurst(e.x,e.y,16731261,Math.round(84*Y.particleDensity[t.particleDensity]),1.25),this.spawnShockwave(e.x,e.y,16731261,7,.5),this.grid.addRipple(e.x,e.y,.9),this.camera.addShake(Y.shake.damageImpulse),this.flash(t,.28);break;case"dash":this.particles.spawnBurst(e.x,e.y,i.secondaryColor,30,.8),this.spawnShockwave(e.x,e.y,i.secondaryColor,Y.explosions.dashRingRadius,.25),this.grid.addRipple(e.x,e.y,Y.arena.dashRippleStrength),this.camera.addShake(Y.shake.dashImpulse);break;case"pickupCollected":this.particles.spawnBurst(e.x,e.y,e.color,22,.7),this.camera.addShake(.06);break;case"achievementUnlocked":this.flash(t,.08);break;case"skinAbility":this.spawnSkinAbility(e,t,i);break;case"relicZone":this.spawnRelicZone(e.x,e.y,e.radius,e.life,e.color),this.spawnShockwave(e.x,e.y,e.color,e.radius,.72,.42),this.grid.addRipple(e.x,e.y,.6,1.1);break;case"relicBonus":this.particles.spawnBurst(e.x,e.y,e.color,Math.round(14*Y.particleDensity[t.particleDensity]),.52),this.spawnShockwave(e.x,e.y,e.color,2.2+e.overdriveCharge*1.6,.22,.34);break}}update(e){this.flashOpacity=Math.max(0,this.flashOpacity-e*3.6),this.flashLayer.style.opacity=this.flashOpacity.toFixed(3);for(const t of this.shockwaves){if(!t.active)continue;t.age+=e;const i=Math.min(1,t.age/t.life),s=Ki.lerp(.01,t.maxRadius,i);t.mesh.scale.setScalar(s),t.mesh.material.opacity=(1-i)*.72,i>=1&&(t.active=!1,t.mesh.visible=!1,t.mesh.material.opacity=0)}for(const t of this.beams){if(!t.active)continue;t.age+=e;const i=Math.min(1,t.age/t.life),s=Math.pow(1-i,1.35),r=1+Math.sin(i*Math.PI)*.38;t.glow.material.opacity=s*.34,t.core.material.opacity=s*.92,t.spine.material.opacity=s*.72,t.muzzle.material.opacity=s*.58,t.impact.material.opacity=s*.68,t.muzzle.scale.setScalar(t.width*(1.55+i*1.2)*r),t.impact.scale.setScalar(t.width*(1.35+i*1.55)*r),i>=1&&(t.active=!1,t.group.visible=!1,t.glow.material.opacity=0,t.core.material.opacity=0,t.spine.material.opacity=0,t.muzzle.material.opacity=0,t.impact.material.opacity=0)}for(const t of this.relicZones){if(!t.active)continue;t.age+=e;const i=Math.min(1,t.age/t.life),s=1+Math.sin(t.age*8)*.025,r=Math.pow(1-i,.42);t.mesh.scale.setScalar(t.radius*s),t.mesh.material.opacity=r*.28,i>=1&&(t.active=!1,t.mesh.visible=!1,t.mesh.material.opacity=0)}}spawnRelicZone(e,t,i,s,r){const a=this.relicZones.find(o=>!o.active);a&&(a.active=!0,a.age=0,a.life=s,a.radius=i,a.mesh.position.set(e,.92,t),a.mesh.scale.setScalar(i),a.mesh.material.color.setHex(gn(r)),a.mesh.material.opacity=.28,a.mesh.visible=!0)}spawnBeam(e){const t=this.beams.find(r=>!r.active);if(!t)return;const i=Math.atan2(e.aimY,e.aimX),s=gn(e.color);this.beamPosition.set(e.x+e.aimX*e.range*.5,1.12,e.y+e.aimY*e.range*.5),this.beamEuler.set(-Math.PI*.5,0,-i),this.beamQuaternion.setFromEuler(this.beamEuler),t.active=!0,t.age=0,t.life=e.visualLife,t.width=e.width,t.group.position.copy(this.beamPosition),t.group.quaternion.copy(this.beamQuaternion),t.glow.scale.set(e.range,e.width*3.45,1),t.core.scale.set(e.range,e.width*1.1,1),t.spine.scale.set(e.range*1.04,e.width*.24,1),t.muzzle.position.set(-e.range*.5,0,.01),t.impact.position.set(e.range*.5,0,.01),t.muzzle.scale.setScalar(e.width*1.55),t.impact.scale.setScalar(e.width*1.35),t.glow.material.color.setHex(s),t.core.material.color.setHex(16777215),t.spine.material.color.setHex(s),t.muzzle.material.color.setHex(s),t.impact.material.color.setHex(s),t.glow.material.opacity=.34,t.core.material.opacity=.92,t.spine.material.opacity=.72,t.muzzle.material.opacity=.58,t.impact.material.opacity=.68,t.group.visible=!0}spawnArc(e,t,i,s,r,a=.34,o=.16){const l=this.beams.find(g=>!g.active);if(!l)return;const c=i-e,h=s-t,u=Math.hypot(c,h);if(u<=.01)return;const d=Math.atan2(h,c),f=gn(r);this.beamPosition.set(e+c*.5,1.2,t+h*.5),this.beamEuler.set(-Math.PI*.5,0,-d),this.beamQuaternion.setFromEuler(this.beamEuler),l.active=!0,l.age=0,l.life=o,l.width=a,l.group.position.copy(this.beamPosition),l.group.quaternion.copy(this.beamQuaternion),l.glow.scale.set(u,a*2.25,1),l.core.scale.set(u,a*.68,1),l.spine.scale.set(u*1.02,a*.18,1),l.muzzle.position.set(-u*.5,0,.01),l.impact.position.set(u*.5,0,.01),l.muzzle.scale.setScalar(a*1.12),l.impact.scale.setScalar(a*1.18),l.glow.material.color.setHex(f),l.core.material.color.setHex(16777215),l.spine.material.color.setHex(f),l.muzzle.material.color.setHex(f),l.impact.material.color.setHex(f),l.glow.material.opacity=.2,l.core.material.opacity=.78,l.spine.material.opacity=.52,l.muzzle.material.opacity=.36,l.impact.material.opacity=.46,l.group.visible=!0}spawnSkinAbility(e,t,i){const s=Y.particleDensity[t.particleDensity];switch(e.ability){case"voidSlowField":this.spawnShockwave(e.x,e.y,e.color,e.radius??7.2,.6,.34),this.spawnShockwave(e.x,e.y,i.secondaryColor,(e.radius??7.2)*.58,.42,.22),this.particles.spawnBurst(e.x,e.y,e.color,Math.round(24*s),.9),this.grid.addRipple(e.x,e.y,.42,.76);break;case"glassShieldReady":this.spawnShockwave(e.x,e.y,e.color,e.radius??4,.38,.62),this.particles.spawnBurst(e.x,e.y,e.color,Math.round(26*s),.54),this.flash(t,.04);break;case"glassShieldBreak":this.spawnShockwave(e.x,e.y,e.color,e.radius??5,.36,.78),this.particles.spawnBurst(e.x,e.y,e.color,Math.round(42*s),.88),this.camera.addShake(.1);break;case"prismGhostBurst":this.spawnShockwave(e.x,e.y,e.color,e.radius??5,.3,.54),this.particles.spawnBurst(e.x,e.y,e.color,Math.round(20*s),.7);break;case"ionChain":e.x2!==void 0&&e.y2!==void 0&&(this.spawnArc(e.x,e.y,e.x2,e.y2,e.color,.3,.14),this.particles.spawnBurst(e.x2,e.y2,e.color,Math.round(8*s),.38));break;case"revenantSpark":e.x2!==void 0&&e.y2!==void 0&&this.spawnArc(e.x,e.y,e.x2,e.y2,e.color,.28,.18),this.particles.spawnBurst(e.x,e.y,e.color,Math.round(12*s),.48);break;case"solarPierce":this.spawnShockwave(e.x,e.y,e.color,2.4,.18,.36);break}}spawnShockwave(e,t,i,s,r,a=.75){const o=this.shockwaves.find(l=>!l.active);o&&(o.active=!0,o.age=0,o.life=r,o.maxRadius=s,o.mesh.position.set(e,.95,t),o.mesh.scale.setScalar(.01),o.mesh.material.color.setHex(gn(i)),o.mesh.material.opacity=a,o.mesh.visible=!0)}flash(e,t){e.flashReduction||(this.flashOpacity=Math.max(this.flashOpacity,t))}}function Pa(){const n=new rt;return n.setAttribute("position",new st([-.5,0,0,-.44,.5,0,.38,.5,0,.5,0,0,.38,-.5,0,-.44,-.5,0],3)),n.setIndex([0,1,2,0,2,5,5,2,4,4,2,3]),n.computeVertexNormals(),n}function Ss(n){return new ai({color:16777215,transparent:!0,opacity:n,blending:yt,depthWrite:!1,depthTest:!1,side:gt})}class _v{create(e){return{object:this.createEnemyObject(e),type:e.typeId,seenFrame:0}}update(e,t,i,s,r){e.seenFrame=r,e.object.visible=!0,e.object.position.set(t.position.x,1.02,t.position.y),e.object.rotation.y=-t.facingAngle;const a=Math.min(1,t.age/Y.enemies.spawnScaleDuration),o=1+Math.sin(s*Y.enemies.pulseSpeed+t.id)*.045;e.object.scale.setScalar((.2+a*.8)*o),gv(e.object,i);const l=e.object.getObjectByName("accent");l&&(l.rotation.y+=.018+t.difficultyScale*.004);const c=e.object.getObjectByName("beams");c&&(c.rotation.y=-t.beamAngle)}createEnemyObject(e){switch(e.typeId){case"dasher":return this.createLayeredPolygon([[1.75,0],[-.88,.52],[-1.18,0],[-.88,-.52]],e.color,1,!0);case"swarm":return this.createLayeredPolygon([[.86,0],[-.42,.58],[-.22,0],[-.42,-.58]],e.color,.82,!0);case"splitter":return this.createSplitter(e.color);case"orbitMine":return this.createOrbitMine(e);case"chaser":default:return this.createLayeredPolygon([[0,1.32],[1.12,0],[0,-1.32],[-1.12,0]],e.color,1,!0)}}createSplitter(e){const t=new _t;t.add(this.createRegularPolygon(5,e,1.28,.22));const i=new _t;i.name="accent";for(let s=0;s<4;s+=1){const r=this.createLayeredPolygon([[.54,0],[-.28,.32],[-.18,-.3]],e,.7,!1),a=s/4*Math.PI*2;r.position.set(Math.cos(a)*.7,.04,Math.sin(a)*.7),r.rotation.y=-a,i.add(r)}return t.add(i),t}createOrbitMine(e){var h;const t=new _t;t.add(this.createRegularPolygon(16,e.color,e.radius*.72,.26));const i=new _t;i.name="accent";const s=new jt(e.radius*.92,e.radius*1.02,64),r=new qe(s,Li(e.color,.16));r.rotation.x=-Math.PI*.5,i.add(r),t.add(i);const a=new _t;a.name="beams";const o=Ii(e.color,.84),l=((h=e.definition.beams)==null?void 0:h.length)??8,c=new rt;return c.setAttribute("position",new st([-l,.16,0,l,.16,0,0,.16,-l,0,.16,l],3)),a.add(new as(c,o)),t.add(a),t}createRegularPolygon(e,t,i,s){const r=[];for(let a=0;a<e;a+=1){const o=a/e*Math.PI*2,l=a%2===0?1:.82;r.push([Math.cos(o)*i*l,Math.sin(o)*i*l])}return this.createLayeredPolygon(r,t,1,!0,s)}createLayeredPolygon(e,t,i,s,r=Y.enemies.coreOpacity){const a=new _t,o=new Or(e.map(([g,x])=>new ee(g*i*1.22,x*i*1.22))),l=new Ns(o);l.rotateX(-Math.PI*.5);const c=new qe(l,Li(t,Y.enemies.glowOpacity));a.add(c);const h=new Or(e.map(([g,x])=>new ee(g*i,x*i))),u=new Ns(h);u.rotateX(-Math.PI*.5);const d=new qe(u,Li(t,r));a.add(d);const f=[...e,e[0]].map(([g,x])=>new R(g*i,.2,x*i));if(a.add(new rs(new rt().setFromPoints(f),Ii(t))),s){const g=new _t;g.name="accent";const x=e.map(([m,p])=>new R(m*i*.48,.24,p*i*.48));x.push(x[0].clone()),g.add(new rs(new rt().setFromPoints(x),Ii(t,Y.enemies.accentOpacity))),a.add(g)}return a}}const bv=`
attribute float aSize;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = color;
  vAlpha = aAlpha;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (72.0 / max(18.0, -mvPosition.z));
  gl_Position = projectionMatrix * mvPosition;
}
`,wv=`
varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord.xy - vec2(0.5);
  float dist = length(uv);
  float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
  gl_FragColor = vec4(vColor, alpha);
}
`;class Ev{constructor(){v(this,"object");v(this,"maxParticles",Dt.particles.maxParticles);v(this,"activeCount",0);v(this,"positions",new Float32Array(this.maxParticles*3));v(this,"colors",new Float32Array(this.maxParticles*3));v(this,"sizes",new Float32Array(this.maxParticles));v(this,"alphas",new Float32Array(this.maxParticles));v(this,"velocities",new Float32Array(this.maxParticles*3));v(this,"life",new Float32Array(this.maxParticles));v(this,"maxLife",new Float32Array(this.maxParticles));v(this,"cursor",0);const e=new rt;e.setAttribute("position",new St(this.positions,3)),e.setAttribute("color",new St(this.colors,3)),e.setAttribute("aSize",new St(this.sizes,1)),e.setAttribute("aAlpha",new St(this.alphas,1)),e.setDrawRange(0,this.maxParticles);const t=new ht({vertexShader:bv,fragmentShader:wv,vertexColors:!0,transparent:!0,blending:yt,depthWrite:!1});this.object=new ch(e,t),this.object.frustumCulled=!1}spawnBurst(e,t,i,s,r=1){const a=new xe(gn(i));for(let o=0;o<s;o+=1){const l=Math.random()*Math.PI*2,c=(4+Math.random()*18)*r,h=Math.random()*8*r,u=.28+Math.random()*.68,d=8+Math.random()*22;this.spawnParticle(e,t,a,l,c,h,u,d)}}spawnTrail(e,t,i,s){const r=new xe(gn(i));for(let a=0;a<s;a+=1)this.spawnParticle(e,t,r,Math.random()*Math.PI*2,1.5+Math.random()*3,Math.random()*2,.22+Math.random()*.18,4+Math.random()*6)}update(e){this.activeCount=0;for(let i=0;i<this.maxParticles;i+=1){if(this.life[i]<=0){this.alphas[i]=0;continue}this.life[i]-=e;const s=i*3;this.positions[s]+=this.velocities[s]*e,this.positions[s+1]+=this.velocities[s+1]*e,this.positions[s+2]+=this.velocities[s+2]*e,this.velocities[s]*=1-e*1.8,this.velocities[s+2]*=1-e*1.8,this.velocities[s+1]-=10*e;const r=Math.max(0,this.life[i]/this.maxLife[i]);this.alphas[i]=r*r,this.activeCount+=1}const t=this.object.geometry;t.getAttribute("position").needsUpdate=!0,t.getAttribute("aAlpha").needsUpdate=!0}spawnParticle(e,t,i,s,r,a,o,l){const c=this.cursor;this.cursor=(this.cursor+1)%this.maxParticles;const h=c*3;this.positions[h]=e,this.positions[h+1]=.85,this.positions[h+2]=t,this.velocities[h]=Math.cos(s)*r,this.velocities[h+1]=a,this.velocities[h+2]=Math.sin(s)*r,this.colors[h]=i.r,this.colors[h+1]=i.g,this.colors[h+2]=i.b,this.sizes[c]=l,this.alphas[c]=1,this.life[c]=o,this.maxLife[c]=o;const u=this.object.geometry;u.getAttribute("color").needsUpdate=!0,u.getAttribute("aSize").needsUpdate=!0}}const fc={uniforms:{time:{value:0},primary:{value:new xe},secondary:{value:new xe},accent:{value:new xe},pulse:{value:0},facetStrength:{value:.4},voidDistortion:{value:0},alpha:{value:.84}},vertexShader:`
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float time;
    uniform float pulse;
    uniform float voidDistortion;

    void main() {
      vUv = uv;
      vPos = position;
      vec3 p = position;
      float wave = sin((position.x + position.y) * 5.0 + time * 4.0) * voidDistortion * 0.06;
      p += normal * (pulse * 0.07 + wave);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 primary;
    uniform vec3 secondary;
    uniform vec3 accent;
    uniform float time;
    uniform float pulse;
    uniform float facetStrength;
    uniform float alpha;
    varying vec2 vUv;
    varying vec3 vPos;

    void main() {
      float bands = abs(sin((vPos.x * 3.7 + vPos.z * 5.1) + time * 2.0));
      float facet = smoothstep(0.18, 0.92, bands) * facetStrength;
      float center = 1.0 - smoothstep(0.0, 1.25, length(vPos.xz));
      vec3 color = mix(primary, secondary, facet);
      color = mix(color, accent, center * 0.34 + pulse * 0.32);
      gl_FragColor = vec4(color, alpha * (0.64 + center * 0.28 + pulse * 0.18));
    }
  `};class Av{constructor(e){v(this,"object",new _t);v(this,"fillMaterial");v(this,"outlineMaterial");v(this,"haloMaterial");v(this,"accentMaterial");v(this,"shieldMaterial");v(this,"redlineMaterial");v(this,"fill");v(this,"outline");v(this,"halo");v(this,"shieldRing");v(this,"innerGlyph");v(this,"redlineStreaks");v(this,"shootPulse",0);v(this,"dashPulse",0);v(this,"bombPulse",0);v(this,"damagePulse",0);v(this,"deathPulse",0);v(this,"currentSkin");v(this,"geometrySkinId");this.currentSkin=e,this.geometrySkinId=e.id;const t=pc(e.id);this.fillMaterial=new ht({...fc,uniforms:Yi.clone(fc.uniforms),transparent:!0,blending:yt,depthWrite:!1,side:gt}),this.fill=new qe(mc(t.body),this.fillMaterial),this.outlineMaterial=Ii(e.secondaryColor,.98),this.outline=new rs(gc(t.body),this.outlineMaterial),this.haloMaterial=new ai({color:e.secondaryColor,transparent:!0,opacity:.18,blending:yt,depthWrite:!1,side:gt}),this.halo=new qe(vc(t),this.haloMaterial),this.halo.rotation.x=-Math.PI*.5,this.halo.position.y=.05,this.halo.scale.setScalar(Y.player.haloScale),this.accentMaterial=Ii(e.accentColor,.68),this.innerGlyph=new as(xc(t.glyph),this.accentMaterial),this.shieldMaterial=new ai({color:15269375,transparent:!0,opacity:0,blending:yt,depthWrite:!1,side:gt}),this.shieldRing=new qe(new jt(1.18,1.3,96),this.shieldMaterial),this.shieldRing.rotation.x=-Math.PI*.5,this.shieldRing.position.y=.08,this.shieldRing.visible=!1,this.redlineMaterial=Ii(16723558,0),this.redlineStreaks=new as(Cv(),this.redlineMaterial),this.redlineStreaks.visible=!1,this.object.add(this.halo,this.shieldRing,this.fill,this.outline,this.innerGlyph,this.redlineStreaks),this.setSkin(e)}setSkin(e){var i,s;this.currentSkin=e,this.applySkinGeometry(e.id);const t=ls(e);this.fillMaterial.uniforms.primary.value.setHex(e.primaryColor),this.fillMaterial.uniforms.secondary.value.setHex(e.secondaryColor),this.fillMaterial.uniforms.accent.value.setHex(t),this.fillMaterial.uniforms.facetStrength.value=((i=e.shaderSettings)==null?void 0:i.facetStrength)??.4,this.fillMaterial.uniforms.voidDistortion.value=((s=e.shaderSettings)==null?void 0:s.voidDistortion)??0,this.outlineMaterial.color.setHex(e.secondaryColor),this.haloMaterial.color.setHex(e.secondaryColor),this.accentMaterial.color.setHex(t),this.redlineMaterial.color.setHex(e.id==="redlineMartyr"?16723558:t),this.shieldMaterial.color.setHex(e.id==="glassSeraph"?15269375:t)}update(e,t,i){var h;this.object.position.set(e.position.x,1.06+Math.sin(i*Y.player.hoverSpeed)*Y.player.hoverAmplitude,e.position.y),this.object.rotation.y=-e.facingAngle+Math.sin(i*1.6)*.025,this.object.rotation.z=Math.sin(i*1.2)*.03,this.shootPulse=Math.max(0,this.shootPulse-t/Y.player.shootPulseDuration),this.dashPulse=Math.max(0,this.dashPulse-t/Y.player.dashPulseDuration),this.bombPulse=Math.max(0,this.bombPulse-t/Y.player.bombPulseDuration),this.damagePulse=Math.max(0,this.damagePulse-t/Y.player.damagePulseDuration),this.deathPulse=Math.max(0,this.deathPulse-t/Y.player.deathPulseDuration);const s=(Math.sin(i*(((h=this.currentSkin.shaderSettings)==null?void 0:h.pulseSpeed)??1.2))+1)*.5,r=Math.max(this.shootPulse,this.dashPulse,this.bombPulse,this.damagePulse,this.deathPulse);this.fillMaterial.uniforms.time.value=i,this.fillMaterial.uniforms.pulse.value=r+s*Y.player.idlePulse,this.fillMaterial.uniforms.alpha.value=this.currentSkin.id==="glassSeraph"?.62:.84,this.haloMaterial.opacity=.12+s*.08+r*.22;const a=Y.player.haloScale+r*.42+(e.dashTimer>0?.36:0);this.halo.scale.setScalar(a),this.innerGlyph.rotation.y=i*.65;const o=Math.max(e.temporaryShieldHits>0?1:0,e.signatureChargeRatio*.68,e.signaturePulse);this.shieldRing.visible=o>.04,this.shieldMaterial.opacity=o>.04?.16+o*.5:0,this.shieldRing.scale.setScalar(1+o*.24+Math.sin(i*5.2)*.025),this.shieldRing.rotation.z=i*.9;const l=e.redlineSurgeActive?.52+Math.sin(i*17)*.1:0;this.redlineStreaks.visible=l>.05,this.redlineMaterial.opacity=Math.max(0,l),this.redlineStreaks.scale.setScalar(1+Math.max(0,1-e.healthRatio)*.18);const c=e.invulnerableTimer>0&&Math.sin(e.invulnerableTimer*42)>.2;this.object.visible=e.active&&!c}onShoot(){this.shootPulse=1}onDash(){this.dashPulse=1}onBomb(){this.bombPulse=1}onDamage(){this.damagePulse=1}onDeath(){this.deathPulse=1}applySkinGeometry(e){if(this.geometrySkinId===e)return;const t=pc(e),i=this.fill.geometry;this.fill.geometry=mc(t.body),i.dispose();const s=this.outline.geometry;this.outline.geometry=gc(t.body),s.dispose();const r=this.halo.geometry;this.halo.geometry=vc(t),r.dispose();const a=this.innerGlyph.geometry;this.innerGlyph.geometry=xc(t.glyph),a.dispose(),this.geometrySkinId=e}}const Tv={vectorSaint:{body:[[1.38,0],[-.76,.94],[-.42,0],[-.76,-.94]],glyph:[[.92,0,-.2,.48],[-.2,.48,-.2,-.48],[-.2,-.48,.92,0],[-.56,.72,-.56,-.72]],haloInner:.95,haloOuter:1.05},solarWarden:{body:[[1.34,0],[.28,.72],[-.68,.86],[-.38,.28],[-.92,0],[-.38,-.28],[-.68,-.86],[.28,-.72]],glyph:[[.82,0,.06,.42],[.06,.42,-.5,0],[-.5,0,.06,-.42],[.06,-.42,.82,0],[-.1,.64,-.1,-.64]],haloInner:1,haloOuter:1.14},voidChoir:{body:[[1.24,.02],[.36,.66],[-.96,.76],[-.54,.18],[-1.05,0],[-.54,-.18],[-.96,-.76],[.36,-.66]],glyph:[[.72,0,-.1,.34],[-.1,.34,-.64,.16],[-.1,-.34,-.64,-.16],[.72,0,-.1,-.34],[-.52,.48,-.52,-.48]],haloInner:.84,haloOuter:1.08},glassSeraph:{body:[[1.46,0],[.32,.38],[-.18,.98],[-.92,0],[-.18,-.98],[.32,-.38]],glyph:[[1,0,.04,.3],[1,0,.04,-.3],[.04,.3,-.58,0],[.04,-.3,-.58,0],[-.18,.74,-.18,-.74]],haloInner:.9,haloOuter:1.02},redlineMartyr:{body:[[1.48,0],[.52,.54],[-.22,.48],[-.86,.22],[-.42,0],[-.86,-.22],[-.22,-.48],[.52,-.54]],glyph:[[1.02,.18,-.56,.18],[.82,-.18,-.34,-.18],[.44,.46,-.02,-.46],[.04,.46,-.42,-.46]],haloInner:.94,haloOuter:1.08},prismGhost:{body:[[1.28,0],[.24,.9],[-.98,.62],[-.38,.16],[-.94,0],[-.38,-.16],[-.98,-.62],[.24,-.9]],glyph:[[.86,0,0,.5],[.86,0,0,-.5],[0,.5,-.62,.24],[0,-.5,-.62,-.24],[-.22,.62,-.22,-.62]],haloInner:.88,haloOuter:1.12},ionChapel:{body:[[1.28,0],[.36,.42],[.08,.9],[-.82,.58],[-.52,0],[-.82,-.58],[.08,-.9],[.36,-.42]],glyph:[[.88,0,.04,.24],[.04,.24,-.56,.56],[.04,-.24,-.56,-.56],[.88,0,.04,-.24],[-.26,.7,-.26,-.7]],haloInner:.86,haloOuter:1.06},neonRevenant:{body:[[1.36,.06],[.54,.52],[.06,.4],[-.48,.96],[-.88,.28],[-.5,-.06],[-.92,-.72],[-.06,-.48],[.46,-.74]],glyph:[[.82,.08,.12,.36],[.12,.36,-.42,.72],[.66,-.16,-.02,-.4],[-.02,-.4,-.54,-.56],[-.48,.3,-.26,-.3]],haloInner:.9,haloOuter:1.16}};function pc(n){return Tv[n]}function mc(n){const e=new Or(n.map(([i,s])=>new ee(i,-s))),t=new Ns(e);return t.rotateX(-Math.PI*.5),t}function gc(n){const e=[...n,n[0]].map(([t,i])=>new R(t,.18,i));return new rt().setFromPoints(e)}function vc(n){return new jt(n.haloInner,n.haloOuter,96)}function xc(n){const e=[];for(const[i,s,r,a]of n)e.push(i,.24,s,r,.24,a);const t=new rt;return t.setAttribute("position",new st(e,3)),t}function Cv(){const n=[-.34,.24,.5,-2.7,.24,.76,-.34,.24,-.5,-2.7,.24,-.76,-.68,.2,.16,-3.18,.2,.2,-.68,.2,-.16,-3.18,.2,-.2],e=new rt;return e.setAttribute("position",new st(n,3)),e}const xh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ds{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rv=new oo(-1,1,1,-1,0,1);class Pv extends rt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Lv=new Pv;class mo{constructor(e){this._mesh=new qe(Lv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ja extends ds{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yi.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mo(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class yc extends ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Dv extends ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Iv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ee);this._width=i.width,this._height=i.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ja(xh),this.copyPass.material.blending=Di,this.clock=new uv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}yc!==void 0&&(a instanceof yc?i=!0:a instanceof Dv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Nv extends ds{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const vr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},xr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},La={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class Uv extends ds{constructor(e,t){super(),this.edgesRT=new Vt(e,t,{depthBuffer:!1,type:ri}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new Vt(e,t,{depthBuffer:!1,type:ri}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,s=new Image;s.src=this.getAreaTexture(),s.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Nt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=s,this.areaTexture.minFilter=Qt,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const r=new Image;r.src=this.getSearchTexture(),r.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Nt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=r,this.searchTexture.magFilter=Ft,this.searchTexture.minFilter=Ft,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=Yi.clone(vr.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new ht({defines:Object.assign({},vr.defines),uniforms:this.uniformsEdges,vertexShader:vr.vertexShader,fragmentShader:vr.fragmentShader}),this.uniformsWeights=Yi.clone(xr.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new ht({defines:Object.assign({},xr.defines),uniforms:this.uniformsWeights,vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this.uniformsBlend=Yi.clone(La.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new ht({uniforms:this.uniformsBlend,vertexShader:La.vertexShader,fragmentShader:La.fragmentShader}),this.fsQuad=new mo(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const Ov={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends ds{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ee(e.x,e.y):new ee(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(r,a,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Vt(r,a,{type:ri});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new Vt(r,a,{type:ri});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Ov;this.highPassUniforms=Yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ee(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=xh;this.copyUniforms=Yi.clone(h.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:yt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new ai,this.fsQuad=new mo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ee(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ee(.5,.5)},direction:{value:new ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}os.BlurDirectionX=new ee(1,0);os.BlurDirectionY=new ee(0,1);const Fv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ee(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},Bv={off:0,fxaa:0,smaa:0,"msaa-4x":4,"msaa-4x-smaa":4},kv={uniforms:{tDiffuse:{value:null},amount:{value:0},vignette:{value:.26},grain:{value:.018},time:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float vignette;
    uniform float grain;
    uniform float time;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    void main() {
      vec2 centered = vUv - vec2(0.5);
      vec2 offset = centered * amount;
      vec4 base = texture2D(tDiffuse, vUv);
      float r = texture2D(tDiffuse, vUv + offset).r;
      float b = texture2D(tDiffuse, vUv - offset).b;
      vec3 color = vec3(r, base.g, b);
      float vig = smoothstep(0.86, 0.18, length(centered));
      color *= mix(1.0 - vignette, 1.0, vig);
      color += (hash(vUv * vec2(1920.0, 1080.0) + time) - 0.5) * grain;
      gl_FragColor = vec4(color, base.a);
    }
  `};class zv{constructor(e,t,i){v(this,"composer");v(this,"bloomPass");v(this,"presentationPass");v(this,"fxaaPass");v(this,"smaaPass");v(this,"currentSamples",-1);v(this,"multisampledTargetsSupported");v(this,"width",1);v(this,"height",1);this.renderer=e;const s=new Vt(1,1,{type:ri});s.texture.name="VectorSaint.composer.rt1",this.composer=new Iv(e,s),this.composer.addPass(new Nv(t,i)),this.bloomPass=new os(new ee(1,1),.8,.35,.22),this.presentationPass=new ja(kv),this.fxaaPass=new ja(Fv),this.smaaPass=new Uv(1,1),this.composer.addPass(this.bloomPass),this.composer.addPass(this.presentationPass),this.composer.addPass(this.smaaPass),this.composer.addPass(this.fxaaPass)}resize(e,t){this.width=e,this.height=t,this.composer.setSize(e,t),this.bloomPass.setSize(e,t),this.updateFxaaResolution()}applySettings(e){const t=Y.bloom[e.bloom],i=Y.bloomStrengthScale[e.bloomStrength],s=Y.bloomRadiusScale[e.bloomRadius];this.bloomPass.strength=t.strength*i,this.bloomPass.radius=t.radius*s,this.bloomPass.threshold=t.threshold,this.presentationPass.uniforms.amount.value=Y.chromaticAberration[e.chromaticAberration],this.presentationPass.uniforms.vignette.value=e.backgroundIntensity==="low"?.2:e.backgroundIntensity==="high"?.32:.26,this.applyAntiAliasing(e.antiAliasing)}render(e){this.presentationPass.uniforms.time.value+=e,this.composer.render()}applyAntiAliasing(e){const t=this.supportsMultisampledTargets();this.fxaaPass.enabled=e==="fxaa",this.smaaPass.enabled=e==="smaa"||e==="msaa-4x-smaa"||e==="msaa-4x"&&!t,this.setComposerSamples(Bv[e])}setComposerSamples(e){const t=this.supportsMultisampledTargets()?e:0;t!==this.currentSamples&&(this.currentSamples=t,this.composer.renderTarget1.samples=t,this.composer.renderTarget2.samples=t,this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose())}updateFxaaResolution(){const e=this.renderer.getPixelRatio();this.fxaaPass.uniforms.resolution.value.set(1/Math.max(1,this.width*e),1/Math.max(1,this.height*e))}supportsMultisampledTargets(){if(this.multisampledTargetsSupported!==void 0)return this.multisampledTargetsSupported;const e=this.renderer.getContext();return this.multisampledTargetsSupported=typeof WebGL2RenderingContext<"u"&&e instanceof WebGL2RenderingContext&&(!!e.getExtension("EXT_color_buffer_float")||!!e.getExtension("EXT_color_buffer_half_float")),this.multisampledTargetsSupported}}const Hv=["voidChoir","redlineMartyr"],qn=class qn{constructor(e,t){v(this,"object",new _t);v(this,"coreMesh");v(this,"glowMesh");v(this,"ringMesh");v(this,"streakMesh");v(this,"tracerGeometry");v(this,"tracerPositions",new Float32Array(Ti.bullets*qn.tracerLinesPerBullet*2*3));v(this,"tracerColors",new Float32Array(Ti.bullets*qn.tracerLinesPerBullet*2*3));v(this,"tracerLines");v(this,"matrix",new nt);v(this,"position",new R);v(this,"scale",new R);v(this,"color",new xe);v(this,"hotCoreColor",new xe(16777215));v(this,"identityQuaternion",new Sn);v(this,"forwardAxis",new R);v(this,"cameraDir",new R);v(this,"widthAxis",new R);v(this,"normalAxis",new R);v(this,"coreMaterial",Li(3798527,1));v(this,"glowMaterial",Li(3798527,.72));v(this,"ringMaterial",Li(16777215,.9));v(this,"streakMaterial",Li(16777215,.88));v(this,"skin");this.camera=t,this.skin=e,this.coreMesh=new cr(new Fr(Y.projectile.coreRadius,12,8),this.coreMaterial,Ti.bullets),this.glowMesh=new cr(new Fr(Y.projectile.glowRadius,12,8),this.glowMaterial,Ti.bullets),this.ringMesh=new cr(new jt(Y.projectile.ringInnerRadius,Y.projectile.ringOuterRadius,40),this.ringMaterial,Ti.bullets);const i=new bn(1,1);this.streakMesh=new cr(i,this.streakMaterial,Ti.bullets),this.tracerGeometry=new rt,this.tracerGeometry.setAttribute("position",new St(this.tracerPositions,3)),this.tracerGeometry.setAttribute("color",new St(this.tracerColors,3)),this.tracerGeometry.setDrawRange(0,0),this.tracerLines=new as(this.tracerGeometry,new co({vertexColors:!0,transparent:!0,opacity:.98,blending:yt,depthWrite:!1,depthTest:!1})),this.coreMesh.instanceMatrix.setUsage(En),this.glowMesh.instanceMatrix.setUsage(En),this.ringMesh.instanceMatrix.setUsage(En),this.streakMesh.instanceMatrix.setUsage(En),this.tracerGeometry.getAttribute("position").setUsage(En),this.tracerGeometry.getAttribute("color").setUsage(En),this.coreMaterial.vertexColors=!0,this.glowMaterial.vertexColors=!0,this.ringMaterial.vertexColors=!0,this.streakMaterial.vertexColors=!0,this.coreMaterial.needsUpdate=!0,this.glowMaterial.needsUpdate=!0,this.ringMaterial.needsUpdate=!0,this.streakMaterial.needsUpdate=!0,this.coreMaterial.depthTest=!1,this.glowMaterial.depthTest=!1,this.ringMaterial.depthTest=!1,this.streakMaterial.depthTest=!1,this.coreMesh.renderOrder=30,this.glowMesh.renderOrder=28,this.ringMesh.renderOrder=29,this.streakMesh.renderOrder=27,this.tracerLines.renderOrder=34,this.coreMesh.frustumCulled=!1,this.glowMesh.frustumCulled=!1,this.ringMesh.frustumCulled=!1,this.streakMesh.frustumCulled=!1,this.tracerLines.frustumCulled=!1,this.object.add(this.glowMesh,this.streakMesh,this.ringMesh,this.coreMesh,this.tracerLines),this.setSkin(e)}setSkin(e){this.skin=e,this.coreMaterial.color.setHex(16777215),this.glowMaterial.color.setHex(16777215),this.ringMaterial.color.setHex(16777215),this.streakMaterial.color.setHex(16777215),this.glowMaterial.opacity=e.id==="voidChoir"?.82:.72,this.ringMaterial.opacity=e.id==="redlineMartyr"?1:.9,this.streakMaterial.opacity=e.id==="redlineMartyr"?1:.88}update(e,t){let i=0,s=0;e.bullets.forEachActive(r=>{const a=Math.max(1,to(r.velocity)),o=Math.atan2(r.velocity.y,r.velocity.x),l=Ki.clamp(a/24,Y.projectile.stretchMin,Y.projectile.stretchMax),c=Y.projectile.weaponProfiles[r.weaponId],h=1+Math.sin(t*18+r.id)*.08;let u=1,d=1,f=this.tracerLineCountFor(r.weaponId,r.sourceSkinId),g=f<=1?.52:1,x=f<=1?.68:1,m=f<=1?.86:1;switch(this.color.setHex(gn(r.color)),this.hotCoreColor.setHex(16777215),r.signature){case"solarPierce":this.color.setHex(16773283),this.hotCoreColor.setHex(16777215),u=1.42,d=1.32,f=3,g=.82,x=.88,m=1;break;case"ghostBurst":this.color.setHex(16753912),this.hotCoreColor.setHex(16709631),u=1.18,d=1.14;break;case"ionArc":this.color.setHex(6094813),u=1.12,d=1.08;break;case"revenantSpark":this.color.setHex(3342254),u=1.22,d=1.16;break}const p=r.weaponId==="scatterCrown"?1.28:1.18;u*=p,d*=p,this.position.set(r.position.x,1.42,r.position.y);const M=c.coreScale*h;this.scale.setScalar(M*u),this.matrix.compose(this.position,this.identityQuaternion,this.scale),this.coreMesh.setMatrixAt(i,this.matrix),this.coreMesh.setColorAt(i,this.hotCoreColor);const y=c.glowScale*(.96+h*.1);this.scale.setScalar(y*u),this.matrix.compose(this.position,this.identityQuaternion,this.scale),this.glowMesh.setMatrixAt(i,this.matrix),this.glowMesh.setColorAt(i,this.color),this.writeBillboardMatrix(r.position.x,r.position.y,o,c.ringScale*u*m*(1.1+h*.12),c.ringScale*u*m*(1.1+h*.12),1.46),this.ringMesh.setMatrixAt(i,this.matrix),this.ringMesh.setColorAt(i,this.color),this.writeBillboardMatrix(r.position.x-Math.cos(o)*c.backOffset,r.position.y-Math.sin(o)*c.backOffset,o,c.tracerLength*d*(.78+l*.18),c.tracerWidth*d*x*(.9+h*.08),1.38),this.streakMesh.setMatrixAt(i,this.matrix),this.streakMesh.setColorAt(i,this.color),s=this.writeTracerLines(s,r.position.x,r.position.y,o,c.tracerLength*d*(.98+l*.12),c.tracerWidth*d*g,f),i+=1}),this.coreMesh.count=i,this.glowMesh.count=i,this.ringMesh.count=i,this.streakMesh.count=i,this.tracerGeometry.setDrawRange(0,s),this.coreMesh.instanceMatrix.needsUpdate=!0,this.glowMesh.instanceMatrix.needsUpdate=!0,this.ringMesh.instanceMatrix.needsUpdate=!0,this.streakMesh.instanceMatrix.needsUpdate=!0,this.tracerGeometry.getAttribute("position").needsUpdate=!0,this.tracerGeometry.getAttribute("color").needsUpdate=!0,this.coreMesh.instanceColor&&(this.coreMesh.instanceColor.needsUpdate=!0),this.glowMesh.instanceColor&&(this.glowMesh.instanceColor.needsUpdate=!0),this.ringMesh.instanceColor&&(this.ringMesh.instanceColor.needsUpdate=!0),this.streakMesh.instanceColor&&(this.streakMesh.instanceColor.needsUpdate=!0)}getColor(){return ls(this.skin)}writeBillboardMatrix(e,t,i,s,r,a){this.forwardAxis.set(Math.cos(i),0,Math.sin(i)).multiplyScalar(s),this.position.set(e,a,t),this.cameraDir.copy(this.camera.position).sub(this.position).normalize(),this.widthAxis.crossVectors(this.cameraDir,this.forwardAxis).normalize().multiplyScalar(r),this.normalAxis.crossVectors(this.forwardAxis,this.widthAxis).normalize(),this.matrix.makeBasis(this.forwardAxis,this.widthAxis,this.normalAxis),this.matrix.setPosition(this.position)}writeTracerLines(e,t,i,s,r,a,o){const l=Math.cos(s),c=Math.sin(s),h=-c,u=l,d=t+l*.8,f=i+c*.8,g=t-l*r,x=i-c*r,m=Math.min(qn.tracerLinesPerBullet,Math.max(1,o));for(let p=0;p<m;p+=1){const M=m<=1?0:(p/(m-1)-.5)*.84,y=M*a,w=Math.abs(M)<.001,U=w?1:.72,A=w?.62:.28,C=w?this.hotCoreColor:this.color,I=e*3;this.tracerPositions[I]=d+h*y,this.tracerPositions[I+1]=1.74,this.tracerPositions[I+2]=f+u*y,this.tracerColors[I]=C.r*U,this.tracerColors[I+1]=C.g*U,this.tracerColors[I+2]=C.b*U,e+=1;const E=e*3;this.tracerPositions[E]=g+h*y,this.tracerPositions[E+1]=1.62,this.tracerPositions[E+2]=x+u*y,this.tracerColors[E]=this.color.r*A,this.tracerColors[E+1]=this.color.g*A,this.tracerColors[E+2]=this.color.b*A,e+=1}return e}tracerLineCountFor(e,t){return e!=="vectorBolt"?3:Hv.includes(t)?5:1}};v(qn,"tracerLinesPerBullet",5);let Ka=qn;class Gv{constructor(e){v(this,"object",new _t);v(this,"positions",new Float32Array(Y.trail.length*3));v(this,"points",Array.from({length:Y.trail.length},()=>({x:0,y:0})));v(this,"line");v(this,"material");v(this,"afterimages",[]);v(this,"afterimageMaterial");v(this,"initialized",!1);v(this,"skin");this.skin=e;const t=new rt;t.setAttribute("position",new St(this.positions,3)),this.material=Ii(e.secondaryColor,Y.trail.baseOpacity),this.line=new rs(t,this.material),this.line.frustumCulled=!1,this.object.add(this.line),this.afterimageMaterial=new ai({color:e.secondaryColor,transparent:!0,opacity:.14,blending:yt,depthWrite:!1,side:gt});const i=new jt(.86,.94,4);for(let s=0;s<Y.trail.afterimageCount;s+=1){const r=new qe(i,this.afterimageMaterial.clone());r.rotation.x=-Math.PI*.5,r.visible=!1,this.afterimages.push(r),this.object.add(r)}this.setSkin(e)}setSkin(e){this.skin=e;const t=ls(e);this.material.color.setHex(e.secondaryColor),this.afterimageMaterial.color.setHex(t);for(const i of this.afterimages)i.material.color.setHex(e.secondaryColor)}update(e,t,i){if(!e.active){this.line.visible=!1;for(const l of this.afterimages)l.visible=!1;return}if(!this.initialized){for(const l of this.points)l.x=e.position.x,l.y=e.position.y;this.initialized=!0}const s=this.points[0];if(Vi(s,e.position)>Y.trail.pointSpacing*Y.trail.pointSpacing){for(let l=this.points.length-1;l>0;l-=1)this.points[l].x=this.points[l-1].x,this.points[l].y=this.points[l-1].y;s.x=e.position.x,s.y=e.position.y}for(let l=0;l<this.points.length;l+=1){const c=this.points[l],h=l*3,u=.78+Math.sin(i*6+l*.7)*.025;this.positions[h]=c.x,this.positions[h+1]=u,this.positions[h+2]=c.y}const r=Math.hypot(e.velocity.x,e.velocity.y),a=e.dashTimer>0?1:0,o=Ki.clamp(r/28,0,1);this.material.opacity=Ki.lerp(Y.trail.baseOpacity,Y.trail.dashOpacity,Math.max(o*.65,a)),this.line.visible=!0,this.line.geometry.getAttribute("position").needsUpdate=!0;for(let l=0;l<this.afterimages.length;l+=1){const c=Math.min(this.points.length-1,2+l*3),h=this.points[c],u=this.afterimages[l];u.visible=o>.18||a>0,u.position.set(h.x,.72,h.y),u.rotation.z=-e.facingAngle+l*.15;const d=u.material;d.opacity=(.16-l*.018)*Math.max(o,a),u.scale.setScalar(1+l*.08+a*.24+t*0)}}}class Vv{constructor(e,t,i){v(this,"three");v(this,"cameraController");v(this,"particles");v(this,"scene",new A0);v(this,"post");v(this,"arena");v(this,"effects");v(this,"playerVisual");v(this,"projectiles");v(this,"trail");v(this,"enemyFactory",new _v);v(this,"enemyNodes",new Map);v(this,"pickupNodes",new Map);v(this,"time",0);v(this,"frameId",0);v(this,"width",1);v(this,"height",1);v(this,"resize",()=>{const e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);this.width=e,this.height=t,this.three.setSize(e,t,!1),this.post.resize(e,t),this.cameraController.resize(e/t)});v(this,"onContextLost",e=>{e.preventDefault()});this.canvas=e,this.three=new E0({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.three.outputColorSpace=ni,this.three.toneMapping=Nc,this.three.toneMappingExposure=1.05,this.three.setClearColor(131850,1),this.three.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.scene.background=new xe(131850),this.scene.add(new hv(16777215,.42));const s=new cv(10284287,.4);s.position.set(0,8,4),this.scene.add(s),this.cameraController=new Sv(1),this.arena=new yv,this.scene.add(this.arena.object);const r=Wi(i.selectedSkin);this.trail=new Gv(r),this.scene.add(this.trail.object),this.playerVisual=new Av(r),this.scene.add(this.playerVisual.object),this.projectiles=new Ka(r,this.cameraController.camera),this.scene.add(this.projectiles.object),this.particles=new Ev,this.scene.add(this.particles.object),this.effects=new Mv(this.scene,this.arena.grid,this.particles,this.cameraController,t),this.post=new zv(this.three,this.scene,this.cameraController.camera),this.applySettings(i),this.resize(),window.addEventListener("resize",this.resize),this.canvas.addEventListener("webglcontextlost",this.onContextLost)}dispose(){window.removeEventListener("resize",this.resize),this.canvas.removeEventListener("webglcontextlost",this.onContextLost),this.three.dispose()}applySettings(e){const t=Wi(e.selectedSkin);this.playerVisual.setSkin(t),this.projectiles.setSkin(t),this.trail.setSkin(t),this.arena.applySettings(e),this.post.applySettings(e)}render(e,t,i){this.frameId+=1,this.time+=i;const s=Wi(e.settings.selectedSkin);this.applySettings(e.settings);for(const r of t)this.routeVisualEvent(r),this.arena.emit(r),this.effects.emit(r,e.settings,s);this.trail.update(e.player,i,this.time),this.playerVisual.update(e.player,i,this.time),this.projectiles.update(e.entities,this.time),this.updateBulletTrails(e.entities,e.settings),e.entities.enemies.forEachActive(r=>this.updateEnemy(r,e.settings)),e.entities.pickups.forEachActive(r=>this.updatePickup(r)),this.hideInactiveEnemyNodes(),this.hideInactiveNodes(this.pickupNodes),this.arena.update(i,{focusX:e.player.position.x,focusY:e.player.position.y,velocityX:e.player.velocity.x,velocityY:e.player.velocity.y,multiplier:e.multiplier,healthRatio:e.player.healthRatio,wave:e.wave,enemyCount:e.entities.activeEnemyCount}),this.particles.update(i),this.effects.update(i),this.cameraController.update(i,e.settings,e.player),this.post.render(i)}playerScreenPosition(e){return this.cameraController.worldToScreen(e.position.x,e.position.y,this.width,this.height)}get particleCount(){return this.particles.activeCount}get drawCallCount(){return this.three.info.render.calls}routeVisualEvent(e){e.type==="shoot"?this.playerVisual.onShoot():e.type==="dash"?this.playerVisual.onDash():e.type==="bomb"?this.playerVisual.onBomb():e.type==="playerHit"&&this.playerVisual.onDamage()}updateBulletTrails(e,t){const i=Y.particleDensity[t.particleDensity];e.bullets.forEachActive(s=>{Math.random()<.08*i&&this.particles.spawnTrail(s.position.x,s.position.y,s.color,1)})}updateEnemy(e,t){const i=mv(e.typeId,t);let s=this.enemyNodes.get(e.id);(!s||s.type!==e.typeId)&&(s&&this.scene.remove(s.object),s=this.enemyFactory.create(e),this.enemyNodes.set(e.id,s),this.scene.add(s.object)),this.enemyFactory.update(s,e,i,this.time,this.frameId)}updatePickup(e){let t=this.pickupNodes.get(e.id);t||(t={object:this.createPickupObject(),type:e.type,seenFrame:this.frameId},this.pickupNodes.set(e.id,t),this.scene.add(t.object)),t.seenFrame=this.frameId,t.object.visible=!0,t.object.position.set(e.position.x,1+Math.sin(e.age*5)*.18,e.position.y),t.object.rotation.y+=.05,t.object.rotation.z+=.025}hideInactiveEnemyNodes(){for(const e of this.enemyNodes.values())e.seenFrame!==this.frameId&&(e.object.visible=!1)}hideInactiveNodes(e){for(const t of e.values())t.seenFrame!==this.frameId&&(t.object.visible=!1)}createPickupObject(){const e=new _t,t=new po(.68,0),i=new qe(t,Li(16762967,.45)),s=new as(new av(t),Ii(16773283,.92)),r=new qe(new jt(.78,.86,32),Li(16762967,.18));return r.rotation.x=-Math.PI*.5,e.add(r,i,s),e}}const un=[{id:"first-light",name:"First Light",gamerscore:50,description:"Destroy your first hostile vector."},{id:"clean-arc",name:"Clean Arc",gamerscore:75,description:"Reach a 5x multiplier."},{id:"saint-of-splinters",name:"Saint of Splinters",gamerscore:100,description:"Destroy a splitter."},{id:"wave-runner",name:"Wave Runner",gamerscore:125,description:"Reach wave 5."},{id:"ten-thousand-sparks",name:"Ten Thousand Sparks",gamerscore:125,description:"Score 10,000 points."},{id:"bomb-doctrine",name:"Bomb Doctrine",gamerscore:100,description:"Clear 8 enemies with one bomb."},{id:"true-vector",name:"True Vector",gamerscore:150,description:"Reach a 10x multiplier."},{id:"hundred-fold",name:"Hundred Fold",gamerscore:125,description:"Destroy 100 enemies in one run."},{id:"signal-saint",name:"Signal Saint",gamerscore:150,description:"Score 50,000 points."}];class Wv{constructor(e){v(this,"unlocked");this.saveSystem=e,this.unlocked=(e==null?void 0:e.loadAchievements())??new Set}get totalGamerscore(){return un.reduce((e,t)=>e+t.gamerscore,0)}resetRuntime(){}tryUnlock(e){var i;if(this.unlocked.has(e))return;const t=un.find(s=>s.id===e);if(t)return this.unlocked.add(e),(i=this.saveSystem)==null||i.saveAchievements(this.unlocked),t}}const vn={chaser:{id:"chaser",label:"Chaser",radius:1.15,health:2,speed:11.5,score:100,color:16727538,sides:4,turnRate:7,spawnWeight:10,unlockWave:1,damage:1},dasher:{id:"dasher",label:"Dasher",radius:1.25,health:3,speed:7.5,score:180,color:16762967,sides:3,turnRate:4,spawnWeight:4,unlockWave:2,damage:1,dash:{chargeTime:.55,lungeTime:.38,cooldown:1.4,speed:29}},splitter:{id:"splitter",label:"Splitter",radius:1.75,health:5,speed:7.2,score:320,color:8257379,sides:6,turnRate:5,spawnWeight:2,unlockWave:3,damage:1,splitOnDeath:{type:"swarm",count:4}},orbitMine:{id:"orbitMine",label:"Orbit Mine",radius:1.45,health:4,speed:4.2,score:260,color:3798527,sides:12,turnRate:2.2,spawnWeight:2,unlockWave:4,damage:1,beams:{length:8.5,width:.42,rotationSpeed:2.1}},swarm:{id:"swarm",label:"Swarm",radius:.72,health:1,speed:17.5,score:60,color:16731261,sides:3,turnRate:12,spawnWeight:8,unlockWave:2,damage:1}},yr=Rt(),Vn=Rt();class Xv{update(e,t,i,s,r,a,o,l){this.checkBullets(e,i,s,r,o,l),this.checkPlayerEnemyContact(e,t,s,a,o),this.checkPickups(e,t,i,s)}applyBomb(e,t,i,s,r,a,o){const l=a.difficultyAssist==="forgiving"?ke.forgivingBombRadius:ke.bombRadius;let c=0;return s({type:"bomb",x:t.position.x,y:t.position.y,radius:l}),i.applyBombPenalty(),e.enemies.forEachActive(h=>{const u=l+h.radius;Vi(t.position,h.position)<=u*u&&(this.destroyEnemy(e,h,i,s,r,!0,o),c+=1)}),c}applyBeam(e,t,i,s,r,a,o,l,c,h=a.color,u){const d=a.beam;if(!d)return 0;let f=0;return Pe(yr,t,i),Pe(Vn,t+s*d.range,i+r*d.range),l({type:"beamFired",x:t,y:i,aimX:s,aimY:r,range:d.range,width:d.width,visualLife:d.visualLife,color:h,weaponId:a.id}),e.enemies.forEachActive(g=>{if(!g.active)return;const x=d.width+g.radius;if(Ar(g.position,yr,Vn)>x*x)return;f+=1,g.damage((u==null?void 0:u.modifyBeamDamage(d.damage))??d.damage)&&this.destroyEnemy(e,g,o,l,c,!1,u)}),f}checkBullets(e,t,i,s,r,a){e.bullets.forEachActive(o=>{o.active&&e.enemies.forEachActive(l=>{if(!o.active||!l.active||o.hitEnemyIds.has(l.id))return;const c=o.radius+l.radius;if(Vi(o.position,l.position)>c*c)return;o.hitEnemyIds.add(l.id);const h=l.damage(o.damageAmount);r==null||r.onBulletHit(e,o,l,t,i,s),h&&this.destroyEnemy(e,l,t,i,s,!1,a),o.pierceRemaining>0?(o.pierceRemaining-=1,o.pierceRemaining<=0&&(o.active=!1)):o.active=!1})})}checkPlayerEnemyContact(e,t,i,s,r){e.enemies.forEachActive(a=>{if(!a.active||t.invulnerableTimer>0)return;const o=t.radius+a.radius;if(Vi(t.position,a.position)<=o*o){a.active=!1,t.absorbSignatureShield()?(r==null||r.onPlayerShieldAbsorbed(),i({type:"skinAbility",ability:"glassShieldBreak",skinId:s.selectedSkin,x:t.position.x,y:t.position.y,radius:5,color:15269375})):t.takeHit(s.difficultyAssist)&&i({type:"playerHit",x:t.position.x,y:t.position.y});return}const l=a.definition.beams;if(l)for(let c=0;c<2;c+=1){const h=a.beamAngle+c*Math.PI;Pe(yr,a.position.x,a.position.y),fn(Vn,h,l.length),Vn.x+=a.position.x,Vn.y+=a.position.y;const u=l.width+t.radius*.55;if(Ar(t.position,yr,Vn)<=u*u){t.absorbSignatureShield()?(r==null||r.onPlayerShieldAbsorbed(),i({type:"skinAbility",ability:"glassShieldBreak",skinId:s.selectedSkin,x:t.position.x,y:t.position.y,radius:5,color:15269375})):t.takeHit(s.difficultyAssist)&&i({type:"playerHit",x:t.position.x,y:t.position.y});return}}})}checkPickups(e,t,i,s){e.pickups.forEachActive(r=>{const a=t.radius+r.radius;Vi(t.position,r.position)>a*a||(r.active=!1,i.awardPickup(r.value),s({type:"pickupCollected",x:r.position.x,y:r.position.y,color:r.color}))})}destroyEnemy(e,t,i,s,r,a,o){if(!t.active&&t.health>0)return;t.active=!1;const l=(o==null?void 0:o.scoreMultiplierAt(t.position.x,t.position.y))??1,c=i.awardEnemy(t,a?"bomb":"weapon",l);l>1&&(o==null||o.recordScoringZoneKill(t.position.x,t.position.y,s)),s({type:"enemyKilled",x:t.position.x,y:t.position.y,color:t.color,enemyType:t.typeId,scoreAwarded:c,source:a?"bomb":"weapon"}),!a&&r.chance(.08)&&e.spawnPickup(t.position.x,t.position.y,r);const h=t.definition.splitOnDeath;if(h&&!a)for(let u=0;u<h.count;u+=1){const d=e.spawnEnemy(h.type,t.position.x+r.range(-1.2,1.2),t.position.y+r.range(-1.2,1.2),Math.max(0,t.difficultyScale-1),r);if(d){const f=u/h.count*Math.PI*2+r.range(-.25,.25);fn(d.velocity,f,vn[h.type].speed*.9)}}i.multiplier>Ht.multiplierMax&&(i.multiplier=Ht.multiplierMax)}}class Da{constructor(e,t){v(this,"items");this.items=Array.from({length:t},(i,s)=>e(s))}acquire(e){for(const t of this.items)if(!t.active)return t.reset(),t.active=!0,e==null||e(t),t}forEachActive(e){for(const t of this.items)t.active&&e(t)}countActive(){let e=0;for(const t of this.items)t.active&&(e+=1);return e}deactivateAll(){for(const e of this.items)e.active=!1}}let Yv=1;class go{constructor(e){v(this,"id",Yv++);v(this,"active",!1);v(this,"age",0);v(this,"radius",1);v(this,"health",1);v(this,"maxHealth",1);v(this,"color",16777215);v(this,"position",Rt());v(this,"velocity",Rt());this.kind=e}reset(){this.active=!1,this.age=0,this.radius=1,this.health=1,this.maxHealth=1,this.color=16777215,Pe(this.position,0,0),Pe(this.velocity,0,0)}damage(e){return this.health-=e,this.health<=0?(this.active=!1,!0):!1}}class qv extends go{constructor(){super("bullet");v(this,"ttl",0);v(this,"damageAmount",ke.bulletDamage);v(this,"owner","player");v(this,"weaponId","vectorBolt");v(this,"magnetRadius",0);v(this,"magnetStrength",0);v(this,"magnetHeadingX",0);v(this,"magnetHeadingY",0);v(this,"pierceRemaining",0);v(this,"signature","none");v(this,"sourceSkinId","vectorSaint");v(this,"hitEnemyIds",new Set)}reset(){super.reset(),this.ttl=0,this.damageAmount=ke.bulletDamage,this.owner="player",this.radius=ke.bulletRadius,this.color=3798527,this.weaponId="vectorBolt",this.magnetRadius=0,this.magnetStrength=0,this.magnetHeadingX=0,this.magnetHeadingY=0,this.pierceRemaining=0,this.signature="none",this.sourceSkinId="vectorSaint",this.hitEnemyIds.clear()}spawn(t,i,s,r,a){this.active=!0,Pe(this.position,t,i),Pe(this.velocity,s,r),this.ttl=(a==null?void 0:a.life)??ke.bulletLife,this.damageAmount=(a==null?void 0:a.damage)??ke.bulletDamage,this.radius=(a==null?void 0:a.radius)??ke.bulletRadius,this.color=(a==null?void 0:a.color)??3798527,this.weaponId=(a==null?void 0:a.weaponId)??"vectorBolt",this.magnetRadius=(a==null?void 0:a.magnetRadius)??0,this.magnetStrength=(a==null?void 0:a.magnetStrength)??0,this.magnetHeadingX=0,this.magnetHeadingY=0,this.pierceRemaining=(a==null?void 0:a.pierceRemaining)??0,this.signature=(a==null?void 0:a.signature)??"none",this.sourceSkinId=(a==null?void 0:a.sourceSkinId)??"vectorSaint",this.hitEnemyIds.clear()}update(t){this.active&&(this.age+=t,this.ttl-=t,Br(this.position,this.velocity,t),this.ttl<=0&&(this.active=!1))}}class jv extends go{constructor(){super("enemy");v(this,"typeId","chaser");v(this,"definition",vn.chaser);v(this,"facingAngle",0);v(this,"driftAngle",0);v(this,"stateTimer",0);v(this,"dasherState","idle");v(this,"beamAngle",0);v(this,"difficultyScale",1);v(this,"desired",Rt());v(this,"speedMultiplier",1)}reset(){super.reset(),this.typeId="chaser",this.definition=vn.chaser,this.facingAngle=0,this.driftAngle=0,this.stateTimer=0,this.dasherState="idle",this.beamAngle=0,this.difficultyScale=1,this.speedMultiplier=1,Pe(this.desired,0,0)}spawn(t,i,s,r,a){const o=vn[t];this.active=!0,this.typeId=t,this.definition=o,this.radius=o.radius,this.maxHealth=Math.ceil(o.health*(1+r*.025)),this.health=this.maxHealth,this.color=o.color,this.difficultyScale=1+r*.035,this.facingAngle=a.range(-Math.PI,Math.PI),this.driftAngle=a.range(-Math.PI,Math.PI),this.beamAngle=a.range(-Math.PI,Math.PI),this.stateTimer=o.dash?o.dash.cooldown*a.range(.35,.9):0,this.dasherState="idle",Pe(this.position,i,s),fn(this.velocity,this.driftAngle,o.speed*.45)}update(t,i){if(this.active){switch(this.age+=t,this.typeId){case"dasher":this.updateDasher(t,i);break;case"orbitMine":this.updateOrbitMine(t,i);break;case"swarm":this.updateSeeking(t,i,1.2,3.2);break;case"splitter":this.updateSeeking(t,i,.76,1.3);break;case"chaser":default:this.updateSeeking(t,i,1,.8);break}this.speedMultiplier!==1&&(this.velocity.x*=this.speedMultiplier,this.velocity.y*=this.speedMultiplier,this.speedMultiplier=1),Br(this.position,this.velocity,t)}}applySpeedMultiplier(t){this.speedMultiplier=Math.min(this.speedMultiplier,Math.max(0,t))}updateSeeking(t,i,s,r){if(Pe(this.desired,i.x-this.position.x,i.y-this.position.y),ui(this.desired),r>0){const o=Math.sin(this.age*r+this.id)*.32,l=this.desired.x;this.desired.x=this.desired.x-this.desired.y*o,this.desired.y=this.desired.y+l*o,ui(this.desired)}const a=br(this.desired);this.facingAngle=To(this.facingAngle,a,this.definition.turnRate*t),fn(this.velocity,this.facingAngle,this.definition.speed*s*this.difficultyScale)}updateDasher(t,i){const s=this.definition.dash;if(s){if(this.stateTimer-=t,this.dasherState==="idle"){this.updateSeeking(t,i,.45,0),this.stateTimer<=0&&Vi(this.position,i)<500&&(this.dasherState="charging",this.stateTimer=s.chargeTime,this.velocity.x*=.1,this.velocity.y*=.1);return}if(this.dasherState==="charging"){Pe(this.desired,i.x-this.position.x,i.y-this.position.y),ui(this.desired),this.facingAngle=br(this.desired),this.velocity.x*=.9,this.velocity.y*=.9,this.stateTimer<=0&&(this.dasherState="lunging",this.stateTimer=s.lungeTime,fn(this.velocity,this.facingAngle,s.speed*this.difficultyScale));return}this.dasherState==="lunging"&&this.stateTimer<=0&&(this.dasherState="idle",this.stateTimer=s.cooldown,Ci(this.velocity)>0&&(this.velocity.x*=.4,this.velocity.y*=.4))}}updateOrbitMine(t,i){const s=this.definition.beams;s&&(this.beamAngle+=s.rotationSpeed*t*this.difficultyScale);const r=i.x-this.position.x,a=i.y-this.position.y;r*r+a*a>420?Pe(this.desired,r,a):Pe(this.desired,-r*.42-a*.18,-a*.42+r*.18),ui(this.desired);const l=br(this.desired)+Math.sin(this.age*1.7+this.id)*.35;this.facingAngle=To(this.facingAngle,l,this.definition.turnRate*t),fn(this.velocity,this.facingAngle,this.definition.speed*this.difficultyScale)}}class Kv extends go{constructor(){super("pickup");v(this,"type","scoreCell");v(this,"value",Ht.pickupScore);v(this,"ttl",9)}reset(){super.reset(),this.type="scoreCell",this.value=Ht.pickupScore,this.ttl=9,this.radius=.7,this.color=16762967}spawn(t,i,s=Ht.pickupScore){this.active=!0,this.value=s,Pe(this.position,t,i),Pe(this.velocity,0,0)}update(t){this.active&&(this.age+=t,this.ttl-=t,this.velocity.x*=Math.max(0,1-t*2.5),this.velocity.y*=Math.max(0,1-t*2.5),Br(this.position,this.velocity,t),this.ttl<=0&&(this.active=!1))}}class Zv{constructor(){v(this,"bullets",new Da(()=>new qv,Ti.bullets));v(this,"enemies",new Da(()=>new jv,Ti.enemies));v(this,"pickups",new Da(()=>new Kv,Ti.pickups))}reset(){this.bullets.deactivateAll(),this.enemies.deactivateAll(),this.pickups.deactivateAll()}update(e,t){this.bullets.forEachActive(s=>{this.applyBulletMagnetism(s,e),s.update(e)});const i=Ai.despawnDistance*Ai.despawnDistance;this.enemies.forEachActive(s=>{s.update(e,t.position);const r=s.position.x-t.position.x,a=s.position.y-t.position.y;r*r+a*a>i&&(s.active=!1)}),this.pickups.forEachActive(s=>s.update(e))}spawnBullet(e,t,i,s,r){return this.bullets.acquire(a=>{const l=(r==null?void 0:r.speed)??ke.bulletSpeed,c=i*l,h=s*l;a.spawn(e+i*1.35,t+s*1.35,c,h,r)})}applyBulletMagnetism(e,t){if(e.magnetRadius<=0||e.magnetStrength<=0)return;const i=Math.hypot(e.velocity.x,e.velocity.y);if(i<=.001)return;const s=e.velocity.x/i,r=e.velocity.y/i,a=e.magnetRadius*e.magnetRadius;let o=0,l=0,c=Number.POSITIVE_INFINITY;if(this.enemies.forEachActive(U=>{if(!U.active)return;const A=U.position.x-e.position.x,C=U.position.y-e.position.y,I=A*A+C*C;if(I<=.001||I>a)return;const E=Math.sqrt(I),_=(A*s+C*r)/E;if(_<ks.magnetMinForwardDot)return;const P=I*(1-Math.max(0,_)*ks.magnetScoreForwardBias);P>=c||(c=P,o=A,l=C)}),!Number.isFinite(c))return;const h=Math.hypot(o,l);if(h<=.001)return;const u=o/h,d=l/h;Math.hypot(e.magnetHeadingX,e.magnetHeadingY)<=.001&&(e.magnetHeadingX=s,e.magnetHeadingY=r);const f=1-Math.exp(-t*ks.magnetTargetSmoothing);e.magnetHeadingX+=(u-e.magnetHeadingX)*f,e.magnetHeadingY+=(d-e.magnetHeadingY)*f;const g=Math.hypot(e.magnetHeadingX,e.magnetHeadingY);if(g<=.001)return;e.magnetHeadingX/=g,e.magnetHeadingY/=g;const x=e.magnetHeadingX*i,m=e.magnetHeadingY*i,p=1-Math.exp(-e.magnetStrength*ks.magnetTurnScale*t),M=e.velocity.x+(x-e.velocity.x)*p,y=e.velocity.y+(m-e.velocity.y)*p,w=Math.hypot(M,y);w<=.001||(e.velocity.x=M/w*i,e.velocity.y=y/w*i)}spawnEnemy(e,t,i,s,r){return this.enemies.acquire(a=>a.spawn(e,t,i,s,r))}spawnPickup(e,t,i){return this.pickups.acquire(s=>{s.spawn(e,t),fn(s.velocity,i.range(-Math.PI,Math.PI),i.range(1.6,4.2))})}get activeEnemyCount(){return this.enemies.countActive()}get activeBulletCount(){return this.bullets.countActive()}get activePickupCount(){return this.pickups.countActive()}}class Jv{constructor(e,t){v(this,"rafId",0);v(this,"running",!1);v(this,"previousTime",0);v(this,"accumulator",0);v(this,"tick",e=>{if(!this.running)return;const t=(e-this.previousTime)/1e3,i=Math.min(t,$i.maxFrameDelta);this.previousTime=e,this.accumulator+=i;let s=0;for(;this.accumulator>=$i.fixedDelta&&s<$i.maxFixedSteps;)this.fixedUpdate($i.fixedDelta),this.accumulator-=$i.fixedDelta,s+=1;s>=$i.maxFixedSteps&&(this.accumulator=0),this.render(this.accumulator/$i.fixedDelta,i),this.rafId=requestAnimationFrame(this.tick)});this.fixedUpdate=e,this.render=t}start(){this.running||(this.running=!0,this.previousTime=performance.now(),this.rafId=requestAnimationFrame(this.tick))}stop(){this.running=!1,this.rafId&&cancelAnimationFrame(this.rafId)}}var _e=(n=>(n.Boot="boot",n.MainMenu="main-menu",n.Achievements="achievements",n.Leaderboard="leaderboard",n.Controls="controls",n.InitialsEntry="initials-entry",n.SkinSelect="skin-select",n.RelicDraft="relic-draft",n.Playing="playing",n.Paused="paused",n.GameOver="game-over",n.Settings="settings",n))(_e||{});class Qv{constructor(){v(this,"active",!0);v(this,"position",Rt());v(this,"velocity",Rt());v(this,"aim",Rt(1,0));v(this,"dashDirection",Rt(1,0));v(this,"radius",ke.radius);v(this,"health",ke.maxHealth);v(this,"maxHealth",ke.maxHealth);v(this,"fireCooldown",0);v(this,"dashCooldown",0);v(this,"dashCharges",ke.dashCharges);v(this,"dashTimer",0);v(this,"bombCooldown",0);v(this,"invulnerableTimer",0);v(this,"facingAngle",0);v(this,"dashStarted",!1);v(this,"weaponId","vectorBolt");v(this,"speedMultiplier",1);v(this,"accelerationMultiplier",1);v(this,"frictionMultiplier",1);v(this,"dashCooldownMultiplier",1);v(this,"temporaryShieldHits",0);v(this,"signatureChargeRatio",0);v(this,"signatureReady",!1);v(this,"redlineSurgeActive",!1);v(this,"signaturePulse",0)}reset(e){this.active=!0,Pe(this.position,0,0),Pe(this.velocity,0,0),Pe(this.aim,1,0),this.maxHealth=e==="forgiving"?ke.forgivingMaxHealth:ke.maxHealth,this.health=this.maxHealth,this.fireCooldown=0,this.dashCooldown=0,this.dashCharges=ke.dashCharges,this.dashTimer=0,this.bombCooldown=0,this.invulnerableTimer=1.2,this.facingAngle=0,this.dashStarted=!1,this.weaponId="vectorBolt",this.speedMultiplier=1,this.accelerationMultiplier=1,this.frictionMultiplier=1,this.dashCooldownMultiplier=1,this.temporaryShieldHits=0,this.signatureChargeRatio=0,this.signatureReady=!1,this.redlineSurgeActive=!1,this.signaturePulse=0}resetFrameModifiers(){this.speedMultiplier=1,this.accelerationMultiplier=1,this.frictionMultiplier=1,this.dashCooldownMultiplier=1}update(e,t){this.dashStarted=!1,this.fireCooldown=Math.max(0,this.fireCooldown-t),this.updateDashRecharge(t),this.bombCooldown=Math.max(0,this.bombCooldown-t),this.invulnerableTimer=Math.max(0,this.invulnerableTimer-t),Ci(e.aim)>.05&&(Pe(this.aim,e.aim.x,e.aim.y),ui(this.aim),this.facingAngle=br(this.aim)),e.dashPressed&&(this.dashStarted=this.tryDash(e.move)),this.signaturePulse=Math.max(0,this.signaturePulse-t*3.4);const i=e.move.x*ke.speed*this.speedMultiplier,s=e.move.y*ke.speed*this.speedMultiplier,r=ke.acceleration*this.accelerationMultiplier*t;if(this.velocity.x+=qt(i-this.velocity.x,-r,r),this.velocity.y+=qt(s-this.velocity.y,-r,r),Ci(e.move)<.01&&this.dashTimer<=0){const a=Math.max(0,1-ke.friction*this.frictionMultiplier*t);this.velocity.x*=a,this.velocity.y*=a}this.dashTimer>0&&(this.dashTimer-=t),Br(this.position,this.velocity,t)}tryShoot(){return this.fireCooldown>0?!1:(this.fireCooldown=this.weapon.fireInterval,!0)}cycleWeapon(e){this.weaponId=Xh(this.weaponId,e),this.fireCooldown=Math.min(this.fireCooldown,this.weapon.fireInterval*.55)}tryDash(e){return this.dashCharges<=0?!1:(this.resolveDashDirection(e),this.dashCharges-=1,this.dashCharges<ke.dashCharges&&this.dashCooldown<=0&&(this.dashCooldown=this.dashRechargeDuration),this.dashTimer=ke.dashDuration,this.invulnerableTimer=Math.max(this.invulnerableTimer,ke.dashInvulnerable),this.velocity.x=this.dashDirection.x*ke.dashSpeed,this.velocity.y=this.dashDirection.y*ke.dashSpeed,!0)}tryBomb(){return this.bombCooldown>0?!1:(this.bombCooldown=ke.bombCooldown,!0)}takeHit(e){return this.invulnerableTimer>0?!1:(this.health-=1,this.invulnerableTimer=e==="forgiving"?ke.forgivingHitInvulnerable:ke.hitInvulnerable,this.health<=0&&(this.active=!1),!0)}absorbSignatureShield(){return this.temporaryShieldHits<=0?!1:(this.temporaryShieldHits-=1,this.signatureReady=!1,this.signatureChargeRatio=0,this.invulnerableTimer=Math.max(this.invulnerableTimer,ke.hitInvulnerable*.42),this.signaturePulse=1,!0)}get healthRatio(){return this.maxHealth<=0?0:this.health/this.maxHealth}get dashRatio(){if(this.dashCharges>=ke.dashCharges)return 1;const e=1-qt(this.dashCooldown/this.dashRechargeDuration,0,1);return qt((this.dashCharges+e)/ke.dashCharges,0,1)}get bombRatio(){return 1-qt(this.bombCooldown/ke.bombCooldown,0,1)}get weapon(){return Pc[this.weaponId]}get canDash(){return this.dashCharges>0}updateDashRecharge(e){if(this.dashCharges>=ke.dashCharges){this.dashCooldown=0;return}for(this.dashCooldown-=e;this.dashCooldown<=0&&this.dashCharges<ke.dashCharges;)this.dashCharges+=1,this.dashCharges<ke.dashCharges?this.dashCooldown+=this.dashRechargeDuration:this.dashCooldown=0}get dashRechargeDuration(){return ke.dashCooldown*this.dashCooldownMultiplier}resolveDashDirection(e){e&&Ci(e)>.01?Pe(this.dashDirection,e.x,e.y):Ci(this.velocity)>1?Pe(this.dashDirection,this.velocity.x,this.velocity.y):Pe(this.dashDirection,this.aim.x,this.aim.y),ui(this.dashDirection)}}const bs=10,Sc=2,Ia="vectorSaintProfile",$v=60*60*24*365*5,ex=3800,Mt={profile:"vector-saint.profile",settings:"vector-saint.settings.v1",highScore:"vector-saint.high-score.v1",achievements:"vector-saint.achievements.v1",controls:"vector-saint.controls.v1",leaderboard:"vector-saint.leaderboard.v1",invertedDefaultMigration:"vector-saint.inverted-controls-default.v2",defaultSettingsMigration:"vector-saint.default-settings.v3"},tx=["off","low","medium","high"],ix=["soft","balanced","radiant"],nx=["tight","medium","wide"],sx=["off","fxaa","smaa","msaa-4x","msaa-4x-smaa"],rx=["off","low","medium","high"],ax=["off","low"],ox=["low","medium","high"],lx=["low","medium","high"],cx=["default","high-contrast","colourblind"],hx=["small","medium","large"],ux=["normal","forgiving"];class dx{constructor(e=fx()){this.storage=e}loadSettings(){var u,d,f,g,x,m,p;const e=this.loadProfile(),t=Ms(e.settings)?e.settings:void 0,i=this.readJson(Mt.settings),s=t??(Ms(i)?i:void 0);if(!s)return{...ft};const r=typeof s.invertedControls=="boolean"?s.invertedControls:ft.invertedControls,a=((u=e.migrations)==null?void 0:u.invertedDefault)===!0||((d=this.storage)==null?void 0:d.getItem(Mt.invertedDefaultMigration))==="1",o=((f=e.migrations)==null?void 0:f.settingsDefaults20260611)===!0||((g=this.storage)==null?void 0:g.getItem(Mt.defaultSettingsMigration))==="1",l=!a&&r===!1,c=px(s,l),h=o?c:mx(c,s);return(l||!o||!t)&&(this.updateProfile(M=>{var y;M.settings=h,M.migrations={...M.migrations,invertedDefault:l||((y=M.migrations)==null?void 0:y.invertedDefault)===!0,settingsDefaults20260611:!0}}),(x=this.storage)==null||x.setItem(Mt.settings,JSON.stringify(h))),l&&((m=this.storage)==null||m.setItem(Mt.invertedDefaultMigration,"1")),o||(p=this.storage)==null||p.setItem(Mt.defaultSettingsMigration,"1"),h}saveSettings(e){var t,i,s;this.updateProfile(r=>{r.settings=e,r.migrations={...r.migrations,invertedDefault:!0,settingsDefaults20260611:!0}}),(t=this.storage)==null||t.setItem(Mt.settings,JSON.stringify(e)),(i=this.storage)==null||i.setItem(Mt.invertedDefaultMigration,"1"),(s=this.storage)==null||s.setItem(Mt.defaultSettingsMigration,"1")}loadHighScore(){var i;const e=Mc(this.loadProfile().highScore),t=Mc((i=this.storage)==null?void 0:i.getItem(Mt.highScore));return Math.max(e,t)}saveHighScore(e){var i;const t=Math.max(0,Math.floor(e));this.updateProfile(s=>{s.highScore=t}),(i=this.storage)==null||i.setItem(Mt.highScore,String(t))}loadAchievements(){return new Set([..._c(this.loadProfile().achievements),..._c(this.readJson(Mt.achievements))])}saveAchievements(e){var i;const t=[...new Set([...e].filter(s=>typeof s=="string"))];this.updateProfile(s=>{s.achievements=t}),(i=this.storage)==null||i.setItem(Mt.achievements,JSON.stringify(t))}loadControlBindings(){const e=this.loadProfile().controls;if(e!==void 0)return qr(e);const t=this.readJson(Mt.controls);return t!==void 0?qr(t):eo($a)}saveControlBindings(e){var i;const t=qr(e);this.updateProfile(s=>{s.controls=t}),(i=this.storage)==null||i.setItem(Mt.controls,JSON.stringify(t))}loadLeaderboard(){return bc([...Ja(this.loadProfile().leaderboard),...Ja(this.readJson(Mt.leaderboard))]).slice(0,bs)}saveLeaderboard(e){var i;const t=bc(e).slice(0,bs);this.updateProfile(s=>{s.leaderboard=t}),(i=this.storage)==null||i.setItem(Mt.leaderboard,JSON.stringify(t))}submitLeaderboardEntry(e,t,i,s=new Date().toISOString()){const r=Qa({initials:e,score:t,wave:i,date:s});if(!r)return this.loadLeaderboard();const a=[...this.loadLeaderboard(),r],o=yh(a).slice(0,bs);return this.saveLeaderboard(o),r.score>this.loadHighScore()&&this.saveHighScore(r.score),o}qualifiesForLeaderboard(e,t=0){const i=Qa({initials:"AAA",score:e,wave:t,date:new Date(0).toISOString()});if(!i)return!1;const s=this.loadLeaderboard();return s.length<bs?!0:Sh(i,s[s.length-1])<0}readJson(e){var i;const t=(i=this.storage)==null?void 0:i.getItem(e);if(t)try{return JSON.parse(t)}catch{return}}loadProfile(){const e=this.readJson(Mt.profile)??this.readCookieProfile();if(!Ms(e))return{schemaVersion:Sc};const t=Ms(e.settings)?e.settings:void 0,i=Ms(e.migrations)?{invertedDefault:e.migrations.invertedDefault===!0,settingsDefaults20260611:e.migrations.settingsDefaults20260611===!0}:void 0;return{schemaVersion:typeof e.schemaVersion=="number"?e.schemaVersion:1,settings:t,highScore:typeof e.highScore=="number"?e.highScore:void 0,achievements:Array.isArray(e.achievements)?e.achievements.filter(s=>typeof s=="string"):void 0,controls:e.controls,leaderboard:Array.isArray(e.leaderboard)?e.leaderboard:void 0,migrations:i}}saveProfile(e){var i;const t=JSON.stringify({...e,schemaVersion:Sc});(i=this.storage)==null||i.setItem(Mt.profile,t),this.writeCookieProfile(t)}updateProfile(e){const t=this.loadProfile();e(t),this.saveProfile(t)}readCookieProfile(){try{if(typeof document>"u")return;const e=document.cookie.split("; ").find(t=>t.startsWith(`${Ia}=`));return e?JSON.parse(decodeURIComponent(e.slice(Ia.length+1))):void 0}catch{return}}writeCookieProfile(e){try{if(typeof document>"u")return;const t=encodeURIComponent(e);if(t.length>ex)return;document.cookie=`${Ia}=${t}; max-age=${$v}; path=/; SameSite=Lax`}catch{}}}function Za(n){return(n.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,3)||"AAA").padEnd(3,"A")}function fx(){try{return typeof localStorage>"u"?void 0:localStorage}catch{return}}function px(n,e){const t=typeof n.invertedControls=="boolean"?n.invertedControls:ft.invertedControls;return{bloom:tx.includes(n.bloom)?n.bloom:ft.bloom,bloomStrength:ix.includes(n.bloomStrength)?n.bloomStrength:ft.bloomStrength,bloomRadius:nx.includes(n.bloomRadius)?n.bloomRadius:ft.bloomRadius,antiAliasing:sx.includes(n.antiAliasing)?n.antiAliasing:ft.antiAliasing,shake:rx.includes(n.shake)?n.shake:ft.shake,flashReduction:typeof n.flashReduction=="boolean"?n.flashReduction:ft.flashReduction,chromaticAberration:ax.includes(n.chromaticAberration)?n.chromaticAberration:ft.chromaticAberration,backgroundIntensity:ox.includes(n.backgroundIntensity)?n.backgroundIntensity:ft.backgroundIntensity,particleDensity:lx.includes(n.particleDensity)?n.particleDensity:ft.particleDensity,invertedControls:e?ft.invertedControls:t,palette:cx.includes(n.palette)?n.palette:ft.palette,uiScale:hx.includes(n.uiScale)?n.uiScale:ft.uiScale,difficultyAssist:ux.includes(n.difficultyAssist)?n.difficultyAssist:ft.difficultyAssist,selectedSkin:Uh(n.selectedSkin)?n.selectedSkin:ft.selectedSkin,selectedBackground:Fh(n.selectedBackground)?n.selectedBackground:ft.selectedBackground}}function mx(n,e){return{...n,bloom:e.bloom===void 0||e.bloom==="medium"?ft.bloom:n.bloom,chromaticAberration:e.chromaticAberration===void 0||e.chromaticAberration==="off"?ft.chromaticAberration:n.chromaticAberration,particleDensity:e.particleDensity===void 0||e.particleDensity==="medium"?ft.particleDensity:n.particleDensity,uiScale:e.uiScale===void 0||e.uiScale==="medium"?ft.uiScale:n.uiScale}}function Mc(n){const e=Number(n);return Number.isFinite(e)&&e>0?Math.floor(e):0}function _c(n){return Array.isArray(n)?new Set(n.filter(e=>typeof e=="string")):new Set}function Ja(n){return Array.isArray(n)?yh(n.map(e=>Qa(e)).filter(e=>!!e)):[]}function Qa(n){if(!n||typeof n!="object")return;const e=n,t=Math.max(0,Math.floor(Number(e.score)));if(!Number.isFinite(t)||t<=0)return;const i=Math.max(1,Math.floor(Number(e.wave)||1)),s=typeof e.date=="string"&&e.date.length>0?e.date:new Date(0).toISOString();return{initials:Za(String(e.initials??"AAA")),score:t,wave:i,date:s}}function yh(n){return[...n].sort(Sh)}function bc(n){const e=new Set;return Ja(n).filter(i=>{const s=`${i.initials}:${i.score}:${i.wave}:${i.date}`;return e.has(s)?!1:(e.add(s),!0)})}function Sh(n,e){return n.score!==e.score?e.score-n.score:n.wave!==e.wave?e.wave-n.wave:n.date.localeCompare(e.date)}function Ms(n){return!!n&&typeof n=="object"&&!Array.isArray(n)}class gx{constructor(e){v(this,"score",0);v(this,"highScore",0);v(this,"multiplier",Ht.multiplierMin);v(this,"kills",0);v(this,"weaponKillStreak",0);v(this,"timeSinceKill",999);v(this,"highestMultiplier",1);v(this,"multiplierDecayMultiplier",1);this.saveSystem=e,this.highScore=(e==null?void 0:e.loadHighScore())??0}reset(){var e;this.score=0,this.multiplier=Ht.multiplierMin,this.kills=0,this.weaponKillStreak=0,this.timeSinceKill=999,this.highestMultiplier=1,this.multiplierDecayMultiplier=1,this.highScore=((e=this.saveSystem)==null?void 0:e.loadHighScore())??this.highScore}update(e,t){if(this.timeSinceKill+=e,this.timeSinceKill<=Ht.multiplierDecayDelay)return;this.weaponKillStreak=0;const i=t==="forgiving"?Ht.forgivingDecayRate:Ht.multiplierDecayRate;this.multiplier=Math.max(Ht.multiplierMin,this.multiplier-i*this.multiplierDecayMultiplier*e)}awardEnemy(e,t="weapon",i=1){const s=Math.round(e.definition.score*this.multiplier*Math.max(1,i));return this.score+=s,this.kills+=1,this.weaponKillStreak=t==="weapon"?this.weaponKillStreak+1:0,this.timeSinceKill=0,this.multiplier=Math.min(Ht.multiplierMax,this.multiplier+Ht.multiplierPerKill),this.highestMultiplier=Math.max(this.highestMultiplier,this.multiplier),this.persistHighScore(),s}awardPickup(e){this.score+=Math.round(e*Math.max(1,this.multiplier*.5)),this.persistHighScore()}applyBombPenalty(){this.multiplier=Math.max(Ht.multiplierMin,this.multiplier*Ht.bombMultiplierPenalty)}persistHighScore(){var e;this.score>this.highScore&&(this.highScore=this.score,(e=this.saveSystem)==null||e.saveHighScore(this.highScore))}}const Sr=Rt(),Mr=Rt();class vx{constructor(){v(this,"enabled",!1);v(this,"weaponCycleCooldown",0);v(this,"retryTimer",0);v(this,"idleTime",0);v(this,"wasShooting",!1);v(this,"aim",Rt(1,0));v(this,"move",Rt())}toggle(){return this.setEnabled(!this.enabled),this.enabled}setEnabled(e){this.enabled!==e&&(this.enabled=e,this.resetRun())}resetRun(){this.weaponCycleCooldown=0,this.retryTimer=Ze.retryDelay,this.idleTime=0,this.wasShooting=!1,Pe(this.aim,1,0),Pe(this.move,0,0)}beginRetryDelay(){this.retryTimer=Ze.retryDelay}shouldRetry(e){return this.enabled?(this.retryTimer-=e,this.retryTimer<=0):!1}apply(e,t,i,s){if(!this.enabled)return;this.weaponCycleCooldown=Math.max(0,this.weaponCycleCooldown-s),this.idleTime+=s,this.clearGameplayInput(e,t);let r,a=-1/0,o=1/0,l=0,c=0,h=0,u=0,d=0;i.enemies.forEachActive(M=>{u+=1;const y=M.position.x-t.position.x,w=M.position.y-t.position.y,U=y*y+w*w,A=Math.max(.001,Math.sqrt(U));A<o&&(o=A);const C=ke.bombRadius*Ze.bombRadiusScale+M.radius;A<=C&&(l+=1);const I=qt((Ze.dangerRadius-A)/Ze.dangerRadius,0,1);if(I>0){const H=-y/A,k=-w/A,q=M.id%2===0?1:-1;c+=H*I*Ze.fleeWeight+-k*I*Ze.strafeWeight*q,h+=k*I*Ze.fleeWeight+H*I*Ze.strafeWeight*q}const E=M.definition.beams;if(E){const H=E.width+Ze.orbitBeamAvoidance;for(let k=0;k<2;k+=1){const q=M.beamAngle+k*Math.PI,j=Math.cos(q),W=Math.sin(q);Pe(Sr,M.position.x,M.position.y),Pe(Mr,M.position.x+j*E.length,M.position.y+W*E.length);const Z=Ar(t.position,Sr,Mr);if(Z<=H*H){const G=1-Math.sqrt(Z)/H,de=y*-W+w*j>=0?-1:1;d=Math.max(d,G),c+=-W*de*G*(Ze.fleeWeight+.9),h+=j*de*G*(Ze.fleeWeight+.9)}}}const _=M.typeId==="splitter"?11:M.typeId==="dasher"?7:M.typeId==="orbitMine"?6:0,P=M.definition.score*.025+_+48/(A+4)+(M.health<=1?4:0);P>a&&(a=P,r=M)}),r?(Pe(this.aim,r.position.x-t.position.x,r.position.y-t.position.y),ui(this.aim)):u===0&&Pe(this.aim,Math.cos(this.idleTime*.7),Math.sin(this.idleTime*.7));const f=r?this.countBeamHits(i,t,this.aim):0,g=this.chooseWeapon(r,o,f);this.queueWeaponCycle(e,t.weaponId,g),Pe(this.move,c,h),this.addRangeControl(r,t),this.addPickupPull(i,t,o),this.addIdleDrift(u),ui(this.move);const x=o<=Ze.emergencyRadius||d>.58,m=t.dashCharges>1&&(o<=Ze.spareChargeDashRadius||d>.34);(x||m)&&t.canDash&&(this.move.x!==0||this.move.y!==0)?(e.dashPressed=!0,Pe(this.aim,this.move.x,this.move.y),e.shoot=!1):e.shoot=!!r;const p=o<=Ze.emergencyRadius*.9&&l>=Math.max(3,Ze.bombEnemyThreshold-3);e.bombPressed=t.bombRatio>=.98&&(l>=Ze.bombEnemyThreshold||p),e.shootPressed=e.shoot&&!this.wasShooting,this.wasShooting=e.shoot,Pe(e.move,this.move.x,this.move.y),Pe(e.aim,this.aim.x,this.aim.y),e.lastDevice="keyboard-mouse"}clearGameplayInput(e,t){Pe(e.move,0,0),Pe(e.aim,t.aim.x,t.aim.y),e.shoot=!1,e.shootPressed=!1,e.dashPressed=!1,e.bombPressed=!1,e.previousWeaponPressed=!1,e.nextWeaponPressed=!1}addRangeControl(e,t){if(!e)return;const i=e.position.x-t.position.x,s=e.position.y-t.position.y,r=Math.max(.001,Math.sqrt(i*i+s*s)),a=qt((r-Ze.preferredRange)/Ze.preferredRange,-1,1);this.move.x+=i/r*a*Ze.chaseWeight,this.move.y+=s/r*a*Ze.chaseWeight}addPickupPull(e,t,i){if(i<Ze.dangerRadius*.8)return;let s=0,r=0,a=1/0;if(e.pickups.forEachActive(l=>{const c=l.position.x-t.position.x,h=l.position.y-t.position.y,u=c*c+h*h;u<a&&(a=u,s=c,r=h)}),!Number.isFinite(a))return;const o=Math.max(.001,Math.sqrt(a));this.move.x+=s/o*Ze.pickupWeight,this.move.y+=r/o*Ze.pickupWeight}addIdleDrift(e){e>0||this.move.x!==0||this.move.y!==0||(this.move.x+=Math.cos(this.idleTime*.43)*Ze.idleDriftWeight,this.move.y+=Math.sin(this.idleTime*.31)*Ze.idleDriftWeight)}chooseWeapon(e,t,i){return e?i>=Ze.beamClusterHits||t>Ze.beamRange?"lanceBeam":t<=Ze.shotgunRange?"scatterCrown":"vectorBolt":"vectorBolt"}queueWeaponCycle(e,t,i){if(t===i||this.weaponCycleCooldown>0)return;const s=dn.indexOf(t),r=dn.indexOf(i),a=dn.length,o=(r-s+a)%a,l=(s-r+a)%a;o<=l?e.nextWeaponPressed=!0:e.previousWeaponPressed=!0,this.weaponCycleCooldown=Ze.weaponCycleDelay}countBeamHits(e,t,i){const s=Pc.lanceBeam.beam;if(!s)return 0;let r=0;return Pe(Sr,t.position.x,t.position.y),Pe(Mr,t.position.x+i.x*s.range,t.position.y+i.y*s.range),e.enemies.forEachActive(a=>{const o=s.width+a.radius;Ar(a.position,Sr,Mr)<=o*o&&(r+=1)}),r}}const Mh={vectorSaint:{id:"vectorBaseline",skinId:"vectorSaint",name:"Pure Vector",summary:"No gameplay modifier. Clean handling, clean reads, pure score chase."},solarWarden:{id:"solarPiercer",skinId:"solarWarden",name:"Solar Temper",summary:"Kill streaks heat shots. Every twentieth hit primes one small piercing solar round."},voidChoir:{id:"voidSlowField",skinId:"voidChoir",name:"Null Wake",summary:"Dashing leaves a brief violet slow field that hinders small hostiles most."},glassSeraph:{id:"glassShield",skinId:"glassSeraph",name:"Crystal Parry",summary:"Near misses charge a fragile crystal fragment that can absorb one hit."},redlineMartyr:{id:"redlineSurge",skinId:"redlineMartyr",name:"Danger Line",summary:"Low health adds a controlled movement boost and sharper redline streaks."},prismGhost:{id:"prismGhostBurst",skinId:"prismGhost",name:"Perfect Ghost",summary:"A close dodge releases a stylish ghost-shot fan, then enters a short cooldown."},ionChapel:{id:"ionChain",skinId:"ionChapel",name:"Chapel Arc",summary:"At high multiplier, occasional hits arc lightly to one nearby hostile."},neonRevenant:{id:"revenantSpark",skinId:"neonRevenant",name:"Revenant Spark",summary:"Weapon kills can loose a spectral spark that hunts a nearby target."}},me={solar:{hitInterval:20,killStreakWindow:2.6,heatPerKill:.08,maxHeat:.42,pierceCount:4,pierceRadiusScale:1.16,pierceSpeedScale:.94,pierceColor:16773283},void:{fieldLife:.6,radius:7.2,smallEnemyMultiplier:.48,standardEnemyMultiplier:.68,specialEnemyMultiplier:.84,forgivingRadiusScale:1.12,color:10309119},glass:{nearMissRadius:3.2,chargePerNearMiss:.26,chargeDecayPerSecond:.025,repeatCooldown:.8,maxShieldHits:1,color:15269375},redline:{healthThreshold:.5,maxBoost:.18,criticalHealthRatio:.25},prism:{nearMissRadius:2.85,cooldown:3.4,burstCount:5,burstSpread:.82,damage:1,speed:34,life:.58,radius:.42,color:16743671},ion:{multiplierThreshold:8,chance:.18,range:6.6,damage:1,cooldown:.22,color:6094813},revenant:{chance:.18,cooldown:.48,searchRange:16,damage:1,speed:38,life:.62,radius:.4,color:720797}};function xx(n){return Mh[n]}class yx{constructor(){v(this,"skinId","vectorSaint");v(this,"slowFields",[]);v(this,"nearMissCooldowns",new Map);v(this,"solarHitCounter",0);v(this,"solarHeat",0);v(this,"solarPierceReady",0);v(this,"solarKillStreakMilestone",0);v(this,"prismCooldown",0);v(this,"ionCooldown",0);v(this,"revenantCooldown",0);v(this,"glassCharge",0)}reset(e){this.skinId=e,this.slowFields.length=0,this.nearMissCooldowns.clear(),this.solarHitCounter=0,this.solarHeat=0,this.solarPierceReady=0,this.solarKillStreakMilestone=0,this.prismCooldown=0,this.ionCooldown=0,this.revenantCooldown=0,this.glassCharge=0}setSkin(e,t){this.skinId!==e&&(this.reset(e),t&&this.applyPlayerHudState(t))}preparePlayer(e,t){if(this.prismCooldown=Math.max(0,this.prismCooldown-t),this.ionCooldown=Math.max(0,this.ionCooldown-t),this.revenantCooldown=Math.max(0,this.revenantCooldown-t),this.solarHeat=Math.max(0,this.solarHeat-t*.05),this.decayNearMissCooldowns(t),e.speedMultiplier=1,e.redlineSurgeActive=!1,this.skinId==="glassSeraph"&&e.temporaryShieldHits<=0&&(this.glassCharge=Math.max(0,this.glassCharge-me.glass.chargeDecayPerSecond*t)),this.skinId==="redlineMartyr"){const i=e.healthRatio;if(i<=me.redline.healthThreshold){const s=1-Math.max(0,(i-me.redline.criticalHealthRatio)/(me.redline.healthThreshold-me.redline.criticalHealthRatio));e.speedMultiplier=1+me.redline.maxBoost*Math.min(1,Math.max(0,s)),e.redlineSurgeActive=!0}}this.applyPlayerHudState(e)}applyEnemyModifiers(e,t,i){for(const s of this.slowFields)s.age+=i;for(let s=this.slowFields.length-1;s>=0;s-=1)this.slowFields[s].age>=this.slowFields[s].life&&this.slowFields.splice(s,1);this.slowFields.length!==0&&e.enemies.forEachActive(s=>{for(const r of this.slowFields){const a=r.radius*(t.difficultyAssist==="forgiving"?1.08:1);Vi(s.position,r)>a*a||s.applySpeedMultiplier(this.slowMultiplierFor(s))}})}updateNearMisses(e,t,i,s,r){this.skinId!=="glassSeraph"&&this.skinId!=="prismGhost"||e.enemies.forEachActive(a=>{if((this.nearMissCooldowns.get(a.id)??0)>0)return;const l=a.position.x-t.position.x,c=a.position.y-t.position.y,h=l*l+c*c,d=a.radius+t.radius+.22,f=this.skinId==="glassSeraph"?me.glass.nearMissRadius:me.prism.nearMissRadius;h<=d*d||h>=f*f||(this.nearMissCooldowns.set(a.id,this.skinId==="glassSeraph"?me.glass.repeatCooldown:me.prism.cooldown),this.skinId==="glassSeraph"?this.chargeGlassShield(t,r):this.spawnPrismGhostBurst(e,t,a,i,s,r))})}onDash(e,t,i){if(this.skinId!=="voidChoir")return;const s=me.void.radius*(t.difficultyAssist==="forgiving"?me.void.forgivingRadiusScale:1);this.slowFields.push({x:e.position.x,y:e.position.y,age:0,life:me.void.fieldLife,radius:s}),i({type:"skinAbility",ability:"voidSlowField",skinId:this.skinId,x:e.position.x,y:e.position.y,radius:s,color:me.void.color})}onPlayerShieldAbsorbed(){this.skinId==="glassSeraph"&&(this.glassCharge=0)}decorateProjectileOptions(e,t,i){if(this.skinId==="solarWarden"){const s=Math.min(1,Math.max(0,this.solarHeat/me.solar.maxHeat)),r=(t.radius??.5)*(1+s*.08),a=(t.speed??1)*(1+s*.04),o=s>.2?me.solar.pierceColor:t.color;i.timeSinceKill>me.solar.killStreakWindow&&(this.solarKillStreakMilestone=0);const l=Math.floor(i.weaponKillStreak/me.solar.hitInterval);return i.timeSinceKill<=me.solar.killStreakWindow&&l>this.solarKillStreakMilestone&&(this.solarKillStreakMilestone=l,this.solarPierceReady+=1),this.solarPierceReady>0?(this.solarPierceReady=Math.max(0,this.solarPierceReady-1),{...t,radius:r*me.solar.pierceRadiusScale,speed:a*me.solar.pierceSpeedScale,color:me.solar.pierceColor,pierceRemaining:me.solar.pierceCount,signature:"solarPierce",sourceSkinId:this.skinId}):{...t,radius:r,speed:a,color:o,sourceSkinId:this.skinId}}return{...t,sourceSkinId:this.skinId}}onBulletHit(e,t,i,s,r,a){t.sourceSkinId==="solarWarden"&&(this.solarHitCounter+=1,this.solarHitCounter>=me.solar.hitInterval&&(this.solarHitCounter=0,this.solarPierceReady+=1)),t.sourceSkinId==="ionChapel"&&this.tryIonChain(e,i,s,r,a)}onEnemyKilled(e,t,i,s){if(e.source==="weapon"){if(this.skinId==="solarWarden"){this.solarHeat=Math.min(me.solar.maxHeat,this.solarHeat+me.solar.heatPerKill);return}this.skinId==="neonRevenant"&&this.trySpawnRevenantSpark(e.x,e.y,t,i,s)}}getHudState(){const e=Mh[this.skinId];return this.skinId==="solarWarden"?{label:this.solarPierceReady>0?"SOLAR READY":"SOLAR",ratio:this.solarPierceReady>0?1:this.solarHitCounter/me.solar.hitInterval,ready:this.solarPierceReady>0}:this.skinId==="glassSeraph"?{label:"SHIELD",ratio:this.glassCharge,ready:this.glassCharge>=1}:this.skinId==="prismGhost"?{label:this.prismCooldown<=0?"GHOST READY":"GHOST",ratio:this.prismCooldown<=0?1:1-this.prismCooldown/me.prism.cooldown,ready:this.prismCooldown<=0}:this.skinId==="voidChoir"?{label:"NULL WAKE",ratio:this.slowFields.length>0?1:0,ready:this.slowFields.length>0}:this.skinId==="ionChapel"?{label:e.name.toUpperCase(),ratio:this.ionCooldown<=0?1:.35,ready:this.ionCooldown<=0}:this.skinId==="redlineMartyr"?{label:"DANGER LINE",ratio:1,ready:!1}:this.skinId==="neonRevenant"?{label:"SPARK",ratio:this.revenantCooldown<=0?1:.4,ready:this.revenantCooldown<=0}:{label:e.name.toUpperCase(),ratio:0,ready:!1}}applyPlayerHudState(e){const t=this.getHudState();e.signatureChargeRatio=t.ratio,e.signatureReady=t.ready}chargeGlassShield(e,t){this.glassCharge=Math.min(1,this.glassCharge+me.glass.chargePerNearMiss),!(this.glassCharge<1||e.temporaryShieldHits>=me.glass.maxShieldHits)&&(e.temporaryShieldHits=me.glass.maxShieldHits,e.signaturePulse=1,t({type:"skinAbility",ability:"glassShieldReady",skinId:this.skinId,x:e.position.x,y:e.position.y,radius:4,color:me.glass.color}))}spawnPrismGhostBurst(e,t,i,s,r,a){if(this.prismCooldown>0)return;this.prismCooldown=me.prism.cooldown*(s.difficultyAssist==="forgiving"?.82:1);const o=Math.atan2(i.position.y-t.position.y,i.position.x-t.position.x),l=(me.prism.burstCount-1)*.5;for(let c=0;c<me.prism.burstCount;c+=1){const h=(c-l)/l,u=o+h*me.prism.burstSpread*.5+r.range(-.05,.05);e.spawnBullet(t.position.x,t.position.y,Math.cos(u),Math.sin(u),{speed:me.prism.speed,life:me.prism.life,damage:me.prism.damage,radius:me.prism.radius,color:me.prism.color,weaponId:"vectorBolt",magnetRadius:5,magnetStrength:1.8,signature:"ghostBurst",sourceSkinId:this.skinId})}a({type:"skinAbility",ability:"prismGhostBurst",skinId:this.skinId,x:t.position.x,y:t.position.y,radius:5,color:me.prism.color})}tryIonChain(e,t,i,s,r){if(this.ionCooldown>0||i.multiplier<me.ion.multiplierThreshold||!r.chance(me.ion.chance))return;const a=this.findNearestEnemy(e,t.position.x,t.position.y,me.ion.range,t.id);a&&(this.ionCooldown=me.ion.cooldown,a.health>me.ion.damage&&a.damage(me.ion.damage),s({type:"skinAbility",ability:"ionChain",skinId:this.skinId,x:t.position.x,y:t.position.y,x2:a.position.x,y2:a.position.y,color:me.ion.color}))}trySpawnRevenantSpark(e,t,i,s,r){if(this.revenantCooldown>0||!s.chance(me.revenant.chance))return;const a=this.findNearestEnemy(i,e,t,me.revenant.searchRange);if(!a)return;const o=a.position.x-e,l=a.position.y-t,c=Math.max(.001,Math.hypot(o,l));this.revenantCooldown=me.revenant.cooldown,i.spawnBullet(e,t,o/c,l/c,{speed:me.revenant.speed,life:me.revenant.life,damage:me.revenant.damage,radius:me.revenant.radius,color:me.revenant.color,weaponId:"vectorBolt",magnetRadius:8,magnetStrength:3.2,signature:"revenantSpark",sourceSkinId:this.skinId}),r({type:"skinAbility",ability:"revenantSpark",skinId:this.skinId,x:e,y:t,x2:a.position.x,y2:a.position.y,color:me.revenant.color})}findNearestEnemy(e,t,i,s,r){let a,o=s*s;return e.enemies.forEachActive(l=>{if(!l.active||l.id===r)return;const c=l.position.x-t,h=l.position.y-i,u=c*c+h*h;u>=o||(o=u,a=l)}),a}slowMultiplierFor(e){return e.typeId==="swarm"?me.void.smallEnemyMultiplier:e.typeId==="orbitMine"||e.typeId==="dasher"?me.void.specialEnemyMultiplier:me.void.standardEnemyMultiplier}decayNearMissCooldowns(e){for(const[t,i]of this.nearMissCooldowns){const s=i-e;s<=0?this.nearMissCooldowns.delete(t):this.nearMissCooldowns.set(t,s)}}}const Sx=["safe","risky","score"];class Mx{constructor(){v(this,"active",new Map);v(this,"scoringZones",[]);v(this,"prismEchoCooldown",0);v(this,"lastDraftWave",1);v(this,"overdriveCharge",0)}reset(){this.active.clear(),this.scoringZones.length=0,this.prismEchoCooldown=0,this.lastDraftWave=1,this.overdriveCharge=0}update(e){this.prismEchoCooldown=Math.max(0,this.prismEchoCooldown-e);for(const t of this.scoringZones)t.age+=e;for(let t=this.scoringZones.length-1;t>=0;t-=1)this.scoringZones[t].age>=this.scoringZones[t].life&&this.scoringZones.splice(t,1)}shouldOfferDraft(e){return e<=1||e===this.lastDraftWave||e%Qe.draftIntervalWaves!==0?!1:this.availableRelics().length>0}createDraft(e,t){this.lastDraftWave=e;const i=new Set,s=[];for(const r of Sx){const a=this.pickAvailable(r,i,t)??this.pickAvailable(void 0,i,t);a&&(i.add(a.id),s.push(a))}return s}activate(e,t,i){const s=wo(e),r=this.active.get(e)??0;r>=s.maxStacks||(this.active.set(e,r+1),e==="glassHeart"&&(t.temporaryShieldHits=Math.max(t.temporaryShieldHits,Qe.glassHeart.shieldHits),t.signaturePulse=1),this.applyScoreModifiers(i))}preparePlayer(e){this.has("martyrCircuit")&&(e.dashCooldownMultiplier*=Qe.martyrCircuit.dashCooldownMultiplier),this.has("redlineEngine")&&(e.speedMultiplier*=Qe.redlineEngine.speedMultiplier,e.accelerationMultiplier*=Qe.redlineEngine.accelerationMultiplier,e.frictionMultiplier*=Qe.redlineEngine.frictionMultiplier)}applyScoreModifiers(e){e.multiplierDecayMultiplier=this.has("glassHeart")?Qe.glassHeart.multiplierDecayMultiplier:1}modifyProjectileOptions(e){return this.has("martyrCircuit")?{...e,damage:Math.max(.1,(e.damage??1)*Qe.martyrCircuit.damageMultiplier)}:e}modifyBeamDamage(e){return this.has("martyrCircuit")?Math.max(.1,e*Qe.martyrCircuit.damageMultiplier):e}onBomb(e,t){if(!this.has("solarCore"))return;const i=this.stackCount("solarCore"),s={x:e.position.x,y:e.position.y,age:0,life:Qe.solarCore.zoneLife,radius:Qe.solarCore.zoneRadius*(1+(i-1)*Qe.solarCore.radiusPerExtraStack),scoreMultiplier:Qe.solarCore.scoreMultiplier+(i-1)*Qe.solarCore.scorePerExtraStack,color:Qe.solarCore.color};this.scoringZones.push(s),t({type:"relicZone",x:s.x,y:s.y,radius:s.radius,life:s.life,color:s.color})}scoreMultiplierAt(e,t){let i=1;for(const s of this.scoringZones){const r=e-s.x,a=t-s.y;r*r+a*a<=s.radius*s.radius&&(i=Math.max(i,s.scoreMultiplier))}return i}recordScoringZoneKill(e,t,i){for(const s of this.scoringZones){const r=e-s.x,a=t-s.y;if(!(r*r+a*a>s.radius*s.radius)){this.overdriveCharge=Math.min(1,this.overdriveCharge+Qe.solarCore.overdrivePerKill),i({type:"relicBonus",x:e,y:t,color:s.color,overdriveCharge:this.overdriveCharge});return}}}onDash(e,t,i){if(!this.has("prismEcho")||this.prismEchoCooldown>0)return;this.prismEchoCooldown=Qe.prismEcho.cooldown;const s=Math.atan2(e.aim.y,e.aim.x),r=(Qe.prismEcho.shotCount-1)*.5;for(let a=0;a<Qe.prismEcho.shotCount;a+=1){const o=(a-r)/r,l=s+o*Qe.prismEcho.spreadRadians*.5;t.spawnBullet(e.position.x,e.position.y,Math.cos(l),Math.sin(l),{speed:Qe.prismEcho.speed,life:Qe.prismEcho.life,damage:Qe.prismEcho.damage,radius:Qe.prismEcho.radius,color:Qe.prismEcho.color,weaponId:"vectorBolt",magnetRadius:Qe.prismEcho.magnetRadius,magnetStrength:Qe.prismEcho.magnetStrength,signature:"ghostBurst",sourceSkinId:"prismGhost"})}i({type:"relicBonus",x:e.position.x,y:e.position.y,color:Qe.prismEcho.color,overdriveCharge:this.overdriveCharge})}activeSummaries(){return Array.from(this.active.entries()).map(([e,t])=>{const i=wo(e);return{id:e,name:i.name,effect:i.effect,downside:i.downside,stacks:t}})}has(e){return this.stackCount(e)>0}stackCount(e){return this.active.get(e)??0}availableRelics(){return Wh.map(e=>Rc[e]).filter(e=>(this.active.get(e.id)??0)<e.maxStacks)}pickAvailable(e,t,i){const s=this.availableRelics().filter(r=>t.has(r.id)?!1:e?r.category===e:!0);if(s.length!==0)return i.pick(s)}}const wc=[{wave:1,groupSize:3,types:["chaser"],burstChance:.05},{wave:2,groupSize:4,types:["chaser","swarm","dasher"],burstChance:.12},{wave:3,groupSize:5,types:["chaser","swarm","dasher","splitter"],burstChance:.18},{wave:4,groupSize:6,types:["chaser","swarm","dasher","splitter","orbitMine"],burstChance:.22},{wave:7,groupSize:8,types:["swarm","chaser","dasher","splitter","orbitMine"],burstChance:.3}];class _x{constructor(){v(this,"elapsed",0);v(this,"wave",1);v(this,"difficulty",0);v(this,"spawnTimer",.35)}reset(){this.elapsed=0,this.wave=1,this.difficulty=0,this.spawnTimer=.35}update(e,t,i,s,r){if(this.elapsed+=e,this.wave=1+Math.floor(this.elapsed/Ai.waveDuration),this.difficulty=this.elapsed*Ai.difficultyRamp+this.wave*.8,this.spawnTimer-=e,!(t.activeEnemyCount>=Ai.maxEnemies)&&this.spawnTimer<=0){const a=this.getCurrentDefinition(),o=a.groupSize+Math.floor(this.difficulty/6),l=i.chance(a.burstChance)?i.int(2,4):1,c=Math.min(o*l,Ai.maxEnemies-t.activeEnemyCount);for(let u=0;u<c;u+=1){const d=this.pickEnemyType(a,i),f=this.randomEdgePosition(i,r);t.spawnEnemy(d,f.x,f.y,this.difficulty,i)}const h=s==="forgiving"?Ai.forgivingSpawnScale:1;this.spawnTimer=Math.max(Ai.minSpawnInterval,Ai.baseSpawnInterval/(1+this.difficulty*.115))*h}}getCurrentDefinition(){let e=wc[0];for(const t of wc)t.wave<=this.wave&&(e=t);return e}pickEnemyType(e,t){const i=e.types.filter(a=>vn[a].unlockWave<=this.wave),s=i.reduce((a,o)=>a+vn[o].spawnWeight,0);let r=t.range(0,s);for(const a of i)if(r-=vn[a].spawnWeight,r<=0)return a;return i[0]??"chaser"}randomEdgePosition(e,t){const i=Ct.width*.5+Ct.spawnMargin,s=Ct.height*.5+Ct.spawnMargin,r=e.int(0,3);return r===0?{x:t.x+e.range(-i,i),y:t.y-s}:r===1?{x:t.x+i,y:t.y+e.range(-s,s)}:r===2?{x:t.x+e.range(-i,i),y:t.y+s}:{x:t.x-i,y:t.y+e.range(-s,s)}}}class bx{constructor(e=Date.now()){v(this,"state");this.state=e>>>0}next(){let e=this.state+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}pick(e){return e[Math.floor(this.next()*e.length)]}}class wx{constructor(e){v(this,"element");v(this,"scoreValue");v(this,"multiplierValue");v(this,"highScoreValue");v(this,"waveValue");v(this,"skinValue");v(this,"weaponValue");v(this,"healthBar");v(this,"dashBar");v(this,"bombBar");v(this,"signatureMeter");v(this,"signatureBar");v(this,"signatureLabel");v(this,"dashLabel");v(this,"debug");this.element=document.createElement("div"),this.element.className="hud";const t=document.createElement("div");t.className="hud-cluster";const i=document.createElement("div");i.className="score-line",this.scoreValue=document.createElement("div"),this.scoreValue.className="score-value",this.scoreValue.textContent="0",this.multiplierValue=document.createElement("span"),this.multiplierValue.className="multiplier",this.multiplierValue.textContent="x1.0",i.append(this.scoreValue,this.multiplierValue);const s=document.createElement("div");s.className="hud-meta",this.highScoreValue=document.createElement("span"),this.waveValue=document.createElement("span"),this.skinValue=document.createElement("span"),this.weaponValue=document.createElement("span"),this.weaponValue.className="hud-weapon",s.append(this.highScoreValue,this.waveValue,this.skinValue,this.weaponValue);const r=document.createElement("div");r.className="hud-bars",this.healthBar=this.createBar(r,"HP","meter-health").fill;const a=this.createBar(r,"DASH","meter-dash");this.dashBar=a.fill,this.dashLabel=a.label,this.bombBar=this.createBar(r,"BOMB","meter-bomb").fill;const o=this.createBar(r,"SIGN","meter-signature");this.signatureMeter=o.meter,this.signatureBar=o.fill,this.signatureLabel=o.label,t.append(i,s,r),this.debug=document.createElement("div"),this.debug.className="debug-overlay",this.element.append(t,this.debug),e.append(this.element)}update(e){this.scoreValue.textContent=e.score.toLocaleString(),this.multiplierValue.textContent=`x${e.multiplier.toFixed(1)}`,this.highScoreValue.textContent=`HI ${e.highScore.toLocaleString()}`,this.waveValue.textContent=`WAVE ${e.wave}`,this.skinValue.textContent=e.skinName.toUpperCase(),this.weaponValue.textContent=e.weaponName,this.element.style.setProperty("--skin-primary",e.skinPrimary),this.element.style.setProperty("--skin-secondary",e.skinSecondary),this.element.style.setProperty("--skin-accent",e.skinAccent),this.element.style.setProperty("--weapon-color",e.weaponColor),this.dashLabel.textContent=`DASH ${e.dashCharges}`,this.signatureLabel.textContent=e.signatureLabel,this.signatureMeter.classList.toggle("is-ready",e.signatureReady),this.healthBar.style.transform=`scaleX(${e.healthRatio.toFixed(3)})`,this.dashBar.style.transform=`scaleX(${e.dashRatio.toFixed(3)})`,this.bombBar.style.transform=`scaleX(${e.bombRatio.toFixed(3)})`,this.signatureBar.style.transform=`scaleX(${Math.max(0,Math.min(1,e.signatureRatio)).toFixed(3)})`,this.debug.innerHTML=[`FPS ${Math.round(e.fps)}`,`ENEMY ${e.enemyCount}`,`BULLET ${e.bulletCount}`,`PICKUP ${e.pickupCount}`,`PARTICLE ${e.particleCount}`,`DRAW ${e.drawCalls}`,`PILOT ${e.pilotActive?"AI":"MANUAL"}`].join("<br />")}show(){this.element.classList.remove("ui-hidden")}hide(){this.element.classList.add("ui-hidden")}createBar(e,t,i){const s=document.createElement("div");s.className=`meter ${i}`;const r=document.createElement("span");r.className="meter-label",r.textContent=t;const a=document.createElement("div");a.className="bar";const o=document.createElement("div");return o.className="bar-fill",a.append(o),s.append(r,a),e.append(s),{meter:s,fill:o,label:r}}}function mi(n,e){const t=document.createElement("div");t.className="menu-shell ui-hidden";const i=document.createElement("div");i.className="menu-panel";const s=document.createElement("h1");s.className="game-title",s.textContent=n;const r=document.createElement("p");return r.className="menu-kicker",r.textContent=e,i.append(s,r),t.append(i),{shell:t,panel:i}}function at(n,e=""){const t=document.createElement("button");return t.className=`menu-button ${e}`.trim(),t.type="button",t.textContent=n,t}function gi(n){n.classList.remove("ui-hidden"),Ex(n)}function vi(n){n.classList.add("ui-hidden")}function Ex(n){const e=_h(n)[0];e==null||e.focus()}function xi(n,e){if(n.classList.contains("ui-hidden"))return;const t=_h(n);if(t.length===0)return;const i=document.activeElement;let s=Math.max(0,t.findIndex(r=>r===i));if(e.menuDownPressed?(s=(s+1)%t.length,t[s].focus()):e.menuUpPressed&&(s=(s-1+t.length)%t.length,t[s].focus()),e.confirmPressed){const r=document.activeElement;r==null||r.click()}}function _h(n){return Array.from(n.querySelectorAll("button:not([disabled]), a[href]"))}class Ax{constructor(e,t){v(this,"element");v(this,"highScoreValue");const{shell:i,panel:s}=mi("Vector Saint","Sacred geometry arcade");this.element=i,s.classList.add("main-menu-panel");const r=document.createElement("div");r.className="menu-stat",r.append(document.createTextNode("High score")),this.highScoreValue=document.createElement("strong"),this.highScoreValue.textContent="0",r.append(this.highScoreValue);const a=document.createElement("div");a.className="menu-actions";const o=at("Start Run","primary"),l=at("Select Skin"),c=at("Achievements"),h=at("Leaderboard"),u=at("Controls"),d=at("Settings");o.addEventListener("click",t.onStart),l.addEventListener("click",t.onSkinSelect),c.addEventListener("click",t.onAchievements),h.addEventListener("click",t.onLeaderboard),u.addEventListener("click",t.onControls),d.addEventListener("click",t.onSettings),a.append(o,l,c,h,u,d);const f=document.createElement("a");f.className="support-link",f.href="https://buymeacoffee.com/chcofficial",f.target="_blank",f.rel="noopener noreferrer",f.append(document.createTextNode("Support CHCOfficial"));const g=document.createElement("span");g.textContent="BuyMeACoffee",f.append(g),s.append(r,a,f),e.append(i)}setHighScore(e){this.highScoreValue.textContent=e.toLocaleString()}show(){gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e)}}class Tx{constructor(e,t){v(this,"element");v(this,"relicList");const{shell:i,panel:s}=mi("Paused","Run suspended");this.element=i,this.relicList=document.createElement("div"),this.relicList.className="active-relic-list";const r=document.createElement("div");r.className="menu-actions";const a=at("Resume","primary"),o=at("Restart Run"),l=at("Select Skin"),c=at("Settings"),h=at("Main Menu");a.addEventListener("click",t.onResume),o.addEventListener("click",t.onRestart),l.addEventListener("click",t.onSkinSelect),c.addEventListener("click",t.onSettings),h.addEventListener("click",t.onMainMenu),r.append(a,o,l,c,h),s.append(this.relicList,r),e.append(i)}setRelics(e,t=0){if(this.relicList.replaceChildren(),e.length===0){this.relicList.classList.add("is-empty"),this.relicList.textContent="No relics drafted this run.";return}this.relicList.classList.remove("is-empty");for(const i of e){const s=document.createElement("div");s.className="active-relic-item";const r=document.createElement("strong");r.textContent=i.stacks>1?`${i.name} x${i.stacks}`:i.name;const a=document.createElement("span");a.textContent=i.effect,s.append(r,a),this.relicList.append(s)}if(t>0){const i=document.createElement("div");i.className="active-relic-item relic-overdrive";const s=document.createElement("strong");s.textContent="Overdrive";const r=document.createElement("span");r.textContent=`${Math.round(t*100)}% charged`,i.append(s,r),this.relicList.append(i)}}show(){gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e)}}const Cx={bloom:["off","low","medium","high"],bloomStrength:["soft","balanced","radiant"],bloomRadius:["tight","medium","wide"],antiAliasing:["off","fxaa","smaa","msaa-4x","msaa-4x-smaa"],shake:["off","low","medium","high"],flashReduction:["false","true"],chromaticAberration:["off","low"],backgroundIntensity:["low","medium","high"],particleDensity:["low","medium","high"],invertedControls:["false","true"],palette:["default","high-contrast","colourblind"],uiScale:["small","medium","large"],difficultyAssist:["normal","forgiving"],selectedSkin:Gi.map(n=>n.id),selectedBackground:Er.map(n=>n.id)},Ec={bloom:"Bloom",bloomStrength:"Bloom strength",bloomRadius:"Bloom radius",antiAliasing:"Anti-aliasing",shake:"Screen shake",flashReduction:"Flash reduction",chromaticAberration:"Chromatic edge",backgroundIntensity:"Background",particleDensity:"Particle density",invertedControls:"Invert controls",palette:"Colour palette",uiScale:"UI scale",difficultyAssist:"Difficulty assist",selectedSkin:"Skin",selectedBackground:"Background style"};class Rx{constructor(e,t,i){v(this,"element");v(this,"buttons",new Map);this.settings=t,this.callbacks=i;const{shell:s,panel:r}=mi("Settings","Access and presentation");this.element=s;const a=document.createElement("div");a.className="settings-list";for(const l of Object.keys(Ec)){const c=document.createElement("div");c.className="settings-row";const h=document.createElement("label");h.textContent=Ec[l];const u=document.createElement("button");u.className="setting-button",u.type="button",u.dataset.setting=l,u.addEventListener("click",()=>this.cycle(l,1)),this.buttons.set(l,u),c.append(h,u),a.append(c)}const o=at("Back","primary");o.addEventListener("click",i.onBack),r.append(a,o),e.append(s),this.refresh()}show(){this.refresh(),gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e);const t=document.activeElement,i=t==null?void 0:t.dataset.setting;i&&e.menuLeftPressed&&this.cycle(i,-1),i&&e.menuRightPressed&&this.cycle(i,1)}cycle(e,t){const i=Cx[e],s=String(this.settings[e]),r=Math.max(0,i.indexOf(s)),a=i[(r+t+i.length)%i.length];e==="flashReduction"||e==="invertedControls"?this.settings[e]=a==="true":this.settings[e]=a,this.refresh(),this.callbacks.onChange(this.settings)}refresh(){for(const[e,t]of this.buttons){const i=this.settings[e];t.textContent=this.formatValue(e,i)}}formatValue(e,t){if(typeof t=="boolean")return t?"On":"Off";if(e==="antiAliasing")return Px[String(t)]??String(t);if(e==="selectedBackground")return Qn(t).displayName;const i=Wi(String(t));return i.id===t?i.displayName:t.split("-").map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(" ")}}const Px={off:"Off",fxaa:"FXAA",smaa:"SMAA","msaa-4x":"MSAA 4x","msaa-4x-smaa":"MSAA 4x + SMAA"};class Lx{constructor(e,t){v(this,"element");v(this,"scoreValue");v(this,"waveValue");v(this,"highValue");v(this,"relicList");const{shell:i,panel:s}=mi("Run Ended","Signal lost");this.element=i;const r=document.createElement("div");r.className="menu-stat";const a=document.createElement("div");this.scoreValue=document.createElement("strong"),this.waveValue=document.createElement("strong"),this.highValue=document.createElement("strong"),a.append(document.createTextNode("Score "),this.scoreValue,document.createElement("br"),document.createTextNode("Wave "),this.waveValue);const o=document.createElement("div");o.append(document.createTextNode("High "),this.highValue),r.append(a,o),this.relicList=document.createElement("div"),this.relicList.className="active-relic-list run-summary-relics";const l=document.createElement("div");l.className="menu-actions";const c=at("Retry","primary"),h=at("Main Menu");c.addEventListener("click",t.onRetry),h.addEventListener("click",t.onMainMenu),l.append(c,h),s.append(r,this.relicList,l),e.append(i)}setResults(e,t,i,s=[],r=0){this.scoreValue.textContent=e.toLocaleString(),this.waveValue.textContent=String(t),this.highValue.textContent=i.toLocaleString(),this.renderRelics(s,r)}show(){gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e)}renderRelics(e,t){if(this.relicList.replaceChildren(),e.length===0){this.relicList.classList.add("is-empty"),this.relicList.textContent="No relics drafted.";return}this.relicList.classList.remove("is-empty");for(const i of e){const s=document.createElement("div");s.className="active-relic-item";const r=document.createElement("strong");r.textContent=i.stacks>1?`${i.name} x${i.stacks}`:i.name;const a=document.createElement("span");a.textContent=i.effect,s.append(r,a),this.relicList.append(s)}if(t>0){const i=document.createElement("div");i.className="active-relic-item relic-overdrive";const s=document.createElement("strong");s.textContent="Overdrive";const r=document.createElement("span");r.textContent=`${Math.round(t*100)}% charged`,i.append(s,r),this.relicList.append(i)}}}class Dx{constructor(e){v(this,"element");this.element=document.createElement("div"),this.element.className="toast-stack",e.append(this.element)}showAchievement(e){this.showMessage(`${e.name} unlocked`,`${e.gamerscore}G - ${e.description}`)}showMessage(e,t){const i=document.createElement("div");i.className="toast";const s=document.createElement("div");s.className="toast-title",s.textContent=e;const r=document.createElement("div");r.className="toast-body",r.textContent=t,i.append(s,r),this.element.prepend(i),window.setTimeout(()=>{i.remove()},4200)}}class Ix{constructor(){v(this,"element");v(this,"core");v(this,"ring");v(this,"trail");this.element=document.createElement("div"),this.element.className="skin-preview-stage",this.ring=document.createElement("div"),this.ring.className="skin-preview-ring",this.trail=document.createElement("div"),this.trail.className="skin-preview-trail",this.core=document.createElement("div"),this.core.className="skin-preview-core",this.element.append(this.ring,this.trail,this.core)}setSkin(e){this.element.style.setProperty("--skin-primary",si(e.primaryColor)),this.element.style.setProperty("--skin-secondary",si(e.secondaryColor)),this.element.style.setProperty("--skin-accent",si(e.accentColor)),this.element.dataset.skinId=e.id,this.element.dataset.skinStyle=e.trailStyle}}class Nx{constructor(e,t,i){v(this,"element");v(this,"preview",new Ix);v(this,"nameValue");v(this,"descriptionValue");v(this,"signatureValue");v(this,"metaValue");v(this,"previousButton");v(this,"nextButton");v(this,"backgroundCards",new Map);this.settings=t,this.callbacks=i;const{shell:s,panel:r}=mi("Select Skin","Hard-light identity");this.element=s,r.classList.add("skin-panel");const a=document.createElement("div");a.className="skin-select-layout";const o=document.createElement("div");o.className="skin-details",this.nameValue=document.createElement("h2"),this.nameValue.className="skin-name",this.descriptionValue=document.createElement("p"),this.descriptionValue.className="skin-description",this.signatureValue=document.createElement("p"),this.signatureValue.className="skin-signature",this.metaValue=document.createElement("p"),this.metaValue.className="skin-meta",o.append(this.nameValue,this.descriptionValue,this.signatureValue,this.metaValue),a.append(this.preview.element,o);const l=document.createElement("div");l.className="skin-nav",this.previousButton=at("Previous Skin"),this.nextButton=at("Next Skin","primary"),this.previousButton.addEventListener("click",()=>this.cycle(-1)),this.nextButton.addEventListener("click",()=>this.cycle(1)),l.append(this.previousButton,this.nextButton);const c=this.createBackgroundSection(),h=at("Back");h.addEventListener("click",i.onBack),r.append(a,l,c,h),e.append(s),this.refresh()}show(){this.refresh(),gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e);const t=document.activeElement,i=(t==null?void 0:t.classList.contains("background-card"))===!0;e.menuLeftPressed&&(i?this.focusAdjacentBackground(-1):this.cycle(-1)),e.menuRightPressed&&(i?this.focusAdjacentBackground(1):this.cycle(1))}refresh(){const e=Wi(this.settings.selectedSkin);this.preview.setSkin(e),this.nameValue.textContent=e.displayName,this.descriptionValue.textContent=e.description;const t=xx(e.id);this.signatureValue.textContent=`${t.name}: ${t.summary}`,this.metaValue.textContent=`${e.trailStyle} / ${e.projectileStyle}`,this.element.style.setProperty("--skin-primary",si(e.primaryColor)),this.element.style.setProperty("--skin-secondary",si(e.secondaryColor)),this.element.style.setProperty("--skin-accent",Ua(e));const i=Qn(this.settings.selectedBackground);this.element.style.setProperty("--background-primary",jn(i.palette.primary)),this.element.style.setProperty("--background-secondary",jn(i.palette.secondary)),this.element.style.setProperty("--background-accent",jn(i.palette.accent)),this.refreshBackgroundCards()}cycle(e){const t=Math.max(0,Gi.findIndex(s=>s.id===this.settings.selectedSkin)),i=Gi[(t+e+Gi.length)%Gi.length];this.settings.selectedSkin=i.id,this.refresh(),this.callbacks.onChange(i.id)}createBackgroundSection(){const e=document.createElement("section");e.className="background-section";const t=document.createElement("div");t.className="background-heading";const i=document.createElement("h2");i.textContent="Backgrounds";const s=document.createElement("p");s.textContent="Reactive arenas, all unlocked for this prototype.",t.append(i,s);const r=document.createElement("div");r.className="background-card-grid";for(const a of Er){const o=this.createBackgroundCard(a);this.backgroundCards.set(a.id,o),r.append(o)}return e.append(t,r),e}createBackgroundCard(e){const t=document.createElement("button");t.type="button",t.className="background-card",t.dataset.backgroundId=e.id,t.style.setProperty("--background-card-primary",e.preview.primaryCss),t.style.setProperty("--background-card-secondary",e.preview.secondaryCss),t.style.setProperty("--background-card-accent",e.preview.accentCss);const i=document.createElement("span");i.className="background-preview",i.dataset.pattern=e.preview.cssClass,i.setAttribute("aria-hidden","true");const s=document.createElement("span");s.className="background-card-body";const r=document.createElement("strong");r.textContent=e.displayName;const a=document.createElement("span");a.className="background-card-tag",a.textContent=e.tagline;const o=document.createElement("span");return o.className="background-card-description",o.textContent=e.description,s.append(r,a,o),t.append(i,s),t.addEventListener("click",()=>this.selectBackground(e.id)),t}selectBackground(e){this.settings.selectedBackground!==e&&(this.settings.selectedBackground=e,this.refresh(),this.callbacks.onBackgroundChange(e))}refreshBackgroundCards(){for(const[e,t]of this.backgroundCards){const i=e===this.settings.selectedBackground;t.classList.toggle("is-selected",i),t.setAttribute("aria-pressed",String(i))}}focusAdjacentBackground(e){var o;const t=Er.map(l=>l.id),i=document.activeElement,s=i==null?void 0:i.dataset.backgroundId,r=Math.max(0,t.findIndex(l=>l===s)),a=t[(r+e+t.length)%t.length];(o=this.backgroundCards.get(a))==null||o.focus()}}const Na=5;class Ux{constructor(e,t,i){v(this,"element");v(this,"summaryValue");v(this,"list");v(this,"pageValue");v(this,"previousButton");v(this,"nextButton");v(this,"page",0);this.getUnlocked=t;const{shell:s,panel:r}=mi("Achievements","Local 1000G proof set");this.element=s,r.classList.add("achievements-panel"),this.summaryValue=document.createElement("div"),this.summaryValue.className="achievements-summary",this.list=document.createElement("div"),this.list.className="achievements-list";const a=document.createElement("div");a.className="achievements-nav",this.previousButton=at("Previous Page"),this.nextButton=at("Next Page","primary"),this.pageValue=document.createElement("div"),this.pageValue.className="achievements-page",this.previousButton.addEventListener("click",()=>this.changePage(-1)),this.nextButton.addEventListener("click",()=>this.changePage(1)),a.append(this.previousButton,this.pageValue,this.nextButton);const o=at("Back");o.addEventListener("click",i.onBack),r.append(this.summaryValue,this.list,a,o),e.append(s),this.refresh()}show(){this.refresh(),gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e),e.menuLeftPressed&&this.changePage(-1),e.menuRightPressed&&this.changePage(1)}refresh(){const e=this.getUnlocked(),t=un.filter(l=>e.has(l.id)),i=t.reduce((l,c)=>l+c.gamerscore,0),s=un.reduce((l,c)=>l+c.gamerscore,0),r=this.pageCount;this.page=Math.min(this.page,r-1),this.summaryValue.textContent=`${t.length}/${un.length} unlocked · ${i}/${s}G`,this.pageValue.textContent=`${this.page+1} / ${r}`,this.previousButton.disabled=r<=1,this.nextButton.disabled=r<=1,this.list.replaceChildren();const a=this.page*Na,o=un.slice(a,a+Na);for(const l of o){const c=e.has(l.id),h=document.createElement("div");h.className=`achievement-item ${c?"is-unlocked":"is-locked"}`;const u=document.createElement("div");u.className="achievement-header";const d=document.createElement("strong");d.textContent=l.name;const f=document.createElement("span");f.textContent=`${l.gamerscore}G`,u.append(d,f);const g=document.createElement("p");g.textContent=l.description;const x=document.createElement("span");x.className="achievement-status",x.textContent=c?"Unlocked":"Locked",h.append(u,g,x),this.list.append(h)}}changePage(e){this.page=(this.page+e+this.pageCount)%this.pageCount,this.refresh()}get pageCount(){return Math.max(1,Math.ceil(un.length/Na))}}class Ox{constructor(e,t,i){v(this,"element");v(this,"bindingButtons",new Map);v(this,"listeningAction");v(this,"suppressMenuFrames",0);v(this,"onCaptureKeyDown",e=>{!this.listeningAction||this.element.classList.contains("ui-hidden")||(e.preventDefault(),e.stopPropagation(),Tc(e.code)&&this.commitBinding({kind:"key",code:e.code}))});v(this,"onCaptureMouseDown",e=>{!this.listeningAction||this.element.classList.contains("ui-hidden")||(e.preventDefault(),e.stopPropagation(),Cc(e.button)&&this.commitBinding({kind:"mouse",button:e.button}))});this.bindings=t,this.callbacks=i;const{shell:s,panel:r}=mi("Controls","Keyboard, mouse, and Xbox input");this.element=s,r.classList.add("controls-panel");const a=document.createElement("div");a.className="controls-header",a.append(document.createElement("span"),document.createElement("span"),document.createElement("span")),a.children[0].textContent="Action",a.children[1].textContent="Keyboard / Mouse",a.children[2].textContent="Xbox";const o=document.createElement("div");o.className="controls-list";for(const u of Fa){const d=document.createElement("div");d.className="control-row";const f=document.createElement("div");f.className="control-action",f.textContent=u.label;const g=document.createElement("button");g.className="control-binding-button",g.type="button",g.dataset.action=u.id,g.addEventListener("click",()=>this.listenFor(u.id)),this.bindingButtons.set(u.id,g);const x=document.createElement("div");x.className="control-gamepad",x.textContent=u.gamepadLabel,d.append(f,g,x),o.append(d)}const l=document.createElement("div");l.className="controls-actions";const c=at("Reset Defaults"),h=at("Back","primary");c.addEventListener("click",i.onReset),h.addEventListener("click",i.onBack),l.append(c,h),r.append(a,o,l),e.append(s),window.addEventListener("keydown",this.onCaptureKeyDown,!0),window.addEventListener("mousedown",this.onCaptureMouseDown,!0),this.refresh()}dispose(){window.removeEventListener("keydown",this.onCaptureKeyDown,!0),window.removeEventListener("mousedown",this.onCaptureMouseDown,!0)}setBindings(e){this.bindings=e,this.refresh()}show(){this.refresh(),gi(this.element)}hide(){this.stopListening(),vi(this.element)}update(e){if(!this.listeningAction){if(this.suppressMenuFrames>0){this.suppressMenuFrames-=1;return}xi(this.element,e)}}refresh(){for(const e of Fa){const t=this.bindingButtons.get(e.id);if(!t)continue;const i=this.listeningAction===e.id;t.classList.toggle("is-listening",i),t.textContent=i?"Press key or mouse":Hh(this.bindings[e.id])}}listenFor(e){this.listeningAction=e,this.refresh()}stopListening(){this.listeningAction=void 0,this.refresh()}commitBinding(e){if(!this.listeningAction)return;const t=this.listeningAction;this.listeningAction=void 0,this.suppressMenuFrames=2,this.callbacks.onRebind(t,e),this.refresh()}}class Fx{constructor(e,t,i){v(this,"element");v(this,"summaryValue");v(this,"list");this.getEntries=t;const{shell:s,panel:r}=mi("Leaderboard","Local arcade records");this.element=s,r.classList.add("leaderboard-panel"),this.summaryValue=document.createElement("div"),this.summaryValue.className="leaderboard-summary",this.list=document.createElement("div"),this.list.className="leaderboard-list";const a=at("Back");a.addEventListener("click",i.onBack),r.append(this.summaryValue,this.list,a),e.append(s),this.refresh()}show(){this.refresh(),gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e)}refresh(){const e=this.getEntries();if(this.summaryValue.textContent=`${e.length}/${bs} records`,this.list.replaceChildren(),e.length===0){const t=document.createElement("div");t.className="leaderboard-empty",t.textContent="No scores recorded",this.list.append(t);return}e.forEach((t,i)=>{const s=document.createElement("div");s.className="leaderboard-row";const r=document.createElement("span");r.className="leaderboard-rank",r.textContent=`#${i+1}`;const a=document.createElement("strong");a.className="leaderboard-initials",a.textContent=t.initials;const o=document.createElement("span");o.className="leaderboard-score",o.textContent=t.score.toLocaleString();const l=document.createElement("span");l.className="leaderboard-wave",l.textContent=`Wave ${t.wave}`;const c=document.createElement("span");c.className="leaderboard-date",c.textContent=Bx(t.date),s.append(r,a,o,l,c),this.list.append(s)})}}function Bx(n){const e=new Date(n);return Number.isNaN(e.getTime())?"":e.toLocaleDateString(void 0,{month:"short",day:"2-digit",year:"2-digit"})}const _r="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";class kx{constructor(e,t){v(this,"element");v(this,"scoreValue");v(this,"waveValue");v(this,"slotButtons",[]);v(this,"initials",["A","A","A"]);v(this,"selectedIndex",0);v(this,"active",!1);v(this,"submitted",!1);v(this,"lastInitials","AAA");v(this,"onKeyDown",e=>{if(!(!this.active||this.element.classList.contains("ui-hidden"))&&!(e.metaKey||e.ctrlKey||e.altKey)){if(/^[a-z0-9]$/i.test(e.key)){this.initials[this.selectedIndex]=e.key.toUpperCase(),this.selectSlot(this.selectedIndex+1),e.preventDefault();return}if(e.code==="Backspace"){this.initials[this.selectedIndex]="A",this.selectSlot(this.selectedIndex-1),e.preventDefault();return}if(e.code==="ArrowLeft"){this.selectSlot(this.selectedIndex-1),e.preventDefault();return}if(e.code==="ArrowRight"){this.selectSlot(this.selectedIndex+1),e.preventDefault();return}e.code==="Enter"&&(this.submit(),e.preventDefault())}});this.callbacks=t;const{shell:i,panel:s}=mi("New Record","Enter initials");this.element=i,s.classList.add("initials-panel");const r=document.createElement("div");r.className="menu-stat initials-stat";const a=document.createElement("div");this.scoreValue=document.createElement("strong"),a.append(document.createTextNode("Score "),this.scoreValue);const o=document.createElement("div");this.waveValue=document.createElement("strong"),o.append(document.createTextNode("Wave "),this.waveValue),r.append(a,o);const l=document.createElement("div");l.className="initials-slots";for(let f=0;f<3;f+=1){const g=document.createElement("button");g.type="button",g.className="initials-slot",g.addEventListener("click",()=>this.selectSlot(f)),this.slotButtons.push(g),l.append(g)}const c=document.createElement("div");c.className="initials-actions";const h=at("Previous Letter"),u=at("Next Letter","primary"),d=at("Save Score","primary");h.addEventListener("click",()=>this.cycleSelected(-1)),u.addEventListener("click",()=>this.cycleSelected(1)),d.addEventListener("click",()=>this.submit()),c.append(h,u,d),s.append(r,l,c),e.append(i),window.addEventListener("keydown",this.onKeyDown),this.refresh()}dispose(){window.removeEventListener("keydown",this.onKeyDown)}setRun(e,t){this.scoreValue.textContent=Math.max(0,Math.floor(e)).toLocaleString(),this.waveValue.textContent=String(Math.max(1,Math.floor(t)))}show(){var e;this.active=!0,this.submitted=!1,this.selectedIndex=0,this.initials=Za(this.lastInitials).split(""),this.refresh(),gi(this.element),(e=this.slotButtons[0])==null||e.focus()}hide(){this.active=!1,vi(this.element)}update(e){xi(this.element,e),e.lastDevice==="gamepad"&&e.menuLeftPressed&&this.selectSlot(this.selectedIndex-1),e.lastDevice==="gamepad"&&e.menuRightPressed&&this.selectSlot(this.selectedIndex+1)}selectSlot(e){var t;this.selectedIndex=(e+this.slotButtons.length)%this.slotButtons.length,this.refresh(),(t=this.slotButtons[this.selectedIndex])==null||t.focus()}cycleSelected(e){var r;const t=this.initials[this.selectedIndex],s=(Math.max(0,_r.indexOf(t))+e+_r.length)%_r.length;this.initials[this.selectedIndex]=_r[s],this.refresh(),(r=this.slotButtons[this.selectedIndex])==null||r.focus()}submit(){if(this.submitted)return;this.submitted=!0,this.active=!1;const e=Za(this.initials.join(""));this.lastInitials=e,this.callbacks.onSubmit(e)}refresh(){this.slotButtons.forEach((e,t)=>{e.textContent=this.initials[t],e.classList.toggle("is-active",t===this.selectedIndex)})}}class zx{constructor(e,t){v(this,"element");v(this,"cards");v(this,"waveValue");v(this,"choices",[]);this.callbacks=t;const{shell:i,panel:s}=mi("Relic Draft","Between-wave sanctum");this.element=i,s.classList.add("relic-draft-panel");const r=document.createElement("div");r.className="relic-draft-intro",r.append(document.createTextNode("Wave cleared")),this.waveValue=document.createElement("strong"),this.waveValue.textContent="1",r.append(this.waveValue),this.cards=document.createElement("div"),this.cards.className="relic-card-grid",s.append(r,this.cards),e.append(i)}setChoices(e,t){this.choices=t,this.waveValue.textContent=String(Math.max(1,e-1)),this.renderChoices()}show(){this.renderChoices(),gi(this.element)}hide(){vi(this.element)}update(e){xi(this.element,e)}renderChoices(){this.cards.replaceChildren();for(const e of this.choices){const t=at("",`relic-card relic-${e.category}`);t.addEventListener("click",()=>this.callbacks.onSelect(e.id));const i=document.createElement("span");i.className="relic-category",i.textContent=e.category;const s=document.createElement("strong");s.className="relic-name",s.textContent=e.name;const r=document.createElement("span");if(r.className="relic-effect",r.textContent=e.effect,t.append(i,s,r),e.downside){const a=document.createElement("span");a.className="relic-downside",a.textContent=e.downside,t.append(a)}this.cards.append(t)}}}class Hx{constructor(e,t,i){v(this,"saveSystem",new dx);v(this,"settings",this.saveSystem.loadSettings());v(this,"controlBindings",this.saveSystem.loadControlBindings());v(this,"input");v(this,"renderer");v(this,"entities",new Zv);v(this,"player",new Qv);v(this,"secretPilot",new vx);v(this,"waveDirector",new _x);v(this,"collision",new Xv);v(this,"score",new gx(this.saveSystem));v(this,"achievements",new Wv(this.saveSystem));v(this,"audio",new Ih);v(this,"skinAbilities",new yx);v(this,"relics",new Mx);v(this,"hud");v(this,"mainMenu");v(this,"pauseMenu");v(this,"settingsMenu");v(this,"skinSelectMenu");v(this,"achievementsMenu");v(this,"leaderboardMenu");v(this,"controlsMenu");v(this,"initialsEntryScreen");v(this,"relicDraftMenu");v(this,"gameOverScreen");v(this,"toasts");v(this,"state",_e.Boot);v(this,"previousState",_e.MainMenu);v(this,"random",new bx);v(this,"loop");v(this,"events",[]);v(this,"fps",60);v(this,"bombKillsThisRun",0);v(this,"reachedWave",1);v(this,"pendingGameOverScore",0);v(this,"pendingGameOverWave",1);v(this,"inputGraceTimer",0);v(this,"relicDraftAutoTimer",0);v(this,"currentRelicDraft",[]);this.input=new Jh(this.controlBindings,e),this.renderer=new Vv(e,i,this.settings),this.hud=new wx(t),this.toasts=new Dx(t),this.mainMenu=new Ax(t,{onStart:()=>this.startRun(),onSkinSelect:()=>this.openSkinSelect(_e.MainMenu),onAchievements:()=>this.openAchievements(_e.MainMenu),onLeaderboard:()=>this.openLeaderboard(_e.MainMenu),onControls:()=>this.openControls(_e.MainMenu),onSettings:()=>this.openSettings(_e.MainMenu)}),this.pauseMenu=new Tx(t,{onResume:()=>this.resume(),onRestart:()=>this.startRun(),onSkinSelect:()=>this.openSkinSelect(_e.Paused),onSettings:()=>this.openSettings(_e.Paused),onMainMenu:()=>this.showMainMenu()}),this.settingsMenu=new Rx(t,this.settings,{onChange:()=>this.persistSettings(),onBack:()=>this.closeSettings()}),this.skinSelectMenu=new Nx(t,this.settings,{onChange:s=>this.selectSkin(s),onBackgroundChange:s=>this.selectBackground(s),onBack:()=>this.closeSkinSelect()}),this.achievementsMenu=new Ux(t,()=>this.achievements.unlocked,{onBack:()=>this.closeAchievements()}),this.leaderboardMenu=new Fx(t,()=>this.saveSystem.loadLeaderboard(),{onBack:()=>this.closeLeaderboard()}),this.controlsMenu=new Ox(t,this.controlBindings,{onRebind:(s,r)=>this.setControlBinding(s,r),onReset:()=>this.resetControlBindings(),onBack:()=>this.closeControls()}),this.initialsEntryScreen=new kx(t,{onSubmit:s=>this.submitInitials(s)}),this.relicDraftMenu=new zx(t,{onSelect:s=>this.selectRelic(s)}),this.gameOverScreen=new Lx(t,{onRetry:()=>this.startRun(),onMainMenu:()=>this.showMainMenu()}),this.loop=new Jv(s=>this.fixedUpdate(s),(s,r)=>this.render(r)),this.applySettingsToDocument(),this.transition(_e.MainMenu)}start(){this.loop.start()}dispose(){this.loop.stop(),this.input.dispose(),this.controlsMenu.dispose(),this.initialsEntryScreen.dispose(),this.renderer.dispose()}startRun(){var e;this.audio.resume(),this.entities.reset(),this.player.reset(this.settings.difficultyAssist),this.waveDirector.reset(),this.score.reset(),this.achievements.resetRuntime(),this.secretPilot.resetRun(),this.skinAbilities.reset(this.settings.selectedSkin),this.relics.reset(),this.events.length=0,this.bombKillsThisRun=0,this.reachedWave=1,this.currentRelicDraft=[],this.relicDraftAutoTimer=0,this.inputGraceTimer=.18,(e=document.activeElement)==null||e.blur(),this.transition(_e.Playing)}pause(){this.state===_e.Playing&&this.transition(_e.Paused)}resume(){var e;this.state===_e.Paused&&(this.inputGraceTimer=.16,(e=document.activeElement)==null||e.blur(),this.transition(_e.Playing))}showMainMenu(){this.transition(_e.MainMenu)}openSettings(e){this.previousState=e,this.transition(_e.Settings)}closeSettings(){this.transition(this.previousState)}openSkinSelect(e){this.previousState=e,this.transition(_e.SkinSelect)}closeSkinSelect(){this.transition(this.previousState)}openAchievements(e){this.previousState=e,this.transition(_e.Achievements)}closeAchievements(){this.transition(this.previousState)}openLeaderboard(e){this.previousState=e,this.transition(_e.Leaderboard)}closeLeaderboard(){this.transition(this.previousState)}openControls(e){this.previousState=e,this.transition(_e.Controls)}closeControls(){this.transition(this.previousState)}fixedUpdate(e){const t=this.renderer.playerScreenPosition(this.player);this.input.setAimOrigin(t.x,t.y);const i=this.input.update();if(this.inputGraceTimer>0&&(this.inputGraceTimer=Math.max(0,this.inputGraceTimer-e),i.pausePressed=!1,i.backPressed=!1,i.confirmPressed=!1,i.menuUpPressed=!1,i.menuDownPressed=!1,i.menuLeftPressed=!1,i.menuRightPressed=!1),i.secretPilotPressed&&this.state!==_e.Controls&&this.state!==_e.InitialsEntry&&this.state!==_e.RelicDraft&&this.toggleSecretPilot(),this.state===_e.MainMenu){this.mainMenu.update(i);return}if(this.state===_e.Settings){i.backPressed&&this.closeSettings(),this.settingsMenu.update(i);return}if(this.state===_e.SkinSelect){i.backPressed&&this.closeSkinSelect(),this.skinSelectMenu.update(i);return}if(this.state===_e.Achievements){i.backPressed&&this.closeAchievements(),this.achievementsMenu.update(i);return}if(this.state===_e.Leaderboard){i.backPressed&&this.closeLeaderboard(),this.leaderboardMenu.update(i);return}if(this.state===_e.Controls){i.backPressed&&this.closeControls(),this.controlsMenu.update(i);return}if(this.state===_e.InitialsEntry){this.initialsEntryScreen.update(i);return}if(this.state===_e.RelicDraft){if(this.secretPilot.enabled){this.relicDraftAutoTimer-=e,this.relicDraftAutoTimer<=0&&this.currentRelicDraft[0]&&this.selectRelic(this.currentRelicDraft[0].id);return}this.relicDraftMenu.update(i);return}if(this.state===_e.Paused){(i.pausePressed||i.backPressed)&&this.resume(),this.pauseMenu.update(i);return}if(this.state===_e.GameOver){if(this.secretPilot.shouldRetry(e)){this.startRun();return}this.gameOverScreen.update(i);return}if(this.state===_e.Playing){if(i.pausePressed){this.pause();return}if(this.settings.invertedControls&&(i.move.y*=-1,i.aim.y*=-1),this.player.resetFrameModifiers(),this.skinAbilities.setSkin(this.settings.selectedSkin,this.player),this.skinAbilities.preparePlayer(this.player,e),this.relics.preparePlayer(this.player),this.secretPilot.apply(i,this.player,this.entities,e),this.player.update(i,e),i.previousWeaponPressed&&this.player.cycleWeapon(-1),i.nextWeaponPressed&&this.player.cycleWeapon(1),this.player.dashStarted&&(this.emit({type:"dash",x:this.player.position.x,y:this.player.position.y}),this.skinAbilities.onDash(this.player,this.settings,s=>this.emit(s)),this.relics.onDash(this.player,this.entities,s=>this.emit(s))),i.shoot&&this.player.tryShoot()&&(this.fireWeapon(this.player.weapon),this.audio.shoot()),i.bombPressed&&this.player.tryBomb()){this.relics.onBomb(this.player,r=>this.emit(r));const s=this.collision.applyBomb(this.entities,this.player,this.score,r=>this.emit(r),this.random,this.settings,this.relics);this.bombKillsThisRun=Math.max(this.bombKillsThisRun,s),this.audio.bomb(),s>=8&&this.unlock("bomb-doctrine")}if(this.waveDirector.update(e,this.entities,this.random,this.settings.difficultyAssist,this.player.position),this.relics.update(e),this.skinAbilities.applyEnemyModifiers(this.entities,this.settings,e),this.entities.update(e,this.player),this.skinAbilities.updateNearMisses(this.entities,this.player,this.settings,this.random,s=>this.emit(s)),this.collision.update(this.entities,this.player,this.score,s=>this.emit(s),this.random,this.settings,this.skinAbilities,this.relics),this.relics.applyScoreModifiers(this.score),this.score.update(e,this.settings.difficultyAssist),this.checkAchievements(),!this.player.active){this.endRun();return}this.relics.shouldOfferDraft(this.waveDirector.wave)&&this.openRelicDraft(this.waveDirector.wave)}}render(e){const t=this.events.splice(0,this.events.length);this.renderer.render({player:this.player,entities:this.entities,settings:this.settings,multiplier:this.score.multiplier,wave:this.waveDirector.wave},t,e);const i=Wi(this.settings.selectedSkin),s=Eo(this.player.weaponId,i),r=this.skinAbilities.getHudState();this.fps=this.fps*.9+1/Math.max(.001,e)*.1,this.hud.update({score:this.score.score,highScore:this.score.highScore,multiplier:this.score.multiplier,wave:this.waveDirector.wave,healthRatio:this.player.healthRatio,dashRatio:this.player.dashRatio,dashCharges:this.player.dashCharges,bombRatio:this.player.bombRatio,fps:this.fps,enemyCount:this.entities.activeEnemyCount,bulletCount:this.entities.activeBulletCount,pickupCount:this.entities.activePickupCount,particleCount:this.renderer.particleCount,drawCalls:this.renderer.drawCallCount,skinName:i.displayName,skinPrimary:si(i.primaryColor),skinSecondary:si(i.secondaryColor),skinAccent:Ua(i),weaponColor:si(s),weaponName:this.player.weapon.shortLabel,pilotActive:this.secretPilot.enabled,signatureLabel:r.label,signatureRatio:r.ratio,signatureReady:r.ready})}fireWeapon(e){const t=Wi(this.settings.selectedSkin),i=Eo(e.id,t);if(e.kind==="beam"){this.collision.applyBeam(this.entities,this.player.position.x,this.player.position.y,this.player.aim.x,this.player.aim.y,e,this.score,l=>this.emit(l),this.random,i,this.relics);return}const s=e.projectile;if(!s)return;const r=Math.atan2(this.player.aim.y,this.player.aim.x),a=s.pelletCount,o=(a-1)*.5;for(let l=0;l<a;l+=1){const c=a<=1?0:(l-o)/o,h=r+c*s.spreadRadians*.5,u=Math.cos(h),d=Math.sin(h),f=this.skinAbilities.decorateProjectileOptions(e,{speed:s.speed,life:s.life,damage:s.damage,radius:s.radius,magnetRadius:s.magnetRadius,magnetStrength:s.magnetStrength,color:i,weaponId:e.id},this.score),g=this.relics.modifyProjectileOptions(f);this.entities.spawnBullet(this.player.position.x,this.player.position.y,u,d,g)}this.emit({type:"shoot",x:this.player.position.x,y:this.player.position.y,aimX:this.player.aim.x,aimY:this.player.aim.y,weaponId:e.id,pelletCount:a,color:i})}emit(e){this.events.push(e),e.type==="enemyKilled"?(this.skinAbilities.onEnemyKilled(e,this.entities,this.random,t=>this.emit(t)),this.audio.enemyKilled(),e.enemyType==="splitter"&&this.unlock("saint-of-splinters")):e.type==="dash"?this.audio.dash():e.type==="playerHit"?this.audio.playerHit():e.type==="pickupCollected"?this.audio.pickup():e.type==="achievementUnlocked"&&(this.audio.achievement(),this.toasts.showAchievement(e.achievement))}checkAchievements(){this.score.kills>=1&&this.unlock("first-light"),this.score.highestMultiplier>=5&&this.unlock("clean-arc"),this.score.highestMultiplier>=10&&this.unlock("true-vector"),this.score.score>=1e4&&this.unlock("ten-thousand-sparks"),this.score.score>=5e4&&this.unlock("signal-saint"),this.score.kills>=100&&this.unlock("hundred-fold"),this.waveDirector.wave>this.reachedWave&&(this.reachedWave=this.waveDirector.wave,this.reachedWave>=5&&this.unlock("wave-runner"))}unlock(e){const t=this.achievements.tryUnlock(e);t&&this.emit({type:"achievementUnlocked",achievement:t})}openRelicDraft(e){this.entities.enemies.deactivateAll(),this.entities.bullets.deactivateAll(),this.player.invulnerableTimer=Math.max(this.player.invulnerableTimer,Qe.safePauseInvulnerability),this.currentRelicDraft=this.relics.createDraft(e,this.random),this.currentRelicDraft.length!==0&&(this.relicDraftMenu.setChoices(e,this.currentRelicDraft),this.relicDraftAutoTimer=.35,this.inputGraceTimer=.16,this.transition(_e.RelicDraft))}selectRelic(e){var t;this.relics.activate(e,this.player,this.score),this.pauseMenu.setRelics(this.relics.activeSummaries(),this.relics.overdriveCharge),this.currentRelicDraft=[],this.inputGraceTimer=.16,(t=document.activeElement)==null||t.blur(),this.transition(_e.Playing)}endRun(){if(this.pendingGameOverScore=this.score.score,this.pendingGameOverWave=this.waveDirector.wave,this.secretPilot.beginRetryDelay(),!this.secretPilot.enabled&&this.saveSystem.qualifiesForLeaderboard(this.pendingGameOverScore,this.pendingGameOverWave)){this.initialsEntryScreen.setRun(this.pendingGameOverScore,this.pendingGameOverWave),this.transition(_e.InitialsEntry);return}this.showGameOverResults()}submitInitials(e){this.saveSystem.submitLeaderboardEntry(e,this.pendingGameOverScore,this.pendingGameOverWave),this.score.highScore=this.saveSystem.loadHighScore(),this.showGameOverResults()}showGameOverResults(){this.gameOverScreen.setResults(this.pendingGameOverScore,this.pendingGameOverWave,this.score.highScore,this.relics.activeSummaries(),this.relics.overdriveCharge),this.transition(_e.GameOver)}toggleSecretPilot(){const e=this.secretPilot.toggle();this.toasts.showMessage(e?"Secret pilot online":"Secret pilot offline",e?"Achievement protocol armed":"Manual control restored"),e&&this.state!==_e.Playing&&this.startRun()}transition(e){this.state=e,this.mainMenu.hide(),this.pauseMenu.hide(),this.settingsMenu.hide(),this.skinSelectMenu.hide(),this.achievementsMenu.hide(),this.leaderboardMenu.hide(),this.controlsMenu.hide(),this.initialsEntryScreen.hide(),this.relicDraftMenu.hide(),this.gameOverScreen.hide(),e===_e.MainMenu?(this.hud.hide(),this.mainMenu.setHighScore(this.score.highScore),this.mainMenu.show()):e===_e.Playing?this.hud.show():e===_e.Paused?(this.hud.show(),this.pauseMenu.setRelics(this.relics.activeSummaries(),this.relics.overdriveCharge),this.pauseMenu.show()):e===_e.RelicDraft?(this.hud.hide(),this.relicDraftMenu.show()):e===_e.Settings?(this.hud.hide(),this.settingsMenu.show()):e===_e.SkinSelect?(this.hud.hide(),this.skinSelectMenu.show()):e===_e.Achievements?(this.hud.hide(),this.achievementsMenu.show()):e===_e.Leaderboard?(this.hud.hide(),this.leaderboardMenu.show()):e===_e.Controls?(this.hud.hide(),this.controlsMenu.show()):e===_e.InitialsEntry?(this.hud.hide(),this.initialsEntryScreen.show()):e===_e.GameOver&&(this.hud.show(),this.gameOverScreen.show())}persistSettings(){this.saveSystem.saveSettings(this.settings),this.applySettingsToDocument(),this.renderer.applySettings(this.settings)}selectSkin(e){this.settings.selectedSkin=e,this.persistSettings()}selectBackground(e){this.settings.selectedBackground=e,this.persistSettings()}setControlBinding(e,t){const i=ii(this.controlBindings[e]);for(const s of Object.keys(this.controlBindings))s!==e&&Gh(this.controlBindings[s],t)&&(this.controlBindings[s]=i);this.controlBindings[e]=t,this.persistControlBindings()}resetControlBindings(){Object.assign(this.controlBindings,eo($a)),this.persistControlBindings()}persistControlBindings(){this.saveSystem.saveControlBindings(this.controlBindings),this.input.setControlBindings(this.controlBindings),this.controlsMenu.setBindings(this.controlBindings)}applySettingsToDocument(){const e=Wi(this.settings.selectedSkin),t=Qn(this.settings.selectedBackground);document.body.classList.toggle("palette-high-contrast",this.settings.palette==="high-contrast"),document.body.classList.toggle("palette-colourblind",this.settings.palette==="colourblind");const i=this.settings.uiScale==="small"?.9:this.settings.uiScale==="large"?1.16:1;document.documentElement.style.setProperty("--ui-scale",String(i)),document.documentElement.style.setProperty("--skin-primary",si(e.primaryColor)),document.documentElement.style.setProperty("--skin-secondary",si(e.secondaryColor)),document.documentElement.style.setProperty("--skin-accent",Ua(e)),document.documentElement.style.setProperty("--background-primary",jn(t.palette.primary)),document.documentElement.style.setProperty("--background-secondary",jn(t.palette.secondary)),document.documentElement.style.setProperty("--background-accent",jn(t.palette.accent))}}const bh=document.querySelector("#game-canvas"),wh=document.querySelector("#ui-root"),Eh=document.querySelector("#flash-layer");if(!bh||!wh||!Eh)throw new Error("Vector Saint boot failed: required DOM roots are missing.");const Ah=new Hx(bh,wh,Eh);Ah.start();window.addEventListener("beforeunload",()=>{Ah.dispose()});
