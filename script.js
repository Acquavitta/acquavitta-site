
const m=document.querySelector('.mobile'), n=document.querySelector('.navlinks');
if(m&&n){m.addEventListener('click',()=>{const open=n.dataset.open==='1';n.dataset.open=open?'0':'1';n.style.display=open?'none':'flex';n.style.position='absolute';n.style.top='72px';n.style.left='0';n.style.right='0';n.style.padding='20px';n.style.background='#fffdf9';n.style.flexDirection='column';});}
document.querySelectorAll('form[data-demo]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Interface demonstrativa. A autenticação segura será conectada na próxima etapa.');}));
