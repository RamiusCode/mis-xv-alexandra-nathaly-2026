// Todo lo que depende de la cantidad de pases se arma acá, en un solo lugar.
export const PASES_MAXIMO = 5;

// Lee ?pases=N del link. Devuelve null si no viene o no es válido.
export function leerPases(url: URL): number | null {
  const n = Number.parseInt(url.searchParams.get("pases") ?? "", 10);
  if (!Number.isFinite(n) || n < 1) return null;
  return Math.min(n, PASES_MAXIMO);
}

export function palabraPases(n: number): string {
  return n === 1 ? "Pase" : "Pases";
}
