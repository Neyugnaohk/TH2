function tinhBMI() {
    var weight = parseFloat(document.getElementById("a").value);
    var height = parseFloat(document.getElementById("b").value);
    if (height <= 0 || weight <= 0) {
      alert('Cân nặng và chiều cao phải lớn hơn 0');
      return;
    }
    var bmi = weight / (height * height);
    var ketqua = "";
  
    if (bmi < 18.5) {
      ketqua = "Dưới chuẩn";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      ketqua = "Chuẩn";
    } else if (bmi >= 25 && bmi < 29.9) {
      ketqua = "Tiền béo phì";
    } else if (bmi >= 30 && bmi < 34.9) {
      ketqua = "Béo phì cấp độ 1 " + "\n" + " Khám định kì";
    } else if (bmi >= 35 && bmi < 39.9) {
      ketqua = "Béo phì cấp độ 2 " + "\n" + " Tập thể dục thường xuyên";
    } else {
      ketqua = "Béo phì cấp độ 3 " + "\n" + " Hạn chế ăn mỡ động vật";
    }
    document.getElementById("ketqua").innerHTML = ketqua;
    document.getElementById("bmi").innerHTML = bmi;
  }
  
