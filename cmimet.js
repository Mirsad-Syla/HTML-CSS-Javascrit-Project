function cmimet( id ) {
    var vlera1 = [ 15, 45, 55 ];
    var vlera2 = [ 5, 12, 30 ];
    var valuta = " euro";

    var i = 1;
    while( i <= 3 ) {
        document.getElementById("num"+i).innerHTML = null;
        i++;
    }
    document.getElementById("num"+id).innerHTML = vlera1[id-1] + vlera2[id-1] + valuta;
}