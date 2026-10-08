(function(){
var P=document.body.dataset.page||"home",EM="hoseaiipinge707@gmail.com";
var L=[["index","Home"],["about","About"],["services","Services"],["portfolio","Portfolio"],["genesis","Genesis"],["faq","FAQ"]];
var nav=L.map(function(l){return '<a href="'+l[0]+'.html"'+(l[0]==P?' class="active"':'')+'>'+l[1]+'</a>'}).join("");
document.getElementById("site-header").innerHTML='<div class="nav"><a href="index.html" class="logo"><span class="logo-mark">&lt;/&gt;</span>Hosea-Tech</a><div class="tools"><button class="icon-btn" id="theme" aria-label="Change theme" title="Change theme">🎨</button><button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false"><span></span></button></div><nav class="nav-links" id="links">'+nav+'<a href="contact.html" class="btn btn-primary">Contact us</a></nav></div>';
var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
var f=document.createElement("div");f.className="fab";f.innerHTML='<button id="top" aria-label="Back to top">↑</button><a href="https://wa.me/264812621200" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>';document.body.appendChild(f);
var bar=document.createElement("div");bar.className="pbar";document.body.appendChild(bar);
var t=document.querySelector(".nav-toggle"),ln=document.getElementById("links");
function close(){ln.classList.remove("open");t.setAttribute("aria-expanded","false")}
t.onclick=function(){var o=ln.classList.toggle("open");t.setAttribute("aria-expanded",o)};
ln.addEventListener("click",function(e){if(e.target.tagName=="A")close()});
document.addEventListener("keydown",function(e){if(e.key=="Escape")close()});
var th=["dark","light","purple","cyan"],cur=0;try{cur=th.indexOf(localStorage.th)}catch(e){}if(cur<0)cur=0;
function ap(){document.documentElement.dataset.theme=th[cur];try{localStorage.th=th[cur]}catch(e){}}ap();
document.getElementById("theme").onclick=function(){cur=(cur+1)%th.length;ap()};
var tp=document.getElementById("top");tp.onclick=function(){scrollTo({top:0,behavior:"smooth"})};
addEventListener("scroll",function(){var h=document.documentElement;tp.classList.toggle("show",scrollY>400);bar.style.width=(scrollY/(h.scrollHeight-innerHeight)*100)+"%"},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var n=+e.target.dataset.n,i=0,s=Math.max(1,Math.ceil(n/40));var v=setInterval(function(){i=Math.min(n,i+s);e.target.textContent=i+(e.target.dataset.s||"");if(i>=n)clearInterval(v)},30)})});
document.querySelectorAll("[data-n]").forEach(function(e){co.observe(e)});
document.querySelectorAll(".filters button").forEach(function(b){b.onclick=function(){document.querySelectorAll(".filters button").forEach(function(x){x.classList.remove("on")});b.classList.add("on");document.querySelectorAll("[data-cat]").forEach(function(c){c.style.display=(b.dataset.f=="all"||c.dataset.cat==b.dataset.f)?"":"none"})}});
document.querySelectorAll("form[data-fs]").forEach(function(fm){fm.addEventListener("submit",function(e){e.preventDefault();var m=fm.parentNode.querySelector(".msg"),d=new FormData(fm);d.append("_subject",fm.dataset.fs+" - Hosea-Tech");d.append("_captcha","false");var b=fm.querySelector("button");b.disabled=true;
fetch("https://formsubmit.co/ajax/"+EM,{method:"POST",headers:{Accept:"application/json"},body:d}).then(function(r){if(!r.ok)throw 0;fm.reset();m.textContent="Thank you! We'll get back to you soon.";m.style.display="block"}).catch(function(){m.textContent="Could not send. Please email "+EM+" or WhatsApp 081 262 1200.";m.style.display="block"}).finally(function(){b.disabled=false})})});
})();
