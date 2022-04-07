import { getConnection, Repository } from "typeorm";
import { Roles } from "../entities/Roles";

export class RolesRepository extends Repository<Roles> {

    public async createRole(rolesDetails: Roles) {
        const rolesConnection = getConnection().getRepository(Roles);
        const savedDetails = await rolesConnection.save(rolesDetails);
        return savedDetails;
    }


    public async updateRoleDetails(RolesId: any, RolesDetails: any) {
       const roleRepo = getConnection().getRepository(Roles);
        const updateRolesDetails = await roleRepo.update({ role_id: RolesId, deletedAt: null }, {
            role_name: RolesDetails.role_name ? RolesDetails.role_name : undefined,
            role_description: RolesDetails.role_description ? RolesDetails.role_controller : undefined
        });
        return updateRolesDetails;
    }
    
    public async softDeleteRolesById(role_id: string) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.softDelete({
            role_id
        });
    }
    
}
