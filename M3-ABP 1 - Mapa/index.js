var regiones = [
    {region: "Región de Arica y Parinacota" ,atractivo: "Morro de Arica y Playa Chinchorro", id: 1, img: "img/playachinchorroYmorro.jpg"},
    {region: "Región de Tarapacá" ,atractivo: "Geoglifos de Pintados y Ruta Huasquina" , id: 2, img: "img/rutahuasquina.png"},
    {region: "Región de Antofagasta" ,atractivo: "Mano del Desierto" , id: 3, img: "img/manodeldesierto.png"},
    {region: "Región de Atacama" ,atractivo: "Santuario Granito Orbicular y Nevado Ojos del Salado" , id: 4, img: "img/granito.jfif"},
    {region: "Región de Coquimbo" ,atractivo: "Jardín Japonés La Serena y Cruz del Tercer Milenio" , id: 5, img: "img/parquejaponesycruz.jpg"},
    {region: "Región de Valparaíso" ,atractivo: "Murales de Valparaíso y Galería de Arte Bahía Utópica" , id: 6, img: "img/valparaisogaleria.png"},
    {region: "Región Metropolitana de Santiago" ,atractivo: "Sky Costanera" , id: 7, img: "img/skycostanera.png"},
    {region: "Región del Libertador General Bernardo O'Higgins",atractivo: "Museo de Colchagua y Embalse Rapel", id: 8, img: "img/museoyembalse.png"},
    {region: "Región del Maule" ,atractivo: "Parque Nacional Radal Siete Tazas y Altos de Lircay Reserva Nacional", id: 9, img: "img/7tasas.png"},
    {region: "Región de Ñuble" ,atractivo: "Nevados de Chillán y Saltillo del Itata" , id: 10, img: "img/nevadoysalto.png"},
    {region: "Región del Biobío" ,atractivo: "Parque Nacional Laguna del Laja" , id: 11, img: "img/Laguna-del-Laja.jpg"},
    {region: "Región de La Araucanía" ,atractivo: "Parque Nacional Huerquehue y Santuario El Cañi" , id: 12, img: "img/santuaroelcani.png"},
    {region: "Región de Los Ríos" ,atractivo: "Humedal Abras de Mantequilla" ,id: 13, img: "img/humedal.png"},
    {region: "Región de Los Lagos" ,atractivo: "Saltos del Rio Petrohué y Parque Nacional Alerce Andino",id: 14, img: "img/loslagos.png"},
    {region: "Región de Aysén del General Carlos Ibáñez del Campo" ,atractivo: "Catedral de Marmol y Parque Nacional Queulat" , id: 15, img: "img/catedralyparque.png"},
    {region: "Región de Magallanes y de la Antártica Chilena" ,atractivo: "Parque Nacional Torres del Paine y Glaciar Grey", id: 16, img: "img/torrespaineglaciar.png"},
]

function mostrar(id) {
    const titulo = document.querySelector(".card-title");
    const atractivo = document.querySelector(".card-text");
    const imagen = document.querySelector(".card-img-top");
    console.log(id)

    const region = regiones.filter(region => id === region.id)  
    console.log(region)

    titulo.textContent = region[0].region
    atractivo.textContent =  region[0].atractivo
    imagen.setAttribute('src', region[0].img)
}
