/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  roots: ['<rootDir>/src', '<rootDir>/tests'], // Gdzie szukać testów

  testMatch: [ // Wzorce pasujące do plików testowych
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)'
  ],

  // Przywrócono transform z dodaną opcją useESM
  transform: {
    '^.+\.(ts|tsx)$ ': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }]
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  collectCoverage: true, // Zbieranie informacji o pokryciu testami
  coverageDirectory: "coverage", // Katalog docelowy dla raportu pokrycia
  coverageProvider: "v8", // Użyj silnika V8 (szybsze pokrycie)

  // --- DODANO coveragePathIgnorePatterns ---
  // Ignoruje generowany kod Prisma podczas zbierania pokrycia
  coveragePathIgnorePatterns: [
    "<rootDir>/src/generated/prisma/"
  ],
  // --- KONIEC coveragePathIgnorePatterns ---

  // --- DODANO setupFilesAfterEnv ---
  // Ładuje zmienne środowiskowe z pliku .env przed uruchomieniem testów
  setupFilesAfterEnv: [
    'dotenv/config',
    // '<rootDir>/tests/prismaMock.ts' // USUNIĘTO
  ],
  // --- KONIEC setupFilesAfterEnv ---

  // --- ADDED Global Setup/Teardown ---
  globalSetup: '<rootDir>/tests/globalSetup.ts',
  globalTeardown: '<rootDir>/tests/globalTeardown.ts',
  // --- END Global Setup/Teardown ---

  // Usunięto sekcję globals
  /* 
  globals: {
    'process.env': {
      ...process.env,
      STRIPE_SECRET_KEY: 'sk_test_placeholder_for_jest',
    },
  },
  */

  // Przywrócono i zmodyfikowano moduleNameMapper
  moduleNameMapper: {
    // Mapuje importy @prisma/client na wygenerowany klient
    '^@prisma/client$': '<rootDir>/src/generated/prisma',
    // Poniższe mapowania nie są już potrzebne po usunięciu .js
    // '^\.\./\.\./database/prismaClient\.js$': '<rootDir>/src/database/prismaClient',
    // '^\.\./\.\./utils/HttpError\.js$': '<rootDir>/src/utils/HttpError',
    // '^(\.{1,2}/.*)\.js$': '$1'
  },
};
