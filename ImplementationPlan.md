# Plan Implementacji Aplikacji Platforma_LA

## Faza 1: Inicjalizacja Projektu i Podstawowa Konfiguracja (Sprint 0/1)

1.  **Inicjalizacja projektu Node.js**:
    *   Utworzenie `package.json` (`npm init -y`).
    *   Instalacja podstawowych zależności: `typescript`, `@types/node`, `ts-node`, `nodemon`.
    *   Konfiguracja TypeScript (`tsconfig.json`).
2.  **Struktura katalogów**:
    *   Utworzenie głównych katalogów: `src/`, `tests/`, `config/`.
    *   W `src/` utworzenie podkatalogów: `modules/`, `routes/`, `services/`, `database/`, `utils/`, `middlewares/`.
    *   W `src/modules/` utworzenie katalogów dla poszczególnych modułów (np. `competitions`, `registrations`, etc.).
3.  **Wybór i konfiguracja frameworka backendowego**:
    *   Instalacja Express.js (`npm install express @types/express`) lub Fastify (`npm install fastify`).
    *   Stworzenie podstawowego pliku serwera (`src/server.ts` lub `src/app.ts`) z inicjalizacją frameworka i prostym endpointem testowym.
    *   Konfiguracja skryptów `start:dev` (używając `nodemon` i `ts-node`) i `build` (`tsc`) w `package.json`.
4.  **Konfiguracja środowiskowa**:
    *   Implementacja obsługi zmiennych środowiskowych (np. za pomocą biblioteki `dotenv`).
    *   Utworzenie plików `.env.example`, `.env.development`, `.env.test`, `.env.production` (z podstawowymi zmiennymi jak `PORT`, `DATABASE_URL`).
    *   Dodanie `.env*` (oprócz `.env.example`) do `.gitignore`.
5.  **Konfiguracja Bazy Danych i ORM**:
    *   Instalacja Prisma (`npm install prisma --save-dev`, `npm install @prisma/client`).
    *   Inicjalizacja Prisma (`npx prisma init --datasource-provider postgresql`).
    *   Konfiguracja `DATABASE_URL` w plikach `.env`.
    *   Definicja pierwszych modeli w `prisma/schema.prisma` (np. `User`, `Competition`).
    *   Wygenerowanie pierwszej migracji (`npx prisma migrate dev --name init`).
    *   Utworzenie klienta Prisma (`src/database/prismaClient.ts`).
6.  **Konteneryzacja (Docker)**:
    *   Utworzenie `Dockerfile` do budowania obrazu aplikacji.
    *   Utworzenie `docker-compose.yml` do uruchamiania aplikacji i bazy danych PostgreSQL w środowisku deweloperskim.
    *   Utworzenie pliku `.dockerignore`.

## Faza 2: Implementacja Modułu "Competitions" (Sprint 1/2)

1.  **Model danych**: Rozszerzenie modelu `Competition` w `schema.prisma` o potrzebne pola (nazwa, data, miejsce, regulamin, itp.). Wygenerowanie migracji.
2.  **API Routes**: Definicja endpointów REST API dla CRUD operacji na zawodach w `src/routes/competitionRoutes.ts` (np. `POST /competitions`, `GET /competitions`, `GET /competitions/:id`, `PUT /competitions/:id`, `DELETE /competitions/:id`).
3.  **Service Logic**: Implementacja logiki biznesowej w `src/modules/competitions/competitionService.ts` (walidacja danych wejściowych, interakcja z bazą danych przez Prisma).
4.  **Controllers/Handlers**: Implementacja funkcji obsługujących żądania w `src/modules/competitions/competitionController.ts`, które wykorzystują `competitionService`.
5.  **Walidacja**: Dodanie walidacji danych wejściowych (np. za pomocą biblioteki `zod` lub `joi`).
6.  **Testy**:
    *   Testy jednostkowe dla `competitionService`.
    *   Testy integracyjne dla endpointów API (używając np. `supertest` i `jest`).

## Faza 3: Implementacja Modułu "Registrations" (Sprint 2/3)

1.  **Model danych**: Definicja modeli `Participant` i `Registration` w `schema.prisma` (powiązanie z `User` i `Competition`). Wygenerowanie migracji.
2.  **API Routes**: Definicja endpointów API dla rejestracji (`POST /competitions/:competitionId/registrations`, `GET /competitions/:competitionId/registrations`, `GET /users/:userId/registrations`).
3.  **Service Logic**: Implementacja logiki w `src/modules/registrations/registrationService.ts` (sprawdzanie limitów miejsc, terminów rejestracji, tworzenie powiązań).
4.  **Controllers/Handlers**: Implementacja w `src/modules/registrations/registrationController.ts`.
5.  **Walidacja**: Dodanie walidacji.
6.  **Testy**: Testy jednostkowe i integracyjne.

