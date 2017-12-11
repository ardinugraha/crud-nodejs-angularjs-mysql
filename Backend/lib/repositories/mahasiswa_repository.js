'use strict';

let Mahasiswa = require('../domains/mahasiswa');

let MahasiswaRepository = function(db){
  this.db = db;
};

MahasiswaRepository.prototype = {
  save: function(e, cb, errCb){
    let db = this.db;
    let data = {mahasiswa_nim: e.mahasiswa_nim, mahasiswa_nama: e.mahasiswa_nama, mahasiswa_prodi_jurusan: e.mahasiswa_prodi_jurusan, mahasiswa_angkatan: e.mahasiswa_angkatan, mahasiswa_email: e.mahasiswa_email};
    let query = 'INSERT INTO m_mahasiswa SET ?';
    db.query(query, data, (err, result) => {
      if(err){
        errCb(err);
      }
      cb(result);
    });
  },

  findOne: function(id, cb, errCb){
    let db = this.db;
    let query = 'SELECT * FROM m_mahasiswa WHERE mahasiswa_nim = ? and mahasiswa_status = 1';
    db.query(query, [id], (err, results, fields) => {
      if(err){
        errCb(err);
      }
      let result = results[0];
      if(!result){
        cb(`data with nim = ${id} not found..`)
      } else {
        let mahasiswa = new Mahasiswa(result.MAHASISWA_NIM, result.MAHASISWA_NAMA, result.MAHASISWA_PRODI_JURUSAN, result.MAHASISWA_ANGKATAN, result.MAHASISWA_EMAIL);
        cb(mahasiswa);
      }
    });
  },

  findAll: function(cb, errCb){
    let db = this.db;
    let query = 'SELECT * FROM m_mahasiswa WHERE mahasiswa_status = 1';
    db.query(query, (err, results, fields) => {
      if(err){
        errCb(err);
      }
      let mahasiswas = [];
      for(let i=0;i<results.length;i++){
        let e = results[i];
        let mahasiswa = new Mahasiswa(e.MAHASISWA_NIM, e.MAHASISWA_NAMA, e.MAHASISWA_PRODI_JURUSAN, e.MAHASISWA_ANGKATAN, e.MAHASISWA_EMAIL);
        mahasiswas.push(mahasiswa);
      }
      cb(mahasiswas);
    });
  },

  update: function(e, cb, errCb){
    let db = this.db;
    let data = [e.mahasiswa_nama, e.mahasiswa_prodi_jurusan, e.mahasiswa_angkatan, e.mahasiswa_email, e.mahasiswa_nim];
    let query = 'UPDATE m_mahasiswa SET mahasiswa_nama = ?, mahasiswa_prodi_jurusan = ?, mahasiswa_angkatan = ?, mahasiswa_email = ? WHERE mahasiswa_nim = ? and mahasiswa_status = 1';
    db.query(query, data, (err, result) => {
      if(err){
        errCb(err);
      }
      cb(result);
    });
  },

  delete: function(id, cb, errCb){
    let db = this.db;
    let query = 'UPDATE m_mahasiswa SET mahasiswa_status = 0 WHERE mahasiswa_nim = ? ';
    db.query(query, [id], (err, result) => {
      if(err){
        errCb(err);
      }
      cb(result);
    });
  }
};

module.exports = MahasiswaRepository;
