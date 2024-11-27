# DBMate

https://github.com/amacneil/dbmate?tab=readme-ov-file

## Highlights

* No locking mechanism, which means if we have multiple pods starting, and they all try to apply the migrations, we end up with some of them applied twice. That's a show stopper