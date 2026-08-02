
const menu = document.querySelector('.mobile');
const links = document.querySelector('.navlinks');
if(menu && links){
  menu.addEventListener('click',()=>{
    const open = links.dataset.open === '1';
    links.dataset.open = open ? '0':'1';
    links.style.display = open ? 'none':'flex';
    links.style.position='absolute';
    links.style.top='68px';
    links.style.left='0';
    links.style.right='0';
    links.style.padding='22px';
    links.style.background='#0b1013';
    links.style.flexDirection='column';
  });
}
document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Formulário demonstrativo. A autenticação e o envio seguro serão conectados na próxima etapa.');
  });
});