## Faza 4: Implementacja Modułu "Results" (Sprint 3/4)

1.  **Model danych**: Definicja modelu `Result` w `schema.prisma` (powiązanie z `Registration`, `Participant`, `Competition`). Wygenerowanie migracji.
2.  **API Routes**: Definicja endpointów API do wprowadzania i pobierania wyników (`POST /registrations/:registrationId/results`, `GET /competitions/:competitionId/results`, `GET /participants/:participantId/results`).
3.  **Service Logic**: Implementacja logiki w `src/modules/results/resultService.ts`.
4.  **Controllers/Handlers**: Implementacja w `src/modules/results/resultController.ts`.
5.  **Walidacja**: Dodanie walidacji.
6.  **Testy**: Testy jednostkowe i integracyjne.

## Faza 5: Implementacja Pozostałych Modułów (Sprinty 4-X)

*   **Kolejność**: Moduły `Payments`, `Bib Numbers`, `Para-athletics`, `Points`, `Reports PDF` mogą być implementowane równolegle lub sekwencyjnie, w zależności od priorytetów.
*   **Payments**:
    *   Integracja z wybranym dostawcą (np. Stripe SDK).
    *   Implementacja endpointów do inicjowania płatności i obsługi webhooków od dostawcy.
    *   Aktualizacja statusu rejestracji na podstawie płatności.
    *   Mockowanie dostawcy w testach.
*   **Bib Numbers**:
    *   Logika generowania i przypisywania numerów startowych (w `bibNumberService.ts`).
    *   API do zarządzania numerami.
*   **Para-athletics**:
    *   Jeśli potrzebne, dodanie modeli dla klasyfikacji.
    *   Dostosowanie logiki w `Registrations` i `Results`.
*   **Points**:
    *   Definicja reguł punktacji.
    *   Implementacja logiki obliczeniowej (może być częścią `Results` lub osobnym serwisem).
*   **Reports PDF**:
    *   Integracja z `pdfkit`.
    *   Serwis (`reportService.ts`) do generowania PDF na podstawie danych z innych modułów (listy startowe, wyniki).
    *   API do żądania generowania raportów.

## Faza 6: Funkcje Rdzenne i Uzupełniające (Równolegle z Fazą 5)

1.  **Authentication & Authorization**:
    *   Implementacja mechanizmu logowania (np. JWT).
    *   Middleware do weryfikacji tokenów.
    *   Definicja ról użytkowników (Admin, Organizator, Uczestnik).
    *   Middleware do sprawdzania uprawnień dla poszczególnych endpointów.
2.  **Obsługa Błędów**: Implementacja globalnego middleware do obsługi błędów.
3.  **Logging**: Konfiguracja i integracja systemu logowania (np. `winston` lub `pino`).
4.  **API Documentation**: Generowanie dokumentacji API (np. za pomocą `swagger-jsdoc` i `swagger-ui-express`).

## Faza 7: Testowanie, Refaktoryzacja i Przygotowanie do Wdrożenia (Sprint X+1)

1.  **Testy End-to-End**: Przeprowadzenie kompleksowych testów E2E.
2.  **Refaktoryzacja**: Przegląd kodu, optymalizacja, usuwanie duplikacji.
3.  **Konfiguracja Produkcyjna**:
    *   Finalizacja konfiguracji zmiennych środowiskowych dla produkcji.
    *   Optymalizacja `Dockerfile` pod kątem produkcji.
4.  **CI/CD**: Konfiguracja potoku ciągłej integracji i ciągłego wdrażania (np. GitHub Actions, GitLab CI).

## Faza 8: Wdrożenie i Monitoring (Sprint X+2)

1.  **Wdrożenie**: Wdrożenie aplikacji na wybraną platformę hostingową (np. Heroku, AWS, Azure, VPS).
2.  **Monitoring**: Konfiguracja narzędzi do monitorowania wydajności aplikacji i logów w środowisku produkcyjnym (np. Sentry, Datadog).
3.  **Backup Bazy Danych**: Skonfigurowanie regularnych kopii zapasowych bazy danych.
