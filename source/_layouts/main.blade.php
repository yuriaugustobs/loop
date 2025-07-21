
<!DOCTYPE html>
<html lang="pt-BR" itemscope itemtype="https://schema.org/RealEstateAgent">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loop Tech</title>
    <meta name="description" content="Loop Tech - Soluções em Tecnologia e Inovação. Transforme seu negócio com nossas soluções personalizadas.">
    <link rel="canonical" href="{{ $page->getUrl() }}">
    <link rel="preload" href="{{ mix('css/main.css', 'assets/build') }}" as="style">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" as="style">
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white bg-[#4A2BBB] transition-all duration-500 ease-in-out">
    <header>
        <div class="flex flex-col md:flex-row justify-between px-4 md:px-8 lg:px-20 items-center py-4 md:py-8 gap-4 md:gap-0">
            <h1 class="text-xl md:text-2xl font-bold hover:scale-110 hover:cursor-pointer transition-all">Loop Tech</h1>
            <h2 class="text-lg md:text-2xl text-center font-bold transition-all order-last md:order-none">✨Como você vai estudar hoje?✨</h2>
            <nav class="group">
                <ul class="flex flex-wrap justify-center space-x-2 md:space-x-6 items-center">
                    <li><button class="hover:bg-white hover:bg-opacity-80 rounded-2xl px-2 md:px-3 py-1 transition-all hover:text-gray-700 hover:scale-110 text-sm md:text-base" onclick="location.href='#'">Home</button></li>
                    <li><button class="hover:bg-white hover:bg-opacity-80 rounded-2xl px-2 md:px-3 py-1 transition-all hover:text-gray-700 hover:scale-110 text-sm md:text-base" onclick="location.href='#'">Sobre</button></li>
                    <li><button class="hover:bg-white hover:bg-opacity-80 rounded-2xl px-2 md:px-3 py-1 transition-all hover:text-gray-700 hover:scale-110 text-sm md:text-base" onclick="location.href='#'">Serviços</button></li>
                    <li><button class="hover:bg-white hover:bg-opacity-80 rounded-2xl px-2 md:px-3 py-1 transition-all hover:text-gray-700 hover:scale-110 text-sm md:text-base" onclick="location.href='#'">Contato</button></li>
                </ul>
            </nav>
        </div>
    </header>

    <main role="main" id="main-content">
        @yield('body')
    </main>
</body>
</html>
