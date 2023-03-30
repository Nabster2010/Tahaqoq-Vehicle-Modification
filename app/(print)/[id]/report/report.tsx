import { arabicDate, finalResult, formatDate } from "@/lib/utils/helpers";

const Report = ({ vehicle }: any) => {
  const { createdAt } = vehicle;
  const result = finalResult(vehicle.result);

  return (
    <div className="px-16 pt-8 pb-6 text-xs ">
      <header className="flex flex-col items-center justify-center">
        <h1 className="title">تقرير تفتيش مركبة معدلة</h1>
        <h1 className="mt-2">
          <span className="subtitle"> رقم التقرير: </span>
          <span>{vehicle.title}</span>
        </h1>
        <div className="flex items-center justify-center gap-2">
          <span className="subtitle">تاريخ:</span>
          <span>{formatDate(createdAt)}</span>
          <span className="subtitle">الموافق:</span>
          <span>{arabicDate(createdAt)}</span>
        </div>
      </header>
      <div className="w-full h-px my-3 bg-gray-300" />
      {/* معلومات المركبه */}
      <section>
        <h1 className="mb-4 font-bold text-center">معلومات المركبة :</h1>
        <table className="w-full mb-2">
          <tbody className="">
            <tr className="">
              <th className="w-[140px]"> رقم الشاسية</th>
              <td>{vehicle.vin} </td>
            </tr>
          </tbody>
        </table>
        <div className="">
          <table className="w-full [&_th]:w-[140px]">
            <tbody className="">
              <tr className="">
                <th>نوع المركبة</th>
                <td>{vehicle.type} </td>
                <th> الموديل</th>
                <td>{vehicle.modelYear} </td>
              </tr>
              <tr className="">
                <th>رقم اللوحة</th>
                <td>{vehicle.palette} </td>
                <th> اسم المالك</th>
                <td>{vehicle.owner} </td>
              </tr>
              <tr className="">
                <th> رقم الاحالة</th>
                <td>{vehicle.requestNo} </td>
                <th> تاريخ الاحالة</th>
                <td>{vehicle.requestDate} </td>
              </tr>
              <tr className="">
                <th> مصدر الاحالة</th>
                <td>{vehicle.requestOrigin} </td>
                <th> الطراز الحالي</th>
                <td>{vehicle.oldModel} </td>
              </tr>
              <tr>
                <th> الطراز الجديد</th>
                <td>{vehicle.newModel} </td>
                <th>رقم الحاسب</th>
                <td>{vehicle.computerNo} </td>
              </tr>
              <tr className="">
                <th> اسم مركز التعديل</th>
                <td>{vehicle.modifier} </td>
                <th>رقم تقرير المركز</th>
                <td>{vehicle.reportNo} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* نتائج التفتيش */}
      <section>
        <h1 className="my-6 font-bold text-center">نتائج التفتيش :</h1>
        <div>
          <p className="mb-4 font-medium underline underline-offset-2 ">
            المتطلبات الاساسية للمركبات المعدلة:
          </p>
          <div className="">
            <table className="my-4">
              <tbody>
                <tr>
                  <th>تم تعديل المركبة لدي منشأة مسجلة :</th>
                  <td className="px-4 min-w-[80px]">
                    {vehicle.result.hasModificationReport === true
                      ? "نعم"
                      : "لا"}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="">
              <tbody className="">
                <tr className="border ">
                  <th> اللون</th>
                  <th> الوزن</th>
                  <th>الابعاد</th>
                </tr>
                <tr className="border [&_td]:min-w-[100px]">
                  <td>{vehicle.result.color} </td>
                  <td>{vehicle.result.weight} </td>
                  <td>{vehicle.result.dimensions} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <p className="mt-6 mb-4 font-medium underline underline-offset-2 ">
            المتطلبات الفنية للمركبة المعدلة :
          </p>

          <div className="">
            <table className="w-full">
              <thead className="">
                <tr className="">
                  <th>م</th>
                  <th>المرجع</th>
                  <th className="grow">البند</th>
                  <th>تم التعديل</th>
                  <th>النتيجة</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td> ١</td>
                  <td>1.3.4</td>
                  <td>المحرك</td>
                  <td>{vehicle.result.engine.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.engine.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٢</td>
                  <td>2.3.4</td>
                  <td>نظام نقل الحركة</td>
                  <td>
                    {vehicle.result.transmision.modification ? "نعم" : "لا"}
                  </td>
                  <td>
                    {vehicle.result.transmision.pass ? "مطابق" : "غيرمطابق"}
                  </td>
                </tr>
                <tr className="">
                  <td> ٣</td>
                  <td>3.3.4</td>
                  <td>انظمة العادم</td>
                  <td>{vehicle.result.exhaust.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.exhaust.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٤</td>
                  <td>4.3.4</td>
                  <td>نظام الوقود</td>
                  <td>{vehicle.result.fuel.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.fuel.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٥</td>
                  <td>5.3.4</td>
                  <td>نظام الفرامل</td>
                  <td>{vehicle.result.brake.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.brake.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٦</td>
                  <td>6.3.4</td>
                  <td>الحواف والنتوءات الخارجية</td>
                  <td>{vehicle.result.edges.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.edges.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٧</td>
                  <td>7.3.4</td>
                  <td>عجلة القيادة</td>
                  <td>{vehicle.result.steering.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.steering.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٨</td>
                  <td>8.3.4</td>
                  <td>الاطارات والعجلات</td>
                  <td>{vehicle.result.wheels.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.wheels.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
                <tr className="">
                  <td> ٩</td>
                  <td>9.3.4</td>
                  <td>انظمة الترفية</td>
                  <td>
                    {vehicle.result.entertainment.modification ? "نعم" : "لا"}
                  </td>
                  <td>
                    {vehicle.result.entertainment.pass ? "مطابق" : "غيرمطابق"}
                  </td>
                </tr>
                <tr className="">
                  <td> ١٠</td>
                  <td>10.3.4</td>
                  <td>الهيكل والشاسية</td>
                  <td>{vehicle.result.chassis.modification ? "نعم" : "لا"}</td>
                  <td>{vehicle.result.chassis.pass ? "مطابق" : "غيرمطابق"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* final result */}
      <section className="flex items-center justify-center my-4">
        <table>
          <tbody>
            <tr>
              <th className="px-4 py-2">النتيجة النهائية</th>
              <td className="px-4 subtitle">
                {result === "PASS" ? "مطابقة" : "غيرمطابقة"}{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* notes section */}
      <div className="w-full p-4 border ">
        <span className="subtitle"> ملاحظات: </span>
        <span>{vehicle.result.remarks || "............"}</span>
      </div>
      {/* manager section */}
      <section className="flex my-4">
        <div className="mr-auto">
          <h1>
            <span className="subtitle">المدير الفني :</span>
            <span> عبدالحكيم البريه</span>
          </h1>
          <h1>
            <span className="subtitle"> التوقيع :</span> <span>sign</span>{" "}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Report;
