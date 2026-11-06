-- 1. Display all users
SELECT * FROM users;

-- 2. Display all courses
SELECT * FROM courses;

-- 3. Display users with their enrolments
SELECT users.name, courses.name AS course_name
FROM enrolments
JOIN users ON enrolments.user_id = users.id
JOIN courses ON enrolments.course_id = courses.id;

-- 4. Count users
SELECT COUNT(*) AS total_users
FROM users;

-- 5. Count enrolments for each course
SELECT courses.name, COUNT(enrolments.id) AS total_enrolments
FROM courses
LEFT JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.name;

-- 6. Display submissions with student names
SELECT users.name, submissions.grade
FROM submissions
JOIN users ON submissions.user_id = users.id;

-- 7. Calculate average grade
SELECT AVG(grade) AS average_grade
FROM submissions;

-- 8. Create an index on user email
CREATE INDEX idx_users_email
ON users(email);

-- 9. Find courses with more than one enrolment
SELECT courses.name, COUNT(enrolments.id) AS total_enrolments
FROM courses
JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.name
HAVING COUNT(enrolments.id) > 1;

-- 10. Explain query execution plan
EXPLAIN
SELECT *
FROM users
WHERE email = 'layan@example.com';