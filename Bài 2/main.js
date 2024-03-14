var thongtin = function(){
    var hovaten = document.getElementById("hovaten").value
    var mathe = document.getElementById("mathe").value
    var sodienthoai = document.getElementById("sodienthoai").value
    var Email = document.getElementById("Email").value
    var loaikh = document.getElementById("loaikh").value
    var hoadon = document.getElementById("hoadon").value
    var detail = document.getElementById("detail").value
    if ( hovaten == "" || mathe == "" || sodienthoai == ""|| Email == ""|| loaikh == ""|| hoadon == ""|| detail == ""){
        alert("Hãy điền vào")
        return
    }
    if ( isNaN(mathe) ||  isNaN(sodienthoai) ){
        alert("Mã thẻ và số điện thoại phải là sớ")
        return
    }
    confirm("Họ và tên: "+hovaten+ "\n" + "Mã thẻ " +mathe+ "\n" + "Số điện thoại: "+sodienthoai+ "\n" + "Email:  "+ Email + "\n" + "Loại khách hàng: " +loaikh+ "\n" + "Mã Hóa Đơn "+hoadon+ "\n" + "Nội dung góp ý:  "+detail+ "\n"  )
}