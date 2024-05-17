import { rolePermissions } from "../src/app/(unauthenticated)/database/rolePermissions";
import { permissions } from "../src/app/(unauthenticated)/database/permissions";
import { roles } from "../src/app/(unauthenticated)/database/roles";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rolesExists = await prisma.role.findMany();

  const rolesToCreate = roles.filter(
    (role) =>
      !rolesExists.find(
        (existingRole) => existingRole.description === role.description,
      ),
  );

  const createRolesPromise = prisma.role.createMany({
    data: rolesToCreate,
  });

  const permissionsExists = await prisma.permission.findMany();

  const permissionsToCreate = permissions.filter(
    (permission) =>
      !permissionsExists.find(
        (existingPermission) =>
          existingPermission.description === permission.description,
      ),
  );

  const createPermissionsPromise = prisma.permission.createMany({
    data: permissionsToCreate,
  });

  await Promise.all([createRolesPromise, createPermissionsPromise]);

  const rolePermissionsExists = await prisma.rolePermission.findMany();

  const rolePermissionsToCreate = rolePermissions.filter((rolePermission) => {
    return !rolePermissionsExists.find((existingRolePermission) => {
      return (
        existingRolePermission.role_id === rolePermission.role_id &&
        existingRolePermission.permission_id === rolePermission.permission_id
      );
    });
  });

  await prisma.rolePermission.createMany({
    data: rolePermissionsToCreate,
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
