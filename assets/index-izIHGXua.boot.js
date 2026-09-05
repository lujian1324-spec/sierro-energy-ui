const a=await fetch(new URL("./index-izIHGXua.p1.js",import.meta.url)).then(r=>r.text());
const b=await fetch(new URL("./index-izIHGXua.p2.js",import.meta.url)).then(r=>r.text());
await import(URL.createObjectURL(new Blob([a+b],{type:"text/javascript"})));
