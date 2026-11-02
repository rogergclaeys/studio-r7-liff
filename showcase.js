const T={en:{tag:"Your on-demand tech & automation team",h1:"This chat <em>is</em> the demo.",lead:"Pick a scenario and watch an agent work inside LINE — the same agents we build for your business on LINE, WhatsApp and Telegram.",live:"demo",badge:"Illustrative demo",t1h:"Thai + English",t1:"in the same conversation",t2h:"One inbox",t2:"LINE · WhatsApp · Telegram",t3h:"A person approves",t3:"anything important",t4h:"You own it",t4:"your system, your data",foot:"Scripted illustration, not a real conversation. © Studio R7 · studior7.com",book:"Build this for my business →",share:"Share with a friend"},
th:{tag:"ทีมเทคโนโลยีและระบบอัตโนมัติของคุณ",h1:"แชตนี้ <em>คือ</em> เดโม",lead:"เลือกสถานการณ์ แล้วดูเอเจนต์ทำงานใน LINE จริง — เอเจนต์แบบเดียวกับที่เราสร้างให้ธุรกิจคุณบน LINE, WhatsApp และ Telegram",live:"เดโม",badge:"เดโมตัวอย่าง",t1h:"ไทย + อังกฤษ",t1:"ในบทสนทนาเดียวกัน",t2h:"กล่องข้อความเดียว",t2:"LINE · WhatsApp · Telegram",t3h:"คนอนุมัติ",t3:"ทุกเรื่องสำคัญ",t4h:"คุณเป็นเจ้าของ",t4:"ระบบและข้อมูลของคุณ",foot:"บทสนทนาจำลอง ไม่ใช่การสนทนาจริง © Studio R7 · studior7.com",book:"สร้างแบบนี้ให้ธุรกิจฉัน →",share:"แชร์ให้เพื่อน"}};
const S=[{k:"concierge",n:{en:"Concierge",th:"คอนเซียร์จ"},a:{en:"Studio R7 Concierge",th:"คอนเซียร์จ Studio R7"},
 en:[["a","Hi! I'm the Studio R7 concierge. What can I help with?"],["c","Opening hours?","a","We're open 10:00–22:00 daily. Want me to book you a table for tonight?"],["c","Yes, 4 people at 8pm","a","Done ✅ Table for 4 at 20:00. I'll remind you 2 hours before. Anything to add — allergies, birthday?"]],
 th:[["a","สวัสดีค่ะ ฉันคือคอนเซียร์จของ Studio R7 ให้ช่วยอะไรดีคะ"],["c","เปิดกี่โมง?","a","เปิดทุกวัน 10:00–22:00 ค่ะ ให้จองโต๊ะคืนนี้ไหมคะ?"],["c","จอง 4 ที่ 2 ทุ่ม","a","เรียบร้อย ✅ โต๊ะ 4 ที่ เวลา 20:00 จะแจ้งเตือนก่อน 2 ชม. มีอะไรเพิ่มไหมคะ"]]},
{k:"booking",n:{en:"Booking",th:"จองคิว"},a:{en:"Booking Agent",th:"เอเจนต์จองคิว"},
 en:[["a","Which service? Pick a time and I'll lock it in."],["c","Haircut Sat","a","Saturday has 11:00, 14:30, 16:00 free. Which one?"],["c","14:30","a","Booked ✅ Sat 14:30. Calendar invite sent, and I'll message you if the stylist changes."]],
 th:[["a","สนใจบริการไหนคะ เลือกเวลาได้เลย"],["c","ตัดผมวันเสาร์","a","วันเสาร์ว่าง 11:00, 14:30, 16:00 เลือกเวลาไหนคะ"],["c","14:30","a","จองแล้ว ✅ เสาร์ 14:30 ส่งนัดเข้าปฏิทินแล้ว หากช่างเปลี่ยนจะแจ้งทันที"]]},
{k:"leads",n:{en:"Lead brief",th:"บรีฟลูกค้า"},a:{en:"Lead Qualifier",th:"คัดกรองลูกค้า"},
 en:[["a","Hello! Tell me about your project and budget range."],["c","We need a LINE booking bot","a","Got it. I've noted your goal, channels and timing, and drafted a short brief."],["c","Send it to the team","a","Sent ✉️ A person from the team replies in this chat."]],
 th:[["a","สวัสดีค่ะ เล่าโปรเจกต์และงบประมาณให้ฟังได้เลย"],["c","อยากได้บอทจองคิวบน LINE","a","รับทราบค่ะ บันทึกเป้าหมาย ช่องทาง และช่วงเวลาไว้แล้ว และร่างบรีฟสั้นๆ ให้แล้ว"],["c","ส่งให้ทีมเลย","a","ส่งแล้ว ✉️ ทีมงานจะตอบกลับในแชตนี้"]]}];
const SITE="https://studior7.com";let cur=0,run=0;const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function bub(t,c){const d=document.createElement("div");d.className="b "+c;d.textContent=t;$("chat").appendChild(d);$("chat").scrollTop=1e5}
async function play(i){const id=++run;cur=i;$("chat").innerHTML="";$("chips").innerHTML="";$("agent").textContent=S[i].a[L];
 [...$("tabs").children].forEach((b,j)=>b.classList.toggle("on",j===i));
 const steps=S[i][L];let p=0;
 const typing=async(ms)=>{const t=document.createElement("div");t.className="b a typing";t.innerHTML="<s></s><s></s><s></s>";$("chat").appendChild(t);$("chat").scrollTop=1e5;await sleep(ms);t.remove()};
 for(const s of steps){if(id!==run)return;
  if(s[0]==="a"){await typing(900);if(id!==run)return;bub(s[1],"a")}
  else{ // chip then reply
   await new Promise(res=>{const b=document.createElement("button");b.textContent=s[1];b.onclick=()=>{$("chips").innerHTML="";bub(s[1],"u");res()};$("chips").appendChild(b)});
   if(id!==run)return;await typing(1100);if(id!==run)return;bub(s[3],"a")}}
 const b=document.createElement("button");b.textContent=L==="th"?"↻ เล่นอีกครั้ง":"↻ Replay";b.onclick=()=>play(cur);$("chips").appendChild(b)}
function render(){document.documentElement.lang=L;document.querySelectorAll("[data-i]").forEach(e=>{const v=T[L][e.dataset.i];if(e.dataset.i==="h1")e.innerHTML=v;else e.textContent=v});$("lang").textContent=L==="en"?"ไทย":"EN";
 $("tabs").innerHTML=S.map((s,i)=>`<button>${s.n[L]}</button>`).join("");[...$("tabs").children].forEach((b,i)=>b.onclick=()=>play(i));play(cur)}
$("lang").onclick=()=>{L=L==="en"?"th":"en";render()};
$("book").onclick=e=>{e.preventDefault();const id=(window.R7&&R7.CONTACT_LIFF)||"";if(id&&!id.startsWith("__"))location.href="https://liff.line.me/"+id;else location.href="contact/"};
$("share").onclick=async()=>{const u="https://liff.line.me/"+R7.LIFF_ID;if(inLine&&liff.isApiAvailable("shareTargetPicker"))await liff.shareTargetPicker([{type:"text",text:"Studio R7 — the chat is the demo 👉 "+u}]);else if(navigator.share)navigator.share({title:"Studio R7",url:u})};
render();initLiff(R7.LIFF_ID);
