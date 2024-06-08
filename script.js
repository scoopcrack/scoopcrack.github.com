function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('game');

    fetch('games.json')
        .then(response => response.json())
        .then(data => {
            const game = data.games.find(g => g.id === gameId);
            if (game) {
                document.getElementById('game-title').textContent = game.name;
                document.getElementById('game-image').src = game.image;
                document.getElementById('game-name').textContent = game.name;
                document.getElementById('game-description').textContent = game.description;
                document.getElementById('steam-link').href = game.steamLink;
                document.getElementById('download-link-1').href = game.downloadLinkWindows;
                document.getElementById('download-link-2').href = game.downloadLinkMac;
            } else {
                console.error('Game not found');
            }
        })
        .catch(error => console.error('Error loading game data:', error));
});
