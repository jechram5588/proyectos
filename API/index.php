<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
require 'flight/Flight.php';

Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=proyectos','root',''));

Flight::route('GET /usuarios', function () {
    $sql = Flight::db()->prepare("SELECT * FROM `usuarios`");
    $sql->execute();
    $registros=$sql->fetchAll();

    Flight::json($registros);
});

Flight::route('POST /usuarios', function () {
    $nombre=(Flight::request()->data->nombre);
    $apellido=(Flight::request()->data->apellido);
    $login=(Flight::request()->data->login);
    $password=(Flight::request()->data->password);

    $sql_query = "INSERT INTO usuarios(nombre,apellido,login,password) VALUES (?,?,?,?)";
    $sql = Flight::db()->prepare($sql_query);
    $sql->bindParam(1,$nombre);
    $sql->bindParam(2,$apellido);
    $sql->bindParam(3,$login);
    $sql->bindParam(4,$password);
    $sql->execute();

    Flight::jsonp(["Agregado"]);
});


Flight::route('DELETE /usuarios', function () {
    $id=(Flight::request()->data->id);

    $sql_query = "DELETE FROM usuarios WHERE id=?";
    $sql = Flight::db()->prepare($sql_query);
    $sql->bindParam(1,$id);
    $sql->execute();

    Flight::jsonp(["Eliminado"]);
});


Flight::route('PUT /usuarios', function () {
    $id=(Flight::request()->data->id);
    $nombre=(Flight::request()->data->nombre);
    $apellido=(Flight::request()->data->apellido);
    $login=(Flight::request()->data->login);
    $password=(Flight::request()->data->password);

    $sql_query = "UPDATE usuarios SET nombre=?, apellido=?,login=?,password=? WHERE id=?";
    $sql = Flight::db()->prepare($sql_query);
    $sql->bindParam(1,$nombre);
    $sql->bindParam(2,$apellido);
    $sql->bindParam(3,$login);
    $sql->bindParam(4,$password);
    $sql->bindParam(5,$id);
    $sql->execute();

    Flight::jsonp(["Actualizado"]);
});

Flight::route('GET /usuarios/@id', function ($id) {
    $sql = Flight::db()->prepare("SELECT * FROM `usuarios` WHERE id=?");
    $sql->bindParam(1,$id);

    $sql->execute();
    $registros=$sql->fetchAll();
    Flight::json($registros);
});

Flight::start();

