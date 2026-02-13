import DataField from "@/components/atoms/DataField/DataField";
import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

const UserSummary = ({
  firstName,
  lastName,
  email,
  emailVerified,
  title,
  address,
}: {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified: boolean;
  title: string;
  address?: string;
}) => {
  return (
    <InfoCardWrapper title={title}>
      <div className="p-6 space-y-3">
        <DataField label="Name" value={`${firstName} ${lastName}`} />
        <DataField label="Email" value={email} />
        {address && <DataField label="Delivery address" value={address} />}
        <DataField label="Verified" value={emailVerified ? "Yes" : "No"} />
      </div>
    </InfoCardWrapper>
  );
};

export default UserSummary;
