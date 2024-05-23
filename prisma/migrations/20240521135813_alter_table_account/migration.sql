/*
  Warnings:

  - The primary key for the `account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `role_permission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `account` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "role_permission" DROP CONSTRAINT "role_permission_permission_id_fkey";

-- DropForeignKey
ALTER TABLE "role_permission" DROP CONSTRAINT "role_permission_role_id_fkey";

-- AlterTable
ALTER TABLE "account" DROP CONSTRAINT "account_pkey",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "password" DROP NOT NULL,
ADD CONSTRAINT "account_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "account_id_seq";

-- AlterTable
ALTER TABLE "permission" DROP CONSTRAINT "permission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "permission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "permission_id_seq";

-- AlterTable
ALTER TABLE "role" DROP CONSTRAINT "role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "role_id_seq";

-- AlterTable
ALTER TABLE "role_permission" DROP CONSTRAINT "role_permission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "role_id" SET DATA TYPE TEXT,
ALTER COLUMN "permission_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "role_permission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "role_permission_id_seq";

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "role_permission" ADD CONSTRAINT "role_permission_permission_id_fkey" FOREIGN KEY ("permission_id") REFERENCES "permission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
