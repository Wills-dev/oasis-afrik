import Button from "@/components/atoms/Button/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyProps {
  showPrivacyModal: boolean;
  setShowPrivacyModal: (open: boolean) => void;
}

const PrivacyPolicy = ({
  showPrivacyModal,
  setShowPrivacyModal,
}: PrivacyPolicyProps) => {
  return (
    <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            How we collect, use, and protect your information
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-base mb-2">
                1. Information We Collect
              </h3>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us,
                including when you create an account, use our services, or
                communicate with us.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                2. How We Use Your Information
              </h3>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to protect
                oasisafrik and our users.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                3. Information Sharing
              </h3>
              <p className="text-muted-foreground">
                We do not share your personal information with third parties
                except as described in this policy or with your consent.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">4. Data Security</h3>
              <p className="text-muted-foreground">
                We take reasonable measures to help protect your personal
                information from loss, theft, misuse, unauthorized access,
                disclosure, alteration, and destruction.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">5. Your Rights</h3>
              <p className="text-muted-foreground">
                You have the right to access, update, or delete your personal
                information at any time. You can also opt out of certain
                communications from us.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base mb-2">
                6. Changes to Privacy Policy
              </h3>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
              </p>
            </div>
          </div>
        </ScrollArea>
        <div className="flex justify-end mt-4">
          <Button width="w-fit" onClick={() => setShowPrivacyModal(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicy;
