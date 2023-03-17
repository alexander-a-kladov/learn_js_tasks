INSERT INTO Person (name) values ('Петров Иван');
INSERT INTO Person (name) values ('Иванов Сидр');
INSERT INTO Person (name) values ('Сидоров Петр');
INSERT INTO Person (name) values ('Буранов Федор');
INSERT INTO Person (name) values ('Сазанов Егор');
INSERT INTO Person (name) values ('Нектаров Станислав');
INSERT INTO Person (name) values ('Опонин Роман');
INSERT INTO Person (name) values ('Куреметов Даниил');
INSERT INTO Person (name) values ('Умаратов Константин');
INSERT INTO Person (name) values ('Семенов Иван');
INSERT INTO Person (name) values ('Найджелс Николь');

INSERT INTO Country (name) values ('США');
INSERT INTO Country (name) values ('Россия');
INSERT INTO Country (name) values ('Франция');
INSERT INTO Country (name) values ('Германия');

INSERT INTO Genre (name) values ('драма');
INSERT INTO Genre (name) values ('фэнтези');
INSERT INTO Genre (name) values ('криминал');

INSERT INTO Film (name, year) values ('Унесенные', 2035);
INSERT INTO Film (name, year, country_id) values('Движ', 2035, 2);
INSERT INTO Film values(DEFAULT,'Умберто', 2036, 3, 100000, 200044, 4035350, 23444, '2035-12-23', '2035-10-24', '2036-03-14','18+', 'R', 580);
INSERT INTO Film (name,year) values ('Смысл', 2034);

INSERT INTO Actor VALUES(1,4);
INSERT INTO Actor VALUES(1,3);
INSERT INTO Actor VALUES(1,5);
INSERT INTO Actor VALUES(3,3,6);
INSERT INTO Actor VALUES(3,5,6);
INSERT INTO Actor VALUES(3,7,5);
INSERT INTO Actor VALUES(2,2,7);

INSERT INTO FilmGenre VALUES(1,1);
INSERT INTO FilmGenre VALUES(1,3);
INSERT INTO FilmGenre VALUES(2,2);
INSERT INTO FilmGenre VALUES(2,3);

INSERT INTO Spectators VALUES
(1,2,1.1),
(1,1,1.2),
(2,2,-3.0);

INSERT INTO FilmPersons VALUES
(1,7,8,9,2,3,5,2);
INSERT INTO FilmPersons VALUES
(2,7,8,9,null,3,5,2);
INSERT INTO FilmPersons VALUES
(3,7,null,9,2,null,5,2);
