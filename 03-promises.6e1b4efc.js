var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o),o("eWCmQ");let r=e=>document.querySelector(e);r(".form").addEventListener("submit",(function(e){e.preventDefault();Number(r('[name="delay"]').value);const n=Number(r('[name="step"]').value),t=Number(r('[name="amount"]').value);setTimeout((()=>{for(let e=0;e<t;e++)setTimeout((()=>{}),n)}),a)}));const a=r('[name="delay"]').value;r('[name="step"]').value,r('[name="amount"]').value;
//# sourceMappingURL=03-promises.6e1b4efc.js.map