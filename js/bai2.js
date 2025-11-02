$(document).ready(function() {
    $("#lnkMoTourMoi").on("click", function() {
        $("#myModal").modal("show"); // Open modal
        // Close modal  $("#myModal").modal("hide");
    });

    // Kiểm tra mã tour
    let txtMaTour = $("#txtMaTour");
    let tbMaTour = $("#tbMaTour");

    function kiemTraMaTour() {
        var re = /^[A-Z]{3}\-[A-Z]{3}\-\d{2}\-\d{4}$/;
        if (txtMaTour.val().trim() == "") {
            tbMaTour.html("* Vui lòng nhập Mã Tour");
            txtMaTour.focus();
            return false;
        }

        if (!re.test(txtMaTour.val())) {
            tbMaTour.html("* Mã tour theo mẫu: XXX-XXX-mm-yyyy");
            txtMaTour.focus();
            return false;
        }

        tbMaTour.html("*");

        return true;
    }

    //  txtMaTour.blur(kiemTraMaTour);

    // Kiểm tra điểm đến
    let txtDiemDen = $("#txtDiemDen");
    let tbDiemDen = $("#tbDiemDen");

    function kiemTraDD() {
        if (txtDiemDen.val().trim() == "") {
            txtDiemDen.focus();
            tbDiemDen.html("* Vui lòng nhập Điểm đến");
            return false;
        }
        tbDiemDen.html("*");
        return true;
    }
    // txtDiemDen.blur(kiemTraDD);


    // Kiểm tra ngày khởi hành phải sau ngày hiện tại
    let txtNgayKH = $("#txtNgayKH");
    let tbNgayKH = $("#tbNgayKH");

    function kiemTraNgayKH() {
        if (txtNgayKH.val().trim() == "") {
            txtNgayKH.focus();
            tbNgayKH.html("* Vui lòng nhập Ngày KH");
            return false;
        }
        const day = new Date(txtNgayKH.val());
        let today = new Date();
        today.setDate(today.getDate() + 30);

        if (day < today) {
            txtNgayKH.focus();
            tbNgayKH.html("* Ngày khởi hành phải sau ngày hiện tại 30 ngày");
            return false;
        }

        tbNgayKH.html("*");

        return true;
    }
    // txtNgayKH.blur(kiemTraNgayKH);
    // txtNgayKH.change(kiemTraNgayKH);

    // Kiem tra thoi gian
    let txtThoiGian = $("#txtThoiGian");
    let tbThoiGian = $("#tbThoiGian");

    function kiemTraThoiGian() {
        if (txtThoiGian.val().trim() == "") {
            txtThoiGian.focus();
            tbThoiGian.html("* Vui lòng nhập Thời gian");
            return false;
        }

        tbThoiGian.html("*");

        return true;
    }
    // txtThoiGian.blur(kiemTraThoiGian);

    // Kiem tra gia tour
    let txtGiaTour = $("#txtGiaTour");
    let tbGiaTour = $("#tbGiaTour");

    function kiemTraGiaTour() {
        const giaTour = txtGiaTour.val().trim();
        if (giaTour == "") {
            txtGiaTour.focus();
            tbGiaTour.html("* Vui lòng nhập Giá tour");
            return false;
        } else if (isNaN(giaTour)) {
            txtGiaTour.focus();
            tbGiaTour.html("* Giá tour là số");
            return false;
        } else if (parseFloat(giaTour) <= 0) {
            txtGiaTour.focus();
            tbGiaTour.html("* Giá tourphải nhập số > 0");
            return false;
        }

        tbGiaTour.html("*");
        return true;
    }

    // txtGiaTour.blur(kiemTraGiaTour);

    // Kiem tra Anh DD
    let txtAnhDD = $("#txtAnhDD");
    let tbAnhDD = $("#tbAnhDD");

    function kiemTraAnh() {
        if (txtAnhDD.val().trim() == "") {
            txtAnhDD.focus();
            tbAnhDD.html("* Vui lòng chọn Ảnh ĐD");
            return false;
        }

        tbAnhDD.html("*");

        return true;
    }
    // txtAnhDD.blur(kiemTraAnh);

    // Reset form
    function resetForm() {
        txtMaTour.val('');
        txtDiemDen.val('');
        txtGiaTour.val('');
        txtNgayKH.val('');
        txtThoiGian.val('');
        txtAnhDD.val('');
    }

    function validate() {
        if (kiemTraMaTour() == false) {
            return false;
        }

        if (kiemTraDD() == false) {
            return false;
        }

        if (kiemTraNgayKH() == false) {
            return false;
        }

        if (kiemTraGiaTour() == false) {
            return false;
        }

        if (kiemTraThoiGian() == false) {
            return false;
        }

        if (kiemTraAnh() == false) {
            return false;
        }

        return true;
    }

    let i = 1;
    $("#btnLuu").click(function() {

        if (validate() == false) {
            return false;
        }

        const row = "<tr>" +
            "<td>" + (i++) + "</td>" +
            "<td>" + txtMaTour.val() + "</td>" +
            "<td>" + txtDiemDen.val() + "</td>" +
            "<td>" + txtNgayKH.val() + "</td>" +
            "<td>" + txtThoiGian.val() + "</td>" +
            "<td>" + txtGiaTour.val() + "</td>" +
            "<td>" + txtAnhDD.val() + "</td>" +
            "</tr>";

        $("table tbody").append(row);
        resetForm();
        $("#myModal").modal("hide");

        return true;
    });
});