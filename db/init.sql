drop table if exists houses;

create table houses
(
    property_id serial primary key
    ,
    name varchar(30)
    ,
    address varchar(100)
    ,
    city varchar(100)
    ,
    state varchar(2)
    ,
    zip integer
    ,
    img text
    ,
    mortgage decimal
    ,
    rent decimal
);

insert into houses
    (name, address, city, state, zip)
values('Szlauer Mannor', '555 Very Rich', 'Glendale', 'AZ', 85303);

select *
from houses;