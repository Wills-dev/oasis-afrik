"use client";

import { useState } from "react";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Select from "@/components/atoms/Select/Select";
import { currency } from "@/lib/constants";
import Textarea from "@/components/atoms/TextArea/Textarea";

interface RequestQuoteProps {
  showQuoteForm: boolean;
  setShowQuoteForm: (open: boolean) => void;
}

const RequestQuote = ({
  showQuoteForm,
  setShowQuoteForm,
}: RequestQuoteProps) => {
  const [quote, setQuote] = useState({
    amount: "",
    currency: "",
    unit: "",
    quantity: "",
    address: "",
    note: "",
    maxLead: "",
    maxLeadPeriod: "",
    minLead: "",
    minLeadPeriod: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setQuote((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Request Quote</DialogTitle>
        </DialogHeader>
        <form className="space-y-2">
          <div className="">
            <Label title="Amount" />
            <div className="flex gap-2">
              <div className="w-4/6">
                <Input
                  value={quote.amount}
                  onChange={handleChange}
                  type="text"
                  name="amount"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.currency}
                  onChange={handleChange}
                  name="currency"
                  placeholder="Currency"
                  options={currency}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Label title="Quantity" />
            <div className="flex gap-2">
              <div className="w-4/6">
                <Input
                  value={quote.amount}
                  onChange={handleChange}
                  type="text"
                  name="amount"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.currency}
                  onChange={handleChange}
                  name="currency"
                  placeholder="Unit"
                  options={currency}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Label title="Address" />
            <Input
              value={quote.address}
              onChange={handleChange}
              type="text"
              name="address"
              placeholder=""
            />
          </div>
          <div className="">
            <Label title="Min Lead Time" />
            <div className="flex gap-2">
              <div className="w-4/6">
                <Input
                  value={quote.minLead}
                  onChange={handleChange}
                  type="text"
                  name="minLead"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.minLeadPeriod}
                  onChange={handleChange}
                  name="minLeadPeriod"
                  placeholder="period"
                  options={currency}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Label title="Max Lead Time" />
            <div className="flex gap-2">
              <div className="w-4/6">
                <Input
                  value={quote.maxLead}
                  onChange={handleChange}
                  type="text"
                  name="maxLead"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.maxLeadPeriod}
                  onChange={handleChange}
                  name="maxLeadPeriod"
                  placeholder="period"
                  options={currency}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <Label title="Description (optional)" />
            <Textarea
              value={quote.address}
              onChange={handleChange}
              name="address"
              placeholder=""
              rows={4}
            />
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <Button width="flex-1 w-full">Submit</Button>
            <Button
              width="flex-1 w-full"
              bgColor="bg-white border border-gray-300 text-gray-600"
              bgHoverColor="hover:bg-gray-50"
              onClick={() => setShowQuoteForm(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestQuote;
