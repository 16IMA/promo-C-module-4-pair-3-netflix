SELECT *
FROM movies;

SELECT title, genre
FROM movies
WHERE year > 1995;

UPDATE movies
SET year = 1997
WHERE idMovie = '1';

SELECT * 
FROM movies;

UPDATE movies
SET year = 1994
WHERE idMovie = 1;

UPDATE movies
SET year = 1997
WHERE idMovie = 2;

UPDATE movies
SET genre = 'Comedia'
WHERE title = 'Forrest Gump';

