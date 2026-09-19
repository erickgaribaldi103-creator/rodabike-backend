const bicicletas = [
    // --- MONTAÑA ---
    {
        id: 1, nombre: "Marlin 5", marca: "Trek", categoria: "Montaña", precio: 12500,
        descripcion: "Bicicleta ideal para iniciarse en el ciclismo de montaña.",
        especificaciones: { tipoFrenos: "Disco hidráulico", velocidades: 21, materialCuadro: "Aluminio" },
        stock: 4, imagenUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=500&q=80"
    },
    {
        id: 2, nombre: "Rockhopper", marca: "Specialized", categoria: "Montaña", precio: 14200,
        descripcion: "Resistente y ágil para senderos difíciles y terracería.",
        especificaciones: { tipoFrenos: "Disco mecánico", velocidades: 18, materialCuadro: "Aluminio" },
        stock: 3, imagenUrl: "https://images.unsplash.com/photo-1576435728678-68ce00684940?w=500&q=80"
    },
    {
        id: 3, nombre: "Talon 3", marca: "Giant", categoria: "Montaña", precio: 11800,
        descripcion: "Excelente control y estabilidad para subir pendientes.",
        especificaciones: { tipoFrenos: "Disco hidráulico", velocidades: 16, materialCuadro: "Aluminio" },
        stock: 5, imagenUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?w=500&q=80"
    },
    {
        id: 4, nombre: "Scale 970", marca: "Scott", categoria: "Montaña", precio: 22000,
        descripcion: "Geometría de carreras diseñada para máxima velocidad.",
        especificaciones: { tipoFrenos: "Disco hidráulico", velocidades: 12, materialCuadro: "Aluminio" },
        stock: 2, imagenUrl: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&q=80"
    },
    // --- URBANAS ---
    {
        id: 5, nombre: "City Classic", marca: "Vintage", categoria: "Urbana", precio: 6500,
        descripcion: "Bicicleta cómoda para la ciudad con un estilo clásico.",
        especificaciones: { tipoFrenos: "V-Brake", velocidades: 7, materialCuadro: "Acero" },
        stock: 2, imagenUrl: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=500&q=80"
    },
    {
        id: 6, nombre: "Escape 3", marca: "Giant", categoria: "Urbana", precio: 8900,
        descripcion: "Ligera y rápida, perfecta para los trayectos diarios.",
        especificaciones: { tipoFrenos: "V-Brake", velocidades: 21, materialCuadro: "Aluminio" },
        stock: 4, imagenUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&q=80"
    },
    {
        id: 7, nombre: "FX 1", marca: "Trek", categoria: "Urbana", precio: 9500,
        descripcion: "Versátil, ideal para hacer ejercicio o ir al trabajo.",
        especificaciones: { tipoFrenos: "V-Brake", velocidades: 21, materialCuadro: "Aluminio" },
        stock: 3, imagenUrl: "https://images.unsplash.com/photo-1532703108233-690a7da7bb18?w=500&q=80"
    },
    {
        id: 8, nombre: "EcoCity", marca: "Benotto", categoria: "Urbana", precio: 5200,
        descripcion: "Práctica para el súper, incluye canastilla y portabultos.",
        especificaciones: { tipoFrenos: "V-Brake", velocidades: 6, materialCuadro: "Acero" },
        stock: 6, imagenUrl: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?w=500&q=80"
    },
    // --- INFANTILES ---
    {
        id: 9, nombre: "Kids Rider 16", marca: "Giro", categoria: "Infantil", precio: 3200,
        descripcion: "Perfecta para los primeros pedaleos. Con rueditas.",
        especificaciones: { tipoFrenos: "Contrapedal", velocidades: 1, materialCuadro: "Acero" },
        stock: 5, imagenUrl: "https://images.unsplash.com/photo-1559160581-4460ce24e1fd?w=500&q=80"
    },
    {
        id: 10, nombre: "Precaliber 20", marca: "Trek", categoria: "Infantil", precio: 5500,
        descripcion: "Diseñada para niños aventureros que ya saben andar solos.",
        especificaciones: { tipoFrenos: "V-Brake", velocidades: 7, materialCuadro: "Aluminio" },
        stock: 3, imagenUrl: "https://images.unsplash.com/photo-1519722746537-471207908e23?w=500&q=80"
    },
    {
        id: 11, nombre: "BMX Freestyle", marca: "Mongoose", categoria: "Infantil", precio: 4800,
        descripcion: "Geometría especial para trucos y saltos en el parque.",
        especificaciones: { tipoFrenos: "U-Brake", velocidades: 1, materialCuadro: "Acero" },
        stock: 4, imagenUrl: "https://images.unsplash.com/photo-1565985834015-6218cce71630?w=500&q=80"
    },
    {
        id: 12, nombre: "Little Princess", marca: "Mercurio", categoria: "Infantil", precio: 2800,
        descripcion: "Colorida, cómoda y segura. Cuenta con rueditas de apoyo.",
        especificaciones: { tipoFrenos: "V-Brake", velocidades: 1, materialCuadro: "Acero" },
        stock: 6, imagenUrl: "https://images.unsplash.com/photo-1582213797675-5eb7b37060eb?w=500&q=80"
    },
    // --- ELÉCTRICAS ---
    {
        id: 13, nombre: "Volt Pro", marca: "EcoRide", categoria: "Eléctrica", precio: 24000,
        descripcion: "Llega más lejos sin sudar. Autonomía de 50km por carga.",
        especificaciones: { tipoFrenos: "Disco mecánico", velocidades: 8, materialCuadro: "Aluminio" },
        stock: 1, imagenUrl: "https://images.unsplash.com/photo-1572584642822-8f8166de8d04?w=500&q=80"
    },
    {
        id: 14, nombre: "Turbo Vado", marca: "Specialized", categoria: "Eléctrica", precio: 55000,
        descripcion: "Potencia premium y pantalla inteligente para el viajero.",
        especificaciones: { tipoFrenos: "Disco hidráulico", velocidades: 10, materialCuadro: "Aluminio" },
        stock: 1, imagenUrl: "https://images.unsplash.com/photo-1620050868853-9099e0cead99?w=500&q=80"
    },
    {
        id: 15, nombre: "E-Scape", marca: "Giant", categoria: "Eléctrica", precio: 38000,
        descripcion: "Asistencia de pedaleo súper suave y batería de larga duración.",
        especificaciones: { tipoFrenos: "Disco hidráulico", velocidades: 9, materialCuadro: "Aluminio" },
        stock: 2, imagenUrl: "https://images.unsplash.com/photo-1632230154880-99932158917c?w=500&q=80"
    }
];

module.exports = bicicletas;