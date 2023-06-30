export interface ProfileInfo {
  id: string;
  civilStatus: string;
  drivingLicenseNo: string;
  employeeNo: string;
  epfNo: string;
  fullName: string;
  gender: string;
  nameWithInitial: string;
  nationality: string;
  nicNo: string;
  passportNo: string;
  rase: string;
}

export interface ContactInfo {
  id: string;
  emergencyContactAddress: string;
  emergencyContactName: string;
  emergencyContactNo: string;
  homeDefaultAddress: string;
  homeFixedLine: string;
  homeMobileNo: string;
  homePhoneNo: string;
  officeDefaultAddress: string;
  officeFixedLine: string;
  officeMobileNo: string;
  officePhoneNo: string;
}

export interface JobInfo {
  id: string;
  employeeGrade: string;
  employeeNo: string;
  epfNo: string;
  occupationClassification: string;
  serviceType: string;
}

export interface QualificationInfo {
  certification: {
    id: string;
    certificationName: string;
    certificationsId: string;
    description: string;
    issuedDate: string;
  };
  education: {
    educationDescription: string;
    endDate: string;
    id: string;
    school: string;
    startDate: string;
  };
  language: {
    competency: string;
    fluency: string;
    languageCode: string;
    languageId: string;
    name: string;
  };
}

export interface BankInfo {
  accDetailsId: string;
  accountNumber: string;
  bankName: string;
  branchName: string;
  userAccName: string;
}

export interface WorkInfo {
  companyName: string;
  endDate: string;
  experienceId: string;
  startDate: string;
  title: string;
}

export interface DocumentInfo {
  description: string;
  id: string;
  issuedDate: string;
  title: string;
}
export interface BenefitInfo {
  benefitName: string;
  date: string;
  description: string;
  id: string;
}

export interface payslipInfo {
  date: string;
  description: string;
  id: string;
}
