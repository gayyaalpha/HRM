export interface AllIssueList {
  category: string;
  department: string;
  description: string;
  faultType: string;
  id: string;
  machine: string;
  priority: string;
  productionLine: string;
  seviarity: string;
  status: string;
  userName: string;
}

export interface AddNewIssue {
    id: string;
    json: string;
  }
