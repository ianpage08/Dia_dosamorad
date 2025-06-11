export default function MusicPlayer() {
    return(
        <>
        <div className="my-6 d-flex justify-content-center align-items-center p-4 ">
            <div className="border ">
                <h1 className="border-1">🎶 Ouça a nossa música tema! 🎶</h1>
                <p className="text-center ">A música tema do Dia Nossa é uma celebração da amizade, amor e união. Com uma melodia envolvente e letras que falam sobre momentos especiais, ela é perfeita para embalar as lembranças desse dia tão especial.</p>
            </div>
            <iframe width="1000" height="315" src="https://www.youtube.com/embed/E2Rj2gQAyPA?si=zx5skT_hQvZsgM2X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </>
    )
}