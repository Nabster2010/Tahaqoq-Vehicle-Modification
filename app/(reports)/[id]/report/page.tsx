import { getVehicleById } from "@/lib/prisma/vehicle";
import Report from "./report";
import Link from "next/link";

export async function generateMetadata({ params }: any) {
  const vehicle: any = await getVehicleById(parseInt(params.id));
  return { title: vehicle?.title };
}

const page = async ({ params }: any) => {
  const vehicleId = parseInt(params.id);
  const vehicle: any = await getVehicleById(vehicleId);
  if (!vehicle) return <h1>vehicle not found</h1>;
  if (vehicle?.result === null) return <h1>Vehicle has no result</h1>;

  return (
    <>
      <Link
        href={`/api/pdf/${params.id}`}
        id="print-btn"
        className="absolute top-0 left-0 btn"
      >
        Save PDF
      </Link>
      <Report vehicle={vehicle} />
    </>
  );
};

export default page;
