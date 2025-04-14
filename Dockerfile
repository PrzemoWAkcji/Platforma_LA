# ---- Development Stage ----
# Etap dla środowiska deweloperskiego, z wszystkimi zależnościami
FROM base AS development
ENV NODE_ENV=development
WORKDIR /app
# Kopiujemy wszystko potrzebne do instalacji
COPY package.json package-lock.json ./
# Instalujemy WSZYSTKIE zależności (w tym dev)
RUN npm install
# Kopiujemy schemat Prisma
COPY prisma ./prisma/
# Generujemy klienta Prisma
RUN npx prisma generate
# Kopiujemy resztę kodu (będzie nadpisane przez volume mount w compose)
COPY . .
# Domyślna komenda (może być nadpisana w compose)
CMD ["npm", "run", "dev"]

# ---- Production Stage ---- 