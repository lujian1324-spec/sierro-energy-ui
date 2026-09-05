(async()=>{
  const n=14;
  const parts=[];
  for(let i=0;i<n;i++){
    const r=await fetch("/sierro-energy-ui/assets/chunk-"+i+".js.txt");
    if(!r.ok) throw new Error("chunk "+i+" failed "+r.status);
    parts.push(await r.text());
  }
  const s=document.createElement("script");
  s.textContent=parts.join("");
  document.body.appendChild(s);
})();
