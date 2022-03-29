function registrar() {
    let txt_nombre = $("#nombre").val();
    let txt_descripcion = $("#descripcion").val();
    let txt_valor = $("#valor").val();
    console.log(txt_nombre);
    console.log(txt_descripcion);
    console.log(txt_valor);
    $.ajax({
        url:'http://localhost:3001/producto',   // url
        dataType: 'text/json',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: {
            nombre: txt_nombre,
            descripcion: txt_descripcion,
            valor: txt_valor
        }, // data to be submit
        success: function( data, textStatus, jQxhr ){
            alert("Guardado!!!");
            cargar();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function cargar() {
    $.ajax({
        url:'http://localhost:3001/producto',   // url
        type: 'get',
        success: function( data, textStatus, jQxhr ){
            let html = "";
            data.products.forEach(element => {
                console.log(element);
                html += '<li class="list-group-item d-flex justify-content-between lh-sm">' +
                            '<div>' +
                                '<h6 class="my-0">' + element.nombre +'</h6>' +
                                '<small class="text-muted">' + element.descripcion + '</small>'+
                            '</div>' +
                            '<span class="text-muted">$' + element.valor + '</span>' +
                        '</li>';
            $("#lista_productos").html(html);
            });
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

$(document).ready(function(){
    cargar();
});