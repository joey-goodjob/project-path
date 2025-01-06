export interface ReceiptSection {
  title: string;
  fields: {
    landlordName: string;
    tenantName: string;
    propertyAddress: string;
    rentAmount: string;
    paymentDate: string;
    rentPeriod: string;
  };
  buttons: {
    generate: string;
  };
  preview: {
    title: string;
    signature: string;
    date: string;
  };
}
