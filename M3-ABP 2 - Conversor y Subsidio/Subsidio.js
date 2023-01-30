postulante = {
    edad: 60,
    cedula: true,
    ufahorrado: 4,
    rsocialh: 70,
    nConvivientes: false,
    ingresoUF: 10,
    minvu: true
};

function aprobarSubsidio(datos) {
    if (datos.edad >= 18
        && datos.cedula == true
        && datos.ufahorrado >= 4 
        && datos.rsocialh <= 70
        && datos.nConvivientes == true || datos.edad >= 60
        && datos.ingresoUF >= 7 && datos.ingresoUF <= 25
        && datos.minvu == false)
        {console.log('SISEPUDOOO');
    } else {
        console.log('Fracasaste Pelotudooo');
    }
} 

aprobarSubsidio(postulante);