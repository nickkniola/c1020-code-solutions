select "customers"."firstName" || ' ' || "customers"."lastName" as "fullName",
       sum("payments"."amount") as "totalPaid"
  from "customers"
  join "payments" using ("customerId")
group by "fullName"
order by "totalPaid" desc;
