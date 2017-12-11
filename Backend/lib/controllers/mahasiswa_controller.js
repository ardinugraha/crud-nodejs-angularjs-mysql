'use strict';

let db = require('../config/mysql_config');
let MahasiswaRepository = require('../repositories/mahasiswa_repository');
let Mahasiswa = require('../domains/mahasiswa');


let saveMahasiswa = (req, res, next) => {
  if(!req.body){
    next('semua field harus diisi...')
  }
  let data = req.body;
  let mahasiswa = new Mahasiswa(data.mahasiswa_nim,data.mahasiswa_nama,data.mahasiswa_prodi_jurusan,data.mahasiswa_angkatan,data.mahasiswa_email);
  let mahasiswaRepo = new MahasiswaRepository(db);
  var isok = true;
  mahasiswaRepo.save(mahasiswa, result => {
   var ok = 'success';
   if(result == null){
       ok = 'error'
   }
   res.status(200).json({message: 'get all mahasiswa', status: ok});
  }, err => {
    
  });
  console.log(isok);
};

let getMahasiswa = (req, res, next) => {
  if(!req.params){
    next('parameter tidak ada');
  }
  let id = req.params.id;
  let mahasiswaRepo = new MahasiswaRepository(db);
  mahasiswaRepo.findOne(id, result => {
    res.status(200).json({message: 'get mahasiswa', data: result});
    next();
  }, err => {
    if(err){
      next(err);
    }
  });
};

let getAllMahasiswa = (req, res, next) => {
  let mahasiswaRepo = new MahasiswaRepository(db);
  mahasiswaRepo.findAll(result => {
    res.status(200).json({message: 'get all mahasiswa', data: result});
    next();
  }, err => {
    if(err){
      next(err);
    }
  });
};

let updateMahasiswa = (req, res, next) => {
  if(!req.body){
    next('semua field harus diisi...')
  }
  if(!req.params){
    next('parameter tidak ada..');
  }
  let data = req.body;
  let id = req.params.id;
  let mahasiswa = new Mahasiswa(id,data.mahasiswa_nama,data.mahasiswa_prodi_jurusan,data.mahasiswa_angkatan,data.mahasiswa_email);
  let mahasiswaRepo = new MahasiswaRepository(db);
  mahasiswaRepo.update(mahasiswa, result => {
    res.send('Update data sukses');
    next();
  }, err => {
    if(err){
      next(err);
    }
  });
};

let deleteMahasiswa = (req, res, next) => {
  if(!req.params){
    next('paramater tidak ada..');
  }
  let id = req.params.id;
  let mahasiswaRepo = new MahasiswaRepository(db);
  mahasiswaRepo.delete(id, result => {
    res.send('Data berhasil di hapus');
    next();
  }, err => {
    if(err){
      next(err);
    }
  });
};


module.exports = {
   saveMahasiswa: saveMahasiswa,
   getMahasiswa: getMahasiswa,
   getAllMahasiswa: getAllMahasiswa,
   updateMahasiswa: updateMahasiswa,
   deleteMahasiswa: deleteMahasiswa
};


