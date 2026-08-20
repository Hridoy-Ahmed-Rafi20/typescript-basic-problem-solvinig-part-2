"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: define types for GeneralPatient and EmergencyPatient
const getPatientStatus = (patient) => {
    let status = "";
    if (patient.type === "emergency" && patient.emergencyLevel === 1) {
        status = "Critical emergency";
    }
    else if (patient.type === "emergency" && patient.emergencyLevel === 2) {
        status = "Serious emergency";
    }
    else if (patient.type === "emergency" && patient.emergencyLevel === 3) {
        status = "Moderate emergency";
    }
    else {
        status = "General patient";
    }
    return status;
};
getPatientStatus({ name: "Rahim", age: 35, type: "general" });
// "General patient"
getPatientStatus({
    name: "Karim",
    age: 60,
    type: "emergency",
    emergencyLevel: 1,
});
getPatientStatus({
    name: "Rahim",
    age: 65,
    type: "emergency",
    emergencyLevel: 2,
});
// "Critical emergency"
getPatientStatus({
    name: "Hasan",
    age: 45,
    type: "emergency",
    emergencyLevel: 3,
});
// "Moderate emergency"
//# sourceMappingURL=getPatientStatus.js.map