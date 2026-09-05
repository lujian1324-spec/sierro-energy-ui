(async()=>{
  const n=9;
  let b64="";
  for(let i=0;i<n;i++){
    b64 += await (await fetch("/sierro-energy-ui/assets/part-"+i+".b64")).text();
  }
  const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
  const ds=new DecompressionStream("gzip");
  const stream=new Blob([bin]).stream().pipeThrough(ds);
  const code=await new Response(stream).text();
  const s=document.createElement("script");
  s.textContent=code;
  document.body.appendChild(s);
})();
