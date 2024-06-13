function drawPyramid(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i); // Espaços antes das estrelas
        let stars = '*'.repeat(2 * i - 1); // Estrelas
        console.log(spaces + stars + spaces);
    }
}

// Chama a função para desenhar uma pirâmide 
drawPyramid(5);
