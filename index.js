var dados = []

function PopulaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            $("#tblDados tbody").append(`<tr>
            <td>${item.ID}</td>
            <td>${item.Nome}</td>
            <td>${item.Sobrenome}</td>
            <td>${item.DtNascimento}</td>
            <td>${item.Formacao}</td>
            </tr>`)

        })
    }
}


$(function () {
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if (dados) {
        PopulaTabela()
    }

    $("btnSalvar").click(function () {

        let nome = $("txtNome").val()
        let sobrenome = $("txtSobrenome").val()
        let dtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", {timeZone: "UTC" })
        let formacao = $("txtFormacao").val()

        let registro = {}

        registro.Nome = Nome
        registro.Sobrenome = Sobrenome
        registro.DtNascimento = DtNascimento
        registro.Formacao = Formacao

        registro.ID = dados.length + 1

        dados.push(registro)

        alert("Reistro salvo")
        $("#modalRegistro").modal("hide")

        $("#txtNome").val("")
        $("#txtSobrenome").val("")
        $("#txtDtNascimento").val("")
        $("#txtFormacao").val("")

        PopulaTabela()
    })


})