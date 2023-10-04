import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperation";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "unconfirmed", label: "Unconfirmed" },
          { value: "checked-out", label: "Checked-out" },
          { value: "checked-in", label: "Checked-in" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
          { value: "totalPrice-desc", label: "Sort by amount (high first)" },
        ]}
      />
    </TableOperations>
  );
}
export default BookingTableOperations;
