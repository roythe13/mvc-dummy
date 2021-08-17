$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#tambahData").html("Tambah Data Siswa");
    $(".modal-footer button[type=submit]").html("Tambah Data");

    $("#nama").val("");
    $("#kelas").val("");
    $("#jurusan").val("");

    $(".modal-body form").attr(
      "action",
      "http://localhost/php/mvc/public/siswa/tambah"
    );
  });

  $(".editModal").on("click", function () {
    $("#tambahData").html("Ubah Data Siswa");
    $(".modal-footer button[type=submit]").html("Ubah Data");
    $(".modal-body form").attr(
      "action",
      "http://localhost/php/mvc/public/siswa/edit"
    );

    const id = $(this).data("id");
    $.ajax({
      url: "http://localhost/php/mvc/public/siswa/getUbah",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#kelas").val(data.kelas);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});
