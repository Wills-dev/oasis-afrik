"use client";

import { OrderTableData } from "../../types";
import { getCurrencySign } from "@/lib/helpers/getCurrencySign";
import { formatDate, numberWithCommas } from "@/lib/helpers";

import InfoCardWrapper from "@/components/atoms/InfoCardWrapper/InfoCardWrapper";

const OrderPaymentSummary = ({ data }: { data: OrderTableData }) => {
  return (
    <InfoCardWrapper title="Payment Summary">
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <span className="text-slate-600">Subtotal</span>
          <span className="font-semibold text-slate-900">
            {`${data?.currency && getCurrencySign(data?.currency)}${data?.amount && numberWithCommas(Number(data?.amount))}`}
          </span>
        </div>
        <div className="flex justify-between items-start">
          <span className="text-slate-600">Amount Charged</span>
          <span className="font-semibold text-slate-900">
            {`${getCurrencySign("NGN")}${data?.amountChargedNgn ? numberWithCommas(Number(data?.amountChargedNgn)) : "0.00"}`}
          </span>
        </div>
        <div className="pt-4 border-t border-slate-200">
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-slate-900">Total</span>
            <span className="font-bold text-2xl text-emerald-600">
              {`${data?.currency && getCurrencySign(data?.currency)}${data?.amount ? numberWithCommas(Number(data?.amount)) : "0.00"}`}
            </span>
          </div>
        </div>

        {data?.paidAt && (
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Paid on</p>
            <p className="text-sm font-semibold text-slate-900">
              {formatDate(data?.paidAt)}
            </p>
          </div>
        )}

        {data?.paystackReference && (
          <div className="pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 mb-1">Payment Reference</p>
            <p className="text-sm font-mono text-slate-900 break-all">
              {data?.paystackReference}
            </p>
          </div>
        )}
      </div>
    </InfoCardWrapper>
  );
};

export default OrderPaymentSummary;
