# Śledzenie Postępu Implementacji

## Faza 1: Inicjalizacja Projektu i Podstawowa Konfiguracja

*   [x] **1. Inicjalizacja projektu Node.js**:
    *   [x] Utworzenie `package.json` (`npm init -y`).
    *   [x] Instalacja podstawowych zależności (`typescript`, `@types/node`, `ts-node`, `nodemon`).
    *   [x] Konfiguracja TypeScript (`tsconfig.json`).
    *   [x] Instalacja frameworka testowego (`jest`, `@types/jest`, `ts-jest`).
    *   [x] Konfiguracja frameworka testowego (`jest.config.js`).
    *   [x] Dodanie skryptu `test` do `package.json`.
    *   [x] Utworzenie przykładowego pliku testowego (`tests/example.test.ts`).
*   [x] **2. Struktura katalogów**:
    *   [x] Utworzenie głównych katalogów: `src/`, `tests/`, `config/`.
    *   [x] W `src/` utworzenie podkatalogów: `modules/`, `routes/`, `services/`, `database/`, `utils/`, `middlewares/`.
*   [x] **3. Wybór i konfiguracja frameworka backendowego**
    *   [x] Instalacja Express.js (`npm install express @types/express`).
    *   [x] Stworzenie podstawowego pliku serwera (`src/app.ts`, `src/server.ts`).
    *   [x] Konfiguracja skryptów (`start:dev`, `build`, `start`) w `package.json`.
*   [x] **4. Konfiguracja środowiskowa**
    *   [x] Instalacja `dotenv`.
    *   [x] Konfiguracja ładowania `.env` w `src/server.ts`.
    *   [x] Utworzenie `.env.example`.
    *   [x] Utworzenie/aktualizacja `.gitignore`.
*   [x] **5. Konfiguracja Bazy Danych i ORM**
    *   [x] Instalacja `prisma` i `@prisma/client`.
    *   [x] Inicjalizacja Prisma (`prisma init` - pominięto, bo katalog istniał).
    *   [x] Definicja modeli (`User`, `Competition`) w `prisma/schema.prisma` (istniały).
    *   [x] Wygenerowanie i zastosowanie migracji (`prisma migrate dev`).
    *   [x] Wygenerowanie klienta Prisma (`prisma generate`).
    *   [x] Utworzenie pliku `src/database/prismaClient.ts`.
*   [x] **6. Konteneryzacja (Docker)**
    *   [x] Utworzenie `Dockerfile`.
    *   [x] Utworzenie `docker-compose.yml`.
    *   [x] Utworzenie `.dockerignore`.

## Faza 2: Implementacja Modułu "Competitions" (Sprint 1/2)

*   [x] **1. Model danych**
    *   [x] Rozszerzenie modelu `Competition` w `schema.prisma`.
    *   [x] Wygenerowanie i zastosowanie migracji (`prisma migrate dev`).
    *   [x] Ponowne wygenerowanie klienta Prisma (`prisma generate`).
*   [x] **2. API Routes**
    *   [x] Utworzenie pliku `src/routes/competitionRoutes.ts` z definicją ścieżek CRUD.
    *   [x] Utworzenie pliku `src/modules/competitions/competitionController.ts` z placeholderami.
    *   [x] Rejestracja routera w `src/app.ts` pod `/api/competitions`.
    *   [x] Dodanie middleware `express.json()`.
*   [x] **3. Service Logic**
    *   [x] Utworzenie pliku `src/modules/competitions/competitionService.ts`.
    *   [x] Import klienta Prisma.
    *   [x] Zdefiniowanie podstawowych DTO (`CreateCompetitionDto`, `UpdateCompetitionDto`).
    *   [x] Implementacja funkcji CRUD (`getAll`, `getById`, `create`, `update`, `delete`).
*   [x] **4. Controllers/Handlers**
    *   [x] Aktualizacja funkcji w `competitionController.ts` do używania `competitionService`.
    *   [x] Dodanie podstawowej obsługi błędów (`try...catch`, `next(error)`).
*   [x] **5. Walidacja**
    *   [x] Instalacja `zod`.
    *   [x] Utworzenie schematów walidacji w `competitionValidation.ts`.
    *   [x] Utworzenie middleware `validateRequest.ts`.
    *   [x] Integracja middleware walidacyjnego w `competitionRoutes.ts`.
*   [x] **6. Testy**
    *   [x] Instalacja `jest-mock-extended` i `supertest`.
    *   [x] Konfiguracja mockowania Prisma Client (`tests/prismaMock.ts`).
    *   [x] Implementacja i **naprawa** testów jednostkowych dla `competitionService` (`tests/unit/competitionService.test.ts`) - **używają lokalnego mocka Prisma**.
    *   [x] Implementacja testów integracyjnych dla API (`tests/integration/competitions.test.ts`) - *Uwaga: Mogą wymagać weryfikacji po zmianach.*

