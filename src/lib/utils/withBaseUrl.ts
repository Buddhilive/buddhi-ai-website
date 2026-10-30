export function withBaseUrl(path: string, baseUrl: string): string {
  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  if (!path.startsWith("/") || path.startsWith(base)) {
    return path;
  }

  return `${base}${path.slice(1)}`;
}
