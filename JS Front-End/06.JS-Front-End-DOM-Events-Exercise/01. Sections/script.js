function create(words) {
   const divElement = document.getElementById("content");
   for (const word of words) {
      const newItemElement = document.createElement('div');
      const newParagraphElement=document.createElement('p');
      newParagraphElement.textContent=word.toString();
      newParagraphElement.style.display='none';
      newItemElement.addEventListener('click', ()=>{
         newParagraphElement.style.display='block';
      })
      newItemElement.appendChild(newParagraphElement);
      divElement.appendChild(newItemElement);
   }
}