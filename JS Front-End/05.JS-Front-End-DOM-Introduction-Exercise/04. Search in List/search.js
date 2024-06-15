function search() {
   const townElements=document.getElementById('towns');
   const searchFilter=document.getElementById('searchText')
   const resultDiv=document.getElementById('result');

   let count=0;

   const townArray=Array.from(townElements.children);
   for (const town of townArray) {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'none';
   }
   for (const town of townArray) {
      if (town.textContent.toLowerCase().includes(searchFilter.value.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      }
   }

   resultDiv.textContent=`${count} matches found`

}
