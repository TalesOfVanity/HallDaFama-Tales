const badgeData=[
 {id:'beast',name:'Fera',title:'A Besta',desc:'Destaque ligado ao instinto, à natureza selvagem ou a feitos extraordinários.',file:'noun_Beast_5305832_@700.png'},
 {id:'excalibur',name:'Excalibur',title:'O Campeão',desc:'Concedida por uma conquista individual de grande relevância.',file:'noun_excalibur_5305796_@700.png'},
 {id:'fire',name:'Fogo',title:'O Incendiário',desc:'Para quem movimenta o RPG e provoca grandes acontecimentos.',file:'noun_Fire_5305823_@700.png'},
 {id:'horse',name:'Cavalo',title:'O Viajante',desc:'Para exploração, aventuras e presença em diferentes partes do mundo.',file:'noun_Horse_5305784_@700.png'},
 {id:'king',name:'Rei',title:'O Regente',desc:'Para liderança, organização e influência dentro do RPG.',file:'noun_King_5305786_@700.png'},
 {id:'magic',name:'Magia',title:'O Arcano',desc:'Para destaque em conceitos, poderes ou narrativas sobrenaturais.',file:'noun_magic_5305780_@700.png'},
 {id:'magicpendent',name:'Amuleto Mágico',title:'O Místico',desc:'Para mistério, relíquias, conhecimento oculto e descobertas.',file:'noun_magicpendent_5303332_@700.png'},
 {id:'money',name:'Riqueza',title:'O Mercador',desc:'Para comércio, recursos, economia e desenvolvimento material.',file:'noun_Money_5305842_@700.png'},
 {id:'quill',name:'Pena',title:'O Cronista',desc:'Para escrita, narrativa, construção de cenas e contribuição literária.',file:'noun_quillpen_5305775_@700.png'},
 {id:'swords',name:'Espadas',title:'O Duelista',desc:'Para presença marcante em combates, confrontos e disputas.',file:'noun_Swords_5305825_@700.png'},
 {id:'shield',name:'Escudo',title:'O Guardião',desc:'Para quem protege, auxilia e sustenta outros jogadores.',file:'noun_warshield_5305827_@700.png'},
 {id:'witch',name:'Chapéu de Bruxo',title:'O Bruxo',desc:'Para especialização, conhecimento e domínio de feitiçaria.',file:'noun_WitchHat_5305828_@700.png'}
];
const legends=[
 {name:'Aurelion Ascanius',epithet:'“O Leão de Ooo”',type:'hero',record:'Registro nº 001',desc:'Um dos primeiros nomes destinados a ocupar as páginas de destaque das crônicas.'},
 {name:'Morgana Vale',epithet:'“A Bruxa do Norte”',type:'villain',record:'Registro nº 002',desc:'Figura lembrada por acontecimentos que alteraram o curso de uma campanha.'},
 {name:'Os Três da Torre',epithet:'“Os Inseparáveis”',type:'event',record:'Registro nº 003',desc:'Grupo associado a um dos primeiros grandes eventos coletivos registrados.'}
];
const hallGrid=document.getElementById('hall-grid');
if(hallGrid){
 hallGrid.innerHTML=legends.map((x,i)=>`<article class="legend-card" data-type="${x.type}"><div class="legend-portrait"><span>${['A','M','T'][i]}</span></div><h3>${x.name}</h3><div class="epithet">${x.epithet}</div><p>${x.desc}</p><div class="record">${x.record}</div></article>`).join('');
 document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.legend-card').forEach(c=>c.style.display=f==='all'||c.dataset.type===f?'block':'none')}));
}
const catalog=document.getElementById('badge-catalog');
if(catalog) catalog.innerHTML=badgeData.map(b=>`<article class="badge-item"><img src="assets/badges/${b.file}" alt="${b.name}"><h4>${b.name}</h4><p>${b.title}</p></article>`).join('');
window.badgeData=badgeData;
