export interface Pet {
    name: string;
    status: PetStatus;
}

export type PetStatus = 'listed' | 'examining' | 'finally_back_to_hooman';