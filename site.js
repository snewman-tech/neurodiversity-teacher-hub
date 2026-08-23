
const q=document.querySelector('#resourceSearch');
if(q){const cards=[...document.querySelectorAll('[data-search]')];q.addEventListener('input',()=>{const s=q.value.toLowerCase().trim();cards.forEach(c=>c.style.display=(c.dataset.search+' '+c.innerText).toLowerCase().includes(s)?'':'none')})}
