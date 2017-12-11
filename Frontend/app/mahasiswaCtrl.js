app.controller('mahasiswaCtrl', function ($scope, $modal, $filter, Data, $http) {
    $scope.mahasiswa = {};
    Data.get('mahasiswa').then(function(data){
        $scope.mahasiswas = data.data;
        console.log(data);
    });


    $scope.deleteMahasiswa = function(mahasiswa){
        if(confirm("Are you sure to remove the mahasiswa with nim "+mahasiswa.mahasiswa_nim)){
            Data.delete("mahasiswa/"+mahasiswa.mahasiswa_nim).then(function(result){
                $scope.mahasiswas = _.without($scope.mahasiswas, _.findWhere($scope.mahasiswas, {mahasiswa_nim:mahasiswa.mahasiswa_nim})); //$scope.products = _.without($scope.products, _.findWhere($scope.products, {id:product.id}));
            });
        }
    };
    $scope.open = function (p,size) {
        console.log(p);
        var modalInstance = $modal.open({
          templateUrl: 'partials/mahasiswaEdit.html',
          controller: 'mahasiswaEditCtrl',
          size: size,
          resolve: {
            item: function () {
              return p;
            }
          }
        });
        modalInstance.result.then(function(selectedObject) {
            if(selectedObject.save == "insert"){
                $scope.mahasiswas.push(selectedObject);
                $scope.mahasiswa = $filter('orderBy')($scope.mahasiswa, 'mahasiswa_nim', 'reverse');
            }else if(selectedObject.save == "update"){
                p.mahasiswa_nim = selectedObject.mahasiswa_nim;
                p.mahasiswa_nama = selectedObject.mahasiswa_nama;
                p.mahasiswa_prodi_jurusan = selectedObject.mahasiswa_prodi_jurusan;
                p.mahasiswa_angkatan = selectedObject.mahasiswa_angkatan;
                p.mahasiswa_email = selectedObject.mahasiswa_email;
            }
        });
    };

 $scope.columns = [
                    {text:"NIM",predicate:"mahasiswa_nim",sortable:true},
                    {text:"Nama",predicate:"mahasiswa_nama",sortable:true},
                    {text:"Prodi/Jurusan",predicate:"mahasiswa_prodi_jurusan",sortable:true},
                    {text:"Angkatan",predicate:"mahasiswa_angkatan",sortable:true},
                    {text:"Email",predicate:"mahasiswa_email",sortable:true},
                    {text:"Action",predicate:"",sortable:false}
                ];

});


app.controller('mahasiswaEditCtrl', function ($scope,$window, $modalInstance, item, Data) {

  $scope.mahasiswa = angular.copy(item);
        //console.log(item);
        $scope.cancel = function () {
            $modalInstance.dismiss('Close');
        };
        /*
        if(item != undefined){
            $scope.title = (item.mahasiswa_nim > 0) ? 'Edit Data Mahasiswa' : 'Add Product';
            $scope.buttonText = (item.mahasiswa_nim > 0) ? 'Update Data Mahasiswa' : 'Add New Product';
            $scope.mahasiswaCtrl = {showEdit: true,showAdd: false};
        }else{
            $scope.title = 'Add Data Mahasiswa';
            $scope.buttonText = 'Add New Data Mahasiswa';
            $scope.mahasiswaCtrl = {showEdit: false,showAdd: true};
            console.log($scope.mahasiswaCtrl);
        }*/
        if(item.mahasiswa_nim != undefined){
            $scope.title = 'Edit Data Mahasiswa';
            $scope.buttonText = 'Update Data Mahasiswa';
            $scope.mahasiswaCtrl = {showEdit: true,showAdd: false};
        }else{
            $scope.title = 'Add Data Mahasiswa';
            $scope.buttonText = 'Add New Data Mahasiswa';
            $scope.mahasiswaCtrl = {showEdit: false,showAdd: true};
        }
        //$scope.title = (item.mahasiswa_nim > 0) ? 'Edit Product' : 'Add Product';
        //$scope.buttonText = (item.mahasiswa_nim > 0) ? 'Update Product' : 'Add New Product';
       
        var original = item;
        $scope.isClean = function() {
            return angular.equals(original, $scope.mahasiswa);
        }
        $scope.saveMahasiswa = function (mahasiswa,edit) {
            //product.uid = $scope.uid;
           // console.log(mahasiswa.mahasiswa_nama);
            if(edit){
                Data.put('mahasiswa/'+mahasiswa.mahasiswa_nim, mahasiswa).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(mahasiswa);
                        x.save = 'update';
                        $modalInstance.close(x);
                    }else{
                        $modalInstance.dismiss('Close');
                        $window.alert("Terjadi Kesalahan pada inputan");
                        console.log(result);
                    }
                });
            }else{
                Data.post('mahasiswa', mahasiswa).then(function (result) {
                    if(result.status != 'error'){
                        var x = angular.copy(mahasiswa);
                        x.save = 'insert';
                        x.id = result.data;
                        $modalInstance.close(x);
                    }else{
                        $modalInstance.dismiss('Close');
                        $window.alert("Terjadi Kesalahan pada inputan");
                        console.log(result);
                    }
                });
            }
        };
});
