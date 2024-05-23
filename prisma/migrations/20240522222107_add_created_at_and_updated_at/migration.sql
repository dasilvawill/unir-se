/*
  Warnings:

  - Added the required column `updatedAt` to the `permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `role_permission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "permission" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "role" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "role_permission" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
