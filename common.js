window.$=id=>document.getElementById(id);
window.L=(navigator.language||"en").startsWith("th")?"th":"en";window.inLine=false;
window.open2=u=>{try{if(inLine)return liff.openWindow({url:u,external:true})}catch(e){}window.open(u,"_blank")};
window.initLiff=async(id)=>{if(!id||id.startsWith("__")||!window.liff)return;try{await liff.init({liffId:id});inLine=true;if(liff.isLoggedIn()){const p=await liff.getProfile();window.PROFILE=p;if($("greet")){$("greet").textContent=(L==="th"?"สวัสดี ":"Hi ")+p.displayName;if(p.pictureUrl)$("avatar").src=p.pictureUrl;$("hello").style.display="flex"}}}catch(e){console.warn(e)}};
