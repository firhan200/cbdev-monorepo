export class AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: string, email: string, name: string, role: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}