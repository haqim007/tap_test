<?php
class Tap {
    public function index() {
        include 'index.html';
    }

    public function ganjil_genap() {
        include 'ganjil_genap.php';
    }

    public function map_jakarta_barat(){
        $data = $this->map_jakarta_barat_json();
        $title = $data['title'];
        $highchartMap = json_encode($data["features"]);
        // $highchartData = 
        include 'map_jakarta_barat.php';
    }

    private function map_jakarta_barat_json(){
        $jsonData = file_get_contents('map_jakarta_barat.json');
        
        $data = json_decode($jsonData, true);

        if ($data === null) {
            echo "Failed to decode JSON data.";
            
        } 
        return $data; 
    }

    public function jumlah_penduduk(){
        $title ="Jumlah Penduduk Provinsi DKI Jakarta Menurut Kelompok Umur dan Jenis Kelamin";
        $data = json_encode($this->data_jumlah_penduduk());
        include "jumlah_penduduk.php";
    }

    private function data_jumlah_penduduk(){
        $data["categories"] = [
            "0-4",
            "5-9",
            "10-14",
            "15-19",
            "20-24",
            "25-29",
            "30-34",
            "35-39",
            "40-44",
            "45-49",
            "50-54",
            "55-59",
            "60-64",
            "65+"
        ];

        $data['series'] = [
                [
                    "data" => [
                        1203652, 1349297, 1271039, 1212417, 1213317, 1299524, 1395553, 1431957, 1328791, 1173760, 993699, 780994, 566054, 762796        
                    ],
                    "name" => "Laki-laki"
                ],
                [
                    "name" => "Perempuan",
                    "data" => [
                        1145258, 1286198, 1202144, 1168353, 1215323, 1324451, 1372078, 1399630, 1303360, 1143865, 967498, 791553, 593072, 869041    
                    ],
                ],
            ];

        return $data;
    }
}

// Instantiate the class
$tap = new Tap();

// Check if a function is requested
if (isset($_GET['f'])) {
    $functionName = $_GET['f'];
    if (method_exists($tap, $functionName)) {
        // Call the function and echo the result
        $tap->$functionName();
    } else {
        echo "Function not found.";
    }
}else{
    $tap->index();
}
