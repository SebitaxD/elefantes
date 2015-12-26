var eleIcon = L.icon({
    iconUrl: 'images/elefante_icon.png',
    shadowUrl: 'images/marker-shadow.png',
    iconSize:     [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function addPoint(x, y, mapa, id, icono) {
    return L.marker([y, x], {icon: icono}).addTo(mapa).on("click", function() { showInfo(id); });
} 

function showInfo(sidebar, id, tabs) {
    tabs = tabs || false;
    $("#sidebar").html($("#"+id).html());
    sidebar.show();
    if(tabs) {
      $('#tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
    }
}