import NewBookingItem from "./NewBookingItem";

export default function NewBookingList({
  data,
  index,
  changeBookingStatusApprove,
  changeBookingStatusReject,
}) {
  return (
    <div>
      <NewBookingItem
        index={index}
        objData={data}
        bookingId={data.id}
        orderStatus={data.orderStatus}
        customerFirstName={data.customer.firstName}
        customerLastName={data.customer.lastName}
        email={data.customer.email}
        phone={data.customer.phone}
        date={data.bookingDate}
        time={data.bookingTime}
        totalCustomer={data.totalCustomer}
        totalKid={data.totalKid}
        packageName={data.package.name}
        specialRequest={data.specialRequest}
        changeBookingStatusApprove={changeBookingStatusApprove}
        changeBookingStatusReject={changeBookingStatusReject}
      />
    </div>
  );
}
