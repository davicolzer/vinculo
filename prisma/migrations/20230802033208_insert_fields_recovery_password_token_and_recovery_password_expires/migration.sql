-- AlterTable
ALTER TABLE "user" ADD COLUMN     "recoveryPasswordExpires" TIMESTAMP(3);
ALTER TABLE "user" ADD COLUMN     "recoveryPasswordToken" STRING;
