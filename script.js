function insert_Row() {
 let table=document.getElementById("sampleTable");
	let row=table.insertRow(0);
	let cell1=row.insertCell(0);
	cell1.innerHTMl= "New Cell1";

	let cell2=row.inserCell(1);
	cell2.innerHTML= "New Cell2";
  
  
}
