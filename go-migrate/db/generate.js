const fs = require('fs');

for (let i = 5; i <= 1000; i++) {
  const filename = `${String(i).padStart(4, '0')}_migration.up.sql`;
  const fileContent = `insert into gomigrate.my_table (name) values ('foo${i}');`;
  fs.writeFileSync(filename, fileContent);
}