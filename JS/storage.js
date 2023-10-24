const usrRegistrados = [
    {
        nombre: "Melisa Diaz",
        email: "admin@admin.com",
        password: "admin",
        fechaNacimiento: "15/04/1996",
        provincia: "Santa Fe",
        observaciones: "Observaciones de Melisa Diaz",
        rol: "ROL_ADMIN",
        id: crypto.randomUUID()
    },
    {
        nombre: "Ana Pérez",
        email: "ana.perez@example.com",
        password: "password123",
        fechaNacimiento: "28/01/1985",
        provincia: "Buenos Aires",
        observaciones: "Observaciones de Ana Pérez",
        rol: "ROL_USER",
        id: crypto.randomUUID()
    },
    {
        nombre: "Juan Gómez",
        email: "juan.gomez@example.com",
        password: "securePassword",
        fechaNacimiento: "02/06/2001",
        provincia: "Córdoba",
        observaciones: "Observaciones de Juan Gómez",
        rol: "ROL_USER",
        id: crypto.randomUUID()
    },
    {
        nombre: "María Rodríguez",
        email: "maria.rodriguez@example.com",
        password: "myp@ssw0rd",
        fechaNacimiento: "05/12/1997",
        provincia: "Catamarca",
        observaciones: "Observaciones de María Rodríguez",
        rol: "ROL_USER",
        id: crypto.randomUUID()
    },
    {
        nombre: "Carlos López",
        email: "carlos.lopez@example.com",
        password: "secure123",
        fechaNacimiento: "19/10/2002",
        provincia: "Chubut",
        observaciones: "Observaciones de Carlos López",
        rol: "ROL_USER",
        id: crypto.randomUUID()
    },
    {
        nombre: "Laura Martínez",
        email: "laura.martinez@example.com",
        password: "passw0rd123",
        fechaNacimiento: "01/12/2003",
        provincia: "Entre Ríos",
        observaciones: "Observaciones de Laura Martínez",
        rol: "ROL_USER",
        id: crypto.randomUUID()
    }
];

const products = [
    {
        imagen: "/assets/images/Productos/MotherMsi-b550.png",
        nombre: "Motherboard MSI B550 MPG GAMING PLUS",
        descripcion: "Placa base de alto rendimiento para gaming con soporte para procesadores AMD Ryzen. Ofrece tecnología PCIe 4.0 para gráficos y almacenamiento más rápidos, además de un diseño de enfriamiento eficiente.",
        fechaIngresado: "13/08/2023",
        precio: 190000,
        id: crypto.randomUUID()
    },
    {
        imagen: "/assets/images/Productos/Ram-VengancePro.png",
        nombre: "Memoria RAM Vengeance RGB Pro 32GB",
        descripcion: "La Memoria RAM Vengeance RGB Pro de 32GB a 3200MHz consta de dos módulos de 16GB cada uno, configurados en modo dual-channel para un rendimiento eficiente. Equipada con tecnología DDR4, ofrece una velocidad de transferencia de datos de 3200MHz, lo que mejora la capacidad de respuesta del sistema y el manejo de cargas de trabajo intensivas.",
        fechaIngresado: "17/08/2023",
        precio: 80000,
        id: crypto.randomUUID()
    },
    {
        imagen: "/assets/images/Productos/Nvidia-rtx3060.png",
        nombre: "Tarjeta Gráfica ASUS NVIDIA GeForce RTX 3060 DUAL",
        descripcion: "La tarjeta gráfica NVIDIA GeForce RTX 3060 está equipada con la arquitectura Ampere y 12 GB de memoria GDDR6. Ofrece un rendimiento excepcional en juegos y aplicaciones creativas gracias a sus núcleos CUDA y núcleos de trazado de rayos.",
        fechaIngresado: "17/10/2022",
        precio: 590000,
        id: crypto.randomUUID()
    },
    {
        imagen: "/assets/images/Productos/Monitor-Asus-165mhz.png",
        nombre: "Monitor ASUS TUF Gaming VG27AQ 1440p 165Hz",
        descripcion: "Monitor gaming de 27\" con resolución 1440p y tasa de refresco de 165 Hz. Compatible con G-Sync y FreeSync.",
        fechaIngresado: "27/12/2022",
        precio: 400000,
        id: crypto.randomUUID()
    }
];



const storageUsers = JSON.parse(localStorage.getItem('usuariosRegistrados'));
const storageProducts = JSON.parse(localStorage.getItem('productosGuardados'));



if(storageProducts === null){
    localStorage.setItem("productosGuardados", JSON.stringify(products));
}

if(storageUsers === null){
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usrRegistrados));
}