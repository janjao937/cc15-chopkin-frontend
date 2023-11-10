import NewBookingItem from "./NewBookingItem";

export default function NewBookingList({ data, index }) {
  return (
    <div>
      <NewBookingItem
        index={index}
        objData={data}
        bookId={data.id}
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
      />
    </div>
  );
}
