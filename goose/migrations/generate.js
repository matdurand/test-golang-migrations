const fs = require('fs');

for (let i = 5; i <= 10000; i++) {
  const filename = `${String(i).padStart(4, '0')}_migration.sql`;
  const fileContent = `-- +goose Up
insert into goose.my_table (name) values ('foo${i}');`;
  fs.writeFileSync(filename, fileContent);
}