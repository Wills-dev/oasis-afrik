import Button from "@/components/atoms/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsConditionsProps {
  showTermsModal: boolean;
  setShowTermsModal: (open: boolean) => void;
}

const TermsConditions = ({
  showTermsModal,
  setShowTermsModal,
}: TermsConditionsProps) => {
  return (
    <Dialog open={showTermsModal} onOpenChange={setShowTermsModal}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            Please read our terms and conditions carefully
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-base mb-2">
                1. Acceptance of Terms
              </h3>
              <p className="text-muted-foreground">
                By accessing and using oasisafrik services, you accept and agree
                to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">2. Use License</h3>
              <p className="text-muted-foreground">
                Permission is granted to temporarily access the materials on
                oasisafrik for personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">3. Disclaimer</h3>
              <p className="text-muted-foreground">
                The materials on oasisafrik are provided on an as is basis.
                oasisafrik makes no warranties, expressed or implied, and hereby
                disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability,
                fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">4. Limitations</h3>
              <p className="text-muted-foreground">
                In no event shall oasisafrik or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on oasisafrik.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">5. Revisions</h3>
              <p className="text-muted-foreground">
                The materials appearing on oasisafrik may include technical,
                typographical, or photographic errors. oasisafrik does not
                warrant that any of the materials on its platform are accurate,
                complete or current.
              </p>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end mt-4">
          <Button width="w-fit" onClick={() => setShowTermsModal(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsConditions;
