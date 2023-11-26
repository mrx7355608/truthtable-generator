import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory path using import.meta.url
const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
