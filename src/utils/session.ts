/**
 * Temporary session utilities for anonymous players in MORAL.EXE.
 * Does NOT persist any permanent user accounts or profiles.
 */

const SESSION_PLAYER_ID_KEY = 'moral_temp_player_id';
const SESSION_PLAYER_NAME_KEY = 'moral_temp_player_name';

export function getOrCreatePlayerId(): string {
  try {
    let id = sessionStorage.getItem(SESSION_PLAYER_ID_KEY);
    if (!id) {
      id = 'p_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
      sessionStorage.setItem(SESSION_PLAYER_ID_KEY, id);
    }
    return id;
  } catch {
    return 'p_' + Math.random().toString(36).substring(2, 11);
  }
}

export function getCachedPlayerName(): string {
  // Do not persist codename across refreshes or sessions
  return '';
}

export function setCachedPlayerName(_name: string): void {
  // No-op: codename is ephemeral and must be re-entered every session
}

export function validatePlayerName(name: string): { valid: boolean; error?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { valid: false, error: 'Display name is required.' };
  }
  if (trimmed.length < 2) {
    return { valid: false, error: 'Display name must be at least 2 characters.' };
  }
  if (trimmed.length > 18) {
    return { valid: false, error: 'Display name must be 18 characters or fewer.' };
  }
  return { valid: true };
}

export function formatRoomCode(input: string): string {
  return input
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
    .slice(0, 6);
}

const SESSION_TOKEN_PREFIX = 'moral_match_token_';

export function saveMatchSessionToken(matchId: string, token: string): void {
  try {
    sessionStorage.setItem(`${SESSION_TOKEN_PREFIX}${matchId}`, token);
  } catch {
    // Ignore storage errors
  }
}

export function getMatchSessionToken(matchId: string): string | null {
  try {
    return sessionStorage.getItem(`${SESSION_TOKEN_PREFIX}${matchId}`);
  } catch {
    return null;
  }
}

export function clearMatchSessionToken(matchId: string): void {
  try {
    sessionStorage.removeItem(`${SESSION_TOKEN_PREFIX}${matchId}`);
  } catch {
    // Ignore storage errors
  }
}
