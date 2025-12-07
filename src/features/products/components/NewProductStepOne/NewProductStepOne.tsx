import { ChangeEvent } from "react";

import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";

import { ProductFormData } from "../../types";
import SearchableDropdown from "@/components/molecules/SearchableDropdown/SearchableDropdown";
import { countries } from "@/lib/constants/countries";
import { agroCategories } from "../../constants";
import { quantityUnits } from "@/lib/constants/productUnits";
import { timePeriods } from "@/lib/constants";
import Textarea from "@/components/atoms/TextArea/Textarea";

interface NewProductStepOneProps {
  product: ProductFormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleDropdownChange: (name: keyof ProductFormData, value: string) => void;
}
const NewProductStepOne = ({
  product,
  handleChange,
  handleDropdownChange,
}: NewProductStepOneProps) => {
  return (
    <div className="space-y-6">
      <h6 className="sm:text-lg font-medium">Product information</h6>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-1 md:col-span-1 col-span-2">
          <Label title="Product Name" />
          <Input
            value={product.productName}
            onChange={handleChange}
            type="text"
            name="productName"
            placeholder=""
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2">
          <Label title="Category" />
          <SearchableDropdown
            options={agroCategories}
            value={product.category}
            onChange={(value) =>
              handleDropdownChange("category", value.toString())
            }
            placeholder="Select a category..."
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2">
          <Label title="Country" />
          <SearchableDropdown
            options={countries}
            value={product.country}
            onChange={(value) =>
              handleDropdownChange("country", value.toString())
            }
            placeholder="Select a country..."
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Min Order" />
            <Input
              value={product.minOrder}
              onChange={handleChange}
              type="text"
              name="minOrder"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Unit" />
            <SearchableDropdown
              options={quantityUnits}
              value={product.minOrderUnit}
              onChange={(value) =>
                handleDropdownChange("minOrderUnit", value.toString())
              }
              placeholder="unit..."
            />
          </div>
        </div>
        <div className="space-y-1 md:col-span-1 col-span-2">
          <Label
            title={`Price ${
              product?.minOrderUnit && `/ ${product.minOrderUnit}`
            }`}
          />
          <Input
            value={product.price}
            onChange={handleChange}
            type="text"
            name="price"
            placeholder=""
          />
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Quantity" />
            <Input
              value={product.quantity}
              onChange={handleChange}
              type="text"
              name="quantity"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Unit" />
            <SearchableDropdown
              options={quantityUnits}
              value={product.unit}
              onChange={(value) =>
                handleDropdownChange("unit", value.toString())
              }
              placeholder="unit..."
            />
          </div>
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Min Lead Time" />
            <Input
              value={product.minLead}
              onChange={handleChange}
              type="text"
              name="minLead"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Period" />
            <SearchableDropdown
              options={timePeriods}
              value={product.minLeadPeriod}
              onChange={(value) =>
                handleDropdownChange("minLeadPeriod", value.toString())
              }
              placeholder="period..."
            />
          </div>
        </div>
        <div className="space-y-1 w-full md:col-span-1 col-span-2 flex gap-2">
          <div className="w-4/6">
            {" "}
            <Label title="Max Lead Time" />
            <Input
              value={product.maxLead}
              onChange={handleChange}
              type="text"
              name="maxLead"
              placeholder=""
            />
          </div>
          <div className="flex-1 w-full">
            <Label title="Period" />
            <SearchableDropdown
              options={timePeriods}
              value={product.maxLeadPeriod}
              onChange={(value) =>
                handleDropdownChange("maxLeadPeriod", value.toString())
              }
              placeholder="period..."
            />
          </div>
        </div>
        <div className="space-y-1 col-span-2">
          <Label title="Description" />
          <Textarea
            value={product.description}
            onChange={handleChange}
            rows={5}
            name="description"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default NewProductStepOne;
