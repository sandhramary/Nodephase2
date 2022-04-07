import { plainToClass } from "class-transformer";
import { Roles } from "../entities/Roles";
import { RolesRepository } from "../repository/RolesRepository";

export class RolesService {
    constructor(
        private RoleRepository: RolesRepository
    ) {}

    public async createRole(roleInput: any) {
        const roleData = plainToClass(Roles, {
            "role_name": roleInput.name,
            "role_description": "Sample role"
        });
        const savedDetails = await this.RoleRepository.createRole(roleData);
        return savedDetails;
    }

    public async updateRole(RolesId: string, RolesDetails: any) {
       
        const updatedRoles = await this.RoleRepository.updateRoleDetails(RolesId, RolesDetails);
        
        return updatedRoles;
    
    }
    public async deleteRole(RolesId: string) {
        return this.RoleRepository.softDeleteRolesById(RolesId);
       }
}
