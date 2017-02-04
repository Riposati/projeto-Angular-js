<!DOCTYPE html>

<html ng-app="Aplicacao">

<head>
    <meta charset="UTF-8">
    <title>Projeto</title>
</head>

<body>

<div ng-controller="CtrlListar">

    <!-- Injetou a dependencia, no caso a view foi injetada -->
    <div ng-view="ver.html"></div>

</div>

</body>


<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.1/angular-route.min.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="scripts/pessoas.js"></script>

</html>