## Faza 3: Implementacja Modułu "Registrations" (Sprint 2/3)

*   [x] **1. Model danych**
    *   [x] Zdefiniowanie modeli `Registration` i powiązanych enumów/relacji w `schema.prisma`.
    *   [x] Wygenerowanie i zastosowanie migracji (`prisma migrate dev`).
    *   [x] Wygenerowanie klienta Prisma (`prisma generate`).
*   [x] **2. API Routes**
    *   [x] Utworzenie `registrationController.ts` z placeholderami.
    *   [x] Utworzenie `registrationRoutes.ts` z definicją ścieżek.
    *   [x] Rejestracja ścieżek zagnieżdżonych w `competitionRoutes.ts` (później zrefaktoryzowano na pełne ścieżki).
    *   [x] Rejestracja pozostałych ścieżek w `app.ts`.
*   [x] **3. Service Logic**
    *   [x] Utworzenie pliku `src/utils/HttpError.ts`.
    *   [x] Utworzenie pliku `src/modules/registrations/registrationService.ts`.
    *   [x] Zdefiniowanie DTO (`CreateRegistrationDto`, `UpdateRegistrationStatusDto`).
    *   [x] Implementacja funkcji serwisu (`create`, `getCompetitionRegistrations`, `getUserRegistrations`, `getById`, `updateStatus`, `cancel`).
    *   [x] Dodanie podstawowej obsługi błędów (np. sprawdzanie statusu zawodów, deadline'u, duplikatów).
*   [x] **4. Controllers/Handlers**
    *   [x] Aktualizacja funkcji w `registrationController.ts` do używania `registrationService`.
    *   [x] Dodanie podstawowej obsługi błędów.
    *   [x] *Uwaga: Występowały problemy z linterem dotyczące obsługi błędów Prisma w catch - rozwiązane?*
*   [x] **5. Walidacja**
    *   [x] Utworzenie schematów walidacji w `registrationValidation.ts`.
    *   [x] Integracja middleware `validateRequest` w `registrationRoutes.ts`.
    *   [x] *Uwaga: Rozwiązano problemy z linterem/działaniem walidacji w routerach.* 
*   [x] **6. Testy**
    *   [x] Implementacja i **naprawa** testów jednostkowych dla `registrationService` (`tests/unit/registrationService.test.ts`) - **używają lokalnego mocka Prisma**.
    *   [x] Implementacja i **naprawa** testów integracyjnych dla API (`tests/integration/registrations.test.ts`).

## Faza 4: Implementacja Modułu "Results" (Sprint 3/4)

*   [x] **1. Model danych**
    *   [x] Zdefiniowanie modelu `Result` i powiązanych relacji w `schema.prisma`.
    *   [x] Dodanie pola `discipline` do modelu `Registration`.
    *   [x] Wygenerowanie i zastosowanie migracji (`prisma migrate dev`).
    *   [x] Wygenerowanie klienta Prisma (`prisma generate`).
*   [x] **2. API Routes**
    *   [x] Utworzenie `resultController.ts` z placeholderami.
    *   [x] Utworzenie `resultRoutes.ts` z definicją ścieżek.
    *   [x] Rejestracja routera w `app.ts`.
*   [x] **3. Service Logic**
    *   [x] Utworzenie pliku `src/modules/results/resultService.ts`.
    *   [x] Zdefiniowanie DTO (`UpsertResultDto`).
    *   [x] Implementacja funkcji serwisu (`addOrUpdateResult`, `getCompetitionResults`, `getRegistrationResult`, `getUserResults`, `deleteResult`).
*   [x] **4. Controllers/Handlers**
    *   [x] Aktualizacja funkcji w `resultController.ts` do używania `resultService`.
    *   [x] Dodanie podstawowej obsługi błędów i globalnego error handlera.
*   [x] **5. Walidacja**
    *   [x] Utworzenie schematów walidacji w `resultValidation.ts`.
    *   [x] Integracja middleware `validateRequest` w `resultRoutes.ts` (z uwagą na błędy typów `RequestHandler` - @ts-ignore?)
    *   [x] Poprawiono formatowanie błędów w `validateRequest.ts`.
*   [x] **6. Testy**
    *   [x] Implementacja i **naprawa** testów jednostkowych dla `resultService` (`tests/unit/resultService.test.ts`) - **używają lokalnego mocka Prisma**.
    *   [x] Utworzenie i **naprawa** testów integracyjnych dla API (`tests/integration/results.test.ts`).

*(Pozostałe fazy pominięte dla zwięzłości)*

