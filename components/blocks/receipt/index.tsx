"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface ReceiptFormData {
  landlordName: string;
  tenantName: string;
  propertyAddress: string;
  rentAmount: string;
  paymentDate: string;
  rentPeriod: string;
}

interface ReceiptProps {
  section: {
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
  };
}

export default function ReceiptGenerator({ section }: ReceiptProps) {
  const [formData, setFormData] = useState<ReceiptFormData>({
    landlordName: "",
    tenantName: "",
    propertyAddress: "",
    rentAmount: "",
    paymentDate: "",
    rentPeriod: "",
  });

  const handleInputChange =
    (field: keyof ReceiptFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleGenerateReceipt = () => {
    console.log("Generating receipt with:", formData);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">{section.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="landlordName">
                  {section.fields.landlordName}
                </Label>
                <Input
                  id="landlordName"
                  value={formData.landlordName}
                  onChange={handleInputChange("landlordName")}
                  placeholder={`Enter ${section.fields.landlordName}`}
                />
              </div>
              <div>
                <Label htmlFor="tenantName">{section.fields.tenantName}</Label>
                <Input
                  id="tenantName"
                  value={formData.tenantName}
                  onChange={handleInputChange("tenantName")}
                  placeholder={`Enter ${section.fields.tenantName}`}
                />
              </div>
              <div>
                <Label htmlFor="propertyAddress">
                  {section.fields.propertyAddress}
                </Label>
                <Input
                  id="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleInputChange("propertyAddress")}
                  placeholder={`Enter ${section.fields.propertyAddress}`}
                />
              </div>
              <div>
                <Label htmlFor="rentAmount">{section.fields.rentAmount}</Label>
                <Input
                  id="rentAmount"
                  type="number"
                  value={formData.rentAmount}
                  onChange={handleInputChange("rentAmount")}
                  placeholder={`Enter ${section.fields.rentAmount}`}
                />
              </div>
              <div>
                <Label htmlFor="paymentDate">
                  {section.fields.paymentDate}
                </Label>
                <Input
                  id="paymentDate"
                  type="date"
                  value={formData.paymentDate}
                  onChange={handleInputChange("paymentDate")}
                />
              </div>
              <div>
                <Label htmlFor="rentPeriod">{section.fields.rentPeriod}</Label>
                <Input
                  id="rentPeriod"
                  value={formData.rentPeriod}
                  onChange={handleInputChange("rentPeriod")}
                  placeholder="Example: January 2024"
                />
              </div>
              <Button onClick={handleGenerateReceipt} className="w-full">
                {section.buttons.generate}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        <Card>
          <CardContent className="pt-6">
            <div className="h-full min-h-[500px] bg-white p-6 rounded-lg border">
              <h2 className="text-2xl font-bold text-center mb-6">
                {section.preview.title}
              </h2>
              <div className="space-y-4">
                <div>
                  <p>
                    <span className="font-semibold">
                      {section.fields.landlordName}:{" "}
                    </span>
                    {formData.landlordName}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {section.fields.tenantName}:{" "}
                    </span>
                    {formData.tenantName}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {section.fields.propertyAddress}:{" "}
                    </span>
                    {formData.propertyAddress}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {section.fields.rentAmount}:{" "}
                    </span>
                    {formData.rentAmount ? `$${formData.rentAmount}` : ""}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {section.fields.paymentDate}:{" "}
                    </span>
                    {formData.paymentDate}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {section.fields.rentPeriod}:{" "}
                    </span>
                    {formData.rentPeriod}
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-semibold">
                        {section.preview.signature}
                      </p>
                      <div className="mt-2 h-12 border-b border-dashed"></div>
                    </div>
                    <div>
                      <p className="font-semibold">{section.preview.date}</p>
                      <div className="mt-2 h-12 border-b border-dashed"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
