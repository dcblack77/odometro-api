const coords = [
    [42.435028600, -2.464979800],
    [42.435029000, -2.464978600],
    [42.435018200, -2.464860800]
];

const coords2 = [
    [42.434955, -2.4646874],
    [42.4349255, -2.4646435],
    [42.4349195, -2.4646378],
    [42.4349186, -2.4646382],
    [42.4349375, -2.4646383],
    [42.4349464, -2.4646176],
    [42.4349548, -2.4646069],
    [42.4349609, -2.4645957],
    [42.4349924, -2.4645725],
    [42.4349968, -2.4645661],
    [42.4349893, -2.4645223],
    [42.4349781, -2.4644913],
    [42.4349635, -2.4644801],
    [42.4349509, -2.4644546],
    [42.434997, -2.4643469],
    [42.4349874, -2.4643056],
    [42.4349685, -2.464273],
    [42.4349301, -2.4641986],
    [42.4348904, -2.4641222],
    [42.4348495, -2.4640512],
    [42.434809, -2.4639812],
    [42.4347672, -2.4639143],
    [42.4347271, -2.463848],
    [42.4346902, -2.4637871],
    [42.4346572, -2.4637294],
    [42.4346309, -2.4636856],
    [42.4346172, -2.4636517],
    [42.434615, -2.4636206],
    [42.4346211, -2.4635835],
    [42.4346404, -2.4635462],
    [42.4346692, -2.4635191],
    [42.4347088, -2.4634892],
    [42.4347568, -2.463458],
    [42.4348104, -2.4634221],
    [42.4348635, -2.4633866],
    [42.4349194, -2.4633486],
    [42.4349758, -2.4633097],
    [42.4349844, -2.463303],
    [42.4350331, -2.4632709],
    [42.4351034, -2.4632255],
    [42.4351785, -2.4631814],
    [42.4352535, -2.4631371],
    [42.4353487, -2.4630887],
    [42.4354436, -2.4630436],
    [42.4355381, -2.4629949],
    [42.4356214, -2.4629425],
    [42.4357071, -2.4628903],
    [42.4357848, -2.4628424],
    [42.4358602, -2.4628011],
    [42.4359324, -2.4627652],
    [42.4360047, -2.462733],
    [42.436078, -2.4627014],
    [42.4361488, -2.4626737],
    [42.4362138, -2.4626358],
    [42.4362768, -2.4625864],
    [42.43633, -2.4625017],
    [42.436379, -2.4624243],
    [42.4364084, -2.4623331],
    [42.4364153, -2.4622099],
    [42.4363997, -2.4620928],
    [42.4363655, -2.4619835],
    [42.4363219, -2.4618643],
    [42.4362785, -2.4617358],
    [42.5000577, -2.7302905],
    [42.53941, -2.8124833],
    [42.5393495, -2.8128547],
    [42.5610444, -2.836893],
    [42.5608913, -2.8365979],
    [42.560893, -2.8365921],
    [42.5609029, -2.8366027],
    [42.5609129, -2.8366159],
    [42.5609145, -2.8366192],
    [42.5608997, -2.8366443],
    [42.560886, -2.8366555],
    [42.5608735, -2.8366595],
    [42.5608676, -2.8366658],
    [42.5608632, -2.8366643],
    [42.5608592, -2.8366642],
]

const earthRatio = 6371;

async function HaversineForm(long, lat) {
    const restaLongitud = radians(long[1] - long[0]);
    console.log("restaLong in HaversineForm: ", restaLongitud);
    const coseno = await getToCoseno(lat);
    console.log("Cose Harversine: ", coseno);
    const senoCoseno = await getSenoAndCoseno(lat, long);
    console.log("senoCoseno Harversine: ", senoCoseno);
    const acoseno = await getAcoseno(coseno, senoCoseno);
    const result = earthRatio * Number(acoseno.toFixed(14));
    console.log("Result HaversingForm Function: ", Number(result.toFixed(14)));
    return Number(result.toFixed(14));
}

async function getAcoseno(coseno, senoCoseno) {
    console.log("Coseno getAcoseno: ", coseno);
    console.log("senoCoseno getAcoseno: ",senoCoseno)
    const sumaCosenoSenoCoseno = coseno + senoCoseno;
    console.log("SumaCosenoSenoCoseno getAcoseno: ", Number(sumaCosenoSenoCoseno.toFixed(14)));
    const acoseno = Math.acos(Number(sumaCosenoSenoCoseno.toFixed(14)));
    console.log("Acoseno getAcoseno: ", Number(acoseno.toFixed(14)));
    const result = acoseno;
    console.log("Result getAcoseno Function: ", Number(result.toFixed(14)));
    return Number(result.toFixed(14));
}

async function getToCoseno(lat) {
    const coseno1 = Math.cos(radians(lat[0])).toFixed(14);
    const coseno2 = Math.cos(radians(lat[1])).toFixed(14);
    const result = coseno1 * coseno2;
    console.log("Result getToCoseno: ", result.toFixed(14));
    return Number(result.toFixed(14));
}

async function getSenoAndCoseno(lat, long) {
    const seno1 = Math.sin(radians(lat[0])).toFixed(14);
    console.log("SENO1 de GetSenoAndCoseno: ", seno1);
    const seno2 = Math.sin(radians(lat[1])).toFixed(14);
    console.log("SENO2 de GetSenoAndCoseno: ", seno2);
    const coseno = Math.cos(radiansLong(long)).toFixed(14);
    console.log("coseno de GetSenoAndCoseno: ", coseno);
    const result = seno1 * seno2 * coseno;
    console.log("Result getSenoAndCoseno", Number(result.toFixed(14)));
    return Number(result.toFixed(14));
}

function radians(coord) {
    console.log("Coord in Radians: ", coord)
    return (90 - coord) * (Math.PI / 180);
}

function radiansLong(long) {
    return (long[1] - long[0]) * (Math.PI / 180);
}

async function getKilometers(coords) {
    try {
        let distance = 0;
        let long = [];
        let lat = [];
        if (coords.length > 1) {
            for (let i = 0; i < coords.length; i++) {
                console.log('----------------', coords[i], '--------------------------')
                if (i > 0 && i < coords.length) {
                    long.push(coords[i - 1][1], coords[i][1]);
                    lat.push(coords[i - 1][0], coords[i][0]);
                    const haversine = await HaversineForm(long, lat);
                    console.log("haversin into getKilometers: ", haversine);
                    distance = distance + haversine;
                    console.log("Distance loop: ", distance)
                    long = [];
                    lat = [];
                }
                console.log('............ FINISH .................');
            }
            return distance;
        }
    } catch (error) {
        console.log(error);
    }
}

getKilometers(coords2)
    .then(result => {
        console.log(result);
    })
