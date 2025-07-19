@extends('_layouts.main')
@section('body')
        
<div id="container-grid" class="grid gap-4 p-4 transition-all duration-500 ease-in-out" 
     style="grid-template-columns: 2fr 1fr 1fr;">
     
    <div class="card bg-[#6B47ED] p-8 rounded-3xl cursor-pointer transition-all duration-500 active" 
         data-section="academy" onclick="expandCard(this)">
        <div class="card-content grid grid-cols-2 gap-2">
            <div class="text-content">
                <span class="bg-[#4A2BBB] px-4 py-2 font-bold rounded-md">Loop Academy</span>
                <h2 class="text-5xl font-bold pt-3">Cursos Loop Academy</h2>
                <h3 class="pt-8"><span class="text-[#9AFFCF] font-bold text-xl">💫É aqui que você inicia sua jornada de aprendizado.💫<br></span><span class="font-semibold">Assista aulas, faça os exercícios, baixe os materiais de apoio e estude sempre que quiser!</span></h3>
                <button class="text-[#6B47ED] mt-8 bg-white py-2 px-7 rounded-xl"><i class="fas fa-link"></i> Acessar Agora</button>
            </div>
            <div class="image-content">
                <img src="{{ $page->baseUrl }}/assets/images/courses_content.png" alt="Cursos">
            </div>
        </div>
        <div class="card-collapsed hidden flex flex-col justify-center items-center h-full text-center"> 
            <i class="fas fa-graduation-cap fa-3x text-white mb-4"></i>
            <h2 class="text-xl font-bold">Academy</h2>
            <h3 class="text-sm">Mais detalhes <i class="fas fa-plus text-white ml-2"></i></h3>
        </div>
    </div>

    <div class="card bg-[#D93971] p-8 rounded-3xl cursor-pointer transition-all duration-500" 
         data-section="memhack" onclick="expandCard(this)">
        <div class="card-content grid grid-cols-2 gap-2 hidden">
            <div class="text-content">
                <span class="bg-[#B82956] px-4 py-2 font-bold rounded-md">Memhack</span>
                <h2 class="text-5xl font-bold pt-3">Loop Brain</h2>
                <h3 class="pt-8"><span class="text-[#FFD700] font-bold text-xl">🧠 Memorize todo o conteúdo 🧠<br></span><span class="font-semibold">Nossa tecnologia de memorização exclusiva e simples e prática! Memorize cada detalhe e potencialize todo o seu estudo!</span></h3>
                <button class="text-[#D93971] mt-8 bg-white py-2 px-7 rounded-xl"><i class="fas fa-brain"></i> Acessar Agora</button>
            </div>
            <div class="image-content">
                <img src="{{ $page->baseUrl }}/assets/images/memorization_content.png" alt="Memhack">
            </div>
        </div>
        <div class="card-collapsed flex flex-col justify-center items-center h-full text-center"> 
            <i class="fas fa-brain fa-3x text-white mb-4"></i>
            <h2 class="text-xl font-bold">Memhack</h2>
            <h3 class="text-sm">Mais detalhes <i class="fas fa-plus text-white ml-2"></i></h3>
        </div>
    </div>

    <div class="card bg-[#844CFC] p-8 rounded-3xl cursor-pointer transition-all duration-500" 
         data-section="talks" onclick="expandCard(this)">
        <div class="card-content grid grid-cols-2 gap-2 hidden">
            <div class="text-content">
                <span class="bg-[#6A3DD4] px-4 py-2 font-bold rounded-md">Talks</span>
                <h2 class="text-5xl font-bold pt-3">Tech Talks</h2>
                <h3 class="pt-8"><span class="text-[#FFB3E6] font-bold text-xl">🎤 Aprenda com especialistas 🎤<br></span><span class="font-semibold">Palestras e entrevistas com especialistas do setor tech. Fique por dentro de todas as novidades mais recentes e tendências!</span></h3>
                <button class="text-[#844CFC] mt-8 bg-white py-2 px-7 rounded-xl"><i class="fas fa-microphone"></i> Acessar Agora</button>
            </div>
            <div class="image-content">
                <img src="{{ $page->baseUrl }}/assets/images/talks_content.png" alt="Talks">
            </div>
        </div>
        <div class="card-collapsed flex flex-col justify-center items-center h-full text-center"> 
            <i class="fas fa-microphone fa-3x text-white mb-4"></i>
            <h2 class="text-xl font-bold">Talks</h2>
            <h3 class="text-sm">Mais detalhes <i class="fas fa-plus text-white ml-2"></i></h3>
        </div>
    </div>
</div>

<script>
function expandCard(clickedCard) {
    const container = document.getElementById('container-grid');
    const allCards = document.querySelectorAll('.card');
    const clickedSection = clickedCard.getAttribute('data-section');
    const bodybg = document.querySelector('body');

    // Remove active class from all cards
    allCards.forEach(card => card.classList.remove('active'));
    
    // Add active class to clicked card
    clickedCard.classList.add('active');
    
    // Update grid layout based on which card is active
    switch(clickedSection) {
        case 'academy':
            container.style.gridTemplateColumns = '2fr 0.5fr 0.5fr';
            bodybg.style.backgroundColor = '#4A2BBB';
            break;
        case 'memhack':
            container.style.gridTemplateColumns = '0.5fr 2fr 0.5fr';
            bodybg.style.backgroundColor = '#B82156';
            break;
        case 'talks':
            container.style.gridTemplateColumns = '0.5fr 0.5fr 2fr';
            bodybg.style.backgroundColor = '#5C31B6';
            break;
    }
    
    // Show/hide content based on active state
    allCards.forEach(card => {
        const content = card.querySelector('.card-content');
        const collapsed = card.querySelector('.card-collapsed');
        
        if (card.classList.contains('active')) {
            content.classList.remove('hidden');
            collapsed.classList.add('hidden');
        } else {
            content.classList.add('hidden');
            collapsed.classList.remove('hidden');
        }
    });
}
</script>

@endsection
