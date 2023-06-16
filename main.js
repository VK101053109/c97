function save() {
    i1 = document.getElementById("fn").value;
    i2 = document.getElementById("ln").value
    ia = document.getElementById("a").value
    ip1 = document.getElementById("pgn1").value
    ip2 = document.getElementById("pgn2").value
    ip3 = document.getElementById("n3").value


    localStorage.setItem("first_name_key", i1);
    localStorage.setItem("last_name_key", i2);
    localStorage.setItem("ip1_name_key", ip1);
    localStorage.setItem("ip2_name_key", ip2);
    localStorage.setItem("ip3_name_key", ip3);


}

i1i = localStorage.getItem("first_name_key");
i2i = localStorage.getItem("last_name_key");
iai = localStorage.getItem("a_name_key");
ip1i = localStorage.getItem("ip1_name_key");
ip2i = localStorage.getItem("ip2_name_key");
ip3i = localStorage.getItem("ip3_name_key");


document.getElementById("fn").value = i1i;
document.getElementById("ln").value = i1i;
document.getElementById("a").value=iai;
document.getElementById("pgn1").value=ip1i;
document.getElementById("pgn2").value=ip2i;
document.getElementById("n3").value=ip3i;



