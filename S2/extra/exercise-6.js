const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const swap = (players, x, y) => {
    [players[x], players[y]] = [players[y], players[x]];
};
swap(players, 2,3);

console.log(players)