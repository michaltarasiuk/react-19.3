/**
 * Cache-busting resource URLs so each reveal shows the loading path.
 * Avatars are solid-color SVGs served from /public/avatars.
 */
export function freshStylesheetUrl() {
  return (
    "https://fonts.googleapis.com/css2?family=Caveat&display=swap&t=" +
    Date.now()
  );
}

export function freshImageUrl(avatar = "teal") {
  return `/avatars/${avatar}.svg?t=${Date.now()}`;
}

export function avatarUrl(avatar: string) {
  return `/avatars/${avatar}.svg`;
}
