export interface UserInterface {
    status: string;
    message: string;
    user: {
        id: number;
        name: string;
        email: string;
        updated_at: string;
        created_at: string;
    };
    authorisation?: {
        token?: string;
        type?: string;
    };
}