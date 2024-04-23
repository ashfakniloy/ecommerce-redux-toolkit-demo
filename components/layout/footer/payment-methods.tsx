import Image from "next/image";
import Visa from "@/public/images/payment/visa.png";
import MasterCard from "@/public/images/payment/master-card.png";
import CashOnDelivery from "@/public/images/payment/cash-on-delivery.png";
import EasyInstallation from "@/public/images/payment/easy-installation.png";

const paymentMethodList = [
  {
    name: "Visa",
    image: Visa,
  },
  {
    name: "Master Card",
    image: MasterCard,
  },
  {
    name: "Cash On Delivery",
    image: CashOnDelivery,
  },
  {
    name: "Easy Installation",
    image: EasyInstallation,
  },
];

export default function PaymentMethods() {
  return (
    <div className="flex justify-between lg:justify-end items-center gap-2 lg:gap-[11px]">
      {paymentMethodList.map((method) => (
        <Image key={method.name} src={method.image} alt={method.name} />
      ))}
    </div>
  );
}
