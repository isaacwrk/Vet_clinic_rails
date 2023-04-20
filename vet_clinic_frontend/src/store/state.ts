export type Prescription = {
    id: number;
    vet_prescription: string;
    prescribed_by: string;
    disease:string;
    livestrock:string;
    completed:boolean;
    editing:boolean;
}