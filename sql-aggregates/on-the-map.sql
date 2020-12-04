select "countries"."name" as "countryName",
       count("cities".*) as "numOfCities"
  from "countries"
  join "cities" using ("countryId")
group by "countryName";
