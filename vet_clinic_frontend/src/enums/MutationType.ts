export enum MutationType {
    CreatePrescription = "CREATE_PRESCRIPTION",
    SetPrescriptions = "SET_PRESCRIPTIONS",
    CompletePrescription = "COMPLETE_PRESCRIPTION",
    RemovePrescription = "REMOVE_PRESCRIPTION",
    EditPrescription = "EDIT_PRESCRIPTION",
    UpdatePrescription = `UPDATE_PRESCRIPTION`,

    SetLoading = "SET_LOADING",
    SetCreateModal = "SET_CREATE_MODAL",
    SetEditModal = "SET_EDIT_MODAL",
    SetPrescriptionModal = "SET_PRESCRIPTION_MODAL",
}