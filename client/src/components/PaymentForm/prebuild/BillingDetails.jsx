import { useTranslation } from "react-i18next";
import FormField from "./FormField";

const BillingDetails = () => {
  const [t, i18n] = useTranslation('global')
  return (
    <div>
      <FormField
        name="name"
        label={t("bilingDetails.n")}
        type="text"
        placeholder="Jane Doe"
        required
      />
      <FormField
        name="email"
        label={t("bilingDetails.e")}
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
      <FormField
        name="address"
        label={t("bilingDetails.a")}
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormField
        name="city"
        label={t("bilingDetails.c")}
        type="text"
        placeholder="San Francisco"
        required
      />
      <FormField
        name="state"
        label={t("bilingDetails.s")}
        type="text"
        placeholder="California"
        required
      />
      <FormField
        name="zip"
        label={t("bilingDetails.z")}
        type="text"
        placeholder="94103"
        required
      />
    </div>
  );
};

export default BillingDetails;