!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);(a=n("1WSnx")).update;var a=n("1WSnx"),o=document.querySelector(".feedback-form");o.addEventListener("input",a.throttle((function(e){e.preventDefault();var t={email:o.elements.email.value,message:o.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));var l=JSON.parse(localStorage.getItem("feedback-form-state"));document.querySelector("input").value=l.email,document.querySelector("textarea").value=l.message,o.addEventListener("submit",(function(e){e.preventDefault(),console.log(l),o.reset(),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.89c7b713.js.map