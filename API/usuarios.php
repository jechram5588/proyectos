<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conecta a la base de datos  con usuario, contraseña y login de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $loginBaseDatos = "proyectos";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $loginBaseDatos);

// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlUsuarios = mysqli_query($conexionBD,"SELECT * FROM usuarios WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlUsuarios) > 0){
        $empleaados = mysqli_fetch_all($sqlUsuarios,MYSQLI_ASSOC);
        echo json_encode($empleaados);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlUsuarios = mysqli_query($conexionBD,"DELETE FROM usuarios WHERE id=".$_GET["borrar"]);
    if($sqlUsuarios){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de login y password
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $login=$data->login;
    $password=$data->password;
    $nombre=$data->nombre;
    $apellido=$data->apellido;
        if(($password!="")&&($login!="")){
            
    $sqlUsuarios = mysqli_query($conexionBD,
    "INSERT INTO usuarios(nombre,apellido,login,password) VALUES('$nombre','$apellido','$login','$password') ");
    echo json_encode(["success"=>1]);
        }
    exit();
}
// Actualiza datos pero recepciona datos de login, password y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    
    $data = json_decode(file_get_contents("php://input"));

    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $login=$data->login;
    $password=$data->password;
    
    $sqlUsuarios = mysqli_query($conexionBD,"UPDATE usuarios SET login='$login',password='$password' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla usuarios
$sqlUsuarios = mysqli_query($conexionBD,"SELECT * FROM usuarios");
if(mysqli_num_rows($sqlUsuarios) > 0){
    $empleaados = mysqli_fetch_all($sqlUsuarios,MYSQLI_ASSOC);
    echo json_encode($empleaados);
}
else{ echo json_encode([["success"=>0]]); }


?>