const LOCAL_VERSION = import.meta.env.VITE_APP_VERSION || "1.0.0";
const GITHUB_VERSION_URL = "https://raw.githubusercontent.com/Matteo099/teachers-agenda/main/package.json";

// Type for version comparison
type VersionParts = {
  major: number;
  minor: number;
  patch: number;
  preRelease: string | null;
};

// Parse a semantic version string into its components
function parseVersion(version: string): VersionParts {
  const versionRegex =
    /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-.]+))?$/;
  const match = version.match(versionRegex);

  if (!match) {
    throw new Error(`Invalid semantic version: ${version}`);
  }

  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
    preRelease: match[4] || null,
  };
}

// Compare two semantic version strings
function isNewerVersion(local: string, remote: string): boolean {
  const localParts = parseVersion(local);
  const remoteParts = parseVersion(remote);

  // Compare major, minor, and patch versions
  if (remoteParts.major > localParts.major) return true;
  if (remoteParts.major < localParts.major) return false;

  if (remoteParts.minor > localParts.minor) return true;
  if (remoteParts.minor < localParts.minor) return false;

  if (remoteParts.patch > localParts.patch) return true;
  if (remoteParts.patch < localParts.patch) return false;

  // Compare pre-release versions
  if (localParts.preRelease === null && remoteParts.preRelease !== null) {
    // Local version is stable; remote is pre-release
    return false;
  }

  if (localParts.preRelease !== null && remoteParts.preRelease === null) {
    // Local version is pre-release; remote is stable
    return true;
  }

  if (localParts.preRelease !== null && remoteParts.preRelease !== null) {
    // Lexicographical comparison of pre-release strings
    return localParts.preRelease < remoteParts.preRelease;
  }

  return false;
}

export async function checkForNewVersion(): Promise<boolean> {
  try {
    const response = await fetch(GITHUB_VERSION_URL, { cache: "no-store" });
    if (!response.ok) {
      console.error("Failed to fetch package.json:", response.statusText);
      return false;
    }

    const data: { version: string } = await response.json();
    const remoteVersion = data.version;

    if (isNewerVersion(LOCAL_VERSION, remoteVersion)) {
      console.log(`New version detected: ${remoteVersion} (local: ${LOCAL_VERSION})`);
      return true;
    } else {
      console.log(`Version is up-to-date (local: ${LOCAL_VERSION}, remote ${remoteVersion})`);
    }
  } catch (error) {
    console.error("Error checking for app version:", error);
  }

  return false;
}
