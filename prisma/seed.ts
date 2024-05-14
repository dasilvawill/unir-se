import { rolePermissions } from "../src/app/database/rolePermissions";
import { permissions } from "../src/app/database/permissions";
import { roles } from "../src/app/database/roles";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createRolesPromise = prisma.role.createMany({
    data: roles,
  });

  const createPermissionsPromise = prisma.permission.createMany({
    data: permissions,
  });

  await Promise.all([createRolesPromise, createPermissionsPromise]);

  await prisma.rolePermission.createMany({
    data: rolePermissions,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect;
  });
