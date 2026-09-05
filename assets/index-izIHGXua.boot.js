const parts=[];
parts.push(await fetch(new URL("./index-izIHGXua.c0.js",import.meta.url)).then(r=>r.text()));
parts.push(await fetch(new URL("./index-izIHGXua.c1.js",import.meta.url)).then(r=>r.text()));
parts.push(await fetch(new URL("./index-izIHGXua.c2.js",import.meta.url)).then(r=>r.text()));
parts.push(await fetch(new URL("./index-izIHGXua.c3.js",import.meta.url)).then(r=>r.text()));
await import(URL.createObjectURL(new Blob([parts.join("")],{type:"text/javascript"})));
