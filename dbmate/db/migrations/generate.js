const fs = require('fs');

for (let i = 5; i <= 1000; i++) {
  const filename = `${String(i).padStart(4, '0')}_migration.sql`;
  const fileContent = `-- migrate:up
insert into my_table (name) values ('foo${i}');
-- migrate:down

`;
  fs.writeFileSync(filename, fileContent);
}