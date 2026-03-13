document.addEventListener('DOMContentLoaded', ()=> {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panels = Array.from(document.querySelectorAll('.panel'));

  function activateTab(targetId){
    tabs.forEach(t=>{
      if(t.dataset.tab === targetId) t.classList.add('active');
      else t.classList.remove('active');
    });
    panels.forEach(p=>{
      if(p.id === targetId){ p.classList.add('active'); p.hidden = false; }
      else { p.classList.remove('active'); p.hidden = true; }
    });
    history.replaceState(null, '', '#'+targetId);
  }

  tabs.filter(t=>!t.classList.contains('external')).forEach(tab=>{
    tab.addEventListener('click', ()=> activateTab(tab.dataset.tab));
  });

  // On load: open tab from hash or default
  const initial = location.hash ? location.hash.replace('#','') : 'about';
  const valid = panels.some(p=>p.id === initial) ? initial : 'about';
  activateTab(valid);
});
