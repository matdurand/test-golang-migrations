-- migrate:up
create table my_table (
  id serial primary key,
  name text not null
);

-- migrate:down
drop table my_table;
