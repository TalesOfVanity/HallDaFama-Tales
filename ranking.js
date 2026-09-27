const players=[
 {rank:1,name:'Player One',character:'Aurelion Ascanius',renown:1842,legacy:740,badges:['excalibur','king','quill','shield'],mvp:true,history:['Entrada no RPG','Primeira grande conquista','Reconhecimento como MVP do Patch 01']},
 {rank:2,name:'Player Two',character:'Morgana Vale',renown:1710,legacy:610,badges:['magic','witch','fire','swords'],history:['Entrada no RPG','Participação em evento de grande escala']},
 {rank:3,name:'Player Three',character:'Finnian Oak',renown:1596,legacy:580,badges:['horse','beast','shield','quill'],history:['Entrada no RPG','Exploração de região inédita','Participação em evento coletivo']}
];
const badgeMap=Object.fromEntries((window.badgeData||[]).map(x=>[x.id,x]));
function badgeImg(id,cls='mini-badge'){const b=badgeMap[id];return b?`<img class="${cls}" src="assets/badges/${b.file}" alt="${b.name}" title="${b.name}">`:''}
const podium=document.getElementById('podium');
if(podium){podium.innerHTML=players.slice(0,3).map(p=>`<article class="podium-card ${p.rank===1?'first':p.rank===2?'second':'third'}" data-player="${p.rank}"><div class="podium-rank">${p.rank===1?'I':p.rank===2?'II':'III'}</div><div class="podium-avatar">${p.name.charAt(0)}</div><h3>${p.name}</h3><div class="podium-score">${p.renown.toLocaleString('pt-BR')} Renome</div><div class="podium-badges">${p.badges.slice(0,3).map(x=>badgeImg(x)).join('')}</div></article>`).join('');
}
const list=document.getElementById('ranking-list');
function renderRows(filter=''){
 const q=filter.toLowerCase();const visible=players.filter(p=>p.name.toLowerCase().includes(q)||p.character.toLowerCase().includes(q));
 list.innerHTML=visible.map(p=>`<article class="ranking-row" data-player="${p.rank}"><div class="rank-number">#${String(p.rank).padStart(2,'0')}</div><div><span class="player-name">${p.name}</span><span class="player-character">${p.character}</span></div><div class="renown">${p.renown.toLocaleString('pt-BR')}</div><div class="row-badges">${p.badges.map(x=>badgeImg(x)).join('')}</div><div class="legacy">Legado ${p.legacy}</div></article>`).join('');
 document.querySelectorAll('[data-player]').forEach(el=>el.addEventListener('click',()=>openPlayer(Number(el.dataset.player))));
}
if(list)renderRows();
const search=document.getElementById('player-search');if(search)search.addEventListener('input',e=>renderRows(e.target.value));
function openPlayer(rank){const p=players.find(x=>x.rank===rank);if(!p)return;const modal=document.getElementById('player-modal');const detail=document.getElementById('player-detail');detail.innerHTML=`<div class="detail-head"><div class="detail-avatar">${p.name.charAt(0)}</div><h2 id="modal-name">${p.name}</h2><div class="title">${p.character}</div>${p.mvp?'<div class="dragon-mini">🐉 MVP DO RPG · PATCH 01</div>':''}</div><div class="detail-stats"><div class="detail-stat"><strong>${p.renown.toLocaleString('pt-BR')}</strong><span>Renome</span></div><div class="detail-stat"><strong>${p.legacy}</strong><span>Legado</span></div><div class="detail-stat"><strong>#${p.rank}</strong><span>Posição</span></div></div><div class="detail-section"><h3>Insígnias</h3><div class="detail-badges">${p.badges.map(id=>{const b=badgeMap[id];return `<div class="detail-badge">${badgeImg(id,'')}<span>${b.name}</span></div>`}).join('')}</div></div><div class="detail-section"><h3>Personagem</h3><div class="detail-character"><span>${p.character}</span><span>Registro ativo</span></div></div><div class="detail-section"><h3>Histórico</h3>${p.history.map((h,i)=>`<div class="detail-character"><span>${h}</span><span>0${i+1}</span></div>`).join('')}</div>`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>{const m=document.getElementById('player-modal');m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=document.getElementById('player-modal');if(m){m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}}});
