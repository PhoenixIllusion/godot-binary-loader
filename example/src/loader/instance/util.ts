export function resolve_nodepath(currentPath: string[], nodePath: string[], absolute: boolean): string[] {
  if(absolute) {
    return nodePath;
  }
  // Process path to handle "." and ".."
  const finalPath: string[] = [... currentPath];
  for (const segment of nodePath) {
      if (segment === ".") continue; // Ignore current directory
      if (segment === "..") {
          if (finalPath.length > 0) {
              finalPath.pop(); // Move up one directory
          }
      } else {
          finalPath.push(segment); // Add valid segment
      }
  }

  return finalPath;
}
