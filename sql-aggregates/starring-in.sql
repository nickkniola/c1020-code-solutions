select "categories"."name" as "movieCategory",
       count("castMembers") as "numOfCategory"
  from "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using("filmId")
  join "actors" using("actorId")
 where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
group by "movieCategory";
