"use strict";

const getSubmitBtn = document.querySelector(".submit_btn");
const getAdviceIdContainer = document.querySelector(".advice_id");
const getAdviceTextContainer = document.querySelector(".advice_text");
const getLoadingContainer = document.querySelector(".loading");

const getAdvice = async () => {
   const res = await fetch("https://api.adviceslip.com/advice");
   const result = await res.json();

   getAdviceIdContainer.innerText = `${result["slip"].id}`;
   getAdviceTextContainer.innerText = `"${result["slip"].advice}"`;
   getSubmitBtn.classList.remove("active");
};

getSubmitBtn.addEventListener("click", (e) => {
   e.preventDefault();
   getAdvice();
   getSubmitBtn.classList.add("active");
});
