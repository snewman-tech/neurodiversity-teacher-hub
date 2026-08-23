
const search = document.querySelector('#resourceSearch');
const resourceCards = [...document.querySelectorAll('[data-resource]')];
const filters = [...document.querySelectorAll('[data-filter]')];
let currentFilter = 'all';

function applyResourceFilters(){
  const q = search ? search.value.toLowerCase().trim() : '';
  resourceCards.forEach(card=>{
    const text = (card.dataset.search+' '+card.innerText).toLowerCase();
    const categoryMatch = currentFilter==='all' || (card.dataset.category||'').split(' ').includes(currentFilter);
    card.style.display = categoryMatch && text.includes(q) ? '' : 'none';
  });
}
if(search) search.addEventListener('input',applyResourceFilters);
filters.forEach(b=>b.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active')); b.classList.add('active');
  currentFilter=b.dataset.filter; applyResourceFilters();
}));

const problemSearch=document.querySelector('#problemSearch');
if(problemSearch){
 const cards=[...document.querySelectorAll('[data-problem]')];
 problemSearch.addEventListener('input',()=>{
  const q=problemSearch.value.toLowerCase().trim();
  cards.forEach(c=>c.style.display=(c.dataset.problem+' '+c.innerText).toLowerCase().includes(q)?'':'none');
 });
}
