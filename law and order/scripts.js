// Minimal JS: toggles, smooth scroll, scroll-to-top
document.addEventListener('DOMContentLoaded',function(){
  const scrollTop = document.getElementById('scrollTop');
  // show/hide scroll-to-top
  window.addEventListener('scroll',()=>{ if(window.scrollY>200){scrollTop.style.display='block'} else {scrollTop.style.display='none'}})
  scrollTop?.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})})

  // Reveal on intersection for elements with .fade-in
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){ent.target.classList.add('fade-in');io.unobserve(ent.target)}
    })
  },{threshold:0.08});
  document.querySelectorAll('.fade-in, .serif, .card').forEach(el=>{io.observe(el)})

  // Side-by-side / language toggles
  const toggleSide = document.getElementById('toggleSide');
  const toggleLang = document.getElementById('toggleLang');
  if(toggleSide){toggleSide.addEventListener('click',()=>{document.body.classList.toggle('side-by-side')})}
  if(toggleLang){toggleLang.addEventListener('click',()=>{showTranslateOverlay()})}

  // Translate buttons (placeholder animated UI)
  document.querySelectorAll('#translateBtn').forEach(btn=>{btn.addEventListener('click',showTranslateOverlay)})

  // Smooth internal link navigation with subtle fade
  document.querySelectorAll('a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('.') || href && href.startsWith('/') || href && href.indexOf('.html')>-1){
      a.addEventListener('click',function(e){
        // let normal behavior for anchors with target _blank
        if(a.target === '_blank') return;
        e.preventDefault();
        document.body.style.transition='opacity .35s ease';
        document.body.style.opacity='0.02';
        setTimeout(()=>{window.location = href},380);
      })
    }
  })

  // Smooth scroll for TOC links
  document.querySelectorAll('a.toc-link').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();window.location=a.getAttribute('href')})})
})

function showTranslateOverlay(){
  // Simple animated translation placeholder — replace with real API integration when ready
  let overlay = document.getElementById('translateOverlay');
  if(!overlay){
    overlay = document.createElement('div');
    overlay.id='translateOverlay';
    overlay.style.position='fixed';overlay.style.inset=0;overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.background='linear-gradient(180deg, rgba(2,6,12,0.85), rgba(2,6,12,0.95))';overlay.style.zIndex=9999;overlay.style.backdropFilter='blur(4px)';
    overlay.innerHTML = `
      <div style="max-width:760px;padding:28px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.06));box-shadow:0 12px 40px rgba(2,6,18,0.7);text-align:center;color:var(--text)">
        <h3 style="font-family:Times, 'Times New Roman',serif;margin:0 0 8px;color:var(--accent-gold)">Translate</h3>
        <p style="color:var(--muted);margin:0 0 16px">Animated translate preview (placeholder). Integrate a translation API for real translations.</p>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:14px">
          <button id="doTranslate" class="btn btn-primary">Apply (demo)</button>
          <button id="closeTranslate" class="btn btn-ghost">Close</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    document.getElementById('closeTranslate').addEventListener('click',()=>{overlay.remove()});
    document.getElementById('doTranslate').addEventListener('click',()=>{
      // simple demo: flip the content container horizontally with a brief animation to simulate translation
      document.querySelectorAll('.card, .article-body, .content-block').forEach(el=>{
        el.style.transition='transform .6s cubic-bezier(.2,.9,.2,1),filter .4s ease';
        el.style.transform='rotateY(180deg)';
        setTimeout(()=>{el.style.transform='none'},700);
      });
      setTimeout(()=>{overlay.remove()},900);
    })
  }
}
