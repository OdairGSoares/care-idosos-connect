import { IDoctorsData } from "../repositories/doctorsFromDB.interface";

interface IDoctorService {
  getDoctors(): Promise<IDoctorsData[]>;
  getDoctorById(doctorId: string): Promise<IDoctorsData>;
}

export default IDoctorService;