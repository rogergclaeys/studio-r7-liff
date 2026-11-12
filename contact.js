const T={en:{tag:"Start a brief",h1:"Tell us what to <em>fix</em>.",lead:"30 seconds. A person from our team replies right here in LINE.",
note:"Sending from this page needs the LINE app, and you are in a regular browser. Start the 2-minute brief instead, call us, or open this page in LINE.",
q0:"What do you need help with?",jr:["Build a solution","Connect my systems","Explore apps","Technology for equity"],
q1:"Where should we reply?",h1t:"Pick one or more. We will reply on the app you choose.",ch:["LINE","WhatsApp","Telegram","All three"],
q2:"What should your chat assistant do for customers?",h2t:"Pick any that apply.",use:["Answer questions","Take bookings","Qualify leads","Sell / take orders"],
q3:"Your details",lname:"Your name",lbiz:"Business or venue",lphone:"Phone",req:"(required)",opt:"(optional)",
pname:"e.g. Somchai",pbiz:"e.g. Baan Suan Cafe",pphone:"81 234 5678",hphone:"Thai mobile or landline, 9 or 10 digits, with or without the leading 0: 081 234 5678, 81 234 5678 or Bangkok 02 123 4567.",
send:"Send to Studio R7 chat",need:"Please enter your name so we know who to reply to.",badphone:"That phone number does not look right. Use 9 or 10 digits, for example 081 234 5678 or 02 123 4567.",
ok:"Sent. We will reply in this chat shortly.",fail:"We could not send this. Please try again, or call us.",
full:"Start the 2-minute brief",fullIn:"Prefer the full 2-minute brief instead?",lineopen:"Open this page in LINE",call:"Call 097 170 9226",
priv:"We only use these details to reply to you. Privacy: studior7.com/en/privacy"},
th:{tag:"เริ่มบรีฟ",h1:"บอกเราว่าอยากให้ <em>แก้อะไร</em>",lead:"ใช้เวลา 30 วินาที ทีมงานของเราจะตอบกลับใน LINE นี้",
note:"การส่งจากหน้านี้ต้องใช้แอป LINE แต่ตอนนี้คุณเปิดอยู่ในเบราว์เซอร์ทั่วไป กรอกบรีฟ 2 นาที โทรหาเรา หรือเปิดหน้านี้ใน LINE ได้เลย",
q0:"ต้องการให้เราช่วยเรื่องอะไร",jr:["สร้างโซลูชัน","เชื่อมระบบของฉัน","สำรวจแอป","เทคโนโลยีแลกหุ้น"],
q1:"ให้เราตอบกลับทางไหน",h1t:"เลือกได้มากกว่าหนึ่ง เราจะตอบกลับในแอปที่คุณเลือก",ch:["LINE","WhatsApp","Telegram","ทั้งสามช่องทาง"],
q2:"ให้ผู้ช่วยแชตของคุณทำอะไรให้ลูกค้า",h2t:"เลือกได้ทุกข้อที่ตรง",use:["ตอบคำถาม","รับจอง","คัดกรองลีด","ขาย / รับออเดอร์"],
q3:"ข้อมูลของคุณ",lname:"ชื่อของคุณ",lbiz:"ธุรกิจหรือสถานที่",lphone:"เบอร์โทร",req:"(จำเป็น)",opt:"(ไม่บังคับ)",
pname:"เช่น สมชาย",pbiz:"เช่น บ้านสวนคาเฟ่",pphone:"81 234 5678",hphone:"เบอร์มือถือหรือเบอร์บ้านไทย 9 หรือ 10 หลัก ใส่ 0 นำหน้าหรือไม่ก็ได้ เช่น 081 234 5678, 81 234 5678 หรือกรุงเทพฯ 02 123 4567",
send:"ส่งเข้าแชต Studio R7",need:"กรุณากรอกชื่อ เพื่อให้เรารู้ว่าจะตอบกลับใคร",badphone:"เบอร์โทรไม่ถูกต้อง ใช้ 9 หรือ 10 หลัก เช่น 081 234 5678 หรือ 02 123 4567",
ok:"ส่งแล้ว เราจะตอบกลับในแชตนี้เร็วๆ นี้",fail:"ส่งไม่สำเร็จ กรุณาลองอีกครั้งหรือโทรหาเรา",
full:"เริ่มกรอกบรีฟ 2 นาที",fullIn:"อยากกรอกบรีฟเต็ม 2 นาทีแทน?",lineopen:"เปิดหน้านี้ใน LINE",call:"โทร 097 170 9226",
priv:"เราใช้ข้อมูลนี้เพื่อตอบกลับคุณเท่านั้น นโยบายความเป็นส่วนตัว: studior7.com/th/privacy"}};
const sel={jr:new Set(["Build a solution"]),ch:new Set(["LINE"]),use:new Set()};
const JR={"Build a solution":"build","Connect my systems":"connect","Explore apps":"explore","Technology for equity":"equity"};
const jr=()=>JR[[...sel.jr][0]]||"build";
// In LINE = the LIFF SDK initialised AND the page is inside the LINE client (not just a browser with the SDK loaded).
let inApp=/\bLine\//i.test(navigator.userAgent);
const confirmApp=()=>{try{inApp=!!(inLine&&window.liff&&liff.isInClient())}catch(e){inApp=false}};
const briefUrl=()=>{const j=jr();return j==="explore"?`${R7.SITE}/${L}/marketplace`:`${R7.SITE}/${L}/start?journey=${j}&channel=line`};
function opts(id,key,single){$(id).innerHTML=T[L][key].map((t,i)=>{const v=T.en[key][i];return `<button type="button" data-v="${v}" aria-pressed="${sel[key].has(v)}">${t}</button>`}).join("");
[...$(id).children].forEach(b=>b.onclick=()=>{const v=b.dataset.v;if(single){sel[key].clear();[...$(id).children].forEach(x=>x.setAttribute("aria-pressed","false"));sel[key].add(v);b.setAttribute("aria-pressed","true");$("full").href=briefUrl();return}
sel[key].has(v)?sel[key].delete(v):sel[key].add(v);b.setAttribute("aria-pressed",String(sel[key].has(v)))})}
function mode(){const t=T[L];
$("note").hidden=inApp;$("g0").hidden=!inApp;$("note").textContent=t.note;
$("more").hidden=!inApp;$("send").hidden=!inApp;$("msg").hidden=!inApp;$("lead").hidden=!inApp;
$("lineopen").hidden=inApp||!R7.CONTACT_LIFF||R7.CONTACT_LIFF.startsWith("__");$("lineopen").href="https://liff.line.me/"+R7.CONTACT_LIFF;
// outside LINE the brief is the one primary action; inside LINE the send button is, so the brief becomes secondary
$("full").className="cta"+(inApp?" g":"");$("full").textContent=inApp?t.fullIn:t.full;
$("alt").dataset.mode=inApp?"line":"web"}
function render(){document.documentElement.lang=L;const t=T[L];
$("tag").textContent=t.tag;$("h1").innerHTML=t.h1;$("lead").textContent=t.lead;
["q0","q1","q2","q3","h1t","h2t","send","call","priv","lineopen"].forEach(k=>$(k).textContent=t[k]);
$("l-name").innerHTML=`${t.lname} <span class="req">${t.req}</span>`;$("l-biz").innerHTML=`${t.lbiz} <span class="opt">${t.opt}</span>`;$("l-phone").innerHTML=`${t.lphone} <span class="opt">${t.opt}</span>`;
$("name").placeholder=t.pname;$("biz").placeholder=t.pbiz;$("phone").placeholder=t.pphone;$("h-phone").textContent=t.hphone;
$("lang").textContent=L==="en"?"ไทย":"EN";$("full").href=briefUrl();opts("jr","jr",true);opts("ch","ch");opts("use","use");clearErr();mode()}
function setErr(id,field,msg){const e=$(id);e.textContent=msg;e.hidden=false;field.setAttribute("aria-invalid","true");if(field.id==="phone")field.parentNode.dataset.bad="true"}
function clearErr(){["e-name","e-phone"].forEach(i=>{$(i).hidden=true});["name","phone"].forEach(i=>{$(i).removeAttribute("aria-invalid")});$("phone").parentNode.dataset.bad="false"}
// Thailand +66: accept 9 or 10 digits, with or without the leading 0 (also tolerate a typed 66 / +66). Returns "+66XXXXXXXXX", "" if empty, or null if invalid.
function normPhone(raw){let d=raw.replace(/[\s\-().]/g,"");if(!d)return"";if(/[^\d+]/.test(d))return null;d=d.replace(/^\+?66(?=\d{8,10}$)/,"").replace(/^\+/,"");if(!/^\d+$/.test(d))return null;
if(d[0]==="0")d=d.slice(1);const bkk=d[0]==="2"&&d.length===8;if(!bkk&&(d.length!==9||d[0]==="2"))return null;return"+66"+d}
$("lang").onclick=()=>{L=L==="en"?"th":"en";render()};
$("full").onclick=e=>{if(inApp){e.preventDefault();open2(briefUrl())}};
$("form").onsubmit=async e=>{e.preventDefault();if(!inApp)return;clearErr();$("msg").className="msg";$("msg").textContent="";
const n=$("name").value.trim(),ph=normPhone($("phone").value);let bad=null;
if(!n){setErr("e-name",$("name"),T[L].need);bad=$("name")}
if(ph===null){setErr("e-phone",$("phone"),T[L].badphone);bad=bad||$("phone")}
if(bad){bad.focus();return}
const text=`New project request\nNeed: ${[...sel.jr].join(", ")||"-"}\nName: ${n}\nBusiness: ${$("biz").value.trim()||"-"}\nPhone: ${ph||"-"}\nChannels: ${[...sel.ch].join(", ")||"-"}\nUse: ${[...sel.use].join(", ")||"-"}`;
try{await liff.sendMessages([{type:"text",text}]);$("msg").textContent=T[L].ok;setTimeout(()=>liff.closeWindow(),1600)}catch(err){$("msg").className="msg bad";$("msg").textContent=T[L].fail}};
render();initLiff(R7.CONTACT_LIFF).then(()=>{confirmApp();mode()});
