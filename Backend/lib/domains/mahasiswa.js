'use strict';

let Mahasiswa = function(mahasiswa_nim,mahasiswa_nama,mahasiswa_prodi_jurusan,mahasiswa_angkatan,mahasiswa_email){
  this.mahasiswa_nim = mahasiswa_nim;
  this.mahasiswa_nama = mahasiswa_nama;
  this.mahasiswa_prodi_jurusan = mahasiswa_prodi_jurusan;
  this.mahasiswa_angkatan = mahasiswa_angkatan;
  this.mahasiswa_email = mahasiswa_email;
}

module.exports = Mahasiswa;
