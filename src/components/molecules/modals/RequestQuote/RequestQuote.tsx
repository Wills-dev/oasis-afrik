"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import Select from "@/components/atoms/Select/Select";
import Textarea from "@/components/atoms/TextArea/Textarea";

import { currency } from "@/lib/constants";
import { QuotePayloadType } from "@/features/quotes/types";
import { useGetUnits } from "@/features/products/hooks/useGetUnits";
import { useGetPeriods } from "@/features/products/hooks/useGetPeriods";

interface RequestQuoteProps {
  quote: QuotePayloadType;
  showQuoteForm: boolean;
  setShowQuoteForm: (open: boolean) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isPending: boolean;
}

const RequestQuote = ({
  showQuoteForm,
  setShowQuoteForm,
  handleChange,
  handleSubmit,
  isPending,
  quote,
}: RequestQuoteProps) => {
  const { units, loadingUnits } = useGetUnits();
  const { periods, loadingPeriods } = useGetPeriods();

  return (
    <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Request Quote</DialogTitle>
        </DialogHeader>
        <form className="space-y-2" onSubmit={handleSubmit}>
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
                  value={quote.quantity}
                  onChange={handleChange}
                  type="text"
                  name="quantity"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.quantityUnitId}
                  onChange={handleChange}
                  name="quantityUnitId"
                  placeholder={loadingUnits ? "Loading units..." : "units..."}
                  options={units}
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
                  value={quote.minLeadTime || ""}
                  onChange={handleChange}
                  type="text"
                  name="minLeadTime"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.minLeadTimePeriodId}
                  onChange={handleChange}
                  name="minLeadTimePeriodId"
                  placeholder={
                    loadingPeriods ? "Loading periods..." : "period..."
                  }
                  options={periods}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Label title="Max Lead Time" />
            <div className="flex gap-2">
              <div className="w-4/6">
                <Input
                  value={quote.maxLeadTime || ""}
                  onChange={handleChange}
                  type="text"
                  name="maxLeadTime"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={quote?.maxLeadTimePeriodId}
                  onChange={handleChange}
                  name="maxLeadTimePeriodId"
                  placeholder={
                    loadingPeriods ? "Loading periods..." : "period..."
                  }
                  options={periods}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <Label title="Description (optional)" />
            <Textarea
              value={quote.description}
              onChange={handleChange}
              name="description"
              placeholder=""
              rows={4}
            />
          </div>
          <div className="flex items-center flex-wrap gap-4">
            <Button type="submit" loading={isPending} width="flex-1 w-full">
              Submit
            </Button>
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
