interface Player {
  username: string;
  level: number;
  region: string;
}
// TODO: define a type or interface for the player
function formatPlayerCard(player: Player): string {
  return `${player.username} is a Level ${player.level} player from ${player.region}.`;
}

formatPlayerCard({
  username: "ShadowByte",
  level: 42,
  region: "Asia",
});
// Expected output:
// "ShadowByte is a Level 42 player from Asia."
