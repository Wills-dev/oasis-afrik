import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import Select from "@/components/atoms/Select/Select";
import Textarea from "@/components/atoms/TextArea/Textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useGetPeriods } from "@/features/products/hooks/useGetPeriods";
import { useGetUnits } from "@/features/products/hooks/useGetUnits";
import { NegotiateQuoteForm } from "@/features/quotes/types";

interface RequestQuoteProps {
  negotiateInfo: NegotiateQuoteForm;
  showQuoteForm: boolean;
  setShowQuoteForm: (open: boolean) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
  handleSubmit: (e: React.FormEvent, quoteId: string) => void;
  isPending: boolean;
  currencySymbol: string;
  quoteId: string;
}

const NegotiateQuoteModal = ({
  showQuoteForm,
  setShowQuoteForm,
  handleChange,
  handleSubmit,
  isPending,
  negotiateInfo,
  currencySymbol,
  quoteId,
}: RequestQuoteProps) => {
  const { units, loadingUnits } = useGetUnits();
  const { periods, loadingPeriods } = useGetPeriods();

  return (
    <Dialog open={showQuoteForm} onOpenChange={setShowQuoteForm}>
      <DialogContent className="max-w-3xl w-full">
        <DialogHeader>
          <DialogTitle>Negotiate Quote</DialogTitle>
        </DialogHeader>
        <form className="space-y-2" onSubmit={(e) => handleSubmit(e, quoteId)}>
          <div className="">
            <Label title={`Amount/${currencySymbol} (optional)`} />
            <div className="w-full">
              <Input
                value={negotiateInfo.amount || ""}
                onChange={handleChange}
                type="text"
                name="amount"
                placeholder=""
              />
            </div>
          </div>
          <div className="">
            <Label title="Quantity (optional)" />
            <div className="flex gap-2">
              <div className="w-4/6">
                <Input
                  value={negotiateInfo.quantity || ""}
                  onChange={handleChange}
                  type="text"
                  name="quantity"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={negotiateInfo?.quantityUnitId}
                  onChange={handleChange}
                  name="quantityUnitId"
                  placeholder={loadingUnits ? "Loading units..." : "units..."}
                  options={units}
                />
              </div>
            </div>
          </div>
          <div className="">
            <Label title="Address (optional)" />
            <Input
              value={negotiateInfo.address || ""}
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
                  value={negotiateInfo.minLeadTime || ""}
                  onChange={handleChange}
                  type="text"
                  name="minLeadTime"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={negotiateInfo?.minLeadTimePeriodId}
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
                  value={negotiateInfo.maxLeadTime || ""}
                  onChange={handleChange}
                  type="text"
                  name="maxLeadTime"
                  placeholder=""
                />
              </div>
              <div className="flex-1 w-full">
                <Select
                  value={negotiateInfo?.maxLeadTimePeriodId}
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
            <Label title="Message" />
            <Textarea
              value={negotiateInfo.message}
              onChange={handleChange}
              name="message"
              placeholder=""
              rows={4}
            />
          </div>
          <div className="flex items-center justify-end flex-wrap gap-2">
            <Button type="submit" loading={isPending} width="w-fit">
              Send reply
            </Button>
            <Button
              width="w-fit"
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

export default NegotiateQuoteModal;
