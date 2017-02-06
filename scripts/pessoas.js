function compare(a, b) { // Serve pra ordenar objeto pelo nome
    if (a.nome < b.nome)
        return -1;
    if (a.nome > b.nome)
        return 1;
    return 0;
}

angular.module('Aplicacao', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider.when('/', {

            templateUrl: 'ver.html'

        }).when('/pessoa/adicionar', {

            templateUrl: 'adicionar.html',
            controller: 'CtrlAdicionar'

        }).when('/pessoa/deletar', {

            templateUrl: 'remover.html',
            controller: 'CtrlRemover'

        }).when('/pessoa/:index', {

            templateUrl: 'editar.html',
            controller: 'CtrlEditar'
        });
    })

    .controller('CtrlListar', function ($scope) {

        $scope.pessoas = [

            {id: 1, nome: "Paulo", cidade: "São Paulo"},
            {id: 2, nome: "Ana Maria", cidade: "Uberlândia"},
            {id: 3, nome: "Gustavo", cidade: "Caldas Novas"}
        ];

        //$scope.pessoas.sort(compare); // pra manter ordenada a lista de indivíduos
    })

    .controller('CtrlAdicionar', function ($scope) {

        $scope.result = "";

        $scope.adicionar = function () {

            naoPode.innerHTML = "";

            if ($scope.vNome && $scope.vCidade) {

                var j = $scope.pessoas.length + 1;

                $scope.pessoas.push({
                    id: j,
                    nome: $scope.vNome,
                    cidade: $scope.vCidade,
                });

                $scope.result = "indivíduo inserido com sucesso!";

            } else {

                naoPode.append("Não pode deixar em branco os campos!");
            }

            $scope.vNome = "";
            $scope.vCidade = "";

            // $scope.pessoas.sort(compare);
        }
    })

    .controller('CtrlRemover', function ($scope) {

        $scope.result = "";

        $scope.deletar = function () {

            var nome = $('#nome').val();
            var codigoPessoa = $('#id').val();
            var index = 0;
            var flag = false;
            var j=0;

            for (var i = 0; i < $scope.pessoas.length; i++) {

                if ($scope.pessoas[i].nome == nome && $scope.pessoas[i].id == codigoPessoa) {

                    index = i;
                    flag = true;
                    break;
                }
            }

            if (!flag && $('#individuoInexistente').empty()) {

                $('#individuoInexistente').append("Pessoa não encontrada");
            }

            if (flag) {

                $scope.pessoas.splice(index, 1);
                $('#nome').val("");
                $('#id').val("");
                $scope.result = "Pessoa deletada com sucesso!";

                var x = 1; /// só pra brincar mesmo com um ID simulado pra identifica o indivíduo
                while(j < $scope.pessoas.length) {

                    $scope.pessoas[j].id = x;
                    j++;
                    x++;
                }

                if (!$('#individuoInexistente').empty()) {
                    $('#individuoInexistente').val('');
                }
            }else{

                $scope.result = "";
            }
        };
    })

    .controller('CtrlEditar', function ($scope, $routeParams) {

        $scope.pessoa = $scope.pessoas[$routeParams.index];
    })

    .controller('CtrlFormEditar', function ($scope) {

            $scope.check = function () {

                var x = $scope.pessoa.nome;
                var y = $scope.pessoa.cidade;

                if (x.length == 0) {
                    $scope.pessoa.nome = "sem nome";
                }
                if (y.length == 0) {
                    $scope.pessoa.cidade = "sem cidade";
                }
            }
        }
    )
;
