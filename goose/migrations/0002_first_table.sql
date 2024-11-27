-- +goose Up
create table goose.my_table (
  id serial primary key,
  name text not null
);
