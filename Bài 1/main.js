var giai = function() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = document.getElementById("c").value
    var d = ( b * b ) - ( 4 * a * c )
    var f = Math.sqrt ( d )
    if(d < 0) {
        var ketqua = "vo nghiệm"
        document.getElementById("ketqua").innerHTML = ketqua
    }

    if ( d = 0 ) {
        var ketqua = "x=" (-b) / ( 2 * a)
        document.getElementById("ketqua").innerHTML = ketqua
    }
    else {
        var ketqua1 = "x1=" + (-b + f) / ( 2 * a)
        var ketqua2 = "x2=" + (-b - f) / ( 2 * a)
        document.getElementById("ketqua1").innerHTML = ketqua1
        document.getElementById("ketqua2").innerHTML = ketqua2
    }
}