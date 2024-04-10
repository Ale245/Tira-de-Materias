function promedio(){
    var matricula = parseInt(document.getElementById("matricula").value);
    var nombre = parseInt(document.getElementById("nombre").value);
    var materia1 = parseInt(document.getElementById("materia1").value);
    var calif1 = parseInt(document.getElementById("calif1").value);
    var cali1 = parseInt(document.getElementById("calif1").value);
    var materia2 = parseInt(document.getElementById("materia2").value);
    var calif2 = parseInt(document.getElementById("calif2").value);
    var cali2 = parseInt(document.getElementById("calif1").value);
    var materia3 = parseInt(document.getElementById("materia3").value);
    var calif3 = parseInt(document.getElementById("calif3").value);
    var cali3 = parseInt(document.getElementById("calif1").value);
    
    var resul = (calif1 + calif2 + calif3)/3;

    document.getElementById("matri1").innerHTML=document.getElementById("matricula").value;
    document.getElementById("matri2").innerHTML=document.getElementById("matricula").value;
    document.getElementById("matri3").innerHTML=document.getElementById("matricula").value;

    document.getElementById("nom1").innerHTML=document.getElementById("nombre").value;
    document.getElementById("nom2").innerHTML=document.getElementById("nombre").value;
    document.getElementById("nom3").innerHTML=document.getElementById("nombre").value;

    document.getElementById("mate1").innerHTML=document.getElementById("materia1").value;
    document.getElementById("mate2").innerHTML=document.getElementById("materia2").value;
    document.getElementById("mate3").innerHTML=document.getElementById("materia3").value;

    document.getElementById("cali1").innerHTML=document.getElementById("calif1").value;
    document.getElementById("cali2").innerHTML=document.getElementById("calif2").value;
    document.getElementById("cali3").innerHTML=document.getElementById("calif3").value;

    document.getElementById("Promedio").innerHTML=resul;
}