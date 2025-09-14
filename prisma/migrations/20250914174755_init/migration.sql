-- CreateTable
CREATE TABLE "shortUrl"."Url" (
    "id" TEXT NOT NULL,
    "originalUrl" VARCHAR NOT NULL,
    "sequence" BIGINT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Url_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shortUrl"."AccessAnalysis" (
    "id" SERIAL NOT NULL,
    "accessedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ipAddress" VARCHAR(60) NOT NULL,
    "userAgent" VARCHAR(100) NOT NULL,
    "urlId" TEXT,

    CONSTRAINT "AccessAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Url_sequence_key" ON "shortUrl"."Url"("sequence");

-- CreateIndex
CREATE INDEX "Url_sequence_idx" ON "shortUrl"."Url"("sequence");

-- AddForeignKey
ALTER TABLE "shortUrl"."AccessAnalysis" ADD CONSTRAINT "AccessAnalysis_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES "shortUrl"."Url"("id") ON DELETE SET NULL ON UPDATE CASCADE;
